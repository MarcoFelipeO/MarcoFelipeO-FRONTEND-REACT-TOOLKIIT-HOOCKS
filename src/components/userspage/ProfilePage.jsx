import React, { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import { Link } from 'react-router-dom';



function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    return (
        <div className="background-image">
            <div className="profile-page-container">
                <h2>Tu perfil</h2>
                <p>Name: {profileInfo.name}</p>
                <p>Email: {profileInfo.email}</p>
                <p>City: {profileInfo.city}</p>
                {profileInfo.role === "ADMIN" && (
                    <Link class="btn btn-danger" to={`/update-user/${profileInfo.id}`}>Actualizar perfil</Link>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
