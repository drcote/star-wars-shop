import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./Header.scss";
import ImageLogo from "../../resources/img/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrappper">
        <Routes>
          <Route path="*" element={<Logo />} />
          <Route
            path="/"
            element={
              <>
                <Logo />
                <HeaderDesc />
              </>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={ImageLogo}
        height={51}
        width={115}
        alt="Star Wars Logo"
        className="header__img"
      />
    </Link>
  );
};

const HeaderDesc = () => {
  return (
    <>
      <h1 className="header__h1">Star Wars Figures</h1>
      <p className="header__desc">
        Find the latest products for the biggest fans of the iconic saga.
      </p>
    </>
  );
};
