import { CheckCircle2 } from "lucide-react";

const appFeatures = [
  "Interface intuitiva e fácil de usar",
  "Acompanhe o status de cada ordem",
  "Notificações em tempo real",
  "Relatórios detalhados",
];

export function AppShowcase() {
  return (
    <section id="app" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* App Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
              {/* Phone Frame */}
              <div className="absolute inset-0 flex flex-col">
                {/* Status Bar */}
                <div className="flex items-center justify-between bg-primary px-4 py-2">
                  <span className="text-xs font-medium text-primary-foreground">
                    9:41
                  </span>
                  <div className="flex gap-1">
                    <div className="h-2 w-3 rounded-sm bg-primary-foreground/80" />
                    <div className="h-2 w-3 rounded-sm bg-primary-foreground/80" />
                    <div className="h-3 w-5 rounded-sm bg-primary-foreground" />
                  </div>
                </div>

                {/* App Header */}
                <div className="border-b border-border bg-primary px-4 pb-4 pt-2">
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    Ordens de Serviço
                  </h3>
                  <p className="text-xs text-primary-foreground/80">
                    4 ordens em andamento
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 bg-background p-4">
                  {[
                    { name: "iPhone 13 Pro", status: "Em análise", color: "bg-yellow-500" },
                    { name: "Samsung S22", status: "Aguardando peça", color: "bg-orange-500" },
                    { name: "Xiaomi 12", status: "Em reparo", color: "bg-primary" },
                    { name: "Motorola Edge", status: "Finalizado", color: "bg-green-500" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground">
                        #{String(i + 1).padStart(3, "0")}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Cliente {i + 1}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-medium text-white ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Nav */}
                <div className="flex items-center justify-around border-t border-border bg-card py-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-5 w-5 rounded bg-primary/30" />
                    <span className="text-[10px] text-primary">Ordens</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-5 w-5 rounded bg-muted" />
                    <span className="text-[10px] text-muted-foreground">
                      Clientes
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-5 w-5 rounded bg-muted" />
                    <span className="text-[10px] text-muted-foreground">
                      Caixa
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-5 w-5 rounded bg-muted" />
                    <span className="text-[10px] text-muted-foreground">
                      Perfil
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Um app feito para o dia a dia
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Desenvolvido pensando na rotina de quem trabalha com assistência
              técnica. Interface simples, funcionalidades completas.
            </p>

            <div className="space-y-4">
              {appFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
