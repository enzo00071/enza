import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Controle de ordens",
  "Gestão de garantias",
  "Caixa integrado",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col items-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Sistema completo para assistência técnica
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Sistema profissional de{" "}
              <span className="text-primary">Ordem de Serviço</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              O OS Digital organiza ordens, clientes, garantias e caixa em um
              único app, simples e feito para assistência técnica.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#contato">
                  Conhecer o app
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#recursos">Ver recursos</Link>
              </Button>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
              {/* Mock Dashboard */}
              <div className="absolute inset-0 flex flex-col">
                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Dashboard
                  </span>
                  <div className="w-12" />
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-6 w-32 rounded bg-muted" />
                    <div className="h-8 w-24 rounded-lg bg-primary/20" />
                  </div>

                  {/* Stats Grid */}
                  <div className="mb-4 grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-muted p-3">
                      <div className="mb-1 h-3 w-12 rounded bg-muted-foreground/20" />
                      <div className="h-6 w-16 rounded bg-primary/30" />
                    </div>
                    <div className="rounded-lg bg-muted p-3">
                      <div className="mb-1 h-3 w-12 rounded bg-muted-foreground/20" />
                      <div className="h-6 w-14 rounded bg-green-500/30" />
                    </div>
                    <div className="rounded-lg bg-muted p-3">
                      <div className="mb-1 h-3 w-12 rounded bg-muted-foreground/20" />
                      <div className="h-6 w-16 rounded bg-yellow-500/30" />
                    </div>
                  </div>

                  {/* List Items */}
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg bg-muted/50 p-3"
                      >
                        <div className="h-8 w-8 rounded-full bg-primary/20" />
                        <div className="flex-1">
                          <div className="mb-1 h-3 w-24 rounded bg-muted-foreground/20" />
                          <div className="h-2 w-16 rounded bg-muted-foreground/10" />
                        </div>
                        <div className="h-5 w-16 rounded-full bg-primary/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
