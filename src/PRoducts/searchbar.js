import React, { useEffect, useState } from 'react';
import Aos  from 'aos'
import "aos/dist/aos.css"
import Products from './Products';




const SearchBar =()=>{

  const [products, setProducts] = useState([])
  
  
  const fetchProducts = async () => {
    const response = await fetch(` https://api.tvmaze.com/shows`)
    const responseData = await response.json();
    const newProducts = responseData.slice(3,8)
    setProducts(newProducts)
    
  }
  
  
  
  useEffect(() => {
    Aos.init({duration:2000});
    fetchProducts()
   }, [])




 const productsList = products.map((meal) => (
      <Products
      key={meal.id }
      id={meal.id}
      Name={meal.name}
      airdate={meal.premiered}
      EndDate={meal.ended}
      genres={meal.genres}
      thumbnail={meal.image?meal.image.original :''}
      thumbnail2={meal.image?meal.image.medium :''}
      summary={meal.summary}
      Rating={meal.rating.average}
      runtime={meal.runtime}
      url={meal.url}
        />
   ))
  
  
  
  return(
   
    <div data-aos='fade-up'  id="shows">
  {productsList}
  </div>
 )   
}

export default SearchBar;