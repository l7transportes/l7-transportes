import { Building2, Package, Plane, UserRound } from "lucide-react";

type ServicesProps = {
  whatsappNumber: string;
};
export default function Services({ whatsappNumber }: ServicesProps) {
  const createWhatsappLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (
    <section className="services-section" id="servicos">
      <div className="services-heading">
        <p>— Como podemos ajudar?</p>
        <h2>Nossos serviços</h2>
      </div>

      <div className="services-cards">
        <article className="service-card">
          <img src="/particular-novo.png" alt="Transporte de passageiros" />

          <div className="service-card-content">
            <UserRound />
            <small>Passageiros</small>
            <h3>Transporte de passageiros</h3>

            <p>
              Transporte particular para empresas, executivos, aeroportos,
              eventos e viagens.
            </p>

            <button
              type="button"
              onClick={() =>
                window.open(
                  createWhatsappLink(
                    "Olá! Meu nome é ______ e gostaria de solicitar um transporte de passageiros."
                  ),
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Solicitar transporte <span>→</span>
            </button>
          </div>
        </article>

        <article className="service-card">
          <img src="/corporativo-novo.png" alt="Transporte corporativo" />

          <div className="service-card-content">
            <Building2 />
            <small>Empresas</small>
            <h3>Transporte corporativo</h3>

            <p>
              Atendimento para empresas, colaboradores, clientes e executivos.
            </p>

            <button
              type="button"
              onClick={() =>
                window.open(
                  createWhatsappLink(
                    "Olá! Meu nome é ______ e gostaria de solicitar um orçamento para transporte corporativo."
                  ),
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Solicitar orçamento <span>→</span>
            </button>
          </div>
        </article>

        <article className="service-card">
          <img src="/aviaoaeroporto.png" alt="Aeroportos e viagens" />

          <div className="service-card-content">
            <Plane />
            <small>Viagens</small>
            <h3>Aeroportos e viagens</h3>

            <p>Traslados para aeroportos e viagens intermunicipais.</p>

            <button
              type="button"
              onClick={() =>
                window.open(
                  createWhatsappLink(
                    "Olá! Meu nome é ______ e gostaria de consultar um transporte para aeroporto ou viagem."
                  ),
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Consultar serviço <span>→</span>
            </button>
          </div>
        </article>

        <article className="service-card">
          <img src="/entregamoto.png" alt="Serviço de entregas" />

          <div className="service-card-content">
            <Package />
            <small>Entregas</small>
            <h3>Entregas</h3>

            <p>Entregas rápidas de documentos, mercadorias e encomendas.</p>

            <button
              type="button"
              onClick={() =>
                window.open(
                  createWhatsappLink(
                    "Olá! Meu nome é ______ e gostaria de solicitar um serviço de entrega."
                  ),
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Solicitar entrega <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}