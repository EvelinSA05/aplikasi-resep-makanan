import { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import styles from '../c_iphone-14-3.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import sendok from "../assets3/sendok.png";
import foodrecipes from "../assets3/foodrecipes.png";
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";

const Like = () => {

    const token = localStorage.getItem("token");
    const roles = localStorage.getItem("roles");
    const captcha = localStorage.getItem("_grecaptcha");
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const { id } = useParams();

    const [likes, setDataLikes] = useState([]);

    const fetchDataLikes = async () => {

        await axios.get('http://127.0.0.1:8000/api/indexlike')
            .then(response => {
                setDataLikes(response.data);
            })

    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/reseps')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const fetchData = async () => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get('http://localhost:8000/api/user')
            .then((response) => {

                setUser(response.data);
            })
    };

    useEffect(() => {

        if (!token) {
            navigate('/loginuser');
        } else {
            fetchData();
            fetchDataLikes();
        };

    }, []);

    const logoutHandler = async () => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await axios.post('http://localhost:8000/api/logout')
            .then(() => {

                localStorage.removeItem("token");
                localStorage.removeItem("roles");
                localStorage.removeItem("_grecaptcha");

                navigate('/dashboardLogin');
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
                </Container>
            </Navbar>

            <div className={styles['card4']}>
                <div className=''>
                    <div className="row">
                        <h1 className="text-center">Histori Resep</h1>
                        {
                            likes.filter(
                                likes => likes.iduser === user.id
                            ).map((recipe, id) => (

                                // <div key={id} className="col-md-4 col-sm-12">
                                //     <div className="relative block rounded-lg bg-white h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                //         <div className="flex">
                                //             <div className="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                                //                 <img src={recipe.image} alt="" className={styles["foto"]} />
                                //                 <div>
                                //                     <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                //                     </div>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //         <Link to={`/reseps/${recipe.idresep}/login`}>
                                //         <div className="p-6">
                                //             <div className="hover:scale-105 duration-300 cursor-pointer inline-block rounded-full bg-sky-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                //                 {recipe.title}
                                //             </div>
                                //         </div>
                                //         </Link>
                                //     </div>
                                // </div>

                                <div key={id} className="col-md-4 col-sm-12">
                                    <Link to={`/reseps/${recipe.idresep}/login`} style={{ textDecoration: 'none' }}>
                                        <div className="card mt-10 bg-secondary">
                                            <img src={recipe.image} alt="Uploaded Image" className={styles["foto"]} />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h4>{recipe.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    {/* <button onClick={() => handleRemoveBookmark(recipe.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </button> */}
                                </div>
                            ))
                        }
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
            </div>

        </>
    );
}

export default Like;