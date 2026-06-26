import React, { useState, useEffect, useContext, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import sushi from "../assets3/sushi.jpg";
import sendok from "../assets3/sendok.png";
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";
import collectionHealthy from "../assets3/collection_healthy.png";
import chefAvatar from "../assets3/chef_avatar.png";
import userAvatar from "../assets3/user_avatar.png";
import slide2 from "../assets3/carousel_slide_2.png";
import slide3 from "../assets3/carousel_slide_3.png";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ResepContext from "../Context/ResepContext";
import './Premium.css';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export const HomePageUser = () => {
  const [reseps, setReseps] = useState([]);
  const [externalReseps, setExternalReseps] = useState([]);
  const { formValues, onChange, errors } = useContext(ResepContext);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/reseps/search?query=${query}`);
      navigate(`/search?query=${query}`);
    } catch (error) { console.error(error); }
  };

  useEffect(() => {
    axios.get("reseps").then(r => setReseps(r.data)).catch(console.error);
  }, []);

  useEffect(() => {
    // Fetch global recipes from TheMealDB API
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(response => {
        if (response.data.meals) {
          setExternalReseps(response.data.meals.slice(0, 8)); // Ambil 8 resep saja
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const close = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const loginCoba = () => {
    if (window.confirm("Anda Belum Login! Apakah Anda ingin login?")) navigate("/login");
  };

  const filteredReseps = reseps.filter(resep => {
    if (activeCategory === 'Semua') return true;
    const catLower = activeCategory.toLowerCase();
    const title = (resep.title || '').toLowerCase();
    const ingredients = (resep.ingredients || '').toLowerCase();
    return title.includes(catLower) || ingredients.includes(catLower);
  });

  return (
    <div style={{ background: '#fafaf8', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* ===== NAVBAR ===== */}
      <nav className="nav-main">
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
            <button onClick={loginCoba} className="btn-outline-nav">+ Resep Baru</button>
            <Link to="/login" className="btn-solid-nav">Masuk</Link>

            <div ref={menuRef} style={{ position: 'relative' }}>
              <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
                <div className="menu-avatar">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
              </button>
              {menuOpen && (
                <div className="menu-dropdown">
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    Home
                  </Link>
                  <button onClick={() => { setMenuOpen(false); loginCoba(); }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                    Tersimpan
                  </button>
                  <div className="menu-divider"></div>
                  <button onClick={() => { setMenuOpen(false); loginCoba(); }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    Profil
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ===== HERO CAROUSEL ===== */}
      <div className="hero-wrap">
        <div className="hero-carousel">
          <Carousel fade indicators={false}>
            {[
              { img: sushi, title: 'Oshizushi Salmon', sub: 'Resep autentik Jepang dengan bahan segar pilihan' },
              { img: slide2, title: 'Menu Spesial Keluarga', sub: 'Temukan hidangan hangat yang sempurna untuk akhir pekan' },
              { img: slide3, title: 'Masak Ala Profesional', sub: 'Pelajari teknik memasak rahasia dari chef berpengalaman' },
            ].map((slide, i) => (
              <Carousel.Item key={i}>
                <div style={{ position: 'relative', aspectRatio: '21/9', minHeight: '320px', maxHeight: '480px' }}>
                  <img src={slide.img} alt={slide.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '48px', left: '48px', maxWidth: '520px', zIndex: 2 }}>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>RESEP PILIHAN</p>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '10px' }}>{slide.title}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.6 }}>{slide.sub}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>



      {/* ===== AI RECIPE GENERATOR ===== */}
      <div className="section" style={{ marginTop: '56px' }}>
        <div className="ai-section">
          <div className="ai-content">
            <div className="ai-badge">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Fitur Eksklusif Baru
            </div>
            <h2>Chef AI: Sulap Bahan Sisa Jadi Spesial</h2>
            <p>Punya telur, sisa nasi, dan kecap di kulkas tapi bingung mau masak apa? Tuliskan bahan-bahan yang kamu punya di bawah, dan AI kami akan membuatkan resep ajaib khusus untukmu dalam hitungan detik!</p>
          </div>
          <div className="ai-form">
            <textarea 
              className="ai-input" 
              placeholder="Ketik bahan yang kamu punya (misal: telur, ayam, bawang merah, kecap manis)..."
            ></textarea>
            <button className="ai-btn" onClick={e => { e.preventDefault(); loginCoba(); }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              Generate Resep dengan AI
            </button>
          </div>
        </div>
      </div>

      {/* ===== TRENDING RECIPES ===== */}
      <div className="section" style={{ marginTop: '56px' }}>
        <div className="section-header">
          <span className="section-title">Resep Terpopuler Minggu Ini</span>
        </div>
        <div className="trending-grid">
          {[
            { rank: '#1 Trending', title: 'Sate Maranggi Khas Purwakarta', time: '45 mnt', likes: '1.2k' },
            { rank: '#2 Trending', title: 'Ayam Woku Belanga Pedas', time: '60 mnt', likes: '950' },
          ].map((item, i) => (
            <div key={i} className="trending-card">
              <div className="trending-img">
                <img src={sushi} alt="trending" />
              </div>
              <div className="trending-body">
                <span className="trending-rank">{item.rank}</span>
                <div className="trending-title">{item.title}</div>
                <div className="trending-stats">
                  <div className="trending-stat">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {item.time}
                  </div>
                  <div className="trending-stat">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    {item.likes} Suka
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CATEGORIES ===== */}
      <div className="section" style={{ marginTop: '56px' }}>
        <div className="section-header">
          <span className="section-title">Jelajahi Kategori</span>
        </div>
        <div className="cat-pills hide-scrollbar">
          {['Semua', 'Sarapan', 'Makan Siang', 'Makan Malam', 'Snack', 'Minuman', 'Dessert', 'Sehat', 'Cepat Saji', 'Tradisional'].map((cat, i) => (
            <button 
              key={i} 
              className="cat-pill" 
              style={activeCategory === cat ? { background: '#16a34a', color: 'white', borderColor: '#16a34a' } : {}}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ===== RECIPES ===== */}
      <div className="section" style={{ marginTop: '48px' }}>
        <div className="section-header">
          <span className="section-title">Resep Terbaru</span>
          <span className="section-subtitle">{filteredReseps.length} resep</span>
        </div>
        {filteredReseps.length > 0 ? (
          <div className="recipe-grid">
            {filteredReseps.map(resep => (
            <div key={resep.id} className="recipe-card">
              <Link to={`reseps/${resep.id}`} className="recipe-card-img" style={{ textDecoration: 'none' }}>
                <img src={resep.image} alt={resep.title} />
                <button className="recipe-card-save" onClick={e => { e.preventDefault(); loginCoba(); }}>
                  <svg width="16" height="16" fill="none" stroke="#475569" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                </button>
              </Link>
              <div className="recipe-card-body">
                <Link to={`reseps/${resep.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="recipe-card-title">{resep.title}</div>
                </Link>
                <p className="recipe-card-desc">
                  {resep.ingredients ? resep.ingredients.substring(0, 90) : 'Klik untuk melihat bahan dan langkah pembuatan.'}
                </p>
                <div className="recipe-card-footer">
                  {resep.name ? <span className="recipe-card-author">oleh <strong>{resep.name}</strong></span> : <span></span>}
                  <Link to={`reseps/${resep.id}`} className="recipe-card-link">Lihat &rarr;</Link>
                </div>
              </div>
            </div>
          ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <svg width="48" height="48" fill="none" stroke="#cbd5e1" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 12px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p style={{ color: '#64748b', fontSize: '15px' }}>Belum ada resep untuk kategori <strong>{activeCategory}</strong>.</p>
            <button onClick={() => setActiveCategory('Semua')} style={{ marginTop: '12px', background: 'none', border: 'none', color: '#16a34a', fontWeight: '600', cursor: 'pointer' }}>Lihat Semua Resep</button>
          </div>
        )}
      </div>

      {/* ===== GLOBAL RECIPES (TheMealDB API) ===== */}
      <div className="section" style={{ marginTop: '72px' }}>
        <div className="section-header">
          <span className="section-title">Resep Mancanegara Terlengkap</span>
          <span className="section-subtitle">Powered by TheMealDB API</span>
        </div>
        <div className="recipe-grid">
          {externalReseps.map(meal => (
            <div key={meal.idMeal} className="recipe-card">
              <div className="recipe-card-img" style={{ cursor: 'pointer' }} onClick={() => window.open(meal.strSource || meal.strYoutube, "_blank")}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <button className="recipe-card-save" onClick={e => { e.stopPropagation(); loginCoba(); }}>
                  <svg width="16" height="16" fill="none" stroke="#475569" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                </button>
              </div>
              <div className="recipe-card-body">
                <div className="recipe-card-title" style={{ cursor: 'pointer' }} onClick={() => window.open(meal.strSource || meal.strYoutube, "_blank")}>
                  {meal.strMeal}
                </div>
                <p className="recipe-card-desc">
                  Kategori: <strong>{meal.strCategory}</strong> | Asal: <strong>{meal.strArea}</strong>
                  <br />
                  <span style={{ fontSize: '12px', color: '#64748b' }}>Data langsung ditarik dari API global secara real-time.</span>
                </p>
                <div className="recipe-card-footer">
                  <span className="recipe-card-author">sumber: <strong>TheMealDB API</strong></span>
                  <a href={meal.strSource || meal.strYoutube} target="_blank" rel="noreferrer" className="recipe-card-link">Resep Asli &rarr;</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CURATED COLLECTIONS ===== */}
      <div className="section" style={{ marginTop: '72px' }}>
        <div className="section-header">
          <span className="section-title">Koleksi Pilihan</span>
        </div>
        <div className="collections-grid">
          {[
            { img: collectionHealthy, count: '24 Resep', title: 'Menu Sehat & Diet', desc: 'Resep rendah kalori tinggi protein untuk gaya hidup sehat.' },
            { img: sushi, count: '18 Resep', title: 'Masakan Jepang', desc: 'Bawa cita rasa autentik restoran Jepang ke meja makan keluarga.' },
            { img: collectionHealthy, count: '35 Resep', title: 'Ide Bekal Anak', desc: 'Variasi bento sehat dan praktis yang pasti disukai anak-anak.' },
          ].map((item, i) => (
            <Link to="/" key={i} className="collection-card" onClick={e => e.preventDefault()}>
              <img src={item.img} alt="collection" className="collection-img" />
              <div className="collection-overlay">
                <span className="collection-count">{item.count}</span>
                <h3 className="collection-title">{item.title}</h3>
                <p className="collection-desc">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== TOP CHEFS ===== */}
      <div className="section" style={{ marginTop: '72px' }}>
        <div className="section-header">
          <span className="section-title">Chef & Penulis Terpopuler</span>
          <span className="section-subtitle">Komunitas aktif kami</span>
        </div>
        <div className="chefs-grid">
          {[
            { name: 'Chef Arnold', recipes: '142 Resep' },
            { name: 'Siska Soewitomo', recipes: '98 Resep' },
            { name: 'Rudy Choirudin', recipes: '85 Resep' },
            { name: 'Farah Quinn', recipes: '64 Resep' },
            { name: 'Devina Hermawan', recipes: '56 Resep' },
          ].map((chef, i) => (
            <Link to="/" key={i} className="chef-card" onClick={e => e.preventDefault()}>
              <img src={chefAvatar} alt={chef.name} className="chef-avatar" />
              <div className="chef-name">{chef.name}</div>
              <div className="chef-recipes">{chef.recipes}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <div className="section" style={{ marginTop: '72px' }}>
        <div className="section-header">
          <span className="section-title">Mengapa Memilih Kami</span>
        </div>
        <div className="features-grid">
          {[
            { bg: '#f0fdf4', color: '#16a34a', title: 'Koleksi Resep Lengkap', desc: 'Dari masakan tradisional Nusantara hingga hidangan internasional, semua tersedia dengan panduan yang jelas.', icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg> },
            { bg: '#fef3c7', color: '#d97706', title: 'Langkah Demi Langkah', desc: 'Setiap resep disusun dengan instruksi yang mudah diikuti, cocok untuk pemula maupun yang sudah berpengalaman.', icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg> },
            { bg: '#ede9fe', color: '#7c3aed', title: 'Komunitas Aktif', desc: 'Bergabung dengan ribuan pecinta kuliner. Simpan, bagikan, dan temukan resep baru setiap hari.', icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg> },
          ].map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon" style={{ background: f.bg }}><div style={{ color: f.color }}>{f.icon}</div></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div className="section" style={{ marginTop: '72px' }}>
        <div className="section-header">
          <span className="section-title">Apa Kata Mereka?</span>
        </div>
        <div className="testimonials-grid">
          {[
            { text: "Sangat membantu! Resepnya selalu akurat dan rasanya pas. Fitur simpannya juga bikin gampang kalau mau masak lagi besoknya.", user: 'Rina Melati', role: 'Ibu Rumah Tangga' },
            { text: "UI-nya sangat modern dan tidak membingungkan. Sebagai pemula di dapur, instruksi langkah-demi-langkahnya beneran life saver.", user: 'Budi Santoso', role: 'Mahasiswa Rantau' },
            { text: "Koleksi resep Nusantara-nya lengkap banget. Tiap kangen masakan kampung halaman, tinggal cari di sini.", user: 'Siti Aminah', role: 'Pekerja Kantoran' },
          ].map((testi, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">
                {[1,2,3,4,5].map(s => <svg key={s} width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
              </div>
              <p className="testimonial-text">"{testi.text}"</p>
              <div className="testimonial-user">
                <img src={userAvatar} alt="user" className="testimonial-avatar" />
                <div className="testimonial-user-info">
                  <h4>{testi.user}</h4>
                  <p>{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="section" style={{ marginTop: '72px' }}>
        <div className="cta-banner">
          <h2>Punya Resep Andalan?</h2>
          <p>Bagikan kreasi masakan terbaikmu dan inspirasi ribuan home cook di seluruh Indonesia.</p>
          <button className="cta-btn" onClick={loginCoba}>Mulai Berbagi Resep</button>
        </div>
      </div>

      {/* ===== NEWSLETTER ===== */}
      <div className="section" style={{ marginTop: '72px' }}>
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h2>Dapatkan Resep Gratis Tiap Minggu</h2>
            <p>Bergabunglah dengan 50,000+ anggota komunitas kami. Kami akan mengirimkan kompilasi resep rahasia dan tips dapur langsung ke email Anda.</p>
          </div>
          <div className="newsletter-form">
            <div className="newsletter-input-group">
              <input type="email" placeholder="Masukkan alamat email Anda..." />
              <button className="newsletter-btn" onClick={e => { e.preventDefault(); alert('Terima kasih telah berlangganan!'); }}>Berlangganan</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="site-footer" style={{ marginTop: '72px', paddingBottom: '24px' }}>
        <div className="footer-inner">
          <div className="footer-brand">
            <h3><img src={sendok} alt="logo" /> Food Recipes</h3>
            <p>Platform berbagi resep masakan terlengkap di Indonesia. Temukan dan bagikan resep favoritmu bersama komunitas pecinta kuliner.</p>
          </div>
          <div className="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><button onClick={loginCoba}>Resep Tersimpan</button></li>
              <li><button onClick={loginCoba}>Tambah Resep</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Akun</h4>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">&copy; 2026 Food Recipes. All rights reserved.</div>
      </div>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <nav className="mobile-nav pb-safe">
        <Link to="/"><img src={rumah} alt="home" /><span>Home</span></Link>
        <button onClick={loginCoba}><img src={save} alt="save" /><span>Simpan</span></button>
        <button onClick={loginCoba}><img src={akun} alt="akun" /><span>Profil</span></button>
      </nav>
    </div>
  );
};

export default HomePageUser;
