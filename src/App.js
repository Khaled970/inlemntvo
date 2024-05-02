import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";


function App() {
  const [showNav, setShowNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button className="menu-btn btn" onClick={() => setShowNav(!showNav)}>
        <GiHamburgerMenu className="btn-icon" />
      </button>

      <Navbar show={showNav} />

      <div className="main">
      <h2 className="main__info-title">Welcome To My React App Portfolio: </h2>
        <p className="main__info-text">
          Hi, My name is Khalil Maleki, I am a web developer and a Gamemaker. I 
          am expert in front-end development,programming including technologies like 
          HTML, CSS,JavaScript and so on. I am not a designer but I have goodsense of 
          aetheics, and experience in responsive, mobile-first web design.I put special
          effort intooptimizing my code and providing the best user experience. I am
          also a gamemaker and a programmer. I make games and best programmer in swedan.
          I can more than 12 programming languages, like Java, C, C++, C#, Python,
          Mips and so on. 
        </p>
        <div>
          <button
            className="subsbtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Click Here 
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      </div>
    </>
  );
}

export default App;