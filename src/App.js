import React, { useEffect, useState } from 'react';
import ImageCard from './Components/ImageCard/ImageCard';
import ImageSearch from './Components/ImageSearch/ImageSearch';

const App = () => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        setImages(data.meals)
        setIsLoading(false)
      })

      .catch(err => alert("You have no meals"))

  }, [term])

  console.log("imag", images);
  return (
    <div className="container mx-auto">

      <ImageSearch images={images} searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
    
      {isLoading ? <h1 className="text-xl text-center mx-auto mt-32">Loading....</h1> : <div className="grid grid-cols-3 gap-4">
        {
          images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))

        }

      </div>}
    </div>
  );
};

export default App;