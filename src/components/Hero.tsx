import {
  Clock3,
  LockKeyhole,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

type HeroProps = {
  whatsappNumber: string;
};

export default function Hero({ whatsappNumber }: HeroProps) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p>L7 TRANSPORTES</p>

        <h1>
          Transporte com
          <br />
          <span>
            segurança, pontualidade
            <br />e confiança
          </span>
        </h1>

        <p className="hero-description">
          Passageiros e entregas com atendimento profissional. Atendemos empresas,
          executivos, aeroportos, eventos, viagens e entregas.
        </p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} />
            Solicitar orçamento
          </a>
        </div>
      </div>

      <div className="hero-benefits">
        <div>
          <ShieldCheck />
          <span>
            Atendimento
            <br />
            profissional
          </span>
        </div>

        <div>
          <Clock3 />
          <span>Pontualidade</span>
        </div>

        <div>
          <LockKeyhole />
          <span>Segurança</span>
        </div>

        <div>
          <MapPin />
          <span>Campinas e região</span>
        </div>
      </div>
    </section>
  );
}