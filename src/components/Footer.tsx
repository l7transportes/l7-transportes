import { Camera, Mail, MapPin, Phone } from "lucide-react";

type FooterProps = {
  whatsappNumber: string;
  email: string;
  instagramUrl: string;
};

export default function Footer({ whatsappNumber, email, instagramUrl, }: FooterProps) {
  const instagramUser = instagramUrl.split("/").filter(Boolean).pop();

  return (
    <footer className="site-footer" id="contato">
      <div className="footer-main">
        <a className="footer-logo" href="#inicio" aria-label="L7 Transportes">
          <img src="/Logo.png" alt="L7" />

          <span>
            <strong>TRANSPORTES</strong>
            <small>PASSAGEIROS E ENTREGAS</small>
          </span>
        </a>

        <div className="footer-column">
          <h3>Serviços</h3>

          <a href="#servicos">Transporte de passageiros</a>
          <a href="#servicos">Transporte corporativo</a>
          <a href="#servicos">Aeroportos e viagens</a>
          <a href="#servicos">Entregas</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contato</h3>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={17} />
            (19) 97828-3638
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da L7 Transportes"
          >
            <Camera size={17} />
            @{instagramUser}
          </a>

          <a href={`mailto:${email}`}>
            <Mail size={17} />
            {email}
          </a>

          <span>
            <MapPin size={17} />
            Barão Geraldo / Campinas - SP
          </span>
        </div>

        <strong className="footer-slogan">
          L7 Transportes — seu destino, nosso compromisso.
        </strong>
      </div>

      <div className="footer-bottom">
        © 2026 L7 Transportes. Todos os direitos reservados.
      </div>
    </footer>
  );
}