import { User, Smartphone, Wrench, Camera, DollarSign, Shield } from "lucide-react";

const details = [
  { icon: User, label: "Dados do cliente" },
  { icon: Smartphone, label: "Aparelho e defeito" },
  { icon: Wrench, label: "Serviço realizado" },
  { icon: Camera, label: "Fotos do aparelho" },
  { icon: DollarSign, label: "Valores e garantia" },
  { icon: Shield, label: "Histórico completo" },
];

export function SystemDetails() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {details.map((detail, index) => (
                <div
                  key={detail.label}
                  className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <detail.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {detail.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Tudo registrado em cada OS
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Cada ordem de serviço guarda todas as informações importantes do
              atendimento. Do primeiro contato até a entrega final.
            </p>
            <p className="text-xl font-semibold text-primary">
              Nada fica perdido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
