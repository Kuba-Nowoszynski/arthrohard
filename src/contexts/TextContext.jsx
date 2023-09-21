/* eslint-disable react/prop-types */

import { createContext } from "react";
import { polishText } from "./polishText";

// Create a context object for managing text content - it will allow simple language change in the future development
export const TextContext = createContext({
  text: {},
});

// TextContextProvider component: Provides a centralized way to manage text content for the website.
export const TextContextProvider = ({ children }) => {
  // Load text content from the 'polishText' module.
  const text = polishText;

  // Create a 'value' object to provide to the context.
  const value = {
    text,
  };

  // Render the context provider with the 'value' prop.
  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
};
