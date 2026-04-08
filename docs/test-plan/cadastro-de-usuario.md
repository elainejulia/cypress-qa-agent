# Plano de Teste  

**Sistema:** https://front.serverest.dev/cadastrarusuarios  

---

## 1. Objetivo  

Garantir que a funcionalidade de **Cadastro de Usuário** atenda aos requisitos de negócio e às especificações técnicas, permitindo que usuários criem contas de forma correta, segura e amigável. O plano visa validar:

* O fluxo de cadastro com dados válidos.  
* O tratamento adequado dos campos obrigatórios e das regras de validação (formato de e‑mail, força da senha, etc.).  
* A consistência da interface e a integração com os serviços de backend.

---

## 2. Escopo  

| **Incluído no Escopo** | **Excluído do Escopo** |
|------------------------|------------------------|
| • Tela de cadastro de usuário. <br>• Validação de campos (nome, e‑mail, senha). <br>• Mensagens de sucesso e de erro. <br>• Integração com API de criação de usuário. | • Funcionalidades de login, recuperação de senha e gerenciamento de perfil. <br>• Testes de performance de carga (fora do escopo deste plano). <br>• Testes de segurança avançada (ex.: pen‑test). |

---

## 3. Estratégia de Testes  

1. **Abordagem de Teste**  
   * **Teste Manual Exploratório** – para validar fluxos de UI, mensagens e usabilidade.  
   * **Teste Automatizado (UI)** – scripts Selenium/WebDriver para regressão dos cenários críticos.  

2. **Níveis de Teste**  
   * **Teste de Unidade** – já cobertos pela equipe de desenvolvimento (não incluídos aqui).  
   * **Teste de Integração** – verificação da comunicação entre front‑end e API de cadastro.  
   * **Teste de Sistema** – execução dos cenários end‑to‑end descritos na seção *Tipos de Teste*.  

3. **Critérios de Prioridade**  
   * **Alta** – Cenário de cadastro bem‑sucedido e validação de campos obrigatórios.  
   * **Média** – Mensagens de erro específicas (e‑mail já cadastrado, senha fraca).  
   * **Baixa** – Layout responsivo em dispositivos não críticos.

4. **Ferramentas**  
   * **Gestão de Testes:** TestRail / Azure DevOps.  
   * **Automação UI:** Selenium WebDriver + JavaScript (Node.js) ou Cypress.  
   * **API Testing:** Postman / Newman (para validar respostas da camada de serviço).  
   * **Bug Tracking:** Jira.  

---

## 4. Tipos de Teste  

### 4.1 Testes Funcionais  

| ID | Descrição | Dados de Entrada | Passos Principais | Resultado Esperado |
|----|-----------|------------------|-------------------|--------------------|
| **TC01** | Cadastro com sucesso | Nome: *Sergio Mendes* <br> E‑mail: *sergio.coti@gmail.com* <br> Senha: *@Admin123* | 1. Acessar a URL de cadastro.<br>2. Preencher os campos com os dados acima.<br>3. Clicar em **Cadastrar**. | Mensagem “Usuário criado com sucesso!” e redirecionamento para a página de listagem ou login. |
| **TC02** | Validação de campos obrigatórios – Nome vazio | Nome: *(vazio)* <br> E‑mail: *teste@exemplo.com* <br> Senha: *@Admin123* | 1. Preencher e‑mail e senha.<br>2. Deixar o campo Nome em branco.<br>3. Submeter o formulário. | Exibição da mensagem “O campo nome é obrigatório”. |
| **TC03** | Validação de campos obrigatórios – E‑mail vazio | Nome: *Ana Silva* <br> E‑mail: *(vazio)* <br> Senha: *@Admin123* | 1. Preencher Nome e Senha.<br>2. Deixar E‑mail em branco.<br>3. Submeter. | Mensagem “O campo e‑mail é obrigatório”. |
| **TC04** | Validação de campos obrigatórios – Senha vazia | Nome: *Pedro Lima* <br> E‑mail: *pedro.lima@mail.com* <br> Senha: *(vazia)* | 1. Preencher Nome e E‑mail.<br>2. Deixar Senha em branco.<br>3. Submeter. | Mensagem “O campo senha é obrigatório”. |
| **TC05** | Formato de e‑mail inválido | Nome: *Carlos* <br> E‑mail: *carlos@@mail* <br> Senha: *@Admin123* | 1. Preencher todos os campos com e‑mail inválido.<br>2. Submeter. | Mensagem “Formato de e‑mail inválido”. |
| **TC06** | Senha que não atende à política (ex.: sem letra maiúscula) | Nome: *Laura* <br> E‑mail: *laura@mail.com* <br> Senha: *@admin123* | 1. Preencher campos.<br>2. Submeter. | Mensagem “A senha deve conter ao menos uma letra maiúscula”. |
| **TC07** | E‑mail já cadastrado | Nome: *Novo Usuário* <br> E‑mail: *sergio.coti@gmail.com* (já usado no TC01) <br> Senha: *@Admin123* | 1. Preencher campos.<br>2. Submeter. | Mensagem “E‑mail já cadastrado”. |

