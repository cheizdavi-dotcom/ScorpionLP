import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "QUAL O PRAZO DE ENTREGA DO SITE?",
    answer: "Trabalhamos com agilidade para colocar seu negócio no ar. Após o envio de todas as informações necessárias, entregamos seu projeto pronto em até 7 dias úteis."
  },
  {
    question: "HÁ CUSTO DE MENSALIDADE?",
    answer: "Não. O site é seu. Diferente de plataformas de assinatura, aqui você faz um investimento único pelo desenvolvimento e a página é sua permanentemente."
  },
  {
    question: "O SITE FUNCIONA BEM NO CELULAR?",
    answer: "Sim. Hoje a grande maioria do tráfego vem de dispositivos móveis. Seu site é totalmente otimizado para carregar rápido e funcionar perfeitamente em qualquer smartphone."
  },
  {
    question: "O SERVIÇO INCLUI O DESIGN E OS TEXTOS?",
    answer: "Sim. Entregamos a solução completa. Desenvolvemos tanto o visual moderno quanto a escrita focada em guiar o cliente para o fechamento."
  },
  {
    question: "COMO FUNCIONA O SUPORTE APÓS A ENTREGA?",
    answer: "Damos suporte total para a configuração do seu domínio e garantimos que tudo esteja funcionando corretamente. Oferecemos também um período para ajustes finais após a entrega."
  }
];

const FAQSection = () => {
  return (
    <section className="w-full bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">DÚVIDAS FREQUENTES</p>
          <h2 className="mt-3 text-4xl font-black text-white uppercase sm:text-5xl">
            PERGUNTAS <span className="text-primary">COMUNS</span>
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
