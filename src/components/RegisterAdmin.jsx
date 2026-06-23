// import { useState } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function RegisterAdmin() {

//     //define state
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");

//     //define state validation
//     const [errors, setErrors] = useState([]);

//     //define history
//     const navigate = useNavigate();

//     //function "registerHanlder"
//     const registerHandler = async (e) => {
//         e.preventDefault();

//         //initialize formData
//         const formData = new FormData();

//         //append data to formData
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('password', password);
//         formData.append('password_confirmation', passwordConfirmation);

//         //send data to server
//         await axios.post('http://localhost:8000/api/registerAdmin', formData)
//             .then(() => {

//                 //redirect to logi page
//                 navigate('/loginAdmin');
//             })
//             .catch((error) => {

//                 //assign error to state "validation"
//                 setErrors(error.response.data);
//             })
//     };

//     return (
//         <div className="container" style={{ marginTop: "120px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             <h4 className="fw-bold">HALAMAN REGISTER</h4>
//                             <hr />
//                             <form onSubmit={registerHandler}>
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <div className="mb-3">
//                                             <label className="form-label">NAMA LENGKAP</label>
//                                             <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap" />
//                                         </div>
//                                         {
//                                             errors.name && (
//                                                 <div className="alert alert-danger">
//                                                     {errors.name[0]}
//                                                 </div>
//                                             )
//                                         }
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="mb-3">
//                                             <label className="form-label">ALAMAT EMAIL</label>
//                                             <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email" />
//                                         </div>
//                                         {
//                                             errors.email && (
//                                                 <div className="alert alert-danger">
//                                                     {errors.email[0]}
//                                                 </div>
//                                             )
//                                         }
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <div className="mb-3">
//                                             <label className="form-label">PASSWORD</label>
//                                             <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password" />
//                                         </div>
//                                         {
//                                             errors.password && (
//                                                 <div className="alert alert-danger">
//                                                     {errors.password[0]}
//                                                 </div>
//                                             )
//                                         }
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="mb-3">
//                                             <label className="form-label">KONFIRMASI PASSWORD</label>
//                                             <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Konfirmasi Password" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">REGISTER</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default RegisterAdmin;

// //import hook react
// import { useState } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function RegisterAdmin() {

//     //define state
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");

//     //define state validation
//     const [errors, setErrors] = useState([]);

//     //define history
//     const navigate = useNavigate();

//     //function "registerHanlder"
//     const registerHandler = async (e) => {
//         e.preventDefault();
        
//         //initialize formData
//         const formData = new FormData();

//         //append data to formData
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('password', password);
//         formData.append('password_confirmation', passwordConfirmation);

//         //send data to server
//         await axios.post('http://localhost:8000/api/registerAdmin', formData)
//         .then(() => {

//             //redirect to logi page
//             navigate('/loginAdmin');
//         })
//         .catch((error) => {

//             //assign error to state "validation"
//             setErrors(error.response.data);
//         })
//     };

//     return (
//         <div className="container" style={{ marginTop: "120px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             <h4 className="fw-bold">HALAMAN REGISTER</h4>
//                             <hr/>
//                             <form onSubmit={registerHandler}>
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <div className="mb-3">
//                                             <label className="form-label">NAMA LENGKAP</label>
//                                             <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"/>
//                                         </div>
//                                         {
//                                         errors.name && (
//                                             <div className="alert alert-danger">
//                                                 {errors.name[0]}
//                                             </div>
//                                         )
//                                         }
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="mb-3">
//                                             <label className="form-label">ALAMAT EMAIL</label>
//                                             <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
//                                         </div>
//                                         {
//                                             errors.email && (
//                                                 <div className="alert alert-danger">
//                                                     {errors.email[0]}
//                                                 </div>
//                                             )
//                                         }
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <div className="mb-3">
//                                             <label className="form-label">PASSWORD</label>
//                                             <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
//                                         </div>
//                                         {
//                                             errors.password && (
//                                                 <div className="alert alert-danger">
//                                                     {errors.password[0]}
//                                                 </div>
//                                             )
//                                         }
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="mb-3">
//                                             <label className="form-label">KONFIRMASI PASSWORD</label>
//                                             <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Konfirmasi Password"/>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">REGISTER</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default RegisterAdmin;

