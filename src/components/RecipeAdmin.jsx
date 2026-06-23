import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets3/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '../c_iphone-14-5.module.css';

const RecipeAdmin = () => {
  const [recipes, setRecipes] = useState([]);
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
        
        const responseRecipes = await axios.get('http://localhost:8000/api/reseps');
        setRecipes(responseRecipes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate, token]);

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

  const deletePost = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/reseps/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.error("Error deleting post:", error);
      });
  };

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
              <Link to="/RecipeAdmin" className="flex items-center px-6 py-3 no-underline hover:no-underline bg-emerald-700 border-l-4 border-emerald-300 text-white font-medium">
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
          <h1 className="text-2xl font-bold text-gray-800">Kelola Resep</h1>
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
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Daftar Resep Terbaru</h2>
              <Link to="/NewRecipe" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md shadow-sm text-sm font-medium transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                Tambah Resep
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold">Nama Resep</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-center">Image</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-center">Nama Akun</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe) => (
                    <tr key={recipe.id} className="bg-white border-b hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-medium text-gray-900 align-middle">
                        {recipe.title}
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <div className="flex justify-center">
                           <img src={recipe.image} className="w-20 h-14 object-cover rounded-md shadow-sm" alt={recipe.title} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center align-middle">{recipe.name}</td>
                      <td className="px-6 py-4 align-middle">
                        <div className="flex items-center justify-center space-x-2">
                          <Link to={`/reseps/${recipe.id}/admin`}>
                            <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded shadow-sm text-xs font-semibold transition">
                              DETAIL
                            </button>
                          </Link>
                          
                          <button onClick={() => handleBookmarkClick(recipe.id)}>
                            {recipe.is_approve ? (
                              <div className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded shadow-sm text-xs font-semibold transition">APPROVED</div>
                            ) : (
                              <div className="px-3 py-1.5 bg-gray-400 hover:bg-gray-500 text-white rounded shadow-sm text-xs font-semibold transition">APPROVE</div>
                            )}
                          </button>
                          
                          <Link to={`/editAdmin/${recipe.id}`}>
                            <button className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded shadow-sm text-xs font-semibold transition">
                              UPDATE
                            </button>
                          </Link>
                          
                          <button onClick={() => deletePost(recipe.id)} className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded shadow-sm text-xs font-semibold transition">
                            DELETE
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {recipes.length === 0 && (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-gray-400">
                        Belum ada resep yang tersedia.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RecipeAdmin;