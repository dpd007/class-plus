import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ScreenFour from "./components/ScreenFour";
import ScreenOne from "./components/ScreenOne";
import ScreenThree from "./components/ScreenThree";
import ScreenTwo from "./components/ScreenTwo";
import ScreenFive from "./components/ScreenFive";
import Feature from "./components/Feature";
const NAV_LINKS = ["reseller benefits", "teacher's delight", "about us"];
const CARD_LIST = [
  {
    id: 1,
    head_text: "your story",
    text: "Classplus expands to South East Asia amidst international expansion plans.",
  },
  {
    id: 2,
    head_text: "frobes 30 under 30",
    text: "The founders of Classplus Mukul Rustagi & Bhaswat Agarwal secured their names in the Forbes list of 30 under 30.",
  },
  {
    id: 3,
    head_text: "the economics times",
    text: "Edtech startup Classplus raises $70 million in funding as valuation jumps to $600 million.",
  },
];
const Questions = [
  {
    id: 1,
    question: "Who are the people behind Classplus?",
    text: "Classplus is a team of graduates of IITs and IIMs and alumni of top companies like Microsoft, Zomato etc and is backed by global investors across 5 different countries. Helping every coaching institute in India upscale their business is what drives us to deliver, excel, and grow.",
  },
  {
    id: 2,
    question: "Why do our reseller partners like to work with us?",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nostrum aliquid ab. Velit eum unde praesentium fugit, veniam quo odit corporis. Sit magnam, harum ab nostrum unde voluptatum doloremque. Quas.",
  },
  {
    id: 3,
    question: "Who can become a reseller partner?",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nostrum aliquid ab. Velit eum unde praesentium fugit, veniam quo odit corporis. Sit magnam, harum ab nostrum unde voluptatum doloremque. Quas.",
  },
  {
    id: 4,
    question: "When do I get my earnings?",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nostrum aliquid ab. Velit eum unde praesentium fugit, veniam quo odit corporis. Sit magnam, harum ab nostrum unde voluptatum doloremque. Quas.",
  },
  {
    id: 5,
    question: "How can I track my sales?",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nostrum aliquid ab. Velit eum unde praesentium fugit, veniam quo odit corporis. Sit magnam, harum ab nostrum unde voluptatum doloremque. Quas.",
  },
];

function App() {
  return (
    <div className="App">
      <div className="container-fluid navbar__container">
        <Navbar nav_links={NAV_LINKS} />
      </div>
      <div className="container-fluid py-3">
        <ScreenOne />
      </div>
      <div className="container-fluid pt-3 card__main__holder">
        <ScreenTwo cardList={CARD_LIST} />
      </div>
      <div className="container-fluid pb-3">
        <ScreenThree />
      </div>
      <div className="container-fluid py-5">
        <Feature />
      </div>
      <div className="container-fluid py-2 contact__holder">
        <Contact />
      </div>
      <div className="container-fluid pt-5 questoins__holder">
        <ScreenFour questions={Questions} />
      </div>
      <div className="container-fluid pt-5 footer__holder">
        <ScreenFive />
      </div>
    </div>
  );
}

export default App;
