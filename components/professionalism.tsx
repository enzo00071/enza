import { Sparkles } from "lucide-react";

export function Professionalism() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-background to-primary/10 p-8 md:p-16">
          <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/5" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-48 w-48 rounded-full bg-primary/5" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Profissional desde o primeiro contato
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              O OS Digital não é só um app.
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              É uma forma de trabalhar com mais organização, clareza e
              confiança.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Quem usa sistema passa mais segurança para o cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
