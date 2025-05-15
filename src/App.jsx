// DO NOT DELETE

import './App.css'
import { useState } from 'react'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/frise-bichon/1.jpg");
  const fetchDogImage = async() => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const resData = await res.json();
    setDogUrl(resData.message);
  }
  return (
    <div>
      <header>
        <h2 className='title'>Dogアプリ</h2>
      </header>
      <img src={dogUrl} alt="dog" />
      <button onClick={fetchDogImage} className='update'>更新</button>
    </div>
  )
}
