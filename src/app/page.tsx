"use client";
import * as React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";

export default function Page() {
  return (
    <main className="page">
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <NavBar />
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
