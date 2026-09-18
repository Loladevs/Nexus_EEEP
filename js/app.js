const state = {
  student: {
    name: "Ana Beatriz",
    year: "2º ano",
    course: "Desenvolvimento de Sistemas",
    school: "EEEP — Escola de Demonstração",
    city: "Ceará",
    interest: "Tecnologia e Comunicação",
    progress: 82,
    streak: 7
  },

  competencies: [
    {
      name: "Comunicação",
      score: 92,
      status: "Destaque",
      note: "Boa clareza ao apresentar ideias e facilidade para explicar projetos."
    },
    {
      name: "Criatividade",
      score: 88,
      status: "Destaque",
      note: "Costuma propor soluções diferentes e explorar novas possibilidades."
    },
    {
      name: "Colaboração",
      score: 86,
      status: "Em evolução",
      note: "Bom desempenho em trabalhos coletivos e atividades de projeto."
    },
    {
      name: "Tecnologia",
      score: 78,
      status: "Em evolução",
      note: "Apresenta interesse consistente por programação e ferramentas digitais."
    },
    {
      name: "Organização",
      score: 71,
      status: "Próximo passo",
      note: "Pode evoluir com planejamento semanal e acompanhamento de tarefas."
    },
    {
      name: "Raciocínio lógico",
      score: 76,
      status: "Em evolução",
      note: "Bom desempenho em resolução de problemas estruturados."
    }
  ],

  opportunities: [
    {
      title: "Oficina de Desenvolvimento Web",
      tag: "Tecnologia",
      meta: "Sexta-feira · 14h",
      desc: "Atividade prática para desenvolver páginas e pequenos projetos web."
    },
    {
      title: "Laboratório de Comunicação",
      tag: "Comunicação",
      meta: "Quarta-feira · 15h",
      desc: "Espaço para praticar apresentação, argumentação e produção de conteúdo."
    },
    {
      title: "Desafio de Sustentabilidade Escolar",
      tag: "Projeto",
      meta: "Inscrições abertas",
      desc: "Desafio interdisciplinar para criar uma solução para a escola."
    }
  ],

  projects: [
    {
      title: "Cidade Conecta",
      type: "Projeto de tecnologia",
      desc: "Plataforma para aproximar cidadãos e prefeitura na identificação de problemas urbanos.",
      img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Podcast Vozes da Escola",
      type: "Comunicação",
      desc: "Projeto de podcast produzido pelos estudantes para compartilhar histórias da comunidade escolar.",
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=85"
    },
    {
      title: "Horta Inteligente",
      type: "Projeto interdisciplinar",
      desc: "Protótipo usando tecnologia para acompanhar a irrigação de uma horta escolar.",
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=85"
    }
  ],

  requests: [
    {
      id: "#024",
      title: "Declaração escolar",
      status: "Concluída"
    },
    {
      id: "#023",
      title: "Atualização cadastral",
      status: "Em análise"
    },
    {
      id: "#021",
      title: "Declaração de atividade",
      status: "Concluída"
    }
  ]
};


