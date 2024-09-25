import React, { useEffect, useState, useContext} from 'react';
import "../../styles/home.css";
import {Card} from '../component/card';
import {Context} from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	const people = store.people;
	const ships = store.ships;
	const planets = store.planets;

	return (
		<div className="mt-5"> 
			<h1 className="text-danger">Characters</h1>
			<div className="d-flex mb-5" style={{overflowX: "auto"}}>
				{people.map((character)=> (
					<Card
						id={character.uid}
						name={character.name}
						url={character.url}
						type="character"
					/>
				))}
			</div>
			<h1 className="text-danger" >Starships</h1>
			<div className="d-flex mb-5" style={{overflowX: "auto"}}>
				{ships.map((ship)=> (
					<Card
						id={ship.uid}
						name={ship.name}
						url={ship.url}
						type="starship"
					/>
				))}
			</div>
			<h1 className="text-danger">Planets</h1>
			<div className="d-flex mb-5" style={{overflowX: "auto"}}>
				{planets.map((planet)=> (
					<Card
						id={planet.uid}
						name={planet.name}
						type="planet"
					/>
				))}
			</div>
		</div>
	);
};



