// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Jigar</h1>
        <h3>{new Date().toLocaleTimeString()}</h3>
        <hr />
        <Link className='p-4 bg-amber-300' href='/suspense-loading'>Go to loading-suspense</Link>
      </main>
  );
}
