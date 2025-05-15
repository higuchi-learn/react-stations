// @ts-check
import { useState } from 'react'
import DogImage from "./DogImage"

export const Description = () => {
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/frise-bichon/1.jpg");
  const fetchDogImage = async() => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const resData = await res.json();
      setDogUrl(resData.message);
    }
  return <>
  <DogImage imageUrl={dogUrl}/>
  <button onClick={fetchDogImage} className='update'>更新</button>
  </>
}

export default Description
