export default function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-image">
        <img
          src="/sobre-nos.png"
          alt="Atendimento executivo da L7 Transportes"
        />
      </div>

      <div className="about-content">
        <p className="about-label">Sobre nós</p>

        <p>
          Com base em <strong>Barão Geraldo, Campinas</strong>, a{" "}
          <strong>L7 Transportes</strong> oferece transporte executivo
          particular para <strong>São Paulo e cidades do interior</strong>,
          atendendo viagens programadas, compromissos profissionais, eventos e
          deslocamentos personalizados.
        </p>

        <p>
          Contamos com motoristas que possuem{" "}
          <strong>mais de 10 anos de experiência no setor</strong>, preparados
          para oferecer um atendimento responsável, pontual e discreto. Nossos
          veículos são confortáveis, higienizados e cuidadosamente preparados
          para cada viagem.
        </p>

        <p>
          Planejamos cada trajeto com atenção aos detalhes, garantindo
          segurança, tranquilidade e eficiência do embarque ao destino.
        </p>

        <strong className="about-slogan">
          L7 Transportes — seu destino, nosso compromisso.
        </strong>
      </div>
    </section>
  );
}