import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/engineering", label: "Engineering" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-shell py-6">
      <nav className="glass-panel flex flex-wrap items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.16em]">
          Raiyan Bhuiya
        </Link>
        <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className="nav-pill" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
