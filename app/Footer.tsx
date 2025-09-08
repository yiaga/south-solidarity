import Logo from "./components/Generics/Logo";
import Socials from "./components/Generics/Socials";
import Wrapper from "./components/Generics/Wrapper";

const Footer = () => {
  return (
    <footer>
      <div>
        <Wrapper
          className="h-[221px] flex items-center justify-between bg-text 'border-b border-amber-300'"
        >
          <div>
            <Logo />
          </div>

          <ul className="font-inter flex flex-col space-y-2">
            <li>
              <h4 className="font-bold text-lg text-[#FFAC13]">QUICK LINKS</h4>
            </li>
            <li className="flex space-x-4 text-white">
              <a href="#">HOME</a>
              <a href="#">PROGRAMS</a>
              <a href="#">SPEAKERS</a>
              <a href="#">RESOURCES</a>
              <a href="#">UPDATES</a>
              <a href="#">WATCH SESSIONS</a>
            </li>
          </ul>

          <div>
            <Socials />
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;

