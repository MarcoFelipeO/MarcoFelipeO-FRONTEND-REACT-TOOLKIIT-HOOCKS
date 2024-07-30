import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';
import '../../style/custom.css';
import { NavbarStyleId } from '../../StyleId/NavbarStyleId';

// Importa tu imagen de logo
import logo from '../../style/images/logo.png';

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();

    const handleLogout = () => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres cerrar sesión este usuario?');
        if (confirmDelete) {
            // Limpiar token y cualquier otra información de sesión
            UserService.logout();

            // Forzar recarga de la página
            window.location.reload();
        }
    };

    return (
        <NavbarStyleId className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand nav-link" href="/">
          <img src={logo} alt="Logo" style={{ width: '100px', borderRadius: '50%' }} />
        </a>
        <a className="navbar-brand nav-link" href="/">Inicio</a>
        <a className="navbar-brand nav-link" href="/index2">Apartado2</a>
        {/* <a className="navbar-brand nav-link" href="/">Apartado3</a>
        <a className="navbar-brand nav-link" href="/">Apartado4</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isAuthenticated && (
              <li className="nav-item">
                <button  className="btn btn-danger custom-button">
                  <Link className="nav-link" to="/login">Login</Link>
                </button>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Perfil</Link>
              </li>
            )}
            {isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/user-management">Gestión de usuarios</Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/index" onClick={handleLogout}>Cerrar sesión</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </NavbarStyleId>
    );
}

export default Navbar;