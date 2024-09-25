import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swImage from "../../img/sw-logo.png";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const favorites= store.favorites;

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link className="col-1" to="/">
				<img src={swImage} className="img-fluid card-img-top" alt="..."/>
			</Link>

			<div className="ml-auto dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {favorites.length}
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{favorites.length === 0 && <li className="text-center">Empty</li>}
					{favorites.map((favorite)=> (
						<li>
							<Link to={`/${favorite.type}/${favorite.id}`}>
								<a className="dropdown-item" href="#">{favorite.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
