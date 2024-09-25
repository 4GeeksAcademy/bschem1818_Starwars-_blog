import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starImage from "../../img/star-wars.jpeg";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	useEffect(()=>{
		actions.loadSingleCharacter(params.id)
	},[]);

	if(!store.character) {
		return null;
	}

	return (
		<div className="jumbotron">
			<div className="container">
				<div className="row">
					<div className="col">
						<img src={starImage} className="card-img-top img-fluid" alt="..."/>
					</div>
					<div className="col">
						<h1 className="text-center display-2">{store.character.properties.name}</h1>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</div>
				</div>
				<div className="row text-danger border-top pt-4 border-danger text-center mt-4">
					<div className="col">
						<p>Birth Year</p>
						<p>{store.character.properties.birth_year}</p>
					</div>
					<div className="col">
						<p>Gender</p>
						<p>{store.character.properties.gender}</p>
					</div>
					<div className="col">
						<p>Height</p>
						<p>{store.character.properties.height}</p>
					</div>
					<div className="col">
						<p>Skin Color</p>
						<p>{store.character.properties.skin_color}</p>
					</div>
					<div className="col">
						<p>Eye Color</p>
						<p>{store.character.properties.eye_color}</p>
					</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object
};
