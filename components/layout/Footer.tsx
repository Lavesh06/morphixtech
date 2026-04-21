import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 px-6 lg:px-20 bg-spaceBlack relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-syne font-bold tracking-tight mb-4 block">
            NEX<span className="text-electricBlue">CORE</span>
          </Link>
          <p className="text-white/60 max-w-sm font-dmsans">
            Engineering Tomorrow&apos;s Digital Infrastructure. We build scalable, secure, and visually stunning digital experiences.
          </p>
        </div>
        <div>
          <h4 className="font-syne font-bold text-lg mb-4 text-white">Company</h4>
          <ul className="space-y-2 flex flex-col text-white/60">
            <Link href="/about" className="hover:text-cyanGlow transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-cyanGlow transition-colors">Services</Link>
            <Link href="/work" className="hover:text-cyanGlow transition-colors">Our Work</Link>
            <Link href="/contact" className="hover:text-cyanGlow transition-colors">Contact</Link>
          </ul>
        </div>
        <div>
          <h4 className="font-syne font-bold text-lg mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-white/60 font-dmsans">
            <li>hello@nexcore.tech</li>
            <li>+91 98765 43210</li>
            <li>Jaipur, Rajasthan, India</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} NexCore Technologies. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
