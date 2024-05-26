import React, { Children, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useMemo(() => Boolean(localStorage.getItem("token")));
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, []);

    if (!isLoggedIn) {
        return <h1>Comprobando identidad....</h1>;
    }

    return children;
};