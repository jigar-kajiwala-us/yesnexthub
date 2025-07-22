import { Suspense } from "react";
import UserStats from "./UserStats";
import Recent from "./Recent";
import Notification from "./Notification";

export default async function Sulo() {
    const api = async(): Promise<any[] | []> => {
    // let data: any[] | [] = [];
    return new Promise((resolve) =>
      setTimeout(async () => {
        //   console.log(data);
        resolve(await fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()).catch(() => []));
      }, 3000)
    );
  };
  //   const resdata = await api();
  const resdata = await api();
  return (
    <main>
      <h1>📊 Dashboard</h1>
      <h1>This is suspense-loading page component</h1>
      <hr />
      <Suspense fallback={<div>Loading stats...</div>}>
        <UserStats />
      {/* </Suspense> */}

      {/* <Suspense fallback={<div>Loading Recent...</div>}> */}
        <Recent />
      </Suspense>

      <Suspense fallback={<div>Loading notifications...</div>}>
        <Notification />
      </Suspense>
    </main>
  );
}
