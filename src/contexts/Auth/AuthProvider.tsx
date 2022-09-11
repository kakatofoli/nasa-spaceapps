import React, { useContext, useEffect } from 'react';
import { useState } from "react";
import { useAPI } from "../../hooks/useAPI";
import { ProjectContext } from '../Project/ProjectsContext';
import { User } from "../Types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useAPI();

    useEffect(() => {


        const validadeUser = () => {
            const storageData = localStorage.getItem('user');
            

            if(storageData){
                setUser(JSON.parse(storageData))
            }
        }

        validadeUser();

    }, [])

    const singIN = async (email: string, password: string) =>{
        const data = await api.validateLogin(email, password);

        if(data['Status']){
            return false

        }else{

            console.log(data);
            setUser(data);
            setUserLocalStorage(data);
            return true
        }
    }

    const setUserLocalStorage = (user: Object) =>{
        localStorage.setItem('user', JSON.stringify(user));
    }

    const singOut = async () => {

        await api.logout();
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, singIN, singOut }}>
            { children }
        </AuthContext.Provider>
    );
}