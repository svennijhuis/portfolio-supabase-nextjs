import LinkStyling from "../buttons/link-styling";
import MobileNavbar from "./mobile-navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-6 items-center bg-white md:h-8">
      <div className="container grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <Link className="relative z-10 block" href="/">
            <p className="text-18 font-medium uppercase text-black md:text-20">
              Sven <span className="text-grayDark">Nijhuis</span>
            </p>
          </Link>
        </div>
        <div className="col-span-1 flex justify-end gap-2">
          <LinkStyling
            href="/#contact"
            color="gray"
            icon="arrow"
            iconHover="mail"
            className="relative z-10"
          >
            Contact
          </LinkStyling>
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};
export default Header;
