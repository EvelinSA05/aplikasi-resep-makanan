import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../c_iphone-14-3.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets3/image1.png"; //gambar
import logo from "../assets3/logo.png"; //gambar
import { Link, useNavigate } from "react-router-dom";
import '../c_iphone-14-5.module.css';

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';



const RecipeAdmin = () => {
  const [recipesA, setRecipeA] = useState([]);
  const { id } = useParams();
  const [reseps, setReseps] = useState([]);
  const [resep, setResep] = useState([]);
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState([]);
  const token = localStorage.getItem('token');

  const [isApprove, setIsApprove] = useState(reseps.is_approve);

  const handleBookmarkClick = (recipeId) => {
    axios.post(`http://127.0.0.1:8000/api/reseps/${recipeId}/approve`)
      .then(response => {
        const updatedRecipes = recipes.map(recipe => {
          if (recipe.id === recipeId) {
            return { ...recipe, is_approve: !recipe.is_approve };
          }
          return recipe;
        });
        setRecipes(updatedRecipes);
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (!token) {

    //redirect login page
    navigate('/');
}
  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/user/')
  //     .then(response => {
  //       setRecipes(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);


  // const [imageData, setImageData] = useState(null);

  // const [itemId, setItemId] = useState('');
  // const [deleteMessage, setDeleteMessage] = useState('');

  // const handleDelete = () => {
  //   axios
  //     .delete(`http://127.0.0.1:8000/api/reseps/${id}`)
  //     .then(response => {
  //       setDeleteMessage(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('Error deleting item:', error);
  //     });
  // };

  const deletePost = async (id) => {

    //delete with api
    await axios.delete(`http://127.0.0.1:8000/api/reseps/${id}`)
      .then(() => {

        window.location.reload('http://localhost:3000/recipeAdmin');


      })
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/reseps/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  useEffect(() => {
    // const getReseps = async () => {
    //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
    //   setReseps(apiReseps.data);
    // };
    // getReseps();

    axios.get('http://127.0.0.1:8000/api/reseps')
      .then(response => {
        setRecipeA(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  // useEffect(() => {
  //   const getRecipesA = async () => {
  //     const apiRecipes = await axios.get("reseps");
  //     setReseps(apiRecipes.data);
  //   };
  //   getRecipesA();


  return (
    <div className="flex">
      <div className="sidebar bg-emerald-500 w-52 min-h-screen h-auto flex-shrink-0">
        <img src={logo} className={styles['logo']} alt="..." />
        <ul className="-ml-8 text-white ">
          <Link to="/dashboardAdmin">
            <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
              <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-1 w-5 h-5 bi bi-house-door" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                </svg>
                <div className="font-medium mt-1">Dasboard</div>
              </div>
            </li>
          </Link>
          <Link to="/NewRecipe">
            <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
              <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-plus" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
                <div className="font-medium mt-1 ">Tambah Resep</div>
              </div>
            </li>
          </Link>
          <Link to="/RecipeAdmin">
            <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
              <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
                <div className="font-medium mt-1 ">Resep Terbaru</div>
              </div>
            </li>
          </Link>
          {/* <Link to="/History">
            <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
              <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
                <div className="font-medium mt-1 ">Simpan Resep User</div>
              </div>
            </li>
          </Link> */}
        </ul>

      </div>
      <div className="main-content flex-1 bg-lime-100">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Resep Terbaru User</h1>
          <div className={styles['card4']}>
            <div className="row">
              {/* <div className="col-md-4 col-sm-12 mt-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />

                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>

                  </div>

                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash-fill" className={styles['sampah']} viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square" className={styles['tambah']} viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div> */}
              {/* <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>


              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div> */}

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Nama Resep
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Nama Akun
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipes.map((recipe) => {
                      return (
                        <tr
                          key={recipe.id}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >

                          <td className="px-6 py-4">{recipe.title}</td>
                          <img src={recipe.image} width={100} height={70} alt="" />
                          <td className="px-6 py-4">{recipe.name}</td>
                          <td>
                            <Link to={`/reseps/${recipe.id}/admin`}>
                              <td>
                                <div>
                                  <button className="btn btn-warning rounded-sm shadow border-0">DETAIL</button>
                                </div>
                              </td>
                            </Link>
                          </td>
                          {/* <button onClick={() => handleApproveClick(recipeA.id)}>
                                {isApprove ? (
                                  <div className={styles["rectangleimg2"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                                      <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z" />
                                    </svg>
                                  </div>
                                ) : (
                                  <div className={styles["rectangleimg2"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                      <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                                    </svg>
                                  </div>
                                )}
                              </button> */}
                          {/* <div>
                          <button className="btn btn-warning rounded-sm shadow border-0">ACCEPT</button>
                          </div> */}
                          <td>
                            <button onClick={() => handleBookmarkClick(recipe.id)}>
                              {recipe.is_approve ? (
                                <div>
                                  <button className="btn btn-success rounded-sm shadow border-0">APPROVED</button>
                                </div>
                              ) : (
                                <div>
                                  <button className="btn btn-light rounded-sm shadow border-0">APPROVED</button>
                                </div>
                              )}
                            </button>
                          </td>
                          <td>
                            <Link to={`/editAdmin/${recipe.id}`}>
                              <button className="btn btn-primary rounded-sm shadow border-0">UPDATE</button>
                            </Link>
                          </td>
                          <td>
                            <button onClick={() => deletePost(recipe.id)} className="btn btn-danger rounded-sm shadow border-0" >
                              DELETE
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>

                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RecipeAdmin