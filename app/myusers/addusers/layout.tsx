import './addusers.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='box m-5 underline'>
        <main>{children}</main>
      </div>
    </>
  );
}
