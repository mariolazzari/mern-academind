import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mario Lazzari",
      image:
        "https://www.pexels.com/photo/village-beside-a-rock-formation-2365465/",
      places: 3
    }
  ];

  return <UserList items={USERS} />;
};

export default Users;
