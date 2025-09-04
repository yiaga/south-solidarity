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
        <div>
          <Socials />
        </div>
        </Wrapper>
      </div>

    </footer>
    );
};

export default Footer;


