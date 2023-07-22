"use client";
import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Stack from "@mui/material/Stack";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import { BrowserRouter } from "react-router-dom";

export default function Page() {
  return (
    <main>
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <div className="sidebar">
        <Sidebar />
      </div>
      <Home />
      <div className="content">
        <About />
        <Experience />
        <Portfolio />
      </div>
    </main>
  );
}
