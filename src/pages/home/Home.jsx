import React from 'react';
import {
	img1, img3, img2, cita 
} from '../../assets/img';
import arnau from '../../assets/img/Arnau-5.png';
import Button from '../../components/button/Button';
import '../home/Home.css';

const Home = () => {
	return (
		<>
			<section className="home-titles-section">
				<div className="home-titles">
					<h1 className="home-title-content">
					Tarjetas desplegables
						<span className="home-title-span">tridimensionales</span>
					</h1>
					<h2 className="home-subtitle">
					Las tarjetas cobran vida y movimiento cada vez que las abres.
					</h2>
					<Button>Quiero mi tarjeta</Button>
				</div>
				<img className="home-forefront-image" alt="arnau" src={arnau} />
			</section>
			{/* ---------------------- CATEGORIES SECTION ------------------------------- */}
			
			<section className="home-categories-section">
				<h3 className="home-section-title">Categorías</h3>
				<div className="home-cards-container">
					<article className="card-container">
						<div className="categories-card-image-container">
							<img className="categories-card-image" src={img1}/>
						</div>
						<h4 className="categories-card-title">Amor</h4>
						<p className="categories-card-subtitle">Regala dulzura</p>
					</article>
					<article className="card-container">
						<div className="categories-card-image-container">
							<img className="categories-card-image" src={img3}/>
						</div>
						<h4 className="categories-card-title">Ciudades</h4>
						<p className="categories-card-subtitle">La ciudad de tus sueños</p>
					</article>
					<article className="card-container">
						<div className="categories-card-image-container">
							<img className="categories-card-image" src={img2}/>
						</div>
						<h4 className="categories-card-title">Amistad</h4>
						<p className="categories-card-subtitle">Disfrutar y compartir</p>
					</article>
				</div>
			</section>

			{/* ---------------------- COMMENTS SECTION ------------------------------- */}

			<section className="home-commentaries-section">
				<h3 className="home-section-title">Comentarios</h3>
				<div className="home-cards-container home-comments-container">
					<article className="card-container comment-card-container main-comment">
						<img className="main-comment-image" src={cita}/>
						<p className="comment-card-text">Sed maximus volutpat elit sed porta. Donec congue faucibus arcu, commodo faucibus nulla ullamcorper sed. Integer nibh purus, hendrerit a dolor id, auctor elementum neque. Mauris lobortis eget turpis vitae interdum. Maecenas feugiat eu leo a venenatis. Sed sit amet odio massa. Nullam venenatis dictum leo a pretium.</p>
						<p className="comment-card-text comment-author">Martha Sanchez</p>
					</article>
					<article className="card-container comment-card-container default-comment">
						<p className="comment-card-text">Fusce quam augue, elementum nec lacus fermentum, auctor sodales neque. Quisque eget efficitur eros. Nam risus risus, mattis sed risus et, sollicitudin dignissim mi. Proin risus risus, mattis ac dapibus sed, egestas vel elit. Mauris quis vulputate lorem, faucibus porttitor nulla. </p>
					</article>
					<article className="card-container comment-card-container default-comment">
						<p className="comment-card-text">Nam odio sapien, fermentum et ex vel, interdum luctus quam. Sed id tellus vitae orci ornare tincidunt vel id dui. Aliquam malesuada nisl justo, vel lobortis felis lacinia vitae. Donec eget tortor ut magna elementum rhoncus. Cras felis mi, dignissim at convallis sit amet, feugiat nec lacus. In hendrerit elementum felis.</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Home;