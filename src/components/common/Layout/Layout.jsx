import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../../context/UserNameContext";
import pokedex from '../../../images/Imagen1.png'
import "./Layout.css";

const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logOut = () => {
    removeUserName();
    navigate("/");
  };

  return (
    <div>
      <header>
        <div className="header_container">
          <div className="logo_header">
            <img
              src={pokedex}
              alt="Pokedex"
            />
          </div>
          <div className="container_button-log-out">
            <button className="btn-header" onClick={logOut}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
