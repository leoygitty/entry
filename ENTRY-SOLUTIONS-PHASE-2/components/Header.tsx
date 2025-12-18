import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Entry Solutions Door Installation"
            width={160}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/services">Services</Link>
          <Link href="/about">Why Choose Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
