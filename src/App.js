import "./global.css";
import ImagePreview from "./components/ImagePreview";
import "./App.css";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";

function App() {
  const [randomImage, setRandomImage] = useState(null);
  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }
  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_descritpion}
          author={randomImage.user.name}
        />
      )}
    </main>
  );
}

export default App;
