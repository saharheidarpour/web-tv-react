import React from "react";
import { Container } from "./style";
import Logo from "@assets/images/logo.svg";
import Box from "@assets/images/box.svg";
import { NavLink } from "react-router-dom";

export default function Menu(theme) {
  return (
    <Container>
      <div className="content">
        <div className="logo">
          <img className="logo" src={Logo} alt="logo" />
          <img className="sub-title" src={Box} alt="box" />
        </div>
        <ul>
          <li>
            <NavLink to="/live" className="nav-links">
              پخش زنده
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="nav-links">
              فیلم و سریال
            </NavLink>
          </li>
          <li>
            <NavLink to="/archieve" className="nav-links">
              آرشیو محتوایی
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className="nav-links">
              جستجو
            </NavLink>
          </li>
          <li>
            <NavLink to="/filter" className="nav-links">
              فیلتر
            </NavLink>
          </li>
          <li>
            <NavLink to="/kids" className="nav-links">
              محیط کودک
            </NavLink>
          </li>
        </ul>
        <div className="setting">
          <NavLink to="/" className="nav-links">
            تنظیمات
          </NavLink>
        </div>
      </div>
    </Container>
  );
}
