import React, { useState, memo } from "react";

import { ToastsContainer, ToastsStore } from "react-toasts";
import "./ListeUsers.css";
import User from "../user/User";

function ListeUsers({ users, banni }) {
  const toast = (msg = null) => {
    if (msg === null) ToastsStore.success("Hey, success!");
    else ToastsStore.success("Hey!" + msg);
  };
  const toastError = (msg = null) => {
    if (msg === null) ToastsStore.error("Hey, error!");
    else ToastsStore.error("Hey!" + msg);
  };

  //const userAuth = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="Livreliste">
      <ToastsContainer store={ToastsStore} />
      <div className="table-title">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12"></div>
        </div>
      </div>
      <div className="contenu">
        <div className="headerContenu">
          <div>nom</div>
          <div>prenom</div>
          <div>Emprunts</div>
          <div>Banni</div>
        </div>
        <div className="BodyContenu">
          {users.map((user) => (
            <User key={user._id} user={user} users={users} banni={banni} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ListeUsers);
