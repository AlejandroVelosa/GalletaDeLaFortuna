import React from "react";

const PhrasesCard = ({ phraseRandom }) => {
  return (
    <article className="card">
      <div className="card_text">{phraseRandom.phrase}</div>
      <div className="card_autor">
        <span>Autor:</span>
        {phraseRandom.author}
      </div>
    </article>
  );
};

export default PhrasesCard;
