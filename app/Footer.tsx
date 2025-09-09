import Link from "next/link";
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
            <Link  href="/"><Logo /></Link>
          </div>

          <ul className="font-inter flex flex-col space-y-2">
            <li>
              <h4 className="font-bold text-lg text-[#FFAC13]">QUICK LINKS</h4>
            </li>
            <li className="flex space-x-4 text-white">
              <Link href="/" className="menu-link">HOME</Link>
              <Link href="/programs" className="menu-link">PROGRAMS</Link>
              <Link href="/speakers" className="menu-link">SPEAKERS</Link>
              <Link href="/resources" className="menu-link">RESOURCES</Link>
              <Link href="/updates" className="menu-link">UPDATES</Link>
              <Link href="/watchsessions" className="menu-link">WATCH SESSIONS</Link>
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

