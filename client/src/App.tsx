import React from 'react';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ borderBottom: '1px solid #334155', paddingBottom: '2rem', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>Silvia Walz</h1>
          <div style={{ fontSize: '1.1rem', color: '#38bdf8', fontWeight: 500, marginBottom: '1rem' }}>
            Product Owner | Product Manager | Analista de Negócios Sênior
          </div>
          <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
            Gerencio produtos digitais e fluxos de dados conectando eficiência operacional, arquitetura de processos e geração de valor de negócio. Especialista em traduzir requisitos complexos, otimizar ciclos de entrega e implementar cultura data-driven com apoio de IA.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://linkedin.com/in/silviawalz" target="_blank" rel="noreferrer" style={{ padding: '0.5rem 1rem', borderRadius: '6px', background: '#1e293b', color: '#fff', textDecoration: 'none', border: '1px solid #334155' }}>LinkedIn</a>
            <a href="mailto:silvia.r.walz@gmail.com" style={{ padding: '0.5rem 1rem', borderRadius: '6px', background: '#1e293b', color: '#fff', textDecoration: 'none', border: '1px solid #334155' }}>E-mail</a>
          </div>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>📊 Destaques & Impacto</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#38bdf8' }}>-56%</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Churn em SaaS B2B via Discovery Quanti-Quali e SQL</div>
            </div>
            <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight 700, color: '#38bdf8' }}>-64%</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Lead Time global com mapeamento AS-IS e TO-BE</div>
            </div>
            <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#38bdf8' }}>+100h</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Economizadas/Ano com automação via IA e n8n</div>
            </div>
            <div style={{ background: '#1e293b', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#38bdf8' }}>100%</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Compliance e padronização com DoR/DoD</div>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>🚀 Cases Principais</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            
            <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600, textTransform: 'uppercase' }}>Product Management & Discovery</div>
              <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Reduzindo o Churn em 56% via Discovery Quanti-Quali, SQL e OKRs</h3>
              <p style={{ fontSize: '0.925rem', color: '#94a3b8' }}>Diagnóstico e reversão de retenção em SaaS B2B de logística através de análise de eventos SQL, clustering de entrevistas com IA e redesenho de onboarding orientado a Quick Wins.</p>
            </div>

            <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600, textTransform: 'uppercase' }}>Product Ownership & Processos</div>
              <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Acelerando a Entrega de Dados em 64% com Mapeamento AS-IS / TO-BE</h3>
              <p style={{ fontSize: '0.925rem', color: '#94a3b8' }}>Reestruturação do fluxo de entrada de estudos e análises no Bizagi, eliminando retrabalhos, definindo critérios de DoR/DoD e blindando a squad técnica.</p>
            </div>

            <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600, textTransform: 'uppercase' }}>Automação & IA Generativa</div>
              <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Automação de Rituais Diários Economizando +100 Horas/Ano</h3>
              <p style={{ fontSize: '0.925rem', color: '#94a3b8' }}>Orquestração no n8n integrada com Fireflies.ai e ClickUp para automação de notas de reunião, apontamento de horas e captura de action items.</p>
            </div>

            <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600, textTransform: 'uppercase' }}>Governança & Qualidade</div>
              <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Padronização de Entregas e Gestão de Conhecimento para Compliance</h3>
              <p style={{ fontSize: '0.925rem', color: '#94a3b8' }}>Implementação de travas de qualidade de briefing, checklists de revisão pré-entrega e fluxo de Lições Aprendidas centralizado.</p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
