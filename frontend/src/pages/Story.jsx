import Navbar from "../components/Navbar";
import InfiniteMenu from "../components/InfiniteMenu";

const About = () => {
  const items = [
    {
      image:
        "https://ik.imagekit.io/wr6ziyjiu/hansens.jpg?updatedAt=1753179144943",
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
      image:
        "https://ik.imagekit.io/wr6ziyjiu/President.webp?updatedAt=1753179167260",
      link: "https://en.wikipedia.org/wiki/Hilton_Schlosberg",
      title: "Hilton Schlosberg",
      description: "Vice chairman and President",
    },
    {
      image:
        "https://ik.imagekit.io/wr6ziyjiu/labubu-removebg-preview.png?updatedAt=1753179193666",
      link: "https://en.wikipedia.org/wiki/Monster_Beverage",
      title: "Growth",
      description: "Valuation of over $50 billion",
    },
    {
      image:
        "https://ik.imagekit.io/wr6ziyjiu/coca-cola.jpg?updatedAt=1753179411982",
      link: "https://investors.monsterbevcorp.com/news-releases/news-release-details/coca-cola-company-and-monster-beverage-corporation-close",
      title: "Partner",
      description: "Partnership with Coco-Cola",
    },
    {
      image:
        "https://ik.imagekit.io/wr6ziyjiu/59ded7578fbf6d84e8999dc35df26091.jpg?updatedAt=1753216873737",
      link: "https://www.google.com/search?sca_esv=2dc8bb8b89129ca2&rlz=1C1ONGR_enIN1064IN1064&q=monster+energy+drink+brand+ambassador+sc0ut+op&sa=X&ved=2ahUKEwj1lYPbqNGOAxUd2TgGHW1gLcoQ7xYoAHoECA0QAQ&biw=1536&bih=695&dpr=1.25",
      title: "Scout OP",
      description: "AKA Tanmay Singh Our Brand Ambassador",
    },
    {
      image:
        "https://ik.imagekit.io/wr6ziyjiu/s8ul.esports_I_2021_Oct_25_01_30_23.webp?updatedAt=1753216873846",
      link: "https://etedge-insights.com/trending/iqoo-soul-ropes-in-monster-as-official-energy-drink-sponsor/",
      title: "SOUL and 8-Bit",
      description: "We Sponsers ESPORTS teams",
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
