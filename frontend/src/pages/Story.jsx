import Navbar from "../components/Navbar";
import InfiniteMenu from "../components/InfiniteMenu";

const About = () => {
  const items = [
    {
      image: "/monster-resources-hackathon/hansens.jpg",
      link: "https://en.wikipedia.org/wiki/Monster_Beverage",
      title: "Origin",
      description: "Originally launched by Hansen Natural Corporation",
    },
    {
      image: "/monster-resources-hackathon/CEO.png",
      link: "https://en.wikipedia.org/wiki/Rodney_Sacks",
      title: "Rodney Sacks",
      description: "Chairman and CEO",
    },
    {
      image: "/monster-resources-hackathon/President.webp",
      link: "https://en.wikipedia.org/wiki/Hilton_Schlosberg",
      title: "Hilton Schlosberg",
      description: "Vice chairman and President",
    },
    {
      image: "/monster-resources-hackathon/labubu-removebg-preview.png",
      link: "https://en.wikipedia.org/wiki/Monster_Beverage",
      title: "Growth",
      description: "Valuation of over $50 billion",
    },
    {
      image: "/monster-resources-hackathon/coca-cola.jpg",
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
