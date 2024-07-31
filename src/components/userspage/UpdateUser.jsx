import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();


  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
    city: ''
  });

  useEffect(() => {
    fetchUserDataById(userId); // Pass the userId to fetchUserDataById
  }, [userId]); //wheen ever there is a chane in userId, run this

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getUserById(userId, token); // Pass userId to getUserById
      const { name, email, role, city } = response.ourUsers;
      setUserData({ name, email, role, city });
    } catch (error) {
      console.error('Error al recuperar los datos del usuario:', error);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Confirmar la acción de actualización
      const confirmUpdate = window.confirm('¿Está seguro de que desea actualizar este usuario?');
      if (confirmUpdate) {
        const token = localStorage.getItem('token');
        const res = await UserService.updateUser(userId, userData, token);
        console.log(res);
        // Redirigir a la página de gestión de usuarios o mostrar un mensaje de éxito
        navigate("/admin/user-management");
      }
    } catch (error) {
      console.error('Error al actualizar el perfil de usuario:', error);
      alert('Error al actualizar el perfil de usuario');
    }
  };

  return (
    <div className="auth-container">
      <h2>Actualiza tu perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input type="text" name="role" value={userData.role} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Ciudad:</label>
          <input type="text" name="city" value={userData.city} onChange={handleInputChange} />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default UpdateUser;
