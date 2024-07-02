import React, { useState, useEffect } from 'react';
import SideBar from '../components/Main/SideBar';
import Header from '../components/Main/Header';
import UserProfile from '../components/Main/UserProfile';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    return (
        <div className="flex h-screen bg-gray-800 text-white">
            <SideBar />
            <div className="flex flex-col flex-1 m-2">
                <Header />
            </div>
        </div>
    );
};

export default Settings;
