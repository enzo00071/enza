import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-12 md:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white" />
          </div>

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Quer conhecer o OS Digital?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
              Fale com nosso atendente e veja se o sistema faz sentido para sua
              assistência. Sem pressão, só conversa.
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link
                href="https://wa.me/5521996595469"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
