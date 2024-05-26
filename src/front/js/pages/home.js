import React, { useState, useEffect, useContext, useMemo } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const fetchUsers = async () => {
		const response = await fetch(
			"https://psychic-doodle-vjj744pg9jjf94q-3000.app.github.dev/api/users"
		);
		const json = await response.json();
		console.log(json);
	};

	const login = async () => {
		const response = await fetch(
			"https://psychic-doodle-vjj744pg9jjf94q-3000.app.github.dev/api/auth/login",
			{
				headers: {
					"Content-Type": "application/json",
				},
				method: 'POST',
				body: JSON.stringify({
					password: "testtest1",
					email: "test1@test.com",
				}),
			}
		);
		const json = await response.json();
		console.log(json.token);
	};


	return (
		<div className="text-center mt-1 text-info">
			<h1>May The Force Be With You !!</h1>
			<button onclick={fetchUsers}>Obtener Usuarios</button>
			<button onclick={login}>login</button>
			<img className="rounded"  src="https://i.blogs.es/2cc78a/ordenstarwars/1366_2000.jpg" alt="Descripción de la imagen"/>
			
		</div>
		
	);
};

