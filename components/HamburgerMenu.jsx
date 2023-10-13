import { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Menu
        customBurgerIcon={<img src="/menu.svg" />}
        noOverlay
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <div
          className={` text-white absolute  w-56 mt-2 origin-top-right rounded-md `}
        >
          <a href="#about" onClick={handleIsOpen}>
            About
          </a>
          <br />
          <a href="#explore" onClick={handleIsOpen}>
            Explore
          </a>
          <br />
          <a href="#get-started" onClick={handleIsOpen}>
            Get Started
          </a>
          <br />
          <a href="#whats-new" onClick={handleIsOpen}>
            Whats New?
          </a>
          <br />
          <a href="#world" onClick={handleIsOpen}>
            World
          </a>
          <br />
          <a href="#insights" onClick={handleIsOpen}>
            Insights
          </a>
          <br />
          <a href="#feedback" onClick={handleIsOpen}>
            Feedback
          </a>
        </div>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
