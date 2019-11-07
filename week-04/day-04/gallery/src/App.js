import React ,{useState} from 'react';
import './App.css';
import arrow from './arrow.svg';
import Image from './images/Image'
import Thumbnail from './Thumbnail'

function App() {

  const [curIdx, setCurIdx] = useState(0);

  function nextImg() {
    curIdx < Image.length - 1 ? setCurIdx(curIdx + 1) : setCurIdx(0);
  }

  function prevImg() {
    curIdx > 0 ? setCurIdx(curIdx - 1) : setCurIdx(Image.length - 1);
  }
  
  return (
    <div className = "container">
      <main>
        <img className="arrow left-arrow" src={arrow} alt='arrow' onClick={prevImg} />
        {<img className="main-img" src={Image[curIdx]} alt='gallery' />}
        <img className="arrow right-arrow" src={arrow} alt='arrow' onClick={nextImg} />
      </main>
      <div className="thumbnails">
      {Image.map((map,index) => <Thumbnail key={index} imageSrc={Image[index]} thumbnailClick={() => setCurIdx(index)} />)}
      </div>
    </div>
  );
}

export default App;


