import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import logo from "../assets3/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '../c_iphone-14-5.module.css';

export default function EditAdmin() {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [step, setStep] = useState('');
    const [user, setUser] = useState({});
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate('/loginAdmin');
            return;
        }

        const fetchUserAndPost = async () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            try {
                // Fetch User info for header
                const responseUser = await axios.get('http://localhost:8000/api/user');
                setUser(responseUser.data);

                // Fetch Recipe info
                const responsePost = await axios.get(`http://127.0.0.1:8000/api/reseps/${id}`);
                setTitle(responsePost.data.title);
                setIngredients(responsePost.data.ingredients);
                setStep(responsePost.data.step);
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem("token");
                    navigate('/loginAdmin');
                }
            }
        };

        fetchUserAndPost();
    }, [id, navigate, token]);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }

    const updatePost = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        if (image) {
            formData.append('image', image);
        }
        formData.append('title', title);
        formData.append('ingredients', ingredients);
        formData.append('step', step);
        formData.append('_method', 'PUT');

        await axios.post(`http://127.0.0.1:8000/api/reseps/${id}`, formData)
            .then(() => {
                navigate('/recipeAdmin');
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setErrors(error.response.data);
                }
            });
    }

    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
            await axios.post('http://localhost:8000/api/logout');
        } catch (e) {
            console.error(e);
        } finally {
            localStorage.removeItem("token");
            navigate('/loginAdmin');
        }
    };

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* SIDEBAR */}
            <div className="w-64 bg-emerald-600 text-white flex flex-col shadow-xl z-20 shrink-0">
                <div className="p-8 flex items-center justify-center border-b border-emerald-500/50">
                    <img src={logo} alt="Logo" className="w-24 h-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1">
                        <li>
                            <Link to="/dashboardAdmin" className="flex items-center px-6 py-3 no-underline hover:no-underline text-emerald-100 hover:bg-emerald-500 hover:text-white transition-colors">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/RecipeAdmin" className="flex items-center px-6 py-3 no-underline hover:no-underline text-emerald-100 hover:bg-emerald-500 hover:text-white transition-colors">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                                Kelola Resep
                            </Link>
                        </li>
                        <li>
                            <Link to="/History" className="flex items-center px-6 py-3 no-underline hover:no-underline text-emerald-100 hover:bg-emerald-500 hover:text-white transition-colors">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                Riwayat Tersimpan
                            </Link>
                        </li>
                        <li>
                            <Link to="/saran" className="flex items-center px-6 py-3 no-underline hover:no-underline text-emerald-100 hover:bg-emerald-500 hover:text-white transition-colors">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                                Saran & Kritik
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="p-4 border-t border-emerald-500">
                    <button onClick={logoutHandler} className="w-full flex items-center justify-center px-4 py-2 bg-emerald-700 hover:bg-red-500 text-white rounded transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                        Logout
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col overflow-hidden relative z-10">
                {/* Header */}
                <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/RecipeAdmin" className="text-gray-400 hover:text-emerald-500 mr-4 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-800">Edit Resep</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-800">{user.name || "Memuat..."}</p>
                            <p className="text-xs text-gray-500">{user.email || "Memuat..."}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                            {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                            <form onSubmit={updatePost} encType="multipart/form-data">
                                <div className="space-y-6">
                                    {/* Image */}
                                    <div>
                                        <label className="block mb-2 text-sm font-semibold text-gray-700">Foto Resep Baru (Opsional)</label>
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handleFileChange}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-gray-50 hover:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                                        />
                                        {errors.image && <span className="text-xs text-red-500 mt-1 block">{errors.image[0]}</span>}
                                        <p className="text-xs text-gray-400 mt-1">Biarkan kosong jika tidak ingin mengubah foto</p>
                                    </div>

                                    {/* Nama Resep */}
                                    <div>
                                        <label className="block mb-2 text-sm font-semibold text-gray-700">Nama Resep</label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-gray-50 hover:bg-white"
                                            placeholder="Contoh: Nasi Goreng Spesial"
                                        />
                                        {errors.title && <span className="text-xs text-red-500 mt-1 block">{errors.title[0]}</span>}
                                    </div>

                                    {/* Ingredients */}
                                    <div>
                                        <label className="block mb-2 text-sm font-semibold text-gray-700">Bahan-bahan (Ingredients)</label>
                                        <textarea
                                            value={ingredients}
                                            onChange={(e) => setIngredients(e.target.value)}
                                            rows="4"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-gray-50 hover:bg-white resize-none"
                                            placeholder="Masukkan bahan-bahan yang dibutuhkan..."
                                        />
                                        {errors.ingredients && <span className="text-xs text-red-500 mt-1 block">{errors.ingredients[0]}</span>}
                                    </div>

                                    {/* Step */}
                                    <div>
                                        <label className="block mb-2 text-sm font-semibold text-gray-700">Langkah-langkah (Steps)</label>
                                        <textarea
                                            value={step}
                                            onChange={(e) => setStep(e.target.value)}
                                            rows="5"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-gray-50 hover:bg-white resize-none"
                                            placeholder="Jelaskan langkah-langkah pembuatan..."
                                        />
                                        {errors.step && <span className="text-xs text-red-500 mt-1 block">{errors.step[0]}</span>}
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end gap-3">
                                    <Link to="/RecipeAdmin" className="px-6 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                        Batal
                                    </Link>
                                    <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-sm shadow-blue-200 transition-colors flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                                        Update Resep
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}