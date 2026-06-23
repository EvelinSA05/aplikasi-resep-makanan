// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// import styles from "../c_iphone-14-4.module.css";
// import logo from "../assets3/logo.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useNavigate } from "react-router-dom";
// import '../c_iphone-14-5.module.css';
// import kartun from "../assets4/kartun.jpg";


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';

// const DashboardAdmin = () => {

//   const [admin, setAdmin] = useState([]);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   // const [imageData, setImageData] = useState(null);

//   // useEffect(() => {
//   //   // const getReseps = async () => {
//   //   //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
//   //   //   setReseps(apiReseps.data);
//   //   // };
//   //   // getReseps();

//   //   axios.get(`http://127.0.0.1:8000/api/admin/${id}`)
//   //     .then(response => {
//   //       setAdmin(response.data);
//   //     })
//   //     .catch(error => {
//   //       console.error(error);
//   //     });
//   // }, []);

//   // const fetchRecipe = async () => {

//   //   await axios.get(`http://127.0.0.1:8000/api/admin/${id}`)
//   //     .then(response => {
//   //       setName(response.data.name);
//   //       setEmail(response.data.email);
//   //     })
//   // };

//   // fetchRecipe();

//   const [userData, setUserData] = useState({ name: 'John Doe', email: 'johndoe@example.com' });

//   // useEffect(() => {
//   //   // Lakukan permintaan ke API Laravel untuk mendapatkan data pengguna saat komponen dimuat
//   //   fetch('http://localhost:8000/api/admin')
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setUserData(data);
//   //     })
//   //     .catch((error) => console.error(error));
//   // }, []);

//   return (
//     <div className="flex">
//       <div className="sidebar bg-emerald-500 w-52 min-h-screen h-auto flex-shrink-0">
//         <img src={logo} className={styles['logo']} alt="..." />
//         <ul className="-ml-8 text-white ">
//           <Link to="/dashboardAdmin">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-1 w-5 h-5 bi bi-house-door" viewBox="0 0 16 16">
//                   <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
//                 </svg>
//                 <div className="font-medium mt-1">Dasboard</div>
//               </div>
//             </li>
//           </Link>
//           <Link to="/NewRecipe">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-plus" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
//                   <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
//                   <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
//                 </svg>
//                 <div className="font-medium mt-1 ">Tambah Resep</div>
//               </div>
//             </li>
//           </Link>
//           <Link to="/RecipeAdmin">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
//                   <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
//                   <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
//                 </svg>
//                 <div className="font-medium mt-1 ">Resep Terbaru</div>
//               </div>
//             </li>
//           </Link>
//           <Link to="/History">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
//                   <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
//                   <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
//                 </svg>
//                 <div className="font-medium mt-1 ">Simpan Resep User</div>
//               </div>
//             </li>
//           </Link>
//           {/* <Link to="/approve">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
//                   <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
//                   <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
//                 </svg>
//                 <div className="font-medium mt-1 ">Approve Resep</div>
//               </div>
//             </li>
//           </Link> */}
//         </ul>
//         {/* Add more menu items as needed */}
//       </div>
//       <div className="main-content flex-1 bg-lime-100">
//         <div className="p-6">
//           <h1 className="text-2xl font-bold mb-4 text-center">Dashboard Admin</h1>
//           {/* <div className="card-body">
//                             SELAMAT DATANG <strong className="text-uppercase">{admins.name}</strong>
//                             <hr />
//                             <button onClick={logoutHandler} className="btn btn-md btn-danger">LOGOUT</button>
//                         </div> */}

