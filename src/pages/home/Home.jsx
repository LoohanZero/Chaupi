import React, { useContext } from 'react';
import {
	img1, img3, img2, quotes, blob4, blob3
} from '../../assets/img';
import arnau from '../../assets/img/Arnau-cumple-26.png';
import '../home/Home.css';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const Home = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	return (
		<>
			<section className="home-titles-section">
				<div className="home-titles">
					<div className="home-bg-blob home-bg-blob4">
						<img className="home-bg-img" src={blob4} />
					</div>
					<h1 className="home-title-content">
					Tarjetas desplegables
						<span className="home-title-span">tridimensionales</span>
					</h1>
					<h2 className="home-subtitle">
					Las tarjetas cobran vida y movimiento cada vez que las abres... ¡Efecto sorpresa!
					</h2>
					<Button onClick={user ? () => navigate("/shop") : () => navigate("/login")}>Quiero mi tarjeta</Button>
				</div>
				<div className="home-forefront-image-container">
					<div className="home-bg-blob home-bg-blob3">
						<img className="home-bg-img" src={blob3} />
					</div>
					<div className="home-forefront-container">
						<img className="home-forefront-image" alt="arnau" src={arnau} />
					</div>
				</div>
			</section>

			{/* ---------------------- CATEGORIES SECTION ------------------------------- */}
			
			<section className="home-categories-section">
				<h3 className="home-section-title">Categorías</h3>
				<div className="home-cards-container">
					<Card image={img1} title="Amor" subtitle="Regala dulzura" />
					<Card image={img3} title="Ciudades" subtitle="La ciudad de tus sueños" />
					<Card image={img2} title="Amistad" subtitle="Disfrutar y compartir" />
				</div>
			</section>

			{/* ---------------------- COMMENTS SECTION ------------------------------- */}

			<section className="home-commentaries-section">
				<h3 className="home-section-title">Comentarios</h3>
				<div className="home-cards-container home-comments-container">
					<article className="card-container comment-card-container main-comment">
						<img className="main-comment-image" src={quotes} />
						<p className="comment-card-text">Quería hacer un regalo especial, algo que sea realmente personalizado e irrepetible y 
						encontré en Instagram estas tarjetas pop up muy originales. Mi amigo quedó sorprendido al verse dentro de una tarjeta 
						troquelada con movimiento. Todos muy contentos con el resultado final.</p>
						<p className="comment-card-text comment-author">Txellsy Foster</p>
					</article>
					<article className="card-container comment-card-container default-comment">
						<p className="comment-card-text">Siempre he sido muy fan de los libros de mi infancia hechos con ingeniería del papel. Mis padres
						los guardaban como verdaderos tesoros, para que no los rompamos. Esa fragilidad y toque de magia me ha marcado y por eso he
						vuelto a revivir esos momentos con estas tarjetas personalizadas. </p>
						<p className="comment-card-text comment-author">Pau Virgili</p>
					</article>
					<article className="card-container comment-card-container default-comment">
						<p className="comment-card-text">Buscaba algo diferente para mi marca personal, y tras buscar mucho por diferentes 
						redes sociales encontré Casa de Chaupi y contacté inmediatamente por Pinterest. Estoy muy contenta con la tarjeta
						que da vida a mi proyecto familiar, hasta ilusiona ver como el pop up se adapta a mi campaña de marketing.</p>
						<p className="comment-card-text comment-author">Cecilia Muzzopapa</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Home;