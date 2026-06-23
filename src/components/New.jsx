import React from 'react';
import { useContext, useEffect, useState } from "react";
import ResepContext from '../Context/ResepContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "../c_iphone-14-3.module.css";

import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export const New = () => {
  // const { formValues, onChange, storeResep, errors, setErrors } =
  //   useContext(ResepContext);
  // useEffect(() => {
  //   setErrors({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  //  const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  // });

  const [user, setUser] = useState({});
  const [id, setId] = useState({});

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

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [step, setStep] = useState('');
  const [name, setName] = useState('');

  const [errors, setErrors] = useState([]);
  console.log(user);


  const navigate = useNavigate();

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

        navigate('/dashboardLogin');


      })
      .catch(error => {

        setErrors(error.response.data);
      })
  }

  const token = localStorage.getItem("token");


  //hook useEffect
  useEffect(() => {

    //check token empty
    if (!token) {

      //redirect login page
      navigate('/');
    }

    //call function "fetchData"
    fetchData();
  }, []);
  console.log(name)


  return (
    // <div className="bg-slate-200 w-full h-full">
    //   <div className="max-w-7xl mx-auto min-h-screen">
    //     <form onSubmit={storeResep}
    //       className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm pt-60"
    //     >
    //       <div className="space-y-6">
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Nama Resep
    //             <input
    //               name="title"
    //               value={formValues["title"]}
    //               onChange={onChange}
    //               className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
    //             />
    //           </label>

    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Gambar
    //             <input
    //               type='file'
    //               name="image"
    //               value={formValues["image"]}
    //               onChange={onChange}
    //             />
    //           </label>

    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Bahan dan Alat
    //             <input
    //               name="ingredients"
    //               value={formValues["ingredients"]}
    //               onChange={onChange}
    //               className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
    //             />
    //           </label>


    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Langkah-Langkah
    //             <input
    //               name="step"
    //               value={formValues["step"]}
    //               onChange={onChange}
    //               className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
    //             />
    //           </label>



    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Nama Akun
    //             <input
    //               name="namaakun"
    //               value={formValues["namaakun"]}
    //               onChange={onChange}
    //               className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
    //             />
    //           </label>


    //         </div>
    //       </div>
    //       <div className="my-4">
    //         <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
    //           ADD
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className={styles["frame2"]}>
      <div className="bg-slate-300 h-full w-full">
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
            {/* <div className="mb-4">
          {user.name}
          </div> */}
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
            {/* <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Id User
              </label>
              <input
                name="id"
                value={user.id}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              />
              {errors.namaakun && (
                <span className="text-sm text-red-400">{errors.namaakun[0]}</span>
              )}
            </div> */}
          </div>
          <div className="my-4">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New