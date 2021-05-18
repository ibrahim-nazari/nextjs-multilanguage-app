import { createContext, useState } from "react";
import English from "../src/languages/en.json";
import Farsi from "../src/languages/fa.json";
let language = English;
export const Context = createContext(language);

const store = ({ children }) => {
  const [language, setlanguage] = useState(English);
  const [local, setlocal] = useState("en");
  const changeLanguage = (la) => {
    if (la == "en") {
      setlanguage(English);
      setlocal("en");
    } else {
      setlanguage(Farsi);
      setlocal("fa");
    }
  };
  return (
    <Context.Provider value={{ local, language, changeLanguage }}>
      {children}
    </Context.Provider>
  );
};

export default store;