const views = {

  inicio() {

    return `
      <div class="view">

        <div class="hero">

          <div class="hero-copy">

            <div class="eyebrow">
              SUA JORNADA, EM UM SÓ LUGAR
            </div>

            <h1>
              Olá, ${state.student.name.split(" ")[0]}.
              Vamos descobrir o próximo passo?
            </h1>

            <p>
              O Nexus reúne sua trajetória escolar, competências,
              estágio, projetos e oportunidades para transformar
              informações em caminhos de desenvolvimento.
            </p>

            <div class="hero-actions">

              <button
                class="btn btn-primary"
                onclick="openAI()"
              >
                ✦ Conversar com Nexus IA
              </button>

              <button
                class="btn btn-soft"
                onclick="showView('competencias')"
              >
                Ver minhas competências
              </button>

            </div>

          </div>

          <div class="hero-photo">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85"
              alt="Estudantes trabalhando em equipe"
            >

            <div class="photo-caption">
              Aprender também é construir.
            </div>

          </div>

        </div>


        <div class="section-title">

          <div>
            <h2>Seu painel</h2>
            <p>Uma visão rápida da sua jornada.</p>
          </div>

          <span class="pill">
            ${state.student.streak} dias de sequência
          </span>

        </div>


        <div class="stats">

          <div class="stat-card">
            <div class="stat-label">Jornada</div>
            <div class="stat-value">${state.student.progress}%</div>
            <div class="stat-foot">progresso geral</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Competências</div>
            <div class="stat-value">6</div>
            <div class="stat-foot">em acompanhamento</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Projetos</div>
            <div class="stat-value">${state.projects.length}</div>
            <div class="stat-foot">no portfólio</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Oportunidades</div>
            <div class="stat-value">${state.opportunities.length}</div>
            <div class="stat-foot">compatíveis agora</div>
          </div>

        </div>


        <div class="dashboard-grid">

          <div class="card">

            <h3>Mapa de competências</h3>

            <div class="card-sub">
              Seu desenvolvimento vai além das notas.
            </div>

            <div class="comp-list">

              ${state.competencies
                .slice(0, 4)
                .map(c => `
                  <div>

                    <div class="comp-head">
                      <b>${c.name}</b>
                      <span>${c.score}%</span>
                    </div>

                    <div class="progress">
                      <span style="width:${c.score}%"></span>
                    </div>

                  </div>
                `)
                .join("")}

            </div>

            <button
              class="btn btn-soft"
              style="margin-top:18px"
              onclick="showView('competencias')"
            >
              Abrir mapa completo
            </button>

          </div>


          <div class="card">

            <h3>Próximos passos</h3>

            <div class="card-sub">
              Pequenas ações podem construir uma grande trajetória.
            </div>

            <div class="journey">

              <div class="journey-row">

                <div class="journey-icon">✓</div>

                <div>
                  <b>Perfil atualizado</b>
                  <small>Informações básicas conferidas.</small>
                </div>

              </div>


              <div class="journey-row">

                <div class="journey-icon">✦</div>

                <div>
                  <b>Complete uma autoavaliação</b>
                  <small>Ajude o Nexus a conhecer seus interesses.</small>
                </div>

              </div>


              <div class="journey-row">

                <div class="journey-icon">↗</div>

                <div>
                  <b>Explore uma oportunidade</b>
                  <small>Há ${state.opportunities.length} opções no seu painel.</small>
                </div>

              </div>


              <button
                class="btn btn-primary"
                onclick="openSelfAssessment()"
              >
                Fazer autoavaliação
              </button>

            </div>

          </div>

        </div>


        <div class="section-title">

          <div>
            <h2>Oportunidades para você</h2>
            <p>Selecionadas a partir do seu perfil de demonstração.</p>
          </div>

          <button
            class="btn btn-soft"
            onclick="showView('oportunidades')"
          >
            Ver todas
          </button>

        </div>


        <div class="opportunity-list">

          ${state.opportunities.map((o, i) => `
            <div class="opportunity">

              <div class="opp-main">

                <div class="opp-icon">✦</div>

                <div>
                  <b>${o.title}</b>
                  <small>${o.tag} · ${o.meta}</small>
                </div>

              </div>

              <button
                class="btn btn-soft"
                onclick="openOpportunity(${i})"
              >
                Ver
              </button>

            </div>
          `).join("")}

        </div>

      </div>
    `;
  },


  perfil() {

    return `
      <div class="view">

        <div class="page-head">

          <div>
            <h1>Meu perfil</h1>
            <p>
              Sua identidade escolar e seus interesses em um só lugar.
            </p>
          </div>

          <button
            class="btn btn-primary"
            onclick="editProfile()"
          >
            Editar perfil
          </button>

        </div>


        <div class="profile-grid">

          <div class="card">

            <div class="profile-card">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85"
                alt="Foto de demonstração"
              >

              <div>
                <h2>${state.student.name}</h2>
                <p>${state.student.course}</p>
                <span class="pill">${state.student.year}</span>
              </div>

            </div>


            <div class="info-grid">

              <div class="info-box">
                <small>Escola</small>
                <b>${state.student.school}</b>
              </div>

              <div class="info-box">
                <small>Localização</small>
                <b>${state.student.city}</b>
              </div>

              <div class="info-box">
                <small>Interesse principal</small>
                <b>${state.student.interest}</b>
              </div>

              <div class="info-box">
                <small>Progresso</small>
                <b>${state.student.progress}% da jornada</b>
              </div>

            </div>

          </div>


          <div class="card">

            <h3>Sobre sua jornada</h3>

            <div class="card-sub">
              O Nexus transforma dados dispersos em uma visão integrada.
            </div>

            <div class="kpi">
              <b>Projetos desenvolvidos</b>
              <span>${state.projects.length}</span>
            </div>

            <div class="kpi">
              <b>Competências acompanhadas</b>
              <span>${state.competencies.length}</span>
            </div>

            <div class="kpi">
              <b>Oportunidades encontradas</b>
              <span>${state.opportunities.length}</span>
            </div>

            <div class="kpi">
              <b>Sequência de desenvolvimento</b>
              <span>${state.student.streak} dias</span>
            </div>

          </div>

        </div>


        <div class="section-title">
          <div>
            <h2>Minha trajetória</h2>
            <p>Momentos importantes registrados pela plataforma.</p>
          </div>
        </div>


        <div class="card">

          <div class="timeline">

            <div class="timeline-item">

              <div class="timeline-dot">✓</div>

              <div>
                <b>Perfil escolar atualizado</b>
                <small>Hoje · informações conferidas</small>
              </div>

            </div>


            <div class="timeline-item">

              <div class="timeline-dot">✦</div>

              <div>
                <b>Projeto Cidade Conecta adicionado</b>
                <small>Há 5 dias · portfólio</small>
              </div>

            </div>


            <div class="timeline-item">

              <div class="timeline-dot">▣</div>

              <div>
                <b>Feedback do estágio recebido</b>
                <small>Há 2 semanas · desenvolvimento profissional</small>
              </div>

            </div>


            <div class="timeline-item">

              <div class="timeline-dot">↗</div>

              <div>
                <b>Nova oportunidade encontrada</b>
                <small>Há 3 semanas · tecnologia</small>
              </div>

            </div>

          </div>

        </div>

      </div>
    `;
  },


  competencias() {

    return `
      <div class="view">

        <div class="page-head">

          <div>
            <h1>Competências</h1>
            <p>
              Acompanhe habilidades desenvolvidas ao longo da jornada.
            </p>
          </div>

          <button
            class="btn btn-primary"
            onclick="openSelfAssessment()"
          >
            + Autoavaliação
          </button>

        </div>


        <div class="competence-grid">

          ${state.competencies.map((c, i) => `
            <div class="competence-card">

              <div class="competence-top">

                <h3>${c.name}</h3>

                <span class="pill ${
                  c.score >= 90
                    ? ""
                    : c.score >= 80
                      ? "blue"
                      : "yellow"
                }">
                  ${c.status}
                </span>

              </div>

              <div class="big-score">
                ${c.score}%
              </div>

              <p>${c.note}</p>

              <div class="progress">
                <span style="width:${c.score}%"></span>
              </div>

              <button
                class="btn btn-soft"
                style="margin-top:14px"
                onclick="showCompetence(${i})"
              >
                Ver desenvolvimento
              </button>

            </div>
          `).join("")}

        </div>


        <div class="section-title">

          <div>
            <h2>Como o Nexus pode usar isso?</h2>
            <p>
              Os dados podem apoiar planos de desenvolvimento,
              projetos e oportunidades.
            </p>
          </div>

        </div>


        <div class="dashboard-grid">

          <div class="card">

            <h3>Seu ponto forte</h3>

            <div class="card-sub">
              Uma competência que aparece com frequência nas suas atividades.
            </div>

            <div class="big-score">92%</div>

            <span class="pill">
              Comunicação
            </span>

            <p class="feedback">
              O sistema pode reunir evidências de apresentações,
              projetos e feedbacks para mostrar como essa competência
              foi desenvolvida.
            </p>

          </div>


          <div class="card">

            <h3>Próximo desenvolvimento</h3>

            <div class="card-sub">
              Pequenas ações para continuar evoluindo.
            </div>

            <div class="kpi">
              <b>Organização</b>
              <span>71%</span>
            </div>

            <div class="kpi">
              <b>Planejamento semanal</b>
              <span>Missão</span>
            </div>

            <div class="kpi">
              <b>Registro de evidências</b>
              <span>Disponível</span>
            </div>

          </div>

        </div>

      </div>
    `;
  },


  estagio() {

    return `
      <div class="view">

        <div class="page-head">

          <div>
            <h1>Meu estágio</h1>
            <p>
              Acompanhe atividades, empresa, responsáveis e feedbacks.
            </p>
          </div>

          <span class="pill">
            Estágio em andamento
          </span>

        </div>


        <div class="stage-banner">

          <div>

            <h2>TechLab Desenvolvimento</h2>

            <p>
              Desenvolvimento Web · 04/08/2026 — 18/12/2026
            </p>

          </div>

          <div class="stage-status">
            ATIVO
          </div>

        </div>


        <div class="dashboard-grid">

          <div class="card">

            <h3>Informações do estágio</h3>

            <div class="info-grid">

              <div class="info-box">
                <small>Empresa</small>
                <b>TechLab Desenvolvimento</b>
              </div>

              <div class="info-box">
                <small>Área</small>
                <b>Desenvolvimento Web</b>
              </div>

              <div class="info-box">
                <small>Responsável</small>
                <b>Marcos Almeida</b>
              </div>

              <div class="info-box">
                <small>Professor orientador</small>
                <b>Carla Mendes</b>
              </div>

            </div>

          </div>


          <div class="card">

            <h3>Resumo de desenvolvimento</h3>

            <div class="card-sub">
              Evolução observada a partir de atividades e feedbacks.
            </div>

            <div class="kpi">
              <b>Comunicação</b>
              <span>+12%</span>
            </div>

            <div class="kpi">
              <b>Tecnologia</b>
              <span>+18%</span>
            </div>

            <div class="kpi">
              <b>Organização</b>
              <span>+8%</span>
            </div>

          </div>

        </div>


        <div class="section-title">

          <div>
            <h2>Feedback da empresa</h2>
            <p>
              Um exemplo de como a escola pode acompanhar o desenvolvimento.
            </p>
          </div>

        </div>


        <div class="card">

          <p class="feedback">
            “A estudante demonstra iniciativa para aprender,
            participa das atividades e apresenta boa comunicação
            com a equipe. Como próximo passo, recomendamos
            desenvolver ainda mais o planejamento das tarefas.”
          </p>

          <small style="color:var(--muted)">
            Marcos Almeida · responsável pelo estágio
          </small>

        </div>


        <div class="section-title">

          <div>
            <h2>Atividades registradas</h2>
            <p>Histórico de experiências durante o estágio.</p>
          </div>

        </div>


        <div class="card">

          <div class="table-wrap">

            <table class="table">

              <thead>
                <tr>
                  <th>Data</th>
                  <th>Atividade</th>
                  <th>Competência</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>12/09</td>
                  <td>Criação de página responsiva</td>
                  <td>Tecnologia</td>
                  <td><span class="pill">Concluída</span></td>
                </tr>

                <tr>
                  <td>10/09</td>
                  <td>Apresentação para equipe</td>
                  <td>Comunicação</td>
                  <td><span class="pill">Concluída</span></td>
                </tr>

                <tr>
                  <td>05/09</td>
                  <td>Organização do projeto</td>
                  <td>Organização</td>
                  <td><span class="pill yellow">Em andamento</span></td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    `;
  },


  oportunidades() {

    return `
      <div class="view">

        <div class="page-head">

          <div>
            <h1>Oportunidades</h1>
            <p>
              Atividades e experiências que podem combinar com seu perfil.
            </p>
          </div>

        </div>


        <div class="opportunity-list">

          ${state.opportunities.map((o, i) => `

            <div class="opportunity">

              <div class="opp-main">

                <div class="opp-icon">
                  ✦
                </div>

                <div>
                  <b>${o.title}</b>
                  <small>${o.tag} · ${o.meta}</small>
                </div>

              </div>

              <button
                class="btn btn-primary"
                onclick="openOpportunity(${i})"
              >
                Conhecer
              </button>

            </div>

          `).join("")}

        </div>


        <div class="section-title">

          <div>
            <h2>Como as oportunidades aparecem?</h2>
            <p>
              O conceito é cruzar interesses, competências e experiências.
            </p>
          </div>

        </div>


        <div class="dashboard-grid">

          <div class="card">

            <h3>Seus interesses</h3>

            <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:15px">

              <span class="pill">Tecnologia</span>
              <span class="pill blue">Comunicação</span>
              <span class="pill orange">Projetos</span>

            </div>

          </div>


          <div class="card">

            <h3>Compatibilidade</h3>

            <div class="card-sub">
              Exemplo visual de recomendação.
            </div>

            <div class="big-score">86%</div>

            <div class="progress">
              <span style="width:86%"></span>
            </div>

          </div>

        </div>

      </div>
    `;
  },


  portfolio() {

    return `
      <div class="view">

        <div class="page-head">

          <div>
            <h1>Meu portfólio</h1>
            <p>
              Mostre projetos, experiências e aquilo que você sabe fazer.
            </p>
          </div>

          <button
            class="btn btn-primary"
            onclick="addProject()"
          >
            + Novo projeto
          </button>

        </div>


        <div class="portfolio-grid">

          ${state.projects.map((p, i) => `

            <div class="project">

              <img
                src="${p.img}"
                alt="${p.title}"
              >

              <div class="project-body">

                <div class="project-meta">

                  <span class="pill">
                    ${p.type}
                  </span>

                </div>

                <h3>${p.title}</h3>

                <p>${p.desc}</p>

                <button
                  class="btn btn-soft"
                  onclick="showToast('Projeto selecionado.')"
                >
                  Ver projeto
                </button>

              </div>

            </div>

          `).join("")}

        </div>


        <div class="section-title">

          <div>
            <h2>O que cada projeto pode mostrar?</h2>
            <p>
              A proposta é transformar atividades em evidências de aprendizagem.
            </p>
          </div>

        </div>


        <div class="dashboard-grid">

          <div class="card">

            <h3>Problema</h3>

            <div class="card-sub">
              Qual problema você tentou resolver?
            </div>

            <div class="journey-row">
              <div class="journey-icon">?</div>
              <div>
                <b>Contexto</b>
                <small>Explique a situação inicial.</small>
              </div>
            </div>

          </div>


          <div class="card">

            <h3>Aprendizado</h3>

            <div class="card-sub">
              O que você desenvolveu ao realizar o projeto?
            </div>

            <div class="journey-row">
              <div class="journey-icon">✦</div>
              <div>
                <b>Competências</b>
                <small>Relacione o projeto ao seu desenvolvimento.</small>
              </div>
            </div>

          </div>

        </div>

      </div>
    `;
  },


  comunicacao() {

    return `
      <div class="view">

        <div class="page-head">

          <div>
            <h1>Comunicação</h1>
            <p>
              Um espaço para conectar estudante, escola e experiências.
            </p>
          </div>

        </div>


        <div class="dashboard-grid">

          <div class="card">

            <h3>Avisos da escola</h3>

            <div class="notice-list" style="margin-top:15px">

              <div class="notice">

                <div class="notice-icon">📢</div>

                <div>
                  <b>Laboratório de Comunicação</b>
                  <p>
                    Inscrições abertas para a próxima atividade.
                  </p>
                </div>

              </div>


              <div class="notice">

                <div class="notice-icon">📚</div>

                <div>
                  <b>Semana de projetos</b>
                  <p>
                    Registre seus projetos no portfólio até sexta-feira.
                  </p>
                </div>

              </div>


              <div class="notice">

                <div class="notice-icon">💬</div>

                <div>
                  <b>Novo feedback</b>
                  <p>
                    Você recebeu uma observação sobre seu desenvolvimento.
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div class="card">

            <h3>Nexus IA</h3>

            <div class="card-sub">
              Assistente de demonstração para organizar sua jornada.
            </div>

            <p class="feedback">
              A IA pode ajudar a transformar informações
              em próximos passos, sem substituir professores
              ou profissionais da escola.
            </p>

            <button
              class="btn btn-primary"
              onclick="openAI()"
            >
              Abrir Nexus IA
            </button>

          </div>

        </div>

      </div>
    `;
  },


  secretaria() {

    return `
      <div class="view">

        <div class="page-head">

          <div>
            <h1>Central da secretaria</h1>
            <p>
              Solicite documentos e acompanhe seus pedidos.
            </p>
          </div>

        </div>


        <div class="card">

          <h3>Nova solicitação</h3>

          <div class="card-sub">
            Escolha o serviço que deseja solicitar.
          </div>

          <div class="request-box">

            <select id="requestType">

              <option>Declaração escolar</option>
              <option>Declaração de atividade</option>
              <option>Atualização cadastral</option>
              <option>Solicitação de histórico</option>

            </select>

            <button
              class="btn btn-primary"
              onclick="newRequest()"
            >
              Solicitar
            </button>

          </div>

        </div>


        <div class="section-title">

          <div>
            <h2>Minhas solicitações</h2>
            <p>
              Acompanhe o andamento dos pedidos.
            </p>
          </div>

        </div>


        <div class="card">

          <div class="table-wrap">

            <table class="table">

              <thead>

                <tr>
                  <th>ID</th>
                  <th>Solicitação</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                ${state.requests.map(r => `

                  <tr>

                    <td>${r.id}</td>

                    <td>${r.title}</td>

                    <td>
                      <span class="pill ${
                        r.status === "Em análise"
                          ? "yellow"
                          : ""
                      }">
                        ${r.status}
                      </span>
                    </td>

                  </tr>

                `).join("")}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    `;
  },


  config() {

    return `
      <div class="view">

        <div class="page-head">

          <div>
            <h1>Configurações</h1>
            <p>
              Preferências da sua experiência no Nexus.
            </p>
          </div>

        </div>


        <div class="card">

          <div class="settings">

            <div class="setting">

              <div>
                <b>Notificações</b>
                <small>
                  Receber avisos sobre oportunidades e atividades.
                </small>
              </div>

              <div
                class="switch on"
                onclick="toggleSwitch(this)"
              >
                <span></span>
              </div>

            </div>


            <div class="setting">

              <div>
                <b>Oportunidades personalizadas</b>
                <small>
                  Usar interesses e competências para organizar sugestões.
                </small>
              </div>

              <div
                class="switch on"
                onclick="toggleSwitch(this)"
              >
                <span></span>
              </div>

            </div>


            <div class="setting">

              <div>
                <b>Compartilhamento de portfólio</b>
                <small>
                  Controlar quando seu portfólio pode ser visualizado.
                </small>
              </div>

              <div
                class="switch"
                onclick="toggleSwitch(this)"
              >
                <span></span>
              </div>

            </div>


            <div class="setting">

              <div>
                <b>Assistente Nexus IA</b>
                <small>
                  Permitir o uso do assistente de demonstração.
                </small>
              </div>

              <div
                class="switch on"
                onclick="toggleSwitch(this)"
              >
                <span></span>
              </div>

            </div>

          </div>

        </div>


        <div class="section-title">

          <div>
            <h2>Privacidade</h2>
            <p>
              No produto real, o acesso aos dados seria definido por permissões.
            </p>
          </div>

        </div>


        <div class="card">

          <p class="feedback">
            Estudante, professor, secretaria, coordenação
            e empresa poderiam visualizar somente as informações
            necessárias para suas respectivas funções.
          </p>

        </div>

      </div>
    `;
  }

};


