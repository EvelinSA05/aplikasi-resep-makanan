import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets3/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '../c_iphone-14-5.module.css';

const History = () => {
  const [likes, setDataLikes] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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
        
        const responseLikes = await axios.get('http://localhost:8000/api/indexlike');
        setDataLikes(responseLikes.data);
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

  const userLikes = likes.filter(like => like.iduser === user.id);

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
              <Link to="/History" className="flex items-center px-6 py-3 no-underline hover:no-underline bg-emerald-700 border-l-4 border-emerald-300 text-white font-medium">
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
          <h1 className="text-2xl font-bold text-gray-800">Riwayat Tersimpan</h1>
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
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Resep yang Disimpan (Bookmark)</h2>
          </div>
          
          {userLikes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userLikes.map((resep) => (
                <div key={resep.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
                  <Link to={`/reseps/${resep.idresep}/admin`} className="block">
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={resep.image} 
                        alt={resep.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm text-emerald-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-emerald-600 transition-colors">{resep.title}</h3>
                      <p className="text-sm text-gray-500 mb-4 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        Tersimpan
                      </p>
                      <button className="w-full py-2 bg-emerald-50 text-emerald-600 font-medium text-sm rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Belum ada resep yang disimpan</h3>
              <p className="text-gray-500 max-w-md">Resep yang Anda bookmark akan muncul di halaman ini untuk memudahkan pencarian di kemudian hari.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default History;