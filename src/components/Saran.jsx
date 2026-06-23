import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets3/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '../c_iphone-14-5.module.css';

const Saran = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/loginAdmin');
      return;
    }

    const fetchData = async () => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      try {
        const responseUser = await axios.get('http://localhost:8000/api/user');
        setUser(responseUser.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate, token]);

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

  const saranData = [
    { id: 1, resep: "Fried Rice", kritik: "Langkah-langkahnya tidak sesuai", saran: "Sebaiknya ada video di tiap langkah-langkah" },
    { id: 2, resep: "Nasi Goreng", kritik: "Langkah-langkahnya tidak sesuai", saran: "Sebaiknya ada video di tiap langkah-langkah" },
    { id: 3, resep: "Nasi Ayam", kritik: "Langkah-langkahnya tidak sesuai", saran: "Sebaiknya ada video di tiap langkah-langkah" },
    { id: 4, resep: "Mie Tek Tek", kritik: "Bumbu kurang jelas takarannya", saran: "Mohon tulis gramasinya dengan pasti" },
    { id: 5, resep: "Sate Ayam", kritik: "Cara bakar tidak dijelaskan rinci", saran: "Tambahkan tips agar sate tidak gosong" }
  ];

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
              <Link to="/saran" className="flex items-center px-6 py-3 no-underline hover:no-underline bg-emerald-700 border-l-4 border-emerald-300 text-white font-medium">
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
          <h1 className="text-2xl font-bold text-gray-800">Saran & Kritik Pelanggan</h1>
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
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-800 flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                Daftar Masukan Pengguna
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100/50 border-b border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold w-1/4">Nama Resep</th>
                    <th scope="col" className="px-6 py-4 font-semibold w-1/3">Kritik</th>
                    <th scope="col" className="px-6 py-4 font-semibold w-1/3">Saran</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {saranData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 align-top">
                        {item.resep}
                      </td>
                      <td className="px-6 py-4 align-top text-red-600/80">
                        <div className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                          {item.kritik}
                        </div>
                      </td>
                      <td className="px-6 py-4 align-top text-emerald-600/90">
                        <div className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                          {item.saran}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Saran