//           {/* <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-10">
//             <div className="flex-shrink-0 mb-4 md:mr-6">
//               <img
//                 src={kartun}
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full"
//               />
//             </div>
//             <div className="flex-grow">
//               <h2 className="text-xl font-bold mb-2">John Doe</h2>
//               <p>Email: john.doe@contoh.com</p>
//               <p>Phone: 1234567890</p>
//             </div>
//             <Link to="/loginAdmin"><button
//               className="px-4 py-10 bg-red-500 hover:bg-red-700 text-white rounded-md"
//             >
//               Log Out
//             </button></Link>
//           </div> */}
// {/* 
//           <Link to="/NewAdmin">
//             <button className={styles['rectangle9']}>ADMIN</button>
//           </Link>
//           <div className="relative overflow-x-auto">
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//               <thead className="">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">
//                     Akun Admin
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Password
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Email
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Telp
//                   </th>
//                   <th scope="col" className="px-6 py-3"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {admins.map((admin) => {
//                   return (
//                     <tr
//                       key={admin.id}
//                       className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                     >
//                       <td className="px-6 py-4">{admin.name}</td>
//                       <td className="px-6 py-4">{admin.password}</td>
//                       <td className="px-6 py-4">{admin.email}</td>
//                       <td className="px-10 py-4">{admin.telp}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div> */}

// <div className="col-md-12">
//                    <div className="card border-0 rounded shadow-sm">
//                          <div className="card-body">
//                              SELAMAT DATANG <strong className="text-uppercase">{email}</strong>
//                              <hr />
//                              <Link to='/loginAdmin'>
//                              <button className="btn btn-md btn-danger">LOGOUT</button>
//                              </Link>
//                          </div>
//                      </div>
//                  </div>

// {/* <div>
//       <h2>Selamat datang, {userData.name}</h2>
//       <p>Email: {userData.email}</p>
//     </div> */}

//         </div>
//       </div>
//     </div>
//   )
// }

// export default DashboardAdmin



// //import hook react
// import { useState, useEffect } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function DashboardAdmin() {

//     //state user
//     const [admin, setAdmin] = useState({});

//     //define history
//     const navigate = useNavigate();

//     //token
//     const token = localStorage.getItem("token");

//     //function "fetchData"
//     const fetchData = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch user from Rest API
//         await axios.get('http://localhost:8000/api/admin')
//         .then((response) => {

//             //set response user to state
//             setAdmin(response.data);
//         })
//     }

//     //hook useEffect
//     useEffect(() => {

//         //check token empty
//         if(!token) {

//             //redirect login page
//            navigate('/loginAdmin');
//         }
        
//         //call function "fetchData"
//         fetchData();
//     }, []);

//     //function logout
//     const logoutHanlder = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch Rest API
//         await axios.post('http://localhost:8000/api/logout')
//         .then(() => {

//             //remove token from localStorage
//             localStorage.removeItem("token");

//             //redirect halaman login
//             navigate('/loginAdmin');
//         });
//     };

//     return (
//         <div className="container" style={{ marginTop: "50px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-12">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             SELAMAT DATANG <strong className="text-uppercase">{admin.name}</strong>
//                             <hr />
//                             <button onClick={logoutHanlder} className="btn btn-md btn-danger">LOGOUT</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default DashboardAdmin;

// //import hook react
// import React, { useState, useEffect } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function DashboardAdmin() {

//     //state user
//     const [user, setUser] = useState({});

//     //define history
//     const navigate = useNavigate();

//     //token
//     const token = localStorage.getItem("token");

//     //function "fetchData"
//     const fetchData = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch user from Rest API
//         await axios.get('http://localhost:8000/api/user')
//         .then((response) => {

//             //set response user to state
//             setUser(response.data);
//         })
//     }

//     //hook useEffect
//     useEffect(() => {

//         //check token empty
//         if(!token) {

//             //redirect login page
//             navigate('/loginAdmin');
//         }
        
//         //call function "fetchData"
//         fetchData();
//     }, []);

//     //function logout
//     const logoutHanlder = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch Rest API
//         await axios.post('http://localhost:8000/api/logout')
//         .then(() => {

//             //remove token from localStorage
//             localStorage.removeItem("token");

