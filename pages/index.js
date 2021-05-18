import React, { useEffect, useState, useContext } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import styles from "../styles/Home.module.css";

import axios from "axios";
import { Context } from "../src/store";

export default function App() {
  const [product, setProduct] = useState(null);
  useEffect(async () => {
    let res = await axios.get("/api/product");
    console.log(res.data[0]);
    setProduct(res.data[0]);
  }, []);

  const { local, language, changeLanguage } = useContext(Context);
  return (
    <IntlProvider messages={language} locale={local} defaultLocale="en">
      <div
        className={styles.container}
        style={{ direction: local == "fa" ? "rtl" : undefined }}
      >
        <div style={{ textAlign: "right" }}>
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
        </div>
        <div className={styles.product}>
          <div className={styles.top}>
            <img src="/acer.jpg" className={styles.image} />
            <div className={styles.shortDC}>
              <div>
                <h2>
                  <FormattedMessage
                    defaultMessage={product?.title[local]}
                    id="title1"
                  />
                </h2>
                <div>
                  <div>
                    <FormattedMessage
                      defaultMessage={product?.shortDescription[local]}
                      id="description1"
                      values={{
                        p: (word) => <p>{word}</p>,
                        h4: (word) => <h4>{word}</h4>,
                        ul: (word) => <ul>{word}</ul>,
                        li: (word) => <li>{word}</li>,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <strong>Price: $445</strong>
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
          <div className={styles.bottom}>
            <FormattedMessage
              defaultMessage={product?.longDescription[local]}
              values={{
                p: (word) => <p>{word}</p>,
                h4: (word) => <h4>{word}</h4>,
              }}
              id="description1"
            />
          </div>
        </div>
      </div>
    </IntlProvider>
  );
}
