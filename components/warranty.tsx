import { Shield, Clock, Bell, FileText } from "lucide-react";

const warrantyFeatures = [
  {
    icon: Shield,
    title: "Garantia vinculada",
    description: "Cada garantia é automaticamente vinculada à ordem de serviço.",
  },
  {
    icon: Clock,
    title: "Prazo configurável",
    description: "Defina o período de garantia de acordo com cada tipo de serviço.",
  },
  {
    icon: Bell,
    title: "Alertas automáticos",
    description: "Receba notificações quando garantias estiverem próximas do vencimento.",
  },
  {
    icon: FileText,
    title: "Histórico completo",
    description: "Acesse o histórico de garantias de cada cliente facilmente.",
  },
];

export function Warranty() {
  return (
    <section id="garantia" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Gestão de garantias simplificada
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Nunca mais perca o controle das garantias dos seus serviços. Tudo
            organizado e acessível.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {warrantyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
