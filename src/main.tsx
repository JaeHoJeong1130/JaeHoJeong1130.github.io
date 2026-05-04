import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Mail, Sparkles } from "lucide-react";
import { projects, skills } from "./data/projects";
import "./styles.css";

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Go to top">
          Portfolio
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Private work, public clarity</p>
          <h1>조용하고 선명하게, 내가 만든 것들을 보여주는 포트폴리오.</h1>
          <p className="hero-text">
            private repository의 README를 공개 가능한 언어로 큐레이션해 프로젝트의
            문제 정의, 역할, 결과를 간결하게 보여줍니다.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#projects">
              프로젝트 보기
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#contact">
              연락하기
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

      </section>

      <section className="section intro" aria-label="About this portfolio">
        <p>
          이 사이트는 결과물만 나열하지 않고, 각 프로젝트에서 어떤 문제를 풀었는지와
          어떤 선택을 했는지를 빠르게 읽히도록 설계되어 있습니다.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>대표 프로젝트</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="card-header">
                <p>{project.period}</p>
                <span>{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="tagline">{project.tagline}</p>
              <p>{project.summary}</p>
              <div className="meta-row">
                <span>{project.role}</span>
                <span>{project.impact}</span>
              </div>
              <div className="tech-list" aria-label={`${project.name} tech stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Stack</p>
          <h2>기술과 작업 방식</h2>
        </div>
        <div className="skill-grid">
          {skills.map((group) => (
            <article className="skill-block" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="tech-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>함께 만들 이야기가 있다면</h2>
          <p>프로젝트 맥락, 기술 선택, 협업 방식까지 편하게 이야기할 수 있습니다.</p>
        </div>
        <div className="contact-actions">
          <a className="icon-link" href="https://github.com/JaeHoJeong1130">
            <Github size={19} aria-hidden="true" />
            GitHub
          </a>
          <a className="icon-link" href="mailto:your.email@example.com">
            <Mail size={19} aria-hidden="true" />
            Email
          </a>
          <span className="signal">
            <Sparkles size={18} aria-hidden="true" />
            README summaries only
          </span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
