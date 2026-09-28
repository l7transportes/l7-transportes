export default function HowItWorks() {
  return (
    <section className="how-section" id="como-funciona">
      <div className="how-heading">
        <p>Como funciona</p>

        <h2>
          Contrate seu transporte
          <br />
          em 3 passos
        </h2>
      </div>

      <div className="how-steps">
        <article className="how-step">
          <span className="step-number">01</span>
          <h3>Entre em contato</h3>
          <p>Envie sua necessidade pelo WhatsApp.</p>
        </article>

        <span className="step-arrow" aria-hidden="true">
          →
        </span>

        <article className="how-step">
          <span className="step-number">02</span>
          <h3>Receba sua cotação</h3>
          <p>Nossa equipe analisa o serviço e envia todas as informações.</p>
        </article>

        <span className="step-arrow" aria-hidden="true">
          →
        </span>

        <article className="how-step">
          <span className="step-number">03</span>
          <h3>Agende seu transporte</h3>
          <p>
            Após a confirmação, deixamos tudo preparado para o horário
            combinado.
          </p>
        </article>
      </div>
    </section>
  );
}