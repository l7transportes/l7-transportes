import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

const nav = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Sobre nós", "#sobre"],
  ["Como funciona", "#como-funciona"],
  ["Contato", "#contato"],
];

type HeaderProps = {
  whatsappNumber: string;
};

export default function Header({ whatsappNumber }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const clickedSection = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
  setScrolled(window.scrollY > 20);
  if (clickedSection.current) {
  setActiveSection(clickedSection.current);
  return;
}

  
  const reachedPageEnd =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 10;

  let currentSection = "inicio";

  nav.forEach(([, href]) => {
    const section = document.querySelector<HTMLElement>(href);

    if (
  section &&
  section.getBoundingClientRect().top <= window.innerHeight * 0.4
) {
      currentSection = href.slice(1);
    }
  });

  if (reachedPageEnd) {
    currentSection = "contato";
  }

  setActiveSection(currentSection);
};

    const handleScrollEnd = () => {
  clickedSection.current = null;

    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  return (
    <header className={scrolled ? "header header-scrolled" : "header"}>
      <div className="nav-row">
        <a className="brand" href="#inicio" aria-label="L7 Transportes início">
          <img src="/Logo.png" alt="L7" />

          <span>
            <strong>TRANSPORTES</strong>
            <small>PASSAGEIROS E ENTREGAS</small>
          </span>
        </a>

        <nav className="desktop-nav">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? "active" : ""}
              onClick={() => {
              const sectionId = href.slice(1);

              clickedSection.current = sectionId;
              setActiveSection(sectionId);}}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={19} />
          Solicitar orçamento
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}