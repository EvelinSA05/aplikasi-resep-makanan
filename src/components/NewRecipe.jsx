import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../c_iphone-14-3.module.css";
import logo from "../assets3/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import '../c_iphone-14-5.module.css';

import { useContext, useEffect, useState } from "react";
import ResepContext from '../Context/ResepContext';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const NewRecipe = () => {

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [step, setStep] = useState('');
  const [name, setName] = useState('');

  const [user, setUser] = useState({});
  const [id, setId] = useState({});

  const [errors, setErrors] = useState([]);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  console.log(user);

  //function "fetchData"
  const fetchData = async () => {

    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch user from Rest API
    await axios.get('http://localhost:8000/api/user')
      .then((response) => {

        //set response user to state
        setName(response.data.name);
        setId(response.data.id);
      })
  }

  
  //hook useEffect
  useEffect(() => {

    //check token empty
    if (!token) {

      //redirect login page
      navigate('/loginAdmin');
    }

    //call function "fetchData"
    fetchData();
  }, []);
  console.log(name)

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  }

  const storeResep = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('image', image);
    formData.append('title', title);
    formData.append('ingredients', ingredients);
    formData.append('step', step);
    formData.append('name', name);

    await axios.post("reseps", formData)
      .then(() => {

        navigate('/recipeAdmin');


      })
      .catch(error => {

        setErrors(error.response.data);
      })
  }

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
          <h1 className="text-2xl font-bold mb-4 text-center">Tambah Resep</h1>


          <div className="max-w-7xl mx-auto min-h-screen">
          <form
        encType="multipart/form-data"
        onSubmit={storeResep}

        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
      >
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nama Resep
            </label>
            <input
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.title && (
              <span className="text-sm text-red-400">{errors.title[0]}</span>
            )}
          </div>
          {/* <div className="mb-4">
          <label htmlFor="slug" className="block mb-2 text-sm font-medium">
            Slug
          </label>
          <input
          type="file"
            name="image"
            value={formValues.image}
            onChange={onChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
          />
          {errors.image && (
            <span className="text-sm text-red-400">{errors.image[0]}</span>
          )}
        </div> */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Image
            </label>
            <input
            type='file'
              name="ingredients"
              onChange={handleFileChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.ingredients && (
              <span className="text-sm text-red-400">{errors.ingredients[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Ingredients
            </label>
            <textarea
              name="ingredients"
              // value={formValues.ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.ingredients && (
              <span className="text-sm text-red-400">{errors.ingredients[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Step
            </label>
            <textarea
              name="step"
              // value={formValues.step}
              onChange={(e) => setStep(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.step && (
              <span className="text-sm text-red-400">{errors.step[0]}</span>
            )}
          </div>
          <div className="mb-4" hidden>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nama Akun
            </label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.namaakun && (
              <span className="text-sm text-red-400">{errors.namaakun[0]}</span>
            )}
          </div>
        </div>
        <div className="my-4">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            Store
          </button>
        </div>
      </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewRecipe