// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect, useContext } from "react";
// import axios from 'axios';

// function SearchResults() {
//   const { keyword } = useParams();
//   const [recipes, setRecipes] = useState([]);

//     axios.get(`http://127.0.0.1:8000/api/reseps/search?keyword=${keyword}`)
//       .then((response) => {
//         setRecipes(response.data.recipes);
//       })
//       .catch((error) => {
//         console.error(error);
//       });


//   return (
//     <div>
//       <h2>Hasil Pencarian untuk "{keyword}"</h2>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe.id}>{recipe.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchResults;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from "../c_iphone-14-3.module.css";
import Container from "react-bootstrap/Container";
import foodrecipes from "../assets3/foodrecipes.png";
import Navbar from "react-bootstrap/Navbar";
import sendok from "../assets3/sendok.png";
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";

function SearchResults() {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');
    const [reseps, setReseps] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();


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


    // Lakukan permintaan untuk hasil pencarian dengan query
    // Tampilkan hasil pencarian di halaman ini

    useEffect(() => {
        // Lakukan permintaan pencarian dengan query ke server
        // Simpan hasil pencarian dalam state 'results'

        //   axios.get(`http://127.0.0.1:8000/api/reseps/search?query=${query}`)
        //     .then(response => setReseps(response.data))
        //     .catch(error => console.error(error));
        // }, [query]);

        axios.get(`http://127.0.0.1:8000/api/reseps/search?query=${query}`)
            .then(response => setReseps(response.data))
            .catch(error => console.error(error));
    }, [query]);

    // useEffect(() => {
    //   const getReseps = async () => {
    //     const apiReseps = await axios.get(`http://127.0.0.1:8000/api/reseps/search?query=${query}`);
    //     setReseps(apiReseps.data);
    //   };
    //   getReseps();
    // }, []);


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

            <div className={styles["card3"]}>
                <div className="row">
                    <h2>Hasil Pencarian untuk "{query}"</h2>
                    {/* <ul>
          {results.map(result => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul> */}
                    {reseps.reseps?.map((resep) => {
                        return (
                            // <tr key={resep.id}>
                            //   <td>{resep.image}</td>
                            //   <td>{resep.title}</td>
                            //   <td>{resep.ingredients}</td>
                            //   <td>{resep.step}</td>
                            // </tr>

                            <div key={resep.id} className="col-md-4 col-sm-12">
                                <Link to={`/reseps/${resep.id}/login`}>
                                    <div className="card">
                                        <img src={resep.image} alt="Uploaded Image" className={styles["foto"]} />
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h4>{resep.title}</h4>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        );
                    })}
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
    );
}

//   if (reseps.length === 0) {
//     return (
//       <div>
//         <h2>Hasil Pencarian untuk "{query}"</h2>
//         <p>Tidak ada hasil ditemukan.</p>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h2>Hasil Pencarian untuk "{query}"</h2>
//         {reseps.reseps?.map((resep) => {
//           return (
//              <div key={resep.id} className="col-md-4 col-sm-12">
//               <Link to={`reseps/${resep.id}`}>
//                 <div className="card">
//                   <img src={resep.image} alt="Uploaded Image" className={styles["foto"]} />
//                   <div className="card-body">
//                     <div className="card-title">
//                       <h4>{resep.title}</h4>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }



export default SearchResults;