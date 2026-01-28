import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="OS Digital Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              OS Digital
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="#recursos"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Recursos
            </Link>
            <Link
              href="#app"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              App
            </Link>
            <Link
              href="#garantia"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Garantia
            </Link>
            <Link
              href="#contato"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            OS Digital &copy; {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
