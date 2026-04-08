# Plano de Teste  

**Sistema:** [The Internet – Login](https://the-internet.herokuapp.com/login)  

**Versão:** 1.0.0 (Web)  
**Data:** 08/04/2026  
**Responsável:** QA Lead – *[Nome do QA Lead]*  

---  

## 1. Objetivo  

Garantir que o fluxo de autenticação da aplicação **The Internet – Login** atenda aos requisitos funcionais e não‑funcionais, assegurando que:

* Usuários válidos consigam acessar a área restrita.  
* Usuários com credenciais inválidas recebam mensagens de erro adequadas.  
* Os campos obrigatórios sejam validados corretamente antes da submissão.  

## 2. Escopo  

| **Incluído no Escopo** | **Excluído do Escopo** |
|------------------------|------------------------|
| • Testes funcionais do formulário de login (campos, botões, mensagens).<br>• Validação de mensagens de erro.<br>• Testes de usabilidade básica (ex.: foco, tab order).<br>• Testes de compatibilidade em navegadores Chrome, Firefox e Edge (versões estáveis). | • Testes de performance (carga, stress).<br>• Testes de segurança avançada (pen‑test, SQL injection).<br>• Integração com outros módulos da aplicação (não há).<br>• Testes em dispositivos móveis (fora do escopo atual). |

## 3. Estratégia de Testes  

1. **Abordagem:**  
   * Testes **manuais** para validar fluxos críticos de login, pois o número de casos é reduzido e a interface é simples.  
   * Utilização de **automação** (Selenium WebDriver + JavaScript/TypeScript) para regressão futura e execução em CI/CD.  

2. **Níveis de Teste:**  
   * **Teste de Unidade:** Não aplicável (não há código fonte interno).  
   * **Teste de Integração:** Verificação da comunicação entre o front‑end (formulário) e o back‑end (API de autenticação).  
   * **Teste de Sistema:** Execução dos cenários de login em ambiente de teste idêntico ao de produção.  

3. **Critérios de Prioridade:**  
   * **Alta** – Cenário 1 (Login com sucesso).  
   * **Média** – Cenário 2 (Senha inválida).  
   * **Baixa** – Cenário 3 (Campos obrigatórios).  

4. **Ferramentas:**  
   * **Gestão de Testes:** TestRail / Azure DevOps Test Plans.  
   * **Automação:** Selenium WebDriver, Node.js + Mocha/Chai (ou Java + TestNG).  
   * **Bug Tracking:** Jira.  
   * **Navegadores:** Chrome 124+, Firefox 124+, Edge 124+.  

5. **Documentação:**  
   * Caso de teste (TC) – ID, descrição, pré‑condições, passos, dados de teste, resultados esperados e reais.  
   * Evidências (screenshots, logs).  

## 4. Tipos de Teste  

| Tipo de Teste | Descrição | Ferramentas | Responsável |
|---------------|-----------|-------------|-------------|
| **Funcional** | Verificação de requisitos de login (autenticação, mensagens). | Selenium, TestRail | QA Analyst |
| **Usabilidade** | Checagem de foco, ordem de tabulação, textos de placeholder. | Manual + Chrome DevTools | UX Analyst |
| **Compatibilidade** | Execução nos navegadores suportados. | BrowserStack (se necessário) | QA Analyst |
| **Regressão** | Re‑execução automatizada após correções ou releases. | Selenium CI (GitHub Actions) | Automation Engineer |
| **Segurança (Básica)** | Verificar que a senha não é exibida em texto plano e que a página usa HTTPS. | OWASP ZAP (scan rápido) | Security Analyst (opcional) |

## 5. Ambiente de Teste  

| **Componente** | **Versão / Configuração** |
|----------------|---------------------------|
| **Servidor Web** | `the-internet.herokuapp.com` (ambiente de demonstração). |
| **Banco de Dados** | Não aplicável (dados de usuário simulados). |
| **Navegadores** | Chrome 124+, Firefox 124+, Edge 124+. |
| **Sistema Operacional** | Windows 11, macOS Ventura, Ubuntu 22.04 (para testes cross‑platform). |
| **Ferramentas** | Selenium WebDriver 4.x, Node.js 20.x, Java 21 (se usar Java). |
| **Rede** | Conexão de internet estável (mínimo 20 Mbps). |
| **Acesso** | Usuário de teste: `tomsmith` / `SuperSecretPassword!`. |

## 6. Critérios de Entrada  

| **Critério** | **Condição** |
|--------------|--------------|
| **Requisitos** | Documentação de requisitos de login aprovada e assinada. |
| **Ambiente** | Ambiente de teste configurado e disponível (URL acessível, navegadores instalados). |
| **Dados de Teste** | Usuário válido criado; credenciais de teste definidas. |
| **Ferramentas** | Licenças e acessos às ferramentas de teste (TestRail, Jira, Selenium). |
| **Equipe** | QA Lead e analistas alocados, agenda de testes definida. |
| **Build** | Versão da aplicação estável (sem alterações de código pendentes). |

## 7. Critérios de Saída  

| **Critério** | **Condição** |
|--------------|--------------|
| **Execução** | 100 % dos casos de teste planejados executados. |
| **Defeitos** | Todos os defeitos críticos (P1) resolvidos e re‑testados; defeitos de baixa prioridade (P3) documentados. |
| **Cobertura** | Cobertura de requisitos ≥ 95 % (todos os requisitos de login cobertos). |
| **Relatório** | Relatório de teste final entregue ao PO/Stakeholders. |
| **Aprovação** | Aprovação formal do QA Lead e do Product Owner. |

## 8. Riscos  

| **Risco** | **Probabilidade** | **Impacto** | **Mitigação** |
|-----------|-------------------|------------|----------------|
| Instabilidade da aplicação de demonstração (downtime). | Média | Alta | Agendar janelas de teste fora de horários de pico; ter plano de contingência para re‑agendar. |
| Alteração inesperada da URL ou dos dados de login. | Baixa | Média | Verificar a URL antes de iniciar; manter contato com o responsável da aplicação. |
| Incompatibilidade de navegadores (versões novas). | Média | Média | Atualizar a matriz de compatibilidade periodicamente; usar BrowserStack para validar rapidamente. |
| Falha na automação devido a mudanças de seletor. | Média | Média | Implementar seletores robustos (data‑test‑id) e manutenção de scripts como parte do CI. |
| Falta de dados de teste (contas bloqueadas). | Baixa | Baixa | Criar contas de teste adicionais e validar periodicamente. |

## 9. Cronograma  

| **Atividade** | **Responsável** | **Início** | **Término** | **Duração** |
|---------------|-----------------|------------|-------------|------------|
| Preparação do ambiente (instalação de navegadores, configuração Selenium) | Automation Engineer | 08/04/2026 | 09/04/2026 | 2 dias |
| Criação e revisão dos casos de teste | QA Analyst | 10/04/2026 | 12/04/2026 | 3 dias |
| Execução manual dos cenários (1‑3) | QA Analyst | 13/04/2026 | 15/04/2026 | 3 dias |
| Registro de defeitos e reteste | QA Analyst | 16/04/2026 | 18/04/2026 | 3 dias |
| Desenvolvimento de scripts de automação (regressão) | Automation Engineer | 13/04/2026 | 20/04/2026 | 8 dias |
| Execução de automação em CI (pipeline) | Automation Engineer | 21/04/2026 | 22/04/2026 | 2 dias |
| Revisão de resultados e elaboração do relatório final | QA Lead | 23/04/2026 | 24/04/2026 | 2 dias |
| Apresentação ao PO / Stakeholders | QA Lead | 25/04/2026 | 25/04/2026 | 1 dia |
| **Total** | | | | **23 dias corridos** |

---  

### Anexos  

* **Anexo A – Matriz de Casos de Teste** (ID, descrição, dados, passos, resultados esperados).  
* **Anexo B – Evidências de Execução** (screenshots, logs).  
* **Anexo C – Plano de Contingência** (procedimentos caso o site fique indisponível).  

---  

**Aprovações**  

| Nome | Cargo | Assinatura | Data |
|------|-------|------------|------|
| ___________________ | QA Lead |  | 08/04/2026 |
| ___________________ | Product Owner |  | 08/04/2026 |
| ___________________ | Gerente de Projeto |  | 08/04/2026 |

---  

*Este Plano de Teste foi elaborado de acordo com as melhores práticas de QA e está sujeito a revisões conforme o andamento do projeto.*