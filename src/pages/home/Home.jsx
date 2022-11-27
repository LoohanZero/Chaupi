import React from 'react';
import {
	img1, img3, img2, cita, blob4, blob3
} from '../../assets/img';
import arnau from '../../assets/img/Arnau-5.png';
//import Button from '../../components/button/Button';
import '../home/Home.css';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

// const setOnMouseMove = (event, buttonRef) => {
// 	const docStyle = document.documentElement.style;
// 	const boundingClientRect = buttonRef.getBoundingClientRect();
// 	const x = event.clientX - boundingClientRect.left
// 	const y = event.clientY - boundingClientRect.top
	
// 	const xc = boundingClientRect.width/2
// 	const yc = boundingClientRect.height/2
	
// 	const dx = x - xc
// 	const dy = y - yc
	
// 	docStyle.setProperty('--rx', `${ dy/-1 }deg`)
// 	docStyle.setProperty('--ry', `${ dx/10 }deg`)
// }

// const setOnMouseLeave = () => {
// 	const docStyle = document.documentElement.style;
// 	docStyle.setProperty('--ty', '0')
// 	docStyle.setProperty('--rx', '0')
// 	docStyle.setProperty('--ry', '0')
// }

// const setOnMouseDown = () => {
// 	const docStyle = document.documentElement.style;
// 	docStyle.setProperty('--tz', '-25px')
// }


const Home = () => {
	// const buttonRef = useRef(null);
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
					Las tarjetas cobran vida y movimiento cada vez que las abres.
					</h2>
					<Button>Quiero mi tarjeta</Button>
					{/* <Button>Quiero mi tarjeta</Button> */}
					{/* <button 
					data-title="Quiero mi tarjeta"
					ref={buttonRef}
					onMouseMove={(event) => setOnMouseMove(event, buttonRef.current)}
					onMouseLeave={() => setOnMouseLeave()}
					onMouseDown={() => setOnMouseDown}
					className="home-button"
					/> */}
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