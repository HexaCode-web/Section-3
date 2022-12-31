import TrollFace from "../assets/Troll Face.png";
export default function Header() {
  return (
    <div className="Header">
      <img src={TrollFace}></img>
      <p>Meme Generator</p>
    </div>
  );
}
