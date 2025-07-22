export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='p-5 bg-fuchsia-100'>
        <main>{children}</main>
      </div>
    </>
  );
}