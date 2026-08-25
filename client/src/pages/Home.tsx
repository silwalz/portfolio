/**
 * Estilo Caderno de Decisão: editorial de pesquisa com assimetria disciplinada,
 * contraste calmo e marcas de evidência em verde para comunicar produto e dados.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const assets = {
  mark: "assets/silvia-mark.png",
  hero: "assets/silvia-hero-editorial.png",
  impact: "assets/silvia-impact-visual.png",
  method: "assets/silvia-method-visual.png",
};

const capabilities = [
  {
    number: "01",
    title: "Estratégia & Discovery",
    detail:
      "Visão de produto, Continuous Discovery, validação de hipóteses, jornada do usuário e análise de mercado.",
    tags: ["Product Discovery", "User Research", "Benchmarking"],
  },
  {
    number: "02",
    title: "Delivery & Governança",
    detail:
      "Priorização, gestão de backlog, histórias de usuário, critérios de aceite, OKRs e processos ágeis.",
    tags: ["RICE", "Scrum / Kanban", "BPMN"],
  },
  {
    number: "03",
    title: "Dados & Analytics",
    detail:
      "Leitura quanti-quali, SQL, dashboards de produto e mapeamento de métricas de negócio e engajamento.",
    tags: ["SQL", "Looker Studio", "KPIs"],
  },
];

const experience = [
  {
    period: "2023 — presente",
    company: "Instituto Brasileiro de Pesquisa e Análise de Dados · IBPAD",
    role: "Product Manager / Product Owner",
    location: "Remoto · Brasília",
    description:
      "Estruturação e governança do ciclo de vida de produtos de dados e mídias, da concepção à entrega contínua.",
    evidence: [
      { label: "Contexto", value: "Mais de 6 produtos de dados e mídias conduzidos em paralelo, com diferentes níveis de complexidade." },
      { label: "Decisão", value: "Continuous Discovery, pesquisa com usuários, OKRs, KPIs e priorização de backlog com RICE e Scrum/Kanban." },
      { label: "Impacto", value: "Dashboards em Looker Studio e SQL para previsibilidade; contribuição para +60 pontos no NPS organizacional." },
    ],
  },
  {
    period: "2021 — 2022",
    company: "Bespoke Agency",
    role: "Social Media & Community Manager",
    location: "Remoto · São Paulo",
    description:
      "Gestão de canais digitais orientada por comportamento da audiência, testes e otimização de conversão e engajamento.",
    evidence: [
      { label: "Contexto", value: "Canais digitais com grande volume de interações e necessidade de acompanhar o comportamento da audiência." },
      { label: "Decisão", value: "Planejamento estratégico baseado em testes, validação de hipóteses e inteligência de mercado." },
      { label: "Impacto", value: "Otimização contínua de conversão e engajamento, compartilhando métricas de performance com clientes." },
    ],
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{label}</p>
      <h2>{title}</h2>
      {description ? <p className="section-intro">{description}</p> : null}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <img src={assets.mark} alt="" />
          <span>Silvia Walz</span>
        </a>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#trajetoria" onClick={closeMenu}>Trajetória</a>
          <a href="#metodo" onClick={closeMenu}>Método</a>
          <a href="#impacto" onClick={closeMenu}>Impacto</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>

        <a className="header-link" href="mailto:silvia.r.walz@gmail.com">
          <span>Vamos conversar</span><ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={21} />}
        </button>
      </header>

      <aside className="document-spine" aria-hidden="true">
        <span>00</span><i /><span>01</span><i /><span>02</span><i /><span>03</span><i /><span>04</span><i /><span>05</span>
      </aside>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-rule" />
          <div className="hero-copy reveal">
            <p className="eyebrow"><span />Product Manager · Product Owner</p>
            <h1>Produtos relevantes começam com a <em>pergunta certa.</em></h1>
            <p className="hero-description">
              Transformo pesquisa, dados e estratégia em decisões de produto que aproximam pessoas, negócio e entregas de valor.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:silvia.r.walz@gmail.com">
                Entrar em contato <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#trajetoria">
                Ver trajetória <ArrowDownRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-art reveal-delay">
            <div className="art-label art-label-top">Pesquisa → decisão → entrega</div>
            <img src={assets.hero} alt="Composição editorial abstrata sobre pesquisa, métricas e estratégia de produto" />
            <div className="hero-marker marker-one" />
            <div className="hero-marker marker-two" />
            <div className="art-label art-label-bottom">Produto orientado por evidências</div>
          </div>

          <aside className="hero-note reveal-delay-2">
            <p>Base</p>
            <strong>Jaraguá do Sul, SC</strong>
            <span>Atuação remota em produtos, dados e mídias.</span>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Indicadores profissionais">
          <div className="proof-item">
            <strong>3<span>+</span></strong><p>anos conectando estratégia e execução em produtos digitais e de dados.</p>
          </div>
          <div className="proof-item">
            <strong>6<span>+</span></strong><p>produtos de alta complexidade conduzidos simultaneamente.</p>
          </div>
          <div className="proof-item proof-highlight">
            <strong>+60</strong><p>pontos no NPS organizacional, com foco em experiência e retenção.</p>
          </div>
        </section>

        <section className="trajectory-section" id="trajetoria">
          <div className="side-index" aria-hidden="true">
            <span>01</span><i />
            <span>02</span><i />
            <span>03</span>
          </div>
          <SectionHeading
            label="Trajetória"
            title="Da escuta à operação: produto como prática de síntese."
            description="Experiência em ambientes de dados e mídias, com uma abordagem que une pesquisa, priorização e acompanhamento rigoroso de resultados."
          />

          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-entry" key={item.company}>
                <div className="experience-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item.period}</p>
                </div>
                <div className="experience-content">
                  <div className="experience-title-row">
                    <div>
                      <h3>{item.company}</h3>
                      <p className="role">{item.role}</p>
                    </div>
                    <p className="location"><MapPin size={15} aria-hidden="true" />{item.location}</p>
                  </div>
                  <p className="experience-description">{item.description}</p>
                  <div className="evidence-grid">
                    {item.evidence.map((note) => (
                      <div className="evidence-note" key={note.label}>
                        <span>{note.label}</span>
                        <p>{note.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="method-section" id="metodo">
          <p className="section-rail" aria-hidden="true">02 — Método</p>
          <div className="method-content">
            <SectionHeading
              label="Método"
              title="Estruturo o caminho entre uma necessidade e uma entrega que faz sentido."
              description="Uma prática de produto que começa pelo contexto, transforma hipóteses em decisões e torna o progresso visível por meio de métricas compartilhadas."
            />
            <div className="method-principles">
              <p><span>Contexto</span> Entender pessoas, mercado e restrições antes de propor solução.</p>
              <p><span>Clareza</span> Traduzir descoberta em priorização, backlog e critérios acionáveis.</p>
              <p><span>Aprendizado</span> Medir o que importa e ajustar a rota junto às partes interessadas.</p>
            </div>
          </div>
          <figure className="method-figure">
            <img src={assets.method} alt="Ilustração abstrata que representa pesquisa, descoberta e síntese" />
            <figcaption>Contexto, hipótese, evidência.</figcaption>
          </figure>
        </section>

        <section className="capabilities-section">
          <p className="section-rail" aria-hidden="true">03 — Competências</p>
          <SectionHeading
            label="Competências"
            title="Repertório para orientar o ciclo completo de produto."
          />
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.number}>
                <p className="capability-number">{capability.number}</p>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.detail}</p>
                  <div className="tags">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="impact-section" id="impacto">
          <p className="section-rail section-rail-light" aria-hidden="true">04 — Impacto</p>
          <div className="impact-copy">
            <p className="eyebrow eyebrow-light"><span />Impacto em foco</p>
            <h2>Métricas não são o fim da história. São a forma de saber se ela avançou.</h2>
            <p>
              No IBPAD, a evolução da experiência e da satisfação do cliente contribuiu para um aumento de <strong>60 pontos no NPS organizacional</strong>, mantendo pontuação máxima em comunicação e pontualidade.
            </p>
            <a className="impact-link" href="mailto:silvia.r.walz@gmail.com">Conversar sobre desafios de produto <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="impact-art">
            <img src={assets.impact} alt="Visual abstrato que representa crescimento orientado por métricas" />
            <div className="impact-stat"><span>Resultado</span><strong>+60</strong><small>pontos no NPS</small></div>
          </div>
        </section>

        <section className="education-section">
          <p className="section-rail" aria-hidden="true">05 — Formação</p>
          <div>
            <SectionHeading label="Formação" title="Pesquisa como fundamento para decisões mais humanas." />
            <p className="education-note">Mestrado e graduação em Antropologia, com foco em plataformas digitais, regulação, circulação de dados e análise qualitativa e quantitativa.</p>
          </div>
          <div className="education-list">
            <article>
              <span>2023 — 2025</span>
              <h3>Mestrado em Antropologia Social</h3>
              <p>Universidade Federal de Santa Catarina · Concluído</p>
            </article>
            <article>
              <span>2017 — 2022</span>
              <h3>Graduação em Antropologia</h3>
              <p>Universidade Federal de Santa Catarina · Concluída</p>
            </article>
            <article>
              <span>Certificações</span>
              <h3>Produtos, projetos e dados</h3>
              <p>PMI · MBA USP · Alura · Udemy</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <p className="section-rail" aria-hidden="true">06 — Contato</p>
          <p className="eyebrow"><span />Contato</p>
          <div className="contact-grid">
            <h2>O próximo problema pode virar um produto melhor.</h2>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:silvia.r.walz@gmail.com"><Mail size={18} aria-hidden="true" />Enviar e-mail</a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/silviawalz" target="_blank" rel="noreferrer"><Linkedin size={18} aria-hidden="true" />LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
              <p>Disponível para conversar sobre oportunidades, desafios de produto e projetos orientados por dados.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src={assets.mark} alt="" /><span>Silvia Walz</span></div>
        <p>Product Management · Product Ownership · Pesquisa · Dados</p>
        <a href="#inicio" aria-label="Voltar ao início"><ChevronDown size={20} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}

export default Home;
