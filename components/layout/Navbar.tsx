import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/5 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-syne font-bold tracking-tight">
        NEX<span className="text-electricBlue">CORE</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
        <Link href="/services" className="hover:text-cyanGlow transition-colors">Services</Link>
        <Link href="/work" className="hover:text-cyanGlow transition-colors">Work</Link>
        <Link href="/about" className="hover:text-cyanGlow transition-colors">About</Link>
        <Link href="/contact" className="hover:text-cyanGlow transition-colors">Contact</Link>
      </div>
      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
