import React from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "./PostList";
import UserProfile from "./UserProfile";
function User() {
  return (
    <Switch>
      <Route path={"/users/:userId/posts"}>
        <PostList />
      </Route>
      <Route path={"/users/:userId"}>
        <UserProfile />
      </Route>
    </Switch>
  );
}
export default User;
