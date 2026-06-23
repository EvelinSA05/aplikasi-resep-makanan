import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import "./Premium.css";

import sendok from "../assets3/sendok.png";
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";
import defaultBg from "../assets3/sushi.jpg";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const Recipe = () => {
  const [title, setTitle] = useState('');
  const [ingredientsRaw, setIngredientsRaw] = useState('');
  const [stepRaw, setStepRaw] = useState('');
  const [image, setImage] = useState('');
  const [query, setQuery] = useState('');

  // New states for interactive features
  const [portion, setPortion] = useState(2);
  const [cookMode, setCookMode] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`reseps/${id}`);
        setTitle(response.data.title);
        setImage(response.data.image);
        setIngredientsRaw(response.data.ingredients);
        setStepRaw(response.data.step);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleSearch = () => {
    if (query.trim()) navigate(`/search?query=${query}`);
  };

  const loginCoba = () => {
    const result = window.confirm('Anda Belum Login! Apakah Anda ingin login?');
    if (result) navigate('/login');
  };

  const handleBookmarkClick = () => {
    loginCoba();
  };

  const toggleCheck = (index) => {
    setCheckedIngredients(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Parse strings to arrays
  const ingredientsList = ingredientsRaw ? ingredientsRaw.split(/,|\n/).map(i => i.trim()).filter(i => i) : [];
  const stepsList = stepRaw ? stepRaw.split(/\n|\d+\./).map(s => s.trim()).filter(s => s && isNaN(s.replace('.',''))) : [];

  return (
    <div className={cookMode ? 'cook-mode-active' : ''}>
      {!cookMode && (
        <nav className="nav-main" style={{ zIndex: 100 }}>
          <div className="nav-inner">
            <Link to="/" className="nav-logo">
              <div className="nav-logo-icon"><img src={sendok} alt="logo" /></div>
              <span className="nav-logo-text">Food Recipes</span>
            </Link>

            <div className="nav-search">
              <input
                type="text" placeholder="Cari resep..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSearch()}
              />
              <button className="nav-search-btn" onClick={handleSearch}>
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </button>
            </div>

            <div className="nav-actions">
              <button onClick={() => {
                if (window.confirm("Anda Belum Login! Apakah Anda ingin login?")) navigate("/login");
              }} className="btn-outline-nav">+ Resep Baru</button>
              <Link to="/login" className="btn-solid-nav">Masuk</Link>
            </div>
          </div>
        </nav>
      )}

      {cookMode && (
        <button className="cook-mode-close" onClick={() => setCookMode(false)}>
          Tutup Mode Memasak ✕
        </button>
      )}

      <div className="detail-container">
        {!cookMode && (
          <div className="detail-hero">
            <img src={image || defaultBg} alt={title} />
            <div className="detail-hero-overlay">
              <div className="detail-meta">
                <span><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> 45 Menit</span>
                <span><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg> 12K Suka</span>
              </div>
              <h1 className="detail-title">{title || "Memuat Resep..."}</h1>
            </div>
          </div>
        )}

        <div className="detail-actions-bar">
          {!cookMode && (
            <div className="portion-control">
              <span style={{ fontSize: '14px', color: '#64748b' }}>Porsi:</span>
              <button className="portion-btn" onClick={() => setPortion(p => Math.max(1, p - 1))}>-</button>
              <span className="portion-text">{portion} Orang</span>
              <button className="portion-btn" onClick={() => setPortion(p => p + 1)}>+</button>
            </div>
          )}

          <div style={{ display: 'flex', gap: '16px', marginLeft: 'auto' }}>
            {!cookMode && (
              <button className="cook-mode-btn" style={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', boxShadow: 'none' }} onClick={handleBookmarkClick}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                Simpan
              </button>
            )}
            <button className="cook-mode-btn" onClick={() => setCookMode(!cookMode)}>
              {cookMode ? 'Kembali' : 'Mode Memasak 🍳'}
            </button>
          </div>
        </div>

        <div className="detail-content">
          <div className="content-section">
            <h2 className="content-title">Bahan-bahan</h2>
            <div className="checklist">
              {ingredientsList.length > 0 ? ingredientsList.map((ing, i) => (
                <div key={i} className={`checklist-item ${checkedIngredients[i] ? 'checked' : ''}`} onClick={() => toggleCheck(i)}>
                  <div className="checklist-checkbox">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>
                  </div>
                  <div className="ingredient-text">{ing}</div>
                </div>
              )) : <p>Memuat bahan-bahan...</p>}
            </div>
          </div>

          <div className="content-section">
            <h2 className="content-title">Langkah Pembuatan</h2>
            <div className="steps-list">
              {stepsList.length > 0 ? stepsList.map((stepText, i) => (
                <div key={i} className="step-item">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-text">{stepText}</div>
                </div>
              )) : <p>Memuat langkah-langkah...</p>}
            </div>
          </div>
        </div>
      </div>

      {!cookMode && (
        <nav className="mobile-nav pb-safe">
          <Link to="/"><img src={rumah} alt="home" /><span>Home</span></Link>
          <button onClick={loginCoba}><img src={save} alt="save" /><span>Simpan</span></button>
          <button onClick={loginCoba}><img src={akun} alt="akun" /><span>Profil</span></button>
        </nav>
      )}
    </div>
  );
};

export default Recipe;