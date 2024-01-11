export const Gallary = () => {
  return (
    <div className="gallery">
      <div className="container-fill">
        <h2 className="gallery__title title-square">
          <span className="title-square__small">Перегляньте наш:</span>
          <span className="title-square__main">Instagram</span>
        </h2>

        <div className="gallery__items">
          <div className="gallery__item">
            <a href="#" className="gallery__item-hover-box">
              <span className="gallery__item-hash-tag link-hover">
                #instagram-link
              </span>
            </a>
            <img
              src="https://picsum.photos/id/123/270/270"
              alt=""
              className="gallery__item-img"
            ></img>
          </div>
          <div className="gallery__item">
            <a href="#" className="gallery__item-hover-box">
              <span className="gallery__item-hash-tag link-hover">
                #instagram-link
              </span>
            </a>
            <img
              src="https://picsum.photos/id/124/270/270"
              alt=""
              className="gallery__item-img"
            ></img>
          </div>
          <div className="gallery__item">
            <a href="#" className="gallery__item-hover-box">
              <span className="gallery__item-hash-tag link-hover">
                #instagram-link
              </span>
            </a>
            <img
              src="https://picsum.photos/id/126/270/270"
              alt=""
              className="gallery__item-img"
            ></img>
          </div>
          <div className="gallery__item">
            <a href="#" className="gallery__item-hover-box">
              <span className="gallery__item-hash-tag link-hover">
                #instagram-link
              </span>
            </a>
            <img
              src="https://picsum.photos/id/127/270/270"
              alt=""
              className="gallery__item-img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
