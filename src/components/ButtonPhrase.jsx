import randomElementFromArray from "../utils/randomElementFromArray";
import phrase from "../utils/phrases.json";

const ButtonPhrase = ({ setPhraseRandom, setPathRandom, arrBackground }) => {
  const handleRandomPhrase = () => {
    const newRandomPhrase = randomElementFromArray(phrase);
    setPhraseRandom(newRandomPhrase);
    const newPath = randomElementFromArray(arrBackground);
    setPathRandom(newPath);
  };

  return (
    <button className="app_btn" onClick={handleRandomPhrase}>
      Prueba tu suerte
    </button>
  );
};

export default ButtonPhrase;