//             //redirect halaman login
//             navigate('/loginAdmin');
//         });
//     };

//     return (
//         <div className="container" style={{ marginTop: "50px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-12">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
//                             <hr />
//                             <button onClick={logoutHanlder} className="btn btn-md btn-danger">LOGOUT</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default DashboardAdmin;


// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function Dashboard() {
//   const [userData, setUserData] = useState({ name: '' });

//   useEffect(() => {
//     // Lakukan permintaan API untuk mendapatkan data pengguna setelah login
//     axios.get(`http://localhost:8000/api/admin`).then((response) => {
//       setUserData(response.data);
//     });
//   }, []);

//   return (
//     <div className="Dashboard">
//       <h2>Welcome, {userData.name}</h2>
//       <p>This is your dashboard.</p>
//     </div>
//   );
// }

// export default Dashboard;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// import styles from "../c_iphone-14-4.module.css";
// import logo from "../assets3/logo.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useNavigate } from "react-router-dom";
// import '../c_iphone-14-5.module.css';
// import kartun from "../assets4/kartun.jpg";


// import { useState, useEffect } from "react";
// import axios from "axios";

// const DashboardAdmin = () => {

//   const [admin, setAdmin] = useState([]);
//   const [user, setUser] = useState({});
//   const roles = localStorage.getItem("roles");

//       //define history
//       const navigate = useNavigate();
  
//       //token
//       const token = localStorage.getItem("token");
//   // const [imageData, setImageData] = useState(null);

//   useEffect(() => {
//     // const getReseps = async () => {
//     //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
//     //   setReseps(apiReseps.data);
//     // };
//     // getReseps();

//     axios.get('http://127.0.0.1:8000/api/admin')
//       .then(response => {
//         setAdmin(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   const [userData, setUserData] = useState({ name: 'John Doe', email: 'johndoe@example.com' });

//   // useEffect(() => {
//   //   // Lakukan permintaan ke API Laravel untuk mendapatkan data pengguna saat komponen dimuat
//   //   fetch('http://localhost:8000/api/admin')
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setUserData(data);
//   //     })
//   //     .catch((error) => console.error(error));
//   // }, []);

//   const fetchData = async () => {

//             //set axios header dengan type Authorization + Bearer token
//             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//             //fetch user from Rest API
//             await axios.get('http://localhost:8000/api/user')
//             .then((response) => {
    
//                 //set response user to state
//                 setUser(response.data);
//             })
//         }

//         if(roles) {
//           navigate('/dashboardAdmin');
//         }

//   useEffect(() => {

//             //check token empty
//             if(!token) {
    
//                 //redirect login page
//                 navigate('/loginAdmin');
//             }
            
//             //call function "fetchData"
//             fetchData();
//         }, []);

//         const logoutHanlder = async () => {

//           //set axios header dengan type Authorization + Bearer token
//           axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//           //fetch Rest API
//           await axios.post('http://localhost:8000/api/logout')
//               .then(() => {
  
//                   //remove token from localStorage
//                   localStorage.removeItem("token");
  
//                   //redirect halaman login
//                   navigate('/');
//               });
//       };

