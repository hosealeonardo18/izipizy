import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Update = () => {
  return (
    <div className={style.customBody}>
      <main>
        <section>
          <div className="container mt-5">
            <form className="mx-5">
              <div className="mb-3">
                <div className={style.rectangle}>
                  <div>
                    <img
                      src={require("../../assets/images/profile/icon-image.png")}
                      alt=""
                      className={style.imageAdd}
                      id="customBtn"
                    />
                  </div>

                  <h5 className="text-muted" id="customBtn">
                    Add image
                  </h5>
                </div>
                <input
                  className={style.input}
                  type="file"
                  id="formFile"
                  style={{ display: "none" }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${style.input}`}
                  id="exampleInputEmail1"
                  placeholder="Title"
                  aria-describedby="emailHelp"
                  name="name_recipe"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control ${style.textArea}`}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Ingredients"
                  name="ingredients"
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  className={`form-control ${style.input}`}
                  id="exampleFormControlTextarea1"
                  rows="1"
                  placeholder="Video"
                  name="video"
                />
              </div>
              <div className="text-center">
                <button type="submit" className={`btn ${style.btnCustomArea}`}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Update;
