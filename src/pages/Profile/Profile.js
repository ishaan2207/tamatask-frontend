// deps
import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import './Profile.css';

// components
import Pet from "../../components/Home/Pet/Pet";
import UserInfo from "../../components/Profile/UserInfo/UserInfo";

// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Profile() {
    const navigate = useNavigate();

    return (
        <div className="profile-container">
            <div className="home-back-button" onClick={() => navigate('/')}>
                <ArrowBackIcon />
            </div>
            <div className="profile-body-container">
                <Pet />
                <UserInfo />
                <button className="logout-button">Logout</button>
            </div>
        </div>
    );
}

export default Profile;