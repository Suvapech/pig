import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);

  const feed = (amount) => {
    setLevel((prevLevel) => prevLevel + amount);
  };

  const imageSrc =
    level > 99
      ? "src/355.jpg" 
      : "https://s.isanook.com/ns/0/ud/1910/9550354/458255261_820746600235848_538.jpg?ip/resize/w728/q80/jpg";

  return (
    <>
      <h1>Level {level}</h1>
      <img src={imageSrc} alt="หมูเด้ง" height={400 + level} />
      <br />

      <button onClick={() => feed(5)} style={{ margin: "0 10px" }} aria-label="Feed with watermelon">
        <img
          src="https://s.isanook.com/he/0/ud/4/21905/watermelon.jpg?ip/crop/w670h402/q80/jpg"
          alt="แตงโม"
          height={100}
        />
      </button>
      <button onClick={() => feed(10)} style={{ margin: "0 10px" }} aria-label="Feed with pumpkin">
        <img
          src="https://s.isanook.com/wo/0/ud/45/225397/225397-thumbnail.jpg"
          alt="ฟักทอง"
          height={100}
        />
      </button>
      <button onClick={() => feed(20)} style={{ margin: "0 10px" }} aria-label="Feed with grass">
        <img
          src="https://mpics.mgronline.com/pics/Images/566000005450103.JPEG"
          alt="หญ้า"
          height={100}
        />
      </button>
    </>
  );
}
