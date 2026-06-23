import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import logo from "../assets3/logo.png";
import '../c_iphone-14-5.module.css';

const ResepAdmin = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [step, setStep] = useState('');
    const [image, setImage] = useState('');
    const [user, setUser] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate('/loginAdmin');
            return;
        }

        const fetchUserAndRecipe = async () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            try {
                // Fetch User info
                const responseUser = await axios.get('http://localhost:8000/api/user');
                setUser(responseUser.data);

                // Fetch Recipe detail
                const responseRecipe = await axios.get(`http://127.0.0.1:8000/api/reseps/${id}`);
                setTitle(responseRecipe.data.title);
                setImage(responseRecipe.data.image);
                setIngredients(responseRecipe.data.ingredients);
                setStep(responseRecipe.data.step);
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem("token");
                    navigate('/loginAdmin');
                }
            }
        };

        fetchUserAndRecipe();
    }, [id, navigate, token]);

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
                        <h1 className="text-2xl font-bold text-gray-800">Detail Resep</h1>
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
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            {/* Recipe Image Header */}
                            <div className="relative h-72 w-full bg-gray-200">
                                {image ? (
                                    <img src={image} alt={title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                                    <div className="p-8">
                                        <h1 className="text-4xl font-bold text-white drop-shadow-md">{title || "Memuat..."}</h1>
                                    </div>
                                </div>
                            </div>

                            {/* Recipe Details */}
                            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Ingredients Column */}
                                <div className="md:col-span-1">
                                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 h-full">
                                        <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                                            Bahan-Bahan
                                        </h2>
                                        <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                                            {ingredients || "Tidak ada bahan yang tercatat."}
                                        </div>
                                    </div>
                                </div>

                                {/* Steps Column */}
                                <div className="md:col-span-2">
                                    <div className="bg-white rounded-xl h-full">
                                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b pb-3">
                                            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                                            Langkah Pembuatan
                                        </h2>
                                        <div className="text-gray-700 whitespace-pre-wrap leading-relaxed text-lg">
                                            {step || "Tidak ada langkah pembuatan yang tercatat."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ResepAdmin;