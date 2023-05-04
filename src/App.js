import React, { useState, useRef } from 'react';
import './App.css';
import './tailwind.css';
import cat1 from './images/cat1.gif';
import cat2 from './images/cat2.gif';
import cat4 from './images/cat4.gif';
import cat5 from './images/cat5.gif';
import cat6 from './images/cat6.gif';
import catheadphones from './images/catheadphones.gif';
import purpleBorders from './images/purpleBorders.gif';
import backgroundImage from './images/01background.gif';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [gifSource, setGifSource] = useState(cat6);
  const audioRef = useRef();
  const [lastSelectedGift, setLastSelectedGift] = useState(cat6);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const party = () => {
    if (gifSource === cat6) {
      setLastSelectedGift(catheadphones)
      setGifSource(catheadphones);
    } else {
      setLastSelectedGift(cat6);
      setGifSource(cat6);
    }
  };

  function handleClick() {
    togglePlayback();
    party();
  };
  

  return (
    <div className="vcr flex flex-col min-h-screen text-white bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="flex-grow ml-6">
      <h1 className="text-3xl mt-6 text-white">Ernesti Sario</h1>
      <h1 className="text-3xl mt-12 text-white">Projects:</h1>
      <div className="mt-12">
        <a className="text-white block mb-2" style={{ pointerEvents: 'none' }}>
          <span
            className="cursor-pointer inline-block p-2"
            style={{ pointerEvents: 'auto' }}
            onMouseEnter={() => setGifSource(cat1)}
            onMouseLeave={() => setGifSource(lastSelectedGift)}
            onClick={() => window.open('https://eclectic-bubblegum-32a961.netlify.app/', '_blank')}
          >
            Project 1 - AI Article Summarizer
          </span>
        </a>
        <a className="text-white block" style={{ pointerEvents: 'none' }}>
          <span
            className="cursor-pointer inline-block p-2"
            style={{ pointerEvents: 'auto' }}
            onMouseEnter={() => setGifSource(cat2)}
            onMouseLeave={() => setGifSource(lastSelectedGift)}
            onClick={() => window.open('https://lovely-cactus-b1128e.netlify.app/', '_blank')}
          >
            Project 2 - SendETH
          </span>
        </a>
        <a className="text-white block" style={{ pointerEvents: 'none' }}>
          <span
            className="cursor-pointer inline-block p-2 mt-2"
            style={{ pointerEvents: 'auto' }}
            onMouseEnter={() => setGifSource(cat4)}
            onMouseLeave={() => setGifSource(lastSelectedGift)}
            onClick={() => window.open('https://ernestisario.com', '_blank')}
          >
            Project 3 - My Website
          </span>
        </a>
        <a className="text-white block" style={{ pointerEvents: 'none' }}>
          <span
            className="cursor-pointer inline-block p-2 mt-2"
            style={{ pointerEvents: 'auto' }}
            onMouseEnter={() => setGifSource(cat5)}
            onMouseLeave={() => setGifSource(lastSelectedGift)}
            onClick={() => window.open('https://eth-price-prediction.onrender.com/', '_blank')}
          >
            Project 4 - ETH Price Prediction
          </span>
        </a>
      </div>
    </div>
    <div className="frame hidden md:block absolute top-1/3 right-1/4 transform -translate-y-1/2 w-64 h-64 bg-contain bg-no-repeat bg-center bg-white" style={{ backgroundImage: `url(${purpleBorders})` }}>
      <img src={gifSource} alt="Gif" className="w-full h-full object-cover" />
    </div>
    <div className="frame md:hidden w-48 h-48 mx-auto mt-6 bg-contain bg-no-repeat bg-center bg-white" style={{ backgroundImage: `url(${purpleBorders})` }}>
      <img src={gifSource} alt="Gif" className="w-full h-full object-cover" />
    </div>
    <footer className="flex flex-col md:flex-row justify-between items-center p-6">
      <div className="flex flex-row justify-center md:justify-start space-x-4">
        <a 
        href="https://www.linkedin.com/in/ernesti-sario-010b6a214/"
        className="text-2xl border-2 border-transparent hover:bg-pink-900 p-2"
        target="_blank"
        rel="noreferrer"
        >
          LinkedIn
        </a>
        <a 
        href="https://twitter.com/BitBeholder"
        className="text-2xl border-2 border-transparent hover:bg-pink-900 p-2"
        target="_blank"
        rel="noreferrer"
        >
          Twitter
        </a>
        <a 
        href="https://github.com/BitBeholder"
        className="text-2xl border-2 border-transparent hover:bg-pink-900 p-2"
        target='_blank'
        rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="text-xl mt-4 md:mt-0">ernesti.sario@aaltoes.com</p>
    </footer>
      <audio ref={audioRef} src="Brutalismus3000.mp3" preload="auto"></audio>
      <span className="press-here-text">
        Press here <span className="arrow" role="img" aria-label="right-arrow">⇨</span>
      </span>
      <button
        onClick={handleClick} 
        className='text-2xl p-4 md:p-8 absolute top-4 right-4'
      >
        <i className={`fa ${isPlaying ? 'fa-volume-up' : 'fa-volume-off'}`} />
      </button>
    </div>
  );
}

export default App;