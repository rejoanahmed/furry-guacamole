import React, { useState } from "react";
// import styles from "./NavBar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NavLink from "../../lowerLevelComp/navLink/NavLink";
export interface INavItems {
  title: string;
  url: string;
}
export interface INavBar {
  brand: string;
  navItems: INavItems[];
}