//   return (
//     <div className="flex">
//       <div className="sidebar bg-emerald-500 w-52 min-h-screen h-auto flex-shrink-0">
//         <img src={logo} className={styles['logo']} alt="..." />
//         <ul className="-ml-8 text-white ">
//           <Link to="/dashboardAdmin">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-1 w-5 h-5 bi bi-house-door" viewBox="0 0 16 16">
//                   <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
//                 </svg>
//                 <div className="font-medium mt-1">Dasboard</div>
//               </div>
//             </li>
//           </Link>
//           <Link to="/NewRecipe">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-plus" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
//                   <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
//                   <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
//                 </svg>
//                 <div className="font-medium mt-1 ">Tambah Resep</div>
//               </div>
//             </li>
//           </Link>
//           <Link to="/RecipeAdmin">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
//                   <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
//                   <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
//                 </svg>
//                 <div className="font-medium mt-1 ">Resep Terbaru</div>
//               </div>
//             </li>
//           </Link>
//           <Link to="/History">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
//                   <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
//                   <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
//                 </svg>
//                 <div className="font-medium mt-1 ">Simpan Resep User</div>
//               </div>
//             </li>
//           </Link>
//           <Link to="/approve">
//             <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
//               <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
//                   <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
//                   <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
//                 </svg>
//                 <div className="font-medium mt-1 ">Approve Resep</div>
//               </div>
//             </li>
//           </Link>
//         </ul>
//         {/* Add more menu items as needed */}
//       </div>
//       <div className="main-content flex-1 bg-lime-100">
//         <div className="p-6">
//           <h1 className="text-2xl font-bold mb-4 text-center">Dashboard Admin</h1>
//           {/* <div className="card-body">
//                             SELAMAT DATANG <strong className="text-uppercase">{admins.name}</strong>
//                             <hr />
//                             <button onClick={logoutHandler} className="btn btn-md btn-danger">LOGOUT</button>
//                         </div> */}

//           {/* <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-10">
//             <div className="flex-shrink-0 mb-4 md:mr-6">
//               <img
//                 src={kartun}
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full"
//               />
//             </div>
//             <div className="flex-grow">
//               <h2 className="text-xl font-bold mb-2">John Doe</h2>
//               <p>Email: john.doe@contoh.com</p>
//               <p>Phone: 1234567890</p>
//             </div>
//             <Link to="/loginAdmin"><button
//               className="px-4 py-10 bg-red-500 hover:bg-red-700 text-white rounded-md"
//             >
//               Log Out
//             </button></Link>
//           </div> */}
// {/* 
//           <Link to="/NewAdmin">
//             <button className={styles['rectangle9']}>ADMIN</button>
//           </Link>
//           <div className="relative overflow-x-auto">
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//               <thead className="">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">
//                     Akun Admin
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Password
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Email
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Telp
//                   </th>
//                   <th scope="col" className="px-6 py-3"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {admins.map((admin) => {
//                   return (
//                     <tr
//                       key={admin.id}
//                       className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                     >
//                       <td className="px-6 py-4">{admin.name}</td>
//                       <td className="px-6 py-4">{admin.password}</td>
//                       <td className="px-6 py-4">{admin.email}</td>
//                       <td className="px-10 py-4">{admin.telp}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div> */}

// <div className="col-md-12">
//                    <div className="card border-0 rounded shadow-sm">
//                          <div className="card-body">
//                              SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
//                              <hr />
//                              <Link to='/loginAdmin'>
//                              <button className="btn btn-md btn-danger">LOGOUT</button>
//                              </Link>
//                          </div>
//                      </div>
//                  </div>

// {/* <div>
//       <h2>Selamat datang, {userData.name}</h2>
//       <p>Email: {userData.email}</p>
//     </div> */}

//         </div>
//       </div>
//     </div>
//   )
// }

// export default DashboardAdmin

// import React from 'react'

// const DashboardAdmin = () => {
//   return (
//     <div>DashboardAdmin</div>
//   )
// }

// export default DashboardAdmin

// //import hook react
// import { useState, useEffect } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function DashboardAdmin() {

//     //state user
//     const [admin, setAdmin] = useState({});

//     //define history
//     const navigate = useNavigate();

//     //token
//     const token = localStorage.getItem("token");

//     //function "fetchData"
//     const fetchData = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch user from Rest API
//         await axios.get('http://localhost:8000/api/admin')
//         .then((response) => {

//             //set response user to state
//             setAdmin(response.data);
//         })
//     }

//     //hook useEffect
//     useEffect(() => {

//         //check token empty
//         if(!token) {

//             //redirect login page
//            navigate('/loginAdmin');
//         }
        
//         //call function "fetchData"
//         fetchData();
//     }, []);

