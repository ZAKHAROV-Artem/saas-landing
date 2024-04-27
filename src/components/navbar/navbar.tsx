import { Logo, AuthButtons } from ".";

export default function Navbar() {
  return (
    <nav className="flex min-h-24 items-center justify-between px-12">
      <Logo />
      <AuthButtons />
    </nav>
  );
}
