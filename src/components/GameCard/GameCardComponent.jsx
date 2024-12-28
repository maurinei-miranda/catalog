/* eslint-disable react/prop-types */
import "./game-card.css";

const GameCard = (props) => {
  let titulo = props.title;
  let primariaPreco = props.primariaPreco;
  let parentalPreco = props.parentalPreco;
  let imageSource = props.img;
  if (!props.img) {
    imageSource =
      "https://store-images.s-microsoft.com/image/apps.41033.13814604299939965.72dfdef5-9229-464a-9658-6fa1501f617b.d5cdf037-feab-4582-81ef-6962d125ba95?w=272";
  }

  const openGameCard = () => {
    console.log("Opening Game Card: " + imageSource);
  };

  return (
    <div className=" text-center justify-center" onClick={() => openGameCard()}>
      <img src={imageSource} />
      <header id="game-title" className="font-bold text-sm">
        {titulo}
      </header>
      <div id="prices">
        <div id="preco-primaria" className="text-sm">
          <p className="text-xs">Primária R${primariaPreco}</p>
        </div>
        <div id="preco-parental" className="text-sm">
          <p className="text-xs">Parental R${parentalPreco}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
