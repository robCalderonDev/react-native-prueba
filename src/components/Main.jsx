import React from "react";
import { Platform, Text, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import Constants from 'expo-constants'
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import Login from "../pages/Login";


const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes >

                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<Login />} />
                <Route path='*' element={<Navigate to='/' />} />

                {/* Otras rutas aquí */}
            </Routes>
        </View>
    );
}

export default Main;
