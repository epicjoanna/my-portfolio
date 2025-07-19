"use client";
import * as React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Credits from "./components/Credits";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("light-mode", mode === "light");
    }
  }, [mode]);
  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#ffffff',
                  paper: '#f5f5f5',
                },
              }
            : {
                background: {
                  default: '#0b1b25',
                  paper: '#121212',
                },
              }),
        },
        typography: {
          fontFamily: 'NTR, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <main className="page">
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <NavBar
      toggleTheme={() => setMode(prev => (prev === "light" ? "dark" : "light"))}
      mode={mode}
      />
      <div className="sidebar">
        <Sidebar />
      </div>
      <Home />
      <div className="content">
        <About />
        <Experience />
        <Portfolio />
        <Credits />
      </div>
    </main>
    </ThemeProvider>
  );
}
