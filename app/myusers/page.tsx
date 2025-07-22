import Link from "next/link";
import React from "react";
import UserButton from "../components/UserButton";
import UsersCard from "../components/UsersCard";

// const MyUsers = async ({params}: { params: Promise<{ thisuser?: string }> }) => {
const MyUsers = () => {
  // const { thisuser } = await params;
  // console.warn('this user from myuser : ', thisuser);
  return (
    <div>
      <h1>My Users</h1>
      <Link href='/myusers/addusers'>Go to Add Users</Link>
      <UserButton />
      <h3>{new Date().toLocaleTimeString()}</h3>
      <hr />
      <h2>This is users list - as card from userscard component</h2>
      <UsersCard />
    </div>
  );
};

export default MyUsers;
