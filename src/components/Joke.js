import React, { useState, useEffect } from 'react';

export const Joke = () => {

    const [marvel, setMarvel] = useState([]);


  useEffect(() => {
      if(!navigator.onLine){
          if(localStorage.getItem("marvel")==null){
              setMarvel("Loading...")
          }
          else{
            setMarvel(localStorage.getItem("marvel"));
          }
      }
      else {
          console.log("Entra entra")
            fetchMarvel()
    }
    //fetchJoke();
  }, []);

  const fetchMarvel = async (marker) => {
    let url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8e80d38d7e134209c6dd75d0da2e371d&hash=f460adae5f0683ea2bddfb97dd4edb3f"
    const resp = await fetch(url);
    const data = await resp.json();
    setMarvel(data.data.results[0].name);
    localStorage.setItem("marvel", data.data.results[0].name);
  };

  console.log(marvel)
    return(
        <>
        <h1>Marvel</h1>
        <p>{marvel}</p>
        </>
    )
}