import logo from './logo.svg';
import './App.css';
import Image1 from './images/image-product-1.jpg';
import Image2 from './images/image-product-2.jpg';
import Image3 from './images/image-product-3.jpg';
import Image4 from './images/image-product-4.jpg';
import profile from './images/image-avatar.png';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [ count, setCount ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ selectedImage, setSelectedImage ] = useState(Image1);
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ lightboxOpen, setLightboxOpen ] = useState(false);
  const images = [ Image1, Image2, Image3, Image4 ];
  const [ lightboxIndex, setLightboxIndex ] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 870 });

  function minus() {
    setCount(count > 0 ? count - 1 : 0);
  }

  function plus() {
    setCount(count + 1);
  }

  function addToCart() {
    setTotal(total + count);
    setCount(0);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function openLightbox() {
    setLightboxOpen(true);
    if (isMobile) {
      setLightboxOpen(false);
    }
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function navigateLightbox(direction) {
    let newIndex = lightboxIndex + direction;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setLightboxIndex(newIndex);
  }

  useEffect(() => {
    setSelectedImage(images[lightboxIndex]);
  }, [ lightboxIndex ]);

  return (
      <div className='main'>
        <div className='header'>
          <div className='menu-icon' onClick={toggleMenu}>
            <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
          </div>
          <b className='sneaker'>sneakers</b>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href='#Collections' className='op'>
              Collections
            </a>
            <a href='#Men' className='op'>
              Men
            </a>
            <a href='#Women' className='op'>
              Women
            </a>
            <a href='#About' className='op'>
              About
            </a>
            <a href='#Contact' className='op'>
              Contact
            </a>
          </div>

          <div className='right'>
            <sup className='sup_right'>
              {total}
            </sup>
            <svg className='cart' xmlns='http://www.w3.org/2000/svg'>
              <path
                  d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                  fill='#69707D'
                  fillRule='nonzero'
              />
            </svg>

            <img src={profile} alt='profile' className='photo'/>
          </div>

        </div>
        <div className='container'>
          <div className='main-left'>
            <div className='imgMain'>
              <a className='prev' onClick={() => navigateLightbox(-1)}>
                &#10094;
              </a>
              <img
                  src={selectedImage}
                  alt='Product'
                  className='img-main'
                  onClick={openLightbox}
              />
              <a className='next' onClick={() => navigateLightbox(1)}>
                &#10095;
              </a>
            </div>

            <div className='imgChild'>
             <img
                  src={Image1}
                  alt='Product 1'
                  className={`img-child ${
                      selectedImage === Image1 ? 'selected' : ''
                  }`}
                  onClick={() => setLightboxIndex(0)}
              />
              <img
                  src={Image2}
                  alt='Product 2'
                  className={`img-child ${
                      selectedImage === Image2 ? 'selected' : ''
                  }`}
                  onClick={() => setLightboxIndex(1)}
              />
              <img
                  src={Image3}
                  alt='Product 3'
                  className={`img-child ${
                      selectedImage === Image3 ? 'selected' : ''
                  }`}
                  onClick={() => setLightboxIndex(2)}
              />
              <img
                  src={Image4}
                  alt='Product 4'
                  className={`img-child ${
                      selectedImage === Image4 ? 'selected' : ''
                  }`}
                  onClick={() => setLightboxIndex(3)}
              />
            </div>
          </div>
          <div className='main-right'>
            <span className='title'>SNEAKER COMPANY</span>
            <h1 className='main_title'>
              Fall Limited Edition Sneakers
            </h1>
            <p className='para'>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a duable rubber outer sole. they'll withstand everything
              the weather can offer.
            </p>
            <div className='price0'>
              <div className='price'>
                <b>$125.00</b> <b className='perce'>50%</b>
              </div>

              <b className='strike0'>
                <strike className='strike'>$250.00</strike>
              </b>
            </div>
            <div className='addToCart'>
              <span className='box'>
              <button onClick={minus} className='calc a1'>
                <svg width='12' height='4' xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <path
                        d='M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z'
                        id='a'
                    />
                  </defs>
                  <use fill='#FF7E1B' fillRule='nonzero' href='#a'/>
                </svg>
              </button>

              <span className='count'> {count}</span>

              <button onClick={plus} className='calc a1'>
                <svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <path
                        d='M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z'
                        id='b'
                    />
                  </defs>
                  <use fill='#FF7E1B' fillRule='nonzero' xlinkHref='#b'/>
                </svg>
              </button>
                </span>
              <button onClick={addToCart} className='calc1'>
                <svg className='cart1' width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
                  <path
                      d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                      fill='#ffffff'
                      fillRule='nonzero'
                  />
                </svg>
                <span className='space'>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
        {lightboxOpen && (
            <div className='lightbox-overlay' onClick={closeLightbox}>
              <div
                  className='lightbox-content'
                  onClick={(e) => e.stopPropagation()}
              >
            <span className='close-lightbox' onClick={closeLightbox}>
              &times;
            </span>
                <a className='lightbox-prev' onClick={() => navigateLightbox(-1)}>
                  &#10094;
                </a>
                <img src={selectedImage} alt='Product' className='lightbox-img'/>
                <a className='lightbox-next' onClick={() => navigateLightbox(1)}>
                  &#10095;
                </a>
              </div>
            </div>
        )}
      </div>
  );
}

export default App;