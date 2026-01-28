import { X, Check } from "lucide-react";

const beforeItems = [
  "Anotações em papel",
  "Mensagens perdidas no WhatsApp",
  "Falta de controle financeiro",
  "Cliente desconfiado",
];

const afterItems = [
  "Ordens organizadas",
  "Histórico completo",
  "Garantias registradas",
  "Mais confiança e profissionalismo",
];

export function BeforeAfter() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Antes e Depois do OS Digital
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
            <h3 className="mb-6 text-xl font-bold text-destructive">
              Antes do OS Digital
            </h3>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="mb-6 text-xl font-bold text-primary">
              Depois do OS Digital
            </h3>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
