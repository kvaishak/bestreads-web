import React from "react";
import { useAuth } from "../../utils/firebase/AuthContext";

import Layout from "../Layout/Layout";
import ProfileUI from "../../components/ProfileUI/ProfileUI";

const Profile = () => {
  const { currentUser } = useAuth();
  const username = fetchUserName(currentUser);

  return (
    <Layout>
      <ProfileUI userName={username} />
    </Layout>
  );
};

const fetchUserName = (currentUser) => {
  let username = "Anonymous";
  if (currentUser) {
    username = currentUser.displayName
      ? currentUser.displayName
      : currentUser.email.split("@")[0];
  }
  return username;
};

export default Profile;
