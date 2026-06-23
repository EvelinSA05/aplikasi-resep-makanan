//import hook react
import React, { useState, useEffect } from 'react';

//import hook useHitory from react router dom
import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "../c_iphone-14-3.module.css";
import foodrecipes from "../assets3/foodrecipes.png";
import sendok from "../assets3/sendok.png";
import { Link } from "react-router-dom";
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";

//import axios
import axios from 'axios';

function Akun() {

  //state user
  const [user, setUser] = useState({});
  const [results, setResults] = useState([]);
  const roles = localStorage.getItem("roles");

  //define history
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/reseps/search?query=${query}`);
      setResults(response.data);

      // Setelah menerima hasil pencarian, arahkan pengguna ke halaman hasil pencarian
      navigate(`/search?query=${query}`);
    } catch (error) {
      console.error(error);
    }
  }


  //token
  const token = localStorage.getItem("token");

  //function "fetchData"
  // const fetchData = async () => {

  //   //set axios header dengan type Authorization + Bearer token
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   //fetch user from Rest API
  //   await axios.get('http://localhost:8000/api/user')
  //     .then((response) => {

  //       //set response user to state
  //       setUser(response.data);
  //     })
  // }

  useEffect(() => {

    const fetchData = async () => {

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await axios.get('http://localhost:8000/api/user')
      .then((response) => {
  
          setUser(response.data);
      })
    };
    
    if(roles) {
      navigate('/akun');
    }

    if(!token) {
      navigate('/');
    } else
    {
      fetchData();
    };

  }, []);

  // useEffect(() => {
  //   fetchData()
  // }, []);


  // //hook useEffect
  // useEffect(() => {

  //     //check token empty
  //     if (!token) {

  //         //redirect login page
  //         navigate('/');
  //     }

  //     //call function "fetchData"
  //     fetchData();
  // }, []);

  //function logout
  const logoutHanlder = async () => {

    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch Rest API
    await axios.post('http://localhost:8000/api/logout')
      .then(() => {

        //remove token from localStorage
        localStorage.removeItem("token");

        //redirect halaman login
        navigate('/');
      });
  };

  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        className="bg-success border-bottom"
        style={{ height: "85px", fontSize: "20px" }}
      >
        <Container>

          <img
            src={foodrecipes}
            alt="rectangle"
            className={styles['font1']}
          />
          <img
            src={sendok}
            alt="rectangle"
            className={styles['sendok']}
          />
          <div className={styles['search2']}>
            <div className="flex items-center">
              {/* <input
                type="text"
                className="border rounded p-1 w-1/7"
                placeholder="Cari..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="bg-blue-500 text-white rounded p-1 ml-2" onClick={handleSearch}>Cari</button> */}
            </div>
          </div>
        </Container>
      </Navbar>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card border-0 rounded shadow-sm">
              <div className="card-body">
                SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
                <hr />
                <button onClick={logoutHanlder} className="btn btn-md btn-danger">LOGOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className={styles["navbar"]}>
        <Link to="/dashboardLogin">
          <img src={rumah} alt="rectangle" className={styles["rumah"]} />
        </Link>
        <Link to="/like">
          <img src={save} alt="rectangle" className={styles["save"]} />
        </Link>
        <Link to="/akun">
          <img src={akun} alt="rectangle" className={styles["akun"]} />
        </Link>
      </nav>
    </>
  )
}

export default Akun;

// import React from 'react'

// const Akun = () => {
//   return (
//     <div>Berhasil Login</div>
//   )
// }

// export default Akun



