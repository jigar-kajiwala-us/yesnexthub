import React from "react";

const HiUser = async ({ params }: { params: Promise<{ thisuser: string[] }> }) => {
  const { thisuser } = await params;
  console.log('%^&&*', thisuser);
  // return <div>{`Wow!, this is the user, xyz!`}</div>;
  return <div>{`Wow!, this is the user, ${thisuser}!`}</div>;
};

export default HiUser;
