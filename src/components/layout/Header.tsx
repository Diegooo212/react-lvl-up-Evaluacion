// src/components/layout/Header.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useAuth } from '../../context/AuthContext'; 

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.logo}>🎮 Level-Up Gamer</Link>

      <nav className={styles.navigation}>
        <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>Inicio</NavLink>
        <NavLink to="/productos" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>Productos</NavLink>
        <NavLink to="/eventos" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>Eventos</NavLink>
        <NavLink to="/nosotros" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>Nosotros</NavLink>
        <NavLink to="/contacto" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>Contacto</NavLink>

        {currentUser && (
           <NavLink to="/perfil" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>Mi Perfil</NavLink>
        )}
         {currentUser && currentUser.role === 'admin' && (
           <NavLink to="/admin" className={({ isActive }) => `${styles.navLink} ${styles.adminLink} ${isActive ? styles.navLinkActive : ''}`}>⚙️ Admin</NavLink>
        )}
      </nav>

      <div className={styles.headerActions}>
        <div className={styles.userInfo} id="userActions">
          {currentUser ? (
            <>
              <span>👤 {currentUser.email}</span>
              <button onClick={logout}>Cerrar Sesión</button>
            </>
          ) : (
            <Link to="/login">Iniciar Sesión</Link>
          )}
        </div>
        <Link to="/carrito" className={styles.cartBtn}>🛒 Carrito</Link>
      </div>
    </header>
  );
};

export default Header;