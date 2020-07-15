import React, { useState, memo, useEffect } from "react";
import Menuvertical from "../menuVertical/Menuvertical";
import ImageProfil from "../imageProfil/ImageProfil";
import "./Profil.css";
import { useForm } from "react-hook-form";
import { updateUser } from "../../services/user.service";

import "react-sweet-progress/lib/style.css";

import { IoIosAlert } from "react-icons/io";

function Profil() {
  const { register, handleSubmit, errors } = useForm();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateN, setDateN] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userDetails = () => {
      const userAuth = JSON.parse(sessionStorage.getItem("user"));

      setNom(userAuth.nom);
      setPrenom(userAuth.prenom);
      setTel(userAuth.tel);
      setAdresse(userAuth.adresse);
      setEmail(userAuth.email);
      setDateN(userAuth.dateNaissance);
    };
    userDetails();
  }, []);

  const onSubmit = () => {
    var userAuth = JSON.parse(sessionStorage.getItem("user"));
    userAuth.nom = nom;
    userAuth.prenom = prenom;
    userAuth.adresse = adresse;
    userAuth.dateNaissance = dateN;
    userAuth.tel = tel;
    userAuth.email = email;
    console.log(userAuth + "11");

    const res = updateUser(userAuth);
    console.log(res);
  };

  /*<input type="file" name="file" onChange={e => setFile(e.target.files[0])}/>
        <button onClick={submitForm}>submit</button>
        <img src={image}  ></img>*/
  return (
    <div className="Profil container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <Menuvertical />
        </div>
        <div className="col-lg-8">
          <div className="card text-center ">
            <div className="card-header   ">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <div className="nav-link active bg-link" href="#">
                    Infos
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="form-group col-lg-6">
                  <div className="">
                    <label>
                      <h4>Nom</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="nom"
                      id="nom"
                      placeholder="Nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      ref={register({
                        required: true,
                        maxLength: 100,
                        minLength: 4,
                      })}
                    />
                    {errors.nom && (
                      <span className="text-danger text-error">
                        <IoIosAlert />
                        votre nom est invalide{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group col-lg-6">
                  <div className="">
                    <label>
                      <h4>Prenom</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="prenom"
                      id="prenom"
                      placeholder="Prenom"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      ref={register({
                        required: true,
                        maxLength: 100,
                        minLength: 4,
                      })}
                    />
                    {errors.prenom && (
                      <span className="text-danger text-error">
                        <IoIosAlert />
                        votre prenom est invalide{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-6">
                  <div className="">
                    <label>
                      <h4>Tel</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="tel"
                      id="tel"
                      placeholder="Tel"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      ref={register({
                        required: true,
                        maxLength: 100,
                        minLength: 4,
                      })}
                    />
                    {errors.tel && (
                      <span className="text-danger text-error">
                        <IoIosAlert />
                        le numero est obligatoire{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group col-lg-6">
                  <div className="">
                    <label>
                      <h4>Adresse</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="adresse"
                      id="adresse"
                      placeholder="Adresse"
                      value={adresse}
                      onChange={(e) => setAdresse(e.target.value)}
                      ref={register({ required: true })}
                    />
                    {errors.adresse && (
                      <span className="text-danger text-error">
                        <IoIosAlert />
                        l'adresse est obligatoire{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-6">
                  <div className="">
                    <label>
                      <h4>Email</h4>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="text-danger text-error">
                        <IoIosAlert />
                        l'email est obligatoire{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group col-lg-6">
                  <div className="">
                    <label>
                      <h4>Date de naissance</h4>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateN"
                      id="dateN"
                      placeholder="PdateNrenom"
                      value={dateN}
                      onChange={(e) => setDateN(e.target.value)}
                      ref={register({ required: true })}
                    />
                    {errors.dateN && (
                      <span className="text-danger text-error">
                        <IoIosAlert />
                        la date de naissance est obligatoire{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <button
                className="btn btn-lg btn-secondary"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </button>
            </div>
          </div>
          <ImageProfil />
        </div>
      </div>
    </div>
  );
}

export default memo(Profil);