//     //function logout
//     const logoutHanlder = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch Rest API
//         await axios.post('http://localhost:8000/api/logout')
//         .then(() => {

//             //remove token from localStorage
//             localStorage.removeItem("token");

//             //redirect halaman login
//             navigate('/loginAdmin');
//         });
//     };

//     return (
//         <div className="container" style={{ marginTop: "50px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-12">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             SELAMAT DATANG <strong className="text-uppercase">{admin.name}</strong>
//                             <hr />
//                             <button onClick={logoutHanlder} className="btn btn-md btn-danger">LOGOUT</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default DashboardAdmin;

// //import hook react
// import React, { useState, useEffect } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function DashboardAdmin() {

//     //state user
//     const [user, setUser] = useState({});

//     //define history
//     const navigate = useNavigate();

//     //token
//     const token = localStorage.getItem("token");

//     //function "fetchData"
//     const fetchData = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch user from Rest API
//         await axios.get('http://localhost:8000/api/user')
//         .then((response) => {

//             //set response user to state
//             setUser(response.data);
//         })
//     }

//     //hook useEffect
//     useEffect(() => {

//         //check token empty
//         if(!token) {

//             //redirect login page
//             navigate('/loginAdmin');
//         }
        
//         //call function "fetchData"
//         fetchData();
//     }, []);

//     //function logout
//     const logoutHanlder = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch Rest API
//         await axios.post('http://localhost:8000/api/logout')
//         .then(() => {

//             //remove token from localStorage
//             localStorage.removeItem("token");

//             //redirect halaman login
//             navigate('/loginAdmin');
//         });
//     };

//     return (
//         <div className="container" style={{ marginTop: "50px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-12">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
//                             <hr />
//                             <button onClick={logoutHanlder} className="btn btn-md btn-danger">LOGOUT</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default DashboardAdmin;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../c_iphone-14-4.module.css";
import logo from "../assets3/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import '../c_iphone-14-5.module.css';
import kartun from "../assets4/kartun.jpg";


import { useState, useEffect } from "react";
import axios from "axios";

const DashboardAdmin = () => {

  const [admin, setAdmin] = useState([]);
  
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const roles = localStorage.getItem("roles");

  const token = localStorage.getItem("token");

  //function "fetchData"
  // const fetchData = async () => {

  //     //set axios header dengan type Authorization + Bearer token
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //     //fetch user from Rest API
  //     await axios.get('http://localhost:8000/api/user')
  //         .then((response) => {

  //             //set response user to state
  //             setUser(response.data);
  //         })
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
      navigate('/dashboardAdmin');
    }

    if(!token) {
      navigate('/');
    } else
    {
      fetchData();
    };

  }, []);


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
              navigate('/loginAdmin');
          });
  };

  // const [imageData, setImageData] = useState(null);

  // useEffect(() => {
  //   // const getReseps = async () => {
  //   //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
  //   //   setReseps(apiReseps.data);
  //   // };
  //   // getReseps();

  //   axios.get('http://127.0.0.1:8000/api/user')
  //     .then(response => {
  //       setAdmin(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  // const [userData, setUserData] = useState({ name: 'John Doe', email: 'johndoe@example.com' });

  // useEffect(() => {
  //   // Lakukan permintaan ke API Laravel untuk mendapatkan data pengguna saat komponen dimuat
  //   fetch('http://localhost:8000/api/admin')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserData(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

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
        {/* Add more menu items as needed */}
      </div>
      <div className="main-content flex-1 bg-lime-100">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Dashboard Admin</h1>
          {/* <div className="card-body">
                            SELAMAT DATANG <strong className="text-uppercase">{admins.name}</strong>
                            <hr />
                            <button onClick={logoutHandler} className="btn btn-md btn-danger">LOGOUT</button>
                        </div> */}

          {/* <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-10">
            <div className="flex-shrink-0 mb-4 md:mr-6">
              <img
                src={kartun}
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-2">John Doe</h2>
              <p>Email: john.doe@contoh.com</p>
              <p>Phone: 1234567890</p>
            </div>
            <Link to="/loginAdmin"><button
              className="px-4 py-10 bg-red-500 hover:bg-red-700 text-white rounded-md"
            >
              Log Out
            </button></Link>
          </div> */}
{/* 
          <Link to="/NewAdmin">
            <button className={styles['rectangle9']}>ADMIN</button>
          </Link>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Akun Admin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Password
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Telp
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => {
                  return (
                    <tr
                      key={admin.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{admin.name}</td>
                      <td className="px-6 py-4">{admin.password}</td>
                      <td className="px-6 py-4">{admin.email}</td>
                      <td className="px-10 py-4">{admin.telp}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div> */}

