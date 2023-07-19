import React, { useEffect } from "react";
import { ReactDOM } from "react";
import "./Explore.css";

function Explore() {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
    }
  }

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade one">
          <h3 className="Head">Limited Time Offers</h3>
          <h3 className="Head">Grab Now</h3>
          <img
            src="https://i.pinimg.com/564x/1e/05/79/1e0579fb09376b3315b0ac1d82e6ec27.jpg"
            className="pamplets"
          ></img>
          <div className="text">Explore the Offers</div>
        </div>

        <div className="mySlides fade">
          <img
            src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-06/flash%20sale.jpg"
            className="pamplets"
          ></img>
          <div className="text">Flash Sale</div>
        </div>

        <div className="mySlides fade">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8k8c03zaafzCp9sCvyzfCF95OYPNm93qYSsl5fpMOZGOKhQk3ijighzjLF5kQXAbOII&usqp=CAU"
            className="pamplets"
          ></img>
          <div className="text">Flash Sale</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br></br>
      <div className="dotDiv">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </>
  );
}

export default Explore;