### 4.2 Testes de Integração  

* Verificar que, após o cadastro bem‑sucedido, a API retorna **HTTP 201** e o corpo da resposta contém o **id** do usuário.  
* Confirmar que o usuário recém‑criado aparece na listagem de usuários (endpoint GET `/usuarios`).  

### 4.3 Testes de Usabilidade  

* Avaliar a clareza das mensagens de erro.  
* Verificar a ordem de tabulação dos campos.  
* Confirmar que o botão **Cadastrar** está desabilitado enquanto campos obrigatórios estiverem vazios.  

### 4.4 Testes de Regressão (Automatizados)  

* Execução diária dos scripts **TC01**, **TC02**, **TC03**, **TC04** em ambiente de homologação.  

---

## 5. Ambiente de Teste  

| Componente | Versão / Configuração | Observação |
|------------|-----------------------|------------|
| **Browser** | Chrome 124, Firefox 124, Edge 124 | Testes em modo desktop; mobile será avaliado em fase posterior. |
| **Sistema Operacional** | Windows 11, macOS Ventura | |
| **URL de Teste** | https://front.serverest.dev/cadastrarusuarios | Ambiente de homologação (não produção). |
| **API Backend** | https://api.serverest.dev/ | Base URL configurada nas variáveis de ambiente dos scripts. |
| **Banco de Dados** | PostgreSQL (instância de teste) | Dados são resetados antes de cada ciclo de teste. |
| **Ferramentas** | Selenium WebDriver 4.x, Cypress 13, Postman 10 | |
| **Rede** | Conexão de 100 Mbps, latência < 20 ms | |

---

## 6. Critérios de Entrada  

| Item | Condição |
|------|----------|
| **Requisitos** | Documentação de requisitos de cadastro assinada e aprovada. |
| **Ambiente** | Ambiente de homologação disponível e com dados de teste limpos. |
| **Build** | Versão da aplicação (frontend) disponibilizada para teste (tag `vX.Y.Z`). |
| **Test Cases** | Casos de teste escritos, revisados e aprovados no TestRail. |
| **Recursos** | Equipe de QA alocada (mínimo 2 analistas) e acesso às ferramentas. |

---

## 7. Critérios de Saída  

| Item | Condição |
|------|----------|
| **Execução** | 100 % dos casos de teste executados; bloqueadores resolvidos; críticos com status **Pass**. |
| **Defeitos** | Todos os defeitos críticos e graves corrigidos e re‑testados; defeitos menores registrados e priorizados. |
| **Cobertura** | Cobertura mínima de 90 % dos requisitos funcionais de cadastro. |
| **Relatório** | Relatório de Teste final entregue ao PO/PM e aprovado. |
| **Aprovação** | Sign‑off da equipe de QA e do Product Owner. |

---

## 8. Riscos  

| Risco | Probabilidade | Impacto | Mitigação |
|-------|----------------|---------|-----------|
| **Instabilidade da API** | Média | Alta | Agendar janelas de teste em períodos de manutenção reduzida; mockar respostas quando necessário. |
| **Dados de teste persistentes** (e‑mail já cadastrado) | Alta | Média | Script de limpeza automática antes de cada execução. |
| **Alterações de UI não comunicadas** | Baixa | Média | Revisão semanal do backlog de UI com a equipe de desenvolvimento. |
| **Limitações de ambiente de homologação** (tempo de resposta elevado) | Média | Baixa | Monitorar performance e reportar ao time de infra antes do ciclo de teste. |
| **Dependência de terceiros (serviço de e‑mail)** | Baixa | Alta | Utilizar sandbox ou mock para validação de envio de e‑mail. |

---

## 9. Cronograma  

| Atividade | Data de Início | Data de Término | Responsável |
|-----------|----------------|-----------------|-------------|
| Preparação do Ambiente | 02/04/2026 | 04/04/2026 | Eng. de Infra |
| Revisão de Requisitos & Test Cases | 05/04/2026 | 07/04/2026 | Analista de QA |
| Execução de Testes Manuais (TC01‑TC07) | 08/04/2026 | 10/04/2026 | Analista de QA |
| Desenvolvimento de Scripts Automatizados | 08/04/2026 | 12/04/2026 | Eng. de Automação |
| Execução de Automação (Regressão) | 13/04/2026 | 14/04/2026 | Eng. de Automação |
| Análise de Resultados & Log de Defeitos | 15/04/2026 | 16/04/2026 | Analista de QA |
| Reteste de Defeitos Críticos | 17/04/2026 | 18/04/2026 | Analista de QA |
| Elaboração do Relatório Final | 19/04/2026 | 20/04/2026 | QA Lead |
| Revisão & Aprovação com PO | 21/04/2026 | 22/04/2026 | QA Lead / PO |
| **Encerramento** | 23/04/2026 | 23/04/2026 | QA Lead |

> **Observação:** O cronograma pode ser ajustado em função de bloqueios críticos ou mudanças de escopo aprovadas pelo Product Owner.

---  

*Documento elaborado por:* **[Nome do QA Lead]** – QA Lead, **[Nome da Empresa]**  
*Data:* 08/04/2026  

---