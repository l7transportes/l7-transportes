import { ArrowUp, MessageCircle } from "lucide-react";

type FloatingButtonsProps = {
  whatsappNumber: string;
};

export default function FloatingButtons({
  whatsappNumber,
}: FloatingButtonsProps) {
  return (
    <>
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a L7 Transportes pelo WhatsApp"
      >
        <MessageCircle />
      </a>

      <a className="back-to-top" href="#inicio" aria-label="Voltar ao início">
        <ArrowUp />
      </a>
    </>
  );
}