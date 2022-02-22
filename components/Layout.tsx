import NavBar from "./NavBar";

interface LayoutData {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutData) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
