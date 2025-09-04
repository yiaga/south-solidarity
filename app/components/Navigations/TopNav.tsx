import Buttton from "../Buttons/Buttton";
import Logo from "../Generics/Logo";
import Wrapper from "../Generics/Wrapper";

const TopNav = () => {
  return (
    <header>
      <Wrapper
        className="h-[111px] flex items-center justify-between bg-text 'border-b border-amber-300' fixed 
        top-0 right-0 left-0 z-50"
      >
        <div>
          <Logo />
        </div>
        <nav>
          <div className=" flex space-x-4 items-center">
            <Buttton size="sm">Register</Buttton>
            <Buttton size="sm" className="text-primary" variant="border">
              ENG
            </Buttton>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default TopNav;
