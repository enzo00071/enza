import { TrendingUp, TrendingDown, PieChart, Calendar } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    label: "Entradas por serviço",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: TrendingDown,
    label: "Saídas com peças",
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    icon: PieChart,
    label: "Lucro automático",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Calendar,
    label: "Fechamento diário",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

export function FinancialControl() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Controle financeiro real
            </h2>
            <p className="mb-2 text-xl font-semibold text-foreground">
              Saiba exatamente quanto entra e quanto sai
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              Com o módulo de caixa você acompanha tudo em tempo real.
              Informação clara para decisões melhores.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background p-4"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${feature.bg}`}
                  >
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <span className="font-medium text-foreground">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Financial Dashboard */}
          <div className="rounded-2xl border border-border bg-background p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Resumo do Caixa</h3>
              <span className="text-sm text-muted-foreground">Hoje</span>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-green-50 p-4">
                <p className="mb-1 text-sm text-green-700">Entradas</p>
                <p className="text-2xl font-bold text-green-600">R$ 1.850,00</p>
              </div>
              <div className="rounded-xl bg-red-50 p-4">
                <p className="mb-1 text-sm text-red-700">Saídas</p>
                <p className="text-2xl font-bold text-red-500">R$ 420,00</p>
              </div>
            </div>

            <div className="rounded-xl bg-primary/5 p-4">
              <p className="mb-1 text-sm text-primary">Lucro do dia</p>
              <p className="text-3xl font-bold text-primary">R$ 1.430,00</p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                <span className="text-sm text-foreground">Troca de tela iPhone 13</span>
                <span className="font-medium text-green-600">+ R$ 650,00</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                <span className="text-sm text-foreground">Compra de peças</span>
                <span className="font-medium text-red-500">- R$ 180,00</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                <span className="text-sm text-foreground">Reparo Samsung A54</span>
                <span className="font-medium text-green-600">+ R$ 380,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
