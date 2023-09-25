import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carrusel = () => {
	const { store, actions } = useContext(Context);
	let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
	return (
<Slider {...settings} style={{"width":"90%", "margin":"auto"}}>
      <div> 
      <img
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
                  alt="..."
                  height="100px"
                />
      </div>
      <div>
      <img
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/characters/2.jpg`}
                  alt="..."
                />
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default Carrusel