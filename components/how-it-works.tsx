import { Smartphone, FileText, Settings, Activity, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "O cliente chega com o aparelho",
    description: "Receba o equipamento do cliente para avaliação",
  },
  {
    icon: FileText,
    title: "Você cria a Ordem de Serviço",
    description: "Registre tudo no app de forma rápida e simples",
  },
  {
    icon: Settings,
    title: "Define serviço, valor e garantia",
    description: "Configure todos os detalhes do reparo",
  },
  {
    icon: Activity,
    title: "Acompanha o status do reparo",
    description: "Monitore o andamento em tempo real",
  },
  {
    icon: CheckCircle,
    title: "Finaliza e entrega com tudo registrado",
    description: "Encerre a OS com documentação completa",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Como funciona na prática
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Simples, rápido e profissional.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col items-center gap-6 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`inline-block rounded-2xl bg-background p-6 shadow-sm border border-border ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <step.icon className="h-6 w-6" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
