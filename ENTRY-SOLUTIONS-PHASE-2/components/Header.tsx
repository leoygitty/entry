import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">Entry Solutions LLC</Link>
        <nav className="space-x-4">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}