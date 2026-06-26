import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Premium.css';

import sendok from "../assets3/sendok.png";
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";

function SearchResults2() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') || '';
  const [localQuery, setLocalQuery] = useState(query);
  const [reseps, setReseps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/reseps/search?query=${query}`);
        if (response.data.reseps) {
            setReseps(response.data.reseps);
        } else if (Array.isArray(response.data)) {
            setReseps(response.data);
        } else {
            setReseps([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
        fetchResults();
    }
  }, [query]);

  useEffect(() => {
    const close = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const handleSearch = () => {
    if (!localQuery.trim()) return;
    navigate(`/search2?query=${localQuery}`);
  };

  return (
    <div style={{ background: '#fafaf8', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* ===== NAVBAR ===== */}
      <nav className="nav-main">
        <div className="nav-inner">
          <Link to="/dashboardLogin" className="nav-logo">
            <div className="nav-logo-icon"><img src={sendok} alt="logo" /></div>
            <span className="nav-logo-text">Food Recipes</span>
          </Link>

          <div className="nav-search">
            <input
              type="text" placeholder="Cari resep..."
              value={localQuery}
              onChange={e => setLocalQuery(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSearch()}
            />
            <button className="nav-search-btn" onClick={handleSearch}>
              <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>
          </div>

          <div className="nav-actions">
            <Link to="/new" className="btn-outline-nav">+ Resep Baru</Link>
            
            <div ref={menuRef} style={{ position: 'relative' }}>
              <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
                <div className="menu-avatar">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
              </button>
              {menuOpen && (
                <div className="menu-dropdown">
                  <Link to="/dashboardLogin" onClick={() => setMenuOpen(false)}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    Home
                  </Link>
                  <Link to="/like" onClick={() => setMenuOpen(false)}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                    Tersimpan
                  </Link>
                  <div className="menu-divider"></div>
                  <Link to="/akun" onClick={() => setMenuOpen(false)}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    Profil
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ===== SEARCH RESULTS ===== */}
      <div className="section" style={{ marginTop: '48px', minHeight: '50vh' }}>
        <div className="section-header">
          <span className="section-title">Hasil Pencarian</span>
          <span className="section-subtitle">Menampilkan hasil untuk "{query}"</span>
        </div>

        {loading ? (
            <div style={{ textAlign: 'center', marginTop: '40px', color: '#64748b' }}>
                Mencari resep...
            </div>
        ) : reseps.length > 0 ? (
          <div className="recipe-grid">
            {reseps.map(resep => (
              <div key={resep.id} className="recipe-card">
                <Link to={`/reseps/${resep.id}/login`} className="recipe-card-img" style={{ textDecoration: 'none' }}>
                  <img src={resep.image} alt={resep.title} />
                  <Link to="/like" className="recipe-card-save" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg width="16" height="16" fill="none" stroke="#475569" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                  </Link>
                </Link>
                <div className="recipe-card-body">
                  <Link to={`/reseps/${resep.id}/login`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="recipe-card-title">{resep.title}</div>
                  </Link>
                  <p className="recipe-card-desc">
                    {resep.ingredients ? resep.ingredients.substring(0, 90) + '...' : 'Klik untuk melihat bahan dan langkah pembuatan.'}
                  </p>
                  <div className="recipe-card-footer">
                    {resep.name ? <span className="recipe-card-author">oleh <strong>{resep.name}</strong></span> : <span></span>}
                    <Link to={`/reseps/${resep.id}/login`} className="recipe-card-link">Lihat &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <svg width="64" height="64" fill="none" stroke="#cbd5e1" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: '0 auto 16px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <h3 style={{ color: '#475569', fontSize: '20px', marginBottom: '8px' }}>Pencarian Tidak Ditemukan</h3>
                <p style={{ color: '#94a3b8' }}>Kami tidak dapat menemukan resep untuk "{query}". Silakan coba dengan kata kunci lain.</p>
            </div>
        )}
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
              <li><Link to="/dashboardLogin">Home</Link></li>
              <li><Link to="/like">Resep Tersimpan</Link></li>
              <li><Link to="/new">Tambah Resep</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Akun</h4>
            <ul>
              <li><Link to="/akun">Profil Saya</Link></li>
              <li><Link to="/">Logout</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">&copy; 2026 Food Recipes. All rights reserved.</div>
      </div>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <nav className="mobile-nav pb-safe">
        <Link to="/dashboardLogin"><img src={rumah} alt="home" /><span>Home</span></Link>
        <Link to="/like"><img src={save} alt="save" /><span>Simpan</span></Link>
        <Link to="/akun"><img src={akun} alt="akun" /><span>Profil</span></Link>
      </nav>
    </div>
  );
}

export default SearchResults2;