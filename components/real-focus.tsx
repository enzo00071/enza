import { Target, Zap, Heart } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Foco na assistência técnica",
    description: "Criado especificamente para a rotina de reparos",
  },
  {
    icon: Zap,
    title: "Simples e direto",
    description: "Sem complicação, funciona do jeito que você precisa",
  },
  {
    icon: Heart,
    title: "Pensado em cada detalhe",
    description: "Cada função foi criada para facilitar seu trabalho",
  },
];

export function RealFocus() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Um sistema pensado para o dia a dia real
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            O OS Digital foi criado com foco na rotina de assistência técnica,
            não é sistema genérico. Cada detalhe foi pensado para facilitar seu
            trabalho.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
