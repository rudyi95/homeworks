import React from "react";

import styles from "./style.module.scss";

export const Homework2: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Домашнє завдання 2</h1>
      <ol className={styles.content}>
        <li>
          <div>
            <form>
              <table>
                <thead>
                  <th>Name</th>
                  <th>Value</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>
                      <input placeholder="Put your name" />
                    </td>
                  </tr>
                  <tr>
                    <td>Sex</td>
                    <td>
                      <div>
                        <input type="radio" id="Male" name="sex" value="Male" checked />
                        <label htmlFor="Male">Male</label>
                      </div>
                      <div>
                        <input type="radio" id="Female" name="sex" value="Female" />
                        <label htmlFor="Female">Female</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Eye color</td>
                    <td>
                      <select>
                        <option>Green</option>
                        <option>Brown</option>
                        <option>Grey</option>
                        <option>Blue</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Check all that apply</td>
                    <td style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <input type="checkbox" id="over6" name="over6" value="6" />
                        <label htmlFor="over6"> Over 6 feet tall</label>
                      </div>
                      <div>
                        <input type="checkbox" id="over200" name="over200" value="200" />
                        <label htmlFor="over200"> Over 200 pounds</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        Describe your athletic ability:
                        <textarea
                          name=""
                          id=""
                          cols={30}
                          rows={5}
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} align="center">
                      <button>Enter my information</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </li>
        <li>
          <div>
            {/* <!-- 1 --> */}
            <p>
              <span>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 2 --> */}
            <p className={styles.black_bg}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 3 --> */}
            <p>
              <span>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 4 --> */}
            <p className={styles.black_bg}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 5 --> */}
            <p>
              <span>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 6 --> */}
            <p className={styles.black_bg}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 7 --> */}
            <p className={styles.paragraph_seven}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 8 --> */}
            <p>
              <span>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 9 --> */}
            <p>
              <span>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <!-- 10 --> */}
            <p>
              <span>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};
