"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O OS Digital funciona no celular?",
    answer:
      "Sim. Funciona como aplicativo no celular (PWA). Você pode usar diretamente no navegador ou adicionar à tela inicial do seu smartphone para acesso rápido.",
  },
  {
    question: "Precisa instalar?",
    answer:
      "Não. Pode acessar pelo navegador e adicionar à tela inicial. Não ocupa espaço de armazenamento e está sempre atualizado.",
  },
  {
    question: "Serve para técnico autônomo?",
    answer:
      "Sim. Ideal para técnicos autônomos e lojas de todos os tamanhos. O sistema foi pensado para se adaptar à sua realidade.",
  },
  {
    question: "Funciona sem internet?",
    answer:
      "Algumas funções funcionam offline. Você pode consultar informações salvas mesmo sem conexão, e o sistema sincroniza quando a internet voltar.",
  },
];

export function FAQ() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o OS Digital
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
