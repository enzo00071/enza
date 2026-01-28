import { Smartphone, Shield, Wallet, Users } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Ordens de Serviço",
    description:
      "Controle completo do aparelho, status, valores e histórico de cada ordem de serviço.",
  },
  {
    icon: Shield,
    title: "Garantia",
    description:
      "Garantias vinculadas à OS com prazo configurável e alertas automáticos.",
  },
  {
    icon: Wallet,
    title: "Caixa",
    description:
      "Entradas, saídas e lucro automático. Tenha controle total das suas finanças.",
  },
  {
    icon: Users,
    title: "Clientes",
    description:
      "Histórico organizado e envio de OS pelo WhatsApp de forma simples e rápida.",
  },
];

export function Features() {
  return (
    <section id="recursos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            O que o OS Digital oferece
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Tudo que você precisa para gerenciar sua assistência técnica em um
            único lugar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
