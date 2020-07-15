import React, { useState, memo, useEffect } from "react";

import Menuvertical from "../menuVertical/Menuvertical";
import { fetchUsers, fetchUser } from "../../services/user.service";
import ListeUsers from "../ListeUsers/ListeUsers";
import { BallBeat } from "react-pure-loaders";
import "./Users.css";

function Users() {
  const [usersState, setUsers] = useState([]);
  const [loadingState, setloading] = useState(true);
  const banni = async (id, value) => {

    const newLivres = usersState.map(user =>
    {
        if(user.id==id)
         user.banni=value
        

         return user;
    }

  );
  return newLivres;
  }
  const banniFnct = async (id, value) => {
    const result = await banni(id, value);
    console.log(result)
    //alert("jj");
    setloading(true);
   
    setUsers(result);
    setloading(false);
  };

  useEffect(() => {
    const fetchdata = async () => {
      setloading(true);
      const result = await fetchUsers();
      setloading(false);

      //setUsers(result.data)
      setUsers(result);
    };
    fetchdata();
  }, []);

  return (
    <div className="Users">
      <div className="row">
        <div className="partiedroite col-lg-3">
          <Menuvertical />
        </div>
        <div className="partiedroite col-lg-9">
          {loadingState ? (
            <div>
              {" "}
              <BallBeat color={"#123abc"} loading={loadingState} />
            </div>
          ) : (
            <ListeUsers users={usersState} banni={banniFnct} />
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(Users);
