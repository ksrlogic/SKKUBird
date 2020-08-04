import React from "react";
import PropTypes from "prop-types";
import Slide from "react-slick";

import {
  Overlay,
  Header,
  CloseBtn,
  SlickWrapper,
  ImageWrapper,
  settings,
} from "./styles";

const ImagesZoom = ({ images, onClose }) => {
  return (
    <Overlay>
      <Header>
        <h1>상세이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slide {...settings}>
            {images.map((y) => (
              <ImageWrapper
                className="123"
                style={{ display: "flex", justifyContent: "center" }}
                key={y.src}
              >
                <img src={y.src} alt={y.src} />
              </ImageWrapper>
            ))}
          </Slide>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