const pageNames = {
  inicio: "Início",
  perfil: "Meu perfil",
  competencias: "Competências",
  estagio: "Meu estágio",
  oportunidades: "Oportunidades",
  portfolio: "Portfólio",
  comunicacao: "Comunicação",
  secretaria: "Central da secretaria",
  config: "Configurações"
};


function showView(name){

  const container = document.getElementById("viewContainer");

  if(!views[name]){
    name = "inicio";
  }

  container.innerHTML = views[name]();

  document.getElementById("pageName").textContent =
    pageNames[name];

  document.querySelectorAll(".nav-item").forEach(btn => {

    btn.classList.toggle(
      "active",
      btn.dataset.view === name
    );

  });

  document.getElementById("sidebar").classList.remove("open");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


function openModal(content){

  document.getElementById("modalContent").innerHTML =
    content;

  document
    .getElementById("modalBackdrop")
    .classList.add("show");
}


function closeModal(){

  document
    .getElementById("modalBackdrop")
    .classList.remove("show");
}


function showToast(msg){

  const t = document.getElementById("toast");

  t.textContent = msg;

  t.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(
    () => t.classList.remove("show"),
    2600
  );
}


function esc(str){

  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}


function openOpportunity(i){

  const o = state.opportunities[i];

  openModal(`

    <div class="eyebrow">
      ${o.tag}
    </div>

    <h2 style="font-size:27px;margin:8px 0">
      ${o.title}
    </h2>

    <p style="color:var(--muted);font-size:13px;line-height:1.6">
      ${o.desc}
    </p>

    <div class="info-grid">

      <div class="info-box">
        <small>Quando</small>
        <b>${o.meta}</b>
      </div>

      <div class="info-box">
        <small>Por que apareceu</small>
        <b>Interesse compatível</b>
      </div>

    </div>

    <button
      class="btn btn-primary"
      style="margin-top:16px"
      onclick="closeModal();showToast('Interesse registrado!')"
    >
      Tenho interesse
    </button>

  `);
}


function showCompetence(i){

  const c = state.competencies[i];

  openModal(`

    <span class="pill">
      ${c.status}
    </span>

    <h2 style="font-size:28px;margin:10px 0">
      ${c.name}
    </h2>

    <div class="big-score">
      ${c.score}%
    </div>

    <p style="color:var(--muted);font-size:13px;line-height:1.6">
      ${c.note}
    </p>

    <div class="progress">
      <span style="width:${c.score}%"></span>
    </div>

    <button
      class="btn btn-primary"
      style="margin-top:18px"
      onclick="closeModal();showToast('Trilha de desenvolvimento aberta.')"
    >
      Ver trilha
    </button>

  `);
}


function completeMission(){

  state.student.progress =
    Math.min(100,state.student.progress+1);

  state.student.streak += 1;

  showToast(
    "Missão concluída. Seu progresso foi atualizado!"
  );

  showView("inicio");
}


function editProfile(){

  openModal(`

    <h2 style="font-size:26px">
      Editar perfil
    </h2>

    <p style="color:var(--muted);font-size:12px">
      No produto real, estes campos seriam controlados
      conforme o perfil de acesso.
    </p>

    <input
      id="nameInput"
      value="${esc(state.student.name)}"
      style="width:100%;padding:12px;border:1px solid var(--line);border-radius:12px;margin:10px 0"
    >

    <button
      class="btn btn-primary"
      onclick="saveProfile()"
    >
      Salvar
    </button>

  `);
}


function saveProfile(){

  const n =
    document.getElementById("nameInput").value.trim();

  if(n){

    state.student.name = n;

    closeModal();

    showView("perfil");

    showToast("Perfil atualizado.");

  }
}


function addProject(){

  openModal(`

    <h2 style="font-size:26px">
      Adicionar projeto
    </h2>

    <p style="color:var(--muted);font-size:12px">
      Demonstração do fluxo de portfólio.
    </p>

    <input
      id="projectName"
      placeholder="Nome do projeto"
      style="width:100%;padding:12px;border:1px solid var(--line);border-radius:12px;margin:8px 0"
    >

    <textarea
      id="projectDesc"
      placeholder="Conte em uma frase o que você criou."
      style="width:100%;min-height:90px;padding:12px;border:1px solid var(--line);border-radius:12px;margin:8px 0"
    ></textarea>

    <button
      class="btn btn-primary"
      onclick="saveProject()"
    >
      Adicionar ao portfólio
    </button>

  `);
}


function saveProject(){

  const n =
    document.getElementById("projectName").value.trim();

  const d =
    document.getElementById("projectDesc").value.trim();

  if(!n){

    showToast("Digite o nome do projeto.");

    return;
  }

  state.projects.push({

    title:n,

    type:"Novo projeto",

    desc:
      d ||
      "Projeto adicionado pelo estudante.",

    img:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85"

  });

  closeModal();

  showView("portfolio");

  showToast(
    "Projeto adicionado ao seu portfólio."
  );
}


function newRequest(){

  const type =
    document.getElementById("requestType").value;

  state.requests.unshift({

    id:
      "#" +
      String(
        Math.floor(25 + Math.random() * 70)
      ).padStart(3,"0"),

    title:type,

    status:"Recebida"

  });

  showView("secretaria");

  showToast(
    "Solicitação enviada para a secretaria."
  );
}


function openSelfAssessment(){

  openModal(`

    <h2 style="font-size:26px">
      Como você se percebe?
    </h2>

    <p style="color:var(--muted);font-size:12px">
      Responda para alimentar seu próprio mapa.
      Não existem respostas certas.
    </p>

    <div
      style="display:grid;gap:12px;margin-top:15px"
    >

      ${
        [
          "Gosto de apresentar ideias",
          "Prefiro resolver problemas criando algo",
          "Sinto-me confortável trabalhando em equipe",
          "Consigo organizar minhas tarefas"
        ]
        .map(x => `
          <label style="font-size:12px">
            <input
              type="checkbox"
              style="margin-right:8px"
            >
            ${x}
          </label>
        `)
        .join("")
      }

    </div>

    <button
      class="btn btn-primary"
      style="margin-top:18px"
      onclick="closeModal();showToast('Autoavaliação registrada.')"
    >
      Concluir
    </button>

  `);
}


function toggleSwitch(el){

  el.classList.toggle("on");

}


function openAI(){

  openModal(`

    <div class="ai-chat">

      <div class="ai-head">

        <div class="ai-orb">
          ✦
        </div>

        <div>

          <h2 style="font-size:23px">
            Nexus IA
          </h2>

          <p
            style="margin:3px 0;color:var(--muted);font-size:11px"
          >
            Copiloto para sua jornada —
            demonstração local
          </p>

        </div>

      </div>


      <div
        class="ai-messages"
        id="aiMessages"
      >

        <div class="msg ai">
          Oi! Eu posso ajudar a organizar
          seus próximos passos, interpretar
          seus próprios dados de jornada e
          sugerir atividades.
          O que você quer fazer hoje?
        </div>

      </div>


      <div class="ai-input">

        <input
          id="aiInput"
          placeholder="Ex.: quero melhorar minha comunicação"
        >

        <button
          class="btn btn-primary"
          onclick="sendAI()"
        >
          Enviar
        </button>

      </div>

    </div>

  `);

  setTimeout(
    () => document.getElementById("aiInput")?.focus(),
    50
  );
}


function sendAI(){

  const input =
    document.getElementById("aiInput");

  const box =
    document.getElementById("aiMessages");

  if(
    !input ||
    !input.value.trim()
  ){
    return;
  }

  const q =
    input.value.trim();

  box.insertAdjacentHTML(
    "beforeend",
    `<div class="msg user">${esc(q)}</div>`
  );


  let ans =
    "Posso transformar isso em uma pequena missão. Que tal escolher uma ação de 10 minutos e registrar o resultado no seu portfólio?";


  const l =
    q.toLowerCase();


  if(l.includes("comunica")){

    ans =
      "Para desenvolver comunicação, eu sugeriria uma sequência curta: grave uma apresentação de 2 minutos, revise a clareza das ideias e depois peça um feedback. Posso registrar isso como missão.";

  }

  else if(l.includes("estágio")){

    ans =
      "No módulo de estágio, você pode acompanhar empresa, responsável, atividades e feedbacks. Uma boa próxima ação seria registrar uma evidência do que você aprendeu esta semana.";

  }

  else if(l.includes("portfólio")){

    ans =
      "Seu portfólio fica mais forte quando cada projeto mostra problema, sua contribuição, resultado e o que você aprendeu. Você já tem 3 projetos cadastrados.";

  }

  else if(
    l.includes("matem") ||
    l.includes("estud")
  ){

    ans =
      "Podemos criar uma trilha de estudo curta: escolher um tema, fazer um exercício, registrar a dificuldade e repetir em outro formato. A ideia é acompanhar evolução, não só nota.";

  }


  setTimeout(() => {

    box.insertAdjacentHTML(
      "beforeend",
      `<div class="msg ai">${ans}</div>`
    );

    box.scrollTop =
      box.scrollHeight;

  },350);


  input.value = "";

  box.scrollTop =
    box.scrollHeight;
}


document.addEventListener(
  "click",
  e => {

    const nav =
      e.target.closest(".nav-item");

    if(nav){

      showView(
        nav.dataset.view
      );

    }


    if(
      e.target.id === "modalClose" ||
      e.target.id === "modalBackdrop"
    ){

      closeModal();

    }


    if(
      e.target.id === "notificationBtn"
    ){

      openModal(`

        <h2 style="font-size:25px">
          Notificações
        </h2>

        <div
          class="notice-list"
          style="margin-top:15px"
        >

          <div class="notice">

            <div class="notice-icon">
              📢
            </div>

            <div>

              <b>Nova oportunidade</b>

              <p>
                Laboratório de Comunicação
                está com inscrições abertas.
              </p>

            </div>

          </div>


          <div class="notice">

            <div class="notice-icon">
              💬
            </div>

            <div>

              <b>Feedback recebido</b>

              <p>
                Seu projeto teve uma nova observação.
              </p>

            </div>

          </div>

        </div>

      `);

    }


    if(
      e.target.id === "profileQuick"
    ){

      showView("perfil");

    }

  }
);


document.addEventListener(
  "keydown",
  e => {

    if(e.key === "Escape"){
      closeModal();
    }

    if(
      e.key === "Enter" &&
      document.activeElement?.id === "aiInput"
    ){

      sendAI();

    }

  }
);


document
  .getElementById("mobileMenu")
  .addEventListener(
    "click",
    () =>
      document
        .getElementById("sidebar")
        .classList.toggle("open")
  );


document
  .getElementById("modalBackdrop")
  .addEventListener(
    "click",
    e => {

      if(
        e.target.id ===
        "modalBackdrop"
      ){

        closeModal();

      }

    }
  );


showView("inicio");