import "./App.css";
import PhrasesCard from "./components/PhrasesCard";
import ButtonPhrase from "./components/ButtonPhrase";
import { useState } from "react";
import phrases from "./utils/phrases.json";
import randomElementFromArray from "./utils/randomElementFromArray";

const arrBackground = [1, 2, 3, 4];

function App() {
  const initialPhrase = randomElementFromArray(phrases);
  const initialPath = randomElementFromArray(arrBackground);

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase);
  const [pathRandom, setPathRandom] = useState(initialPath);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const objStyle = {
    backgroundImage: `url('../images/fondo${pathRandom}.jpg')`,
  };
  const handleButtonClick = () => {
    setShouldAnimate(true);
  };

  return (
    <div
      style={objStyle}
      className={`app ${shouldAnimate ? "transition-effect" : ""}`}
    >
      <h1 className="app_title">Galleta de la fortuna </h1>
      <PhrasesCard phraseRandom={phraseRandom} />
      <ButtonPhrase
        setPhraseRandom={setPhraseRandom}
        setPathRandom={setPathRandom}
        arrBackground={arrBackground}
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
