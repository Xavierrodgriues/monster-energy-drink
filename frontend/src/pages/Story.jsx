import Navbar from "../components/Navbar";
import InfiniteMenu from "../components/InfiniteMenu";

const About = () => {
  const items = [
    {
      image: "https://ik.imagekit.io/wr6ziyjiu/hansens.jpg?updatedAt=1753179144943",
      link: "https://en.wikipedia.org/wiki/Monster_Beverage",
      title: "Origin",
      description: "Originally launched by Hansen Natural Corporation",
    },
    {
      image: "https://ik.imagekit.io/wr6ziyjiu/CEO.png?updatedAt=1753179116114",
      link: "https://en.wikipedia.org/wiki/Rodney_Sacks",
      title: "Rodney Sacks",
      description: "Chairman and CEO",
    },
    {
      image: "https://ik.imagekit.io/wr6ziyjiu/President.webp?updatedAt=1753179167260",
      link: "https://en.wikipedia.org/wiki/Hilton_Schlosberg",
      title: "Hilton Schlosberg",
      description: "Vice chairman and President",
    },
    {
      image: "https://ik.imagekit.io/wr6ziyjiu/labubu-removebg-preview.png?updatedAt=1753179193666",
      link: "https://en.wikipedia.org/wiki/Monster_Beverage",
      title: "Growth",
      description: "Valuation of over $50 billion",
    },
    {
      image: "https://ik.imagekit.io/wr6ziyjiu/coca-cola.jpg?updatedAt=1753179411982",
      link: "https://investors.monsterbevcorp.com/news-releases/news-release-details/coca-cola-company-and-monster-beverage-corporation-close",
      title: "Partner",
      description: "Partnership with Coco-Cola",
    },
  ];
  return (
    <div>
      <Navbar />

      <div style={{ height: "600px", position: "relative", color: "white" }}>
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
};

export default About;
