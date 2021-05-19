import React, { useEffect, useState, useContext } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import styles from "../styles/Home.module.css";

import axios from "axios";
import { Context } from "../src/store";

export default function App() {
  const [product, setProduct] = useState(null);
  useEffect(async () => {
    let res = await axios.get("/api/product");
    setProduct(res.data[0]);
  }, []);

  const {
    local,
    language,
    changeLanguage,
    changeCurrency,
    rate,
    currentCurrency,
  } = useContext(Context);
  const getPrice = (p) => ` ${(p * rate).toFixed(0)} ${currentCurrency}`;
  return (
    <IntlProvider messages={language} locale={local} defaultLocale="en">
      <div
        className={styles.container}
        style={{ direction: local == "fa" ? "rtl" : undefined }}
      >
        <div style={{ textAlign: "right", direction: "ltr" }}>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">
              <FormattedMessage
                value={{ ok: "ok" }}
                defaultMessage={"English"}
                id="ENGLISH_LANG"
              />
            </option>
            <option value="fa">
              <FormattedMessage
                value={{ ok: "ok" }}
                defaultMessage={"Farsi"}
                id="FARSI_LANG"
              />
            </option>
          </select>
          <select onChange={(e) => changeCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="AED">AED</option>
          </select>
        </div>
        <div className={styles.product}>
          <div className={styles.top}>
            <img src="/acer.jpg" className={styles.image} />
            <div className={styles.shortDC}>
              <div>
                <h2>{product?.title[local]}</h2>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product?.shortDescription[local],
                    }}
                  ></div>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <strong>
                    <FormattedMessage defaultMessage={"Price"} id="PRICE" />:
                    <div
                      style={{
                        direction: "ltr",
                        display: "inline-block",
                        padding: "8px",
                      }}
                    >
                      {getPrice(product?.price)}
                    </div>
                  </strong>
                </div>
                <button>
                  <FormattedMessage
                    defaultMessage={"Add To Cart"}
                    id="ADD_TO_CART"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className={styles.bottom}
            dangerouslySetInnerHTML={{
              __html: product?.longDescription[local],
            }}
          ></div>
        </div>
      </div>
    </IntlProvider>
  );
}