import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [role, setRole] = useState("admin");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");
  const roles = localStorage.getItem("roles");

//   useEffect(() => {

//     if(roles) {
//       navigate('/');
//     };

//     if(!token) {
//       navigate('/');
//       };

//   }, []);

  const registerHandler = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', role);
    formData.append('password_confirmation', passwordConfirmation);

    try {
        await axios.post('http://localhost:8000/api/registerl', formData);
        alert("Registrasi Admin Berhasil!");
        navigate('/loginAdmin');
    } catch (error) {
        console.error("Registration error", error);
        if(error.response && error.response.data) {
            setErrors(error.response.data);
        } else {
            alert("Gagal terhubung ke server atau terjadi kesalahan internal.");
        }
    }
};

  return (
    // <div>
    //   <h2>Registrasi Admin</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Nama"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Register</button>
    //   </form>
    // </div>

    <div className="container" style={{ marginTop: "120px" }}>
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                    <h4 className="fw-bold">HALAMAN REGISTER ADMIN</h4>
                    <hr />
                    <form onSubmit={registerHandler}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">NAMA LENGKAP</label>
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap" />
                                </div>
                                {
                                    errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name[0]}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">ALAMAT EMAIL</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email" />
                                </div>
                                {
                                    errors.email && (
                                        <div className="alert alert-danger">
                                            {errors.email[0]}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">PASSWORD</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password" />
                                </div>
                                {
                                    errors.password && (
                                        <div className="alert alert-danger">
                                            {errors.password[0]}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">PASSWORD CONFIRMATION</label>
                                    <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Password" />
                                </div>
                                {
              errors.role && (
                <div className="px-4 py-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{errors.role[0]}</span>
                </div>
              )
            }
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Register;




// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState([]);
//   const navigate = useNavigate();
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:8000/api/registerAdmin', { name, email, password });
//       // Setelah pendaftaran berhasil, Anda bisa meredirect pengguna ke halaman login atau melakukan tindakan lain.
//       navigate('/loginAdmin');
//     } catch (error) {
//       console.error('Registrasi gagal:', error);
//     }
//   }

//   return (
//     // <div>
//     //   <h2>Registrasi Admin</h2>
//     //   <form onSubmit={handleSubmit}>
//     //     <input
//     //       type="text"
//     //       placeholder="Nama"
//     //       value={name}
//     //       onChange={(e) => setName(e.target.value)}
//     //     />
//     //     <input
//     //       type="email"
//     //       placeholder="Email"
//     //       value={email}
//     //       onChange={(e) => setEmail(e.target.value)}
//     //     />
//     //     <input
//     //       type="password"
//     //       placeholder="Password"
//     //       value={password}
//     //       onChange={(e) => setPassword(e.target.value)}
//     //     />
//     //     <button type="submit">Register</button>
//     //   </form>
//     // </div>

//     <div className="container" style={{ marginTop: "120px" }}>
//     <div className="row justify-content-center">
//         <div className="col-md-8">
//             <div className="card border-0 rounded shadow-sm">
//                 <div className="card-body">
//                     <h4 className="fw-bold">HALAMAN REGISTER</h4>
//                     <hr />
//                     <form onSubmit={handleSubmit}>
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">NAMA LENGKAP</label>
//                                     <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap" />
//                                 </div>
//                                 {
//                                     errors.name && (
//                                         <div className="alert alert-danger">
//                                             {errors.name[0]}
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">ALAMAT EMAIL</label>
//                                     <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email" />
//                                 </div>
//                                 {
//                                     errors.email && (
//                                         <div className="alert alert-danger">
//                                             {errors.email[0]}
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">PASSWORD</label>
//                                     <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password" />
//                                 </div>
//                                 {
//                                     errors.password && (
//                                         <div className="alert alert-danger">
//                                             {errors.password[0]}
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                         </div>
//                         <button type="submit" className="btn btn-primary">REGISTER</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//   );
// }

// export default Register;