import React, { useState } from "react";

import styles from "./style.module.scss";

export const Homework1: React.FC = () => {
  const [btnValue, setBtnValue] = useState(1);

  function handleList() {
    if (!btnValue) {
      setBtnValue(1);
      return;
    }
    setBtnValue(0);
  }

  return (
    <div className={styles.root} id="root">
      <h1>Домашнє завдання 1</h1>
      <div className={styles.content}>
        <div>
          <div className="listHeader">
            <h2>Топ 10 країн Європи за площею:</h2>
            <button
              className={styles.handleBtn}
              id="handleBtn"
              value={btnValue}
              onClick={handleList}
            >
              {btnValue ? "Згорнути" : "Розгорнути"}
            </button>
          </div>
          <ol
            className="listOfCountries"
            style={{ height: btnValue ? "100%" : 0, overflow: btnValue ? "auto" : "hidden" }}
          >
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Україна</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/640px-Flag_of_Ukraine.svg.png"
                alt="Flag of Ukraine"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%96%D1%8F"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Франція</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/640px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
                alt="Flag of France"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%86%D1%81%D0%BF%D0%B0%D0%BD%D1%96%D1%8F"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Іспанія</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/640px-Flag_of_Spain.svg.png"
                alt="Flag of Spain"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%A8%D0%B2%D0%B5%D1%86%D1%96%D1%8F"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Швеція</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/640px-Flag_of_Sweden.svg.png"
                alt="Flag of Sweden"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D1%96%D1%8F"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Норвегія</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png"
                alt="Flag of Norway"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%9D%D1%96%D0%BC%D0%B5%D1%87%D1%87%D0%B8%D0%BD%D0%B0"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Німеччина</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png"
                alt="Flag of Germany"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%A4%D1%96%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D1%96%D1%8F"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Фінляндія</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/640px-Flag_of_Finland.svg.png"
                alt="Flag of Finland"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Польща</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png"
                alt="Flag of Poland"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%86%D1%82%D0%B0%D0%BB%D1%96%D1%8F"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Італія</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/640px-Flag_of_Italy.svg.png"
                alt="Flag of Italy"
                width="400"
                height="300"
              />
            </li>
            <li>
              <a
                href="https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0_%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%96%D1%8F"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Велика Британія</h3>
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/640px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                alt="Flag of United Kingdom"
                width="400"
                height="300"
              />
            </li>
          </ol>
        </div>

        <div id="table">
          <h2>Таблиця</h2>
          <table>
            <tr>
              <th rowSpan={2}>Browser</th>
              <th colSpan={2}>Visitors</th>
            </tr>
            <tr>
              <th>Number</th>
              <th>Percentage</th>
            </tr>
            <tr>
              <td>Mozilla Firefox</td>
              <td>163</td>
              <td>59%</td>
            </tr>
            <tr>
              <td>Google Chrome</td>
              <td>78</td>
              <td>28%</td>
            </tr>
            <tr>
              <td>Safari</td>
              <td>35</td>
              <td>13%</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
