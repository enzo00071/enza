import { ShieldCheck, FileCheck, Award, Clock } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    text: "Evitar conflitos com clientes",
  },
  {
    icon: FileCheck,
    text: "Ter tudo documentado",
  },
  {
    icon: Award,
    text: "Passar mais credibilidade",
  },
  {
    icon: Clock,
    text: "Economizar tempo",
  },
];

export function WhyUse() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Por que usar um sistema de OS?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Seu cliente confia mais quando vê organização. Usar um sistema de
              Ordem de Serviço mostra que sua assistência é séria, organizada e
              profissional.
            </p>
            <p className="text-lg font-medium text-foreground">
              O OS Digital ajuda você a:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
