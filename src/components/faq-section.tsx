import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "QUAL O PRAZO DE ENTREGA DA ESTRUTURA?",
    answer: "Trabalhamos com agilidade extrema. Após o envio de todas as informações, entregamos sua landing page pronta para rodar tráfego em até 7 dias úteis."
  },
  {
    question: "EU PRECISO PAGAR MENSALIDADE?",
    answer: "Não. A estrutura é sua. Diferente de plataformas de assinatura, aqui você paga apenas uma vez pelo desenvolvimento e a página é sua para sempre."
  },
  {
    question: "O SITE É RESPONSIVO PARA CELULAR?",
    answer: "Sim. Mais de 80% do tráfego hoje vem do mobile. Sua página será otimizada para carregar instantaneamente e ter uma conversão impecável em qualquer smartphone."
  },
  {
    question: "VOCÊS FAZEM O DESIGN E A COPY?",
    answer: "Sim. Nossa proposta é entregar a solução completa. Nós desenvolvemos o design estratégico e a estrutura de copy focada em vendas."
  },
  {
    question: "COMO FUNCIONA O SUPORTE PÓS-ENTREGA?",
    answer: "Damos total suporte para a configuração do seu domínio e garantimos que tudo esteja funcionando 100%. Além disso, oferecemos 2 rodadas de alterações gratuitas após a entrega."
  }
];

const FAQSection = () => {
  return (
    <section className="w-full bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">DÚVIDAS FREQUENTES</p>
          <h2 className="mt-3 text-4xl font-black text-white uppercase sm:text-5xl">
            PERGUNTAS <span className="text-primary">TÁTICAS</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-primary/20 bg-[#0A0A0A] px-6 rounded-xl overflow-hidden">
              <AccordionTrigger className="text-left text-white font-bold hover:text-primary transition-colors hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
