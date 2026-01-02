import { useEffect, useState } from "react";

function UnsplashImage() {
  const [image, setImage] = useState(null);
  const ACCESS_KEY = "rQeREmRRAnNDp2bJyMJ3fUQhj813wyflW_E9IXWNYtw";

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random?query=fruit&client_id=${ACCESS_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.urls.regular);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return (
   
        <img
          src={image}
          alt="Fruit"
          className="rounded-lg shadow-md"
        />
      
  );
}

export default UnsplashImage;
