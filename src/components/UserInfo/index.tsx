import React, { memo } from "react";
import {
  UserContainer,
  User,
  InformationContainer,
  Information,
} from "./styles";

const UserInfo = ({ user }: any) => (
  <UserContainer>
    <img
      src={user.avatar_url}
      className="p-2 avatar"
      width="130"
      height="130"
      alt="User"
    />
    <User>
      <h5>{user.name}</h5>
      <InformationContainer>
        {user.location && (
          <Information>
            <i className="fa fa-map-marker pr-1" />
            <span>{user.location} · </span>
          </Information>
        )}
        {user.blog && (
          <Information>
            <i className="fa fa-globe pr-1" />
            <span>{user.blog} · </span>
          </Information>
        )}
        {user.email && (
          <Information>
            <i className="fa fa-envelope pr-1" />
            <span>{user.email} · </span>
          </Information>
        )}
        {user.twitter_username && (
          <Information>
            <i className="fa fa-twitter pr-1" />
            <span>{user.twitter_username} · </span>
            <br />
          </Information>
        )}

        {user.followers && (
          <Information>
            <i className="fa fa-group" />
            <span>{user.followers} Followers · </span>
          </Information>
        )}
        {user.following && (
          <Information>
            <i className="fa fa-heart pr-1" />
            <span>{user.following} Following </span>
          </Information>
        )}
      </InformationContainer>
    </User>
  </UserContainer>
);

export default memo(UserInfo);
