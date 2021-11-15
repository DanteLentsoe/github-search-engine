import React, { useState, useEffect } from "react";
import {
  getUserData,
  getUserRepositories,
} from "../../providers/githubProvider";

import Navbar from "../../components/NavBar";
import UserInfos from "../../components/UserInfo";
import Repositories from "../../components/Repositories/Repositories";
import Tabs from "../../components/Tabs";

import Loading from "../../components/Loading";

type Params = {
  userName: string;
};

type UserMatch = {
  match: {
    isExact: Boolean;
    params: Params;
    path: string;
    url: string;
  };
};

const UserPage = ({ match }: UserMatch) => {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState([]);

  // get user name params
  const userNameParams = match.params.userName;

  useEffect(() => {
    fetchUser();
    fetchRepositories();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  // get user data
  async function fetchUser() {
    const { data } = await getUserData(userNameParams);
    setUser(data);
  }

  // get user repo from data
  async function fetchRepositories() {
    const { data } = await getUserRepositories(userNameParams);
    setRepositories(data);
  }

  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfos user={user} />
            <Tabs repos={repositories} user={user} />
            <Repositories repos={repositories} user={user} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserPage;
