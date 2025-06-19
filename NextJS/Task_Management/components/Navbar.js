import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee", marginBottom: "20px" }}>
      <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link href="/about" style={{ marginRight: "15px" }}>About</Link>
      <Link href='/contact' >Contact</Link>
    </nav>
  );
};

export default Navbar;