<div className="col-md-12">
                   <div className="card border-0 rounded shadow-sm">
                         <div className="card-body">
                             SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
                             <hr />
                             <Link to='/loginAdmin'>
                             <button className="btn btn-md btn-danger">LOGOUT</button>
                             </Link>
                         </div>
                     </div>
                 </div>

{/* <div>
      <h2>Selamat datang, {userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div> */}

        </div>
      </div>
    </div>
  )
}

export default DashboardAdmin

// //import hook react
// import { useState, useEffect } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function DashboardAdmin() {

//     //state user
//     const [admin, setAdmin] = useState({});

//     //define history
//     const navigate = useNavigate();

//     //token
//     const token = localStorage.getItem("token");

//     //function "fetchData"
//     const fetchData = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch user from Rest API
//         await axios.get('http://localhost:8000/api/admin')
//         .then((response) => {

//             //set response user to state
//             setAdmin(response.data);
//         })
//     }

//     //hook useEffect
//     useEffect(() => {

//         //check token empty
//         if(!token) {

//             //redirect login page
//            navigate('/loginAdmin');
//         }
        
//         //call function "fetchData"
//         fetchData();
//     }, []);

//     //function logout
//     const logoutHanlder = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch Rest API
//         await axios.post('http://localhost:8000/api/logout')
//         .then(() => {

//             //remove token from localStorage
//             localStorage.removeItem("token");

//             //redirect halaman login
//             navigate('/loginAdmin');
//         });
//     };

//     return (
//         <div className="container" style={{ marginTop: "50px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-12">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             SELAMAT DATANG <strong className="text-uppercase">{admin.name}</strong>
//                             <hr />
//                             <button onClick={logoutHanlder} className="btn btn-md btn-danger">LOGOUT</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default DashboardAdmin;

// //import hook react
// import React, { useState, useEffect } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function DashboardAdmin() {

//     //state user
//     const [user, setUser] = useState({});

//     //define history
//     const navigate = useNavigate();

//     //token
//     const token = localStorage.getItem("token");

//     //function "fetchData"
//     const fetchData = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch user from Rest API
//         await axios.get('http://localhost:8000/api/user')
//         .then((response) => {

//             //set response user to state
//             setUser(response.data);
//         })
//     }

//     //hook useEffect
//     useEffect(() => {

//         //check token empty
//         if(!token) {

//             //redirect login page
//             navigate('/loginAdmin');
//         }
        
//         //call function "fetchData"
//         fetchData();
//     }, []);

//     //function logout
//     const logoutHanlder = async () => {

//         //set axios header dengan type Authorization + Bearer token
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//         //fetch Rest API
//         await axios.post('http://localhost:8000/api/logout')
//         .then(() => {

//             //remove token from localStorage
//             localStorage.removeItem("token");

//             //redirect halaman login
//             navigate('/loginAdmin');
//         });
//     };

//     return (
//         <div className="container" style={{ marginTop: "50px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-12">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
//                             <hr />
//                             <button onClick={logoutHanlder} className="btn btn-md btn-danger">LOGOUT</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default DashboardAdmin;




