export default async function Notification() {
   const api = async(): Promise<any[] | []> => {
    // let data: any[] | [] = [];
    return new Promise((resolve) =>
      setTimeout(async () => {
        //   console.log(data);
        resolve(await fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()).catch(() => []));
      }, 1000)
    );
  };
  //   const resdata = await api();
  const resdata = await api();
//   console.log(resdata);
  return <div>Total Notification: {resdata?.length}</div>;
}
