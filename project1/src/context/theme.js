// this is different format from the previous one because we are craeting context and context provider in the same file....
import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext=React.createContext({
  themeMode:"light",
  darkTheme:()=>{},
  lightTheme:()=>{}
});

export  const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}