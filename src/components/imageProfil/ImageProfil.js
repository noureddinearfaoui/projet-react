import React, { useState, memo, useEffect } from "react";

import "./ImageProfil.css";

import { updateUser } from "../../services/user.service";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

function ImageProfil() {
  const [file, setFile] = useState("");
  const [showProgress, setshowProgress] = useState(false);
  const [loadingPercent, setloadingPercent] = useState(0);
  const [image, setImage] = useState("#");
  useEffect(() => {
    const userDetails = () => {
      const userAuth = JSON.parse(sessionStorage.getItem("user"));

      setImage(userAuth.image);
    };
    userDetails();
  }, []);
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const plusNombre = (nb, plus) => {
    return nb + plus;
  };
  const charger = async () => {
    let i = 0;
    while (i < 80) {
      i = await plusNombre(i, 20);
      await delay(1000);
      await setloadingPercent(i);
    }
  };

  const AppliquerImage = async () => {
    if (file === "") alert("charger image");
    else {
      setshowProgress(true);
      await charger();
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        setImage(reader.result);
        await delay(3000);
        setloadingPercent(100);
        await delay(1000);
        setshowProgress(false);
      };
      reader.onerror = () => alert("errpr");
    }
  };
  const SaveImage = () => {
    if (file === "") alert("charger image");
    else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
        var userAuth = JSON.parse(sessionStorage.getItem("user"));
        userAuth.image = image;
        const res = updateUser(userAuth);
        console.log(res + "img");
      };
      reader.onerror = () => alert("errpr");
    }
  };

  return (
    <div className="ImageProfil ">
      <div className="row">
        <div className="col-lg-12">
          <div className="card w-75 mb-3">
            <div className="card text-center">
              <div className="card-header ">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <div className="nav-link active" href="#">
                      Photo
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="card-title">
                  {showProgress ? (
                    <Progress
                      type="circle"
                      percent={loadingPercent}
                      status="success"
                    />
                  ) : (
                    <img
                      src={image}
                      className="avatar   img-circle"
                      alt="avatar"
                    />
                  )}
                </div>
                <div className="card-text">
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                      <label className="custom-file-label">Choose file</label>
                    </div>
                  </div>
                </div>
                <div className="btns">
                  <button
                    className="btn btn-lg btn-primary btnMargin"
                    type="submit"
                    onClick={AppliquerImage}
                  >
                    Appliquer
                  </button>
                  <button
                    className="btn btn-lg btn-danger btnMargin"
                    id="btn"
                    type="submit"
                    onClick={SaveImage}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ImageProfil);
