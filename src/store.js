import axios from "axios";
import { createContext, useEffect, useState } from "react";
import English from "../src/languages/en.json";
import Farsi from "../src/languages/fa.json";
let language = English;

export const Context = createContext(language);

const store = ({ children }) => {
  const [language, setlanguage] = useState(English);
  const [local, setlocal] = useState("en");
  const [currentCurrency, setcurrentCurrency] = useState("USD");
  const [label, setlabel] = useState("USD");
  const [rate, setRate] = useState([1, 0]);
  const changeLanguage = (la) => {
    if (la == "en") {
      setlanguage(English);
      setlocal("en");
    } else {
      setlanguage(Farsi);
      setlocal("fa");
    }
  };

  useEffect(async () => {
    let {
      data: { rates },
    } = await axios.get(
      "http://api.exchangeratesapi.io/v1/latest?access_key=8d2c279ad073a4928f12e99548dbeb58"
    );
    if (label == "USD") {
      setRate(1);
      setcurrentCurrency("USD");
    } else {
      setRate(Number(rates.AED) / Number(rates.USD));
      setcurrentCurrency("AED");
    }
  }, [label]);

  const changeCurrency = (c) => {
    if (c == "USD") {
      setlabel("USD");
    } else {
      setlabel("AED");
    }
  };
  return (
    <Context.Provider
      value={{
        local,
        language,
        changeLanguage,
        changeCurrency,
        rate,
        currentCurrency,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default store;
