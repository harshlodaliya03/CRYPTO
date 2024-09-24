import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { Coincontext } from "../../context/Coincontext";

const Navbar = () => {
  const { setCurrancy } = useContext(Coincontext);

  const currencyHandler = (event) => {
    switch (event.targe.value) {
      case "usd": {
        setCurrancy({ name: "usd", Symbol: "$" });
        break;
      }
      case "eur": {
        setCurrancy({ name: "eur", Symbol: "€" });
        break;
      }
      case "inr": {
        setCurrancy({ name: "inr", Symbol: "₹" });
        break;
      }

      default: {
        setCurrancy({ name: "inr", Symbol: "₹" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Error" className="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sing up <img src={arrow_icon} alt="Error" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
