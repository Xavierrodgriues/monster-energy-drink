import FlyingPosters from "../components/FlyingPosters";
import Navbar from "../components/Navbar";

const Posters = () => {
  const items = [
    "https://ik.imagekit.io/wr6ziyjiu/303744_monsterenergy_callofdutypromo_283805.jpg?updatedAt=1753508260005",
    "https://ik.imagekit.io/wr6ziyjiu/BIG3_1080x1080.jpg?updatedAt=1753508260100",
    "https://ik.imagekit.io/wr6ziyjiu/monster-lando-norris-zero-sugar.webp?updatedAt=1753508260084",
    "https://ik.imagekit.io/wr6ziyjiu/monster_launch_social_4x5.webp?updatedAt=1753508260084",
    "https://ik.imagekit.io/wr6ziyjiu/Rampage-Jackson-Png.webp?updatedAt=1753508260072",
  ];
  return (
    <div>
        <Navbar />
      <div style={{ height: "600px", position: "relative" }}>
        <FlyingPosters items={items} />
      </div>
    </div>
  );
};

export default Posters;
