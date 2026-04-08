# Plano de Casos de Teste – **Login**  
**Sistema:** https://the-internet.herokuapp.com/login  

> **Objetivo:** Validar o fluxo de autenticação da aplicação, garantindo que o login funcione corretamente nas situações de sucesso, falha e validação de campos obrigatórios.  

---  

## CT-001 – Login de Usuário com Sucesso  

**Pré‑condições:**  
- O usuário possui credenciais válidas cadastradas no sistema.  
- Navegador aberto na página de login (`/login`).  
- Não há sessões ativas (cookies/ cache limpos).  

**Dados de Teste:**  
| Campo | Valor |
|-------|-------|
| Username | `tomsmith` |
| Password | `SuperSecretPassword!` |

**Passos:**  
1. Digitar **Username** = `tomsmith`.  
2. Digitar **Password** = `SuperSecretPassword!`.  
3. Clicar no botão **Login**.  

**Resultado Esperado:**  
- O usuário é redirecionado para a página `/secure`.  
- Aparece a mensagem verde: **“You logged into a secure area!”**.  
- O cabeçalho da página exibe **“Secure Area”**.  
- O botão **Logout** está visível.  

**Prioridade:** Alta  
**Tipo:** Funcional  

---  

## CT-002 – Login com Senha Inválida  

**Pré‑condições:**  
- Usuário cadastrado com username válido (`tomsmith`).  
- Navegador na página de login.  

**Dados de Teste:**  
| Campo | Valor |
|-------|-------|
| Username | `tomsmith` |
| Password | `WrongPassword` |

**Passos:**  
1. Preencher **Username** = `tomsmith`.  
2. Preencher **Password** = `WrongPassword`.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- O usuário permanece na página de login.  
- Mensagem de erro vermelha exibida: **“Your password is invalid!”**.  
- O campo **Password** continua vazio após o erro.  

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

## CT-003 – Login com Username Inválido  

**Pré‑condições:**  
- Navegador na página de login.  

**Dados de Teste:**  
| Campo | Valor |
|-------|-------|
| Username | `invalidUser` |
| Password | `SuperSecretPassword!` |

**Passos:**  
1. Inserir **Username** = `invalidUser`.  
2. Inserir **Password** = `SuperSecretPassword!`.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro vermelha: **“Your username is invalid!”**.  
- O campo **Username** permanece preenchido, **Password** é limpo.  

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

## CT-004 – Campos Obrigatórios – Username em Branco  

**Pré‑condições:**  
- Navegador na página de login.  

**Dados de Teste:**  
| Campo | Valor |
|-------|-------|
| Username | *(deixar vazio)* |
| Password | `SuperSecretPassword!` |

**Passos:**  
1. Deixar o campo **Username** vazio.  
2. Preencher **Password** com valor válido.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro vermelha: **“Your username is invalid!”** (mesmo que o campo esteja vazio).  
- O foco do cursor deve ser reposicionado no campo **Username**.  

**Prioridade:** Média  
**Tipo:** Funcional  

---  

## CT-005 – Campos Obrigatórios – Password em Branco  

**Pré‑condições:**  
- Navegador na página de login.  

**Dados de Teste:**  
| Campo | Valor |
|-------|-------|
| Username | `tomsmith` |
| Password | *(deixar vazio)* |

**Passos:**  
1. Preencher **Username** com valor válido.  
2. Deixar **Password** vazio.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro vermelha: **“Your password is invalid!”**.  
- O foco do cursor deve ser reposicionado no campo **Password**.  

**Prioridade:** Média  
**Tipo:** Funcional  

---  

## CT-006 – Campos Obrigatórios – Ambos os Campos em Branco  

**Pré‑condições:**  
- Navegador na página de login.  

**Passos:**  
1. Deixar **Username** e **Password** vazios.  
2. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro vermelha: **“Your username is invalid!”** (primeira validação disparada).  
- O cursor deve ficar no campo **Username**.  

**Prioridade:** Média  
**Tipo:** Funcional  

---  

## CT-007 – Sensibilidade a Maiúsculas/Minúsculas (Case‑Sensitive)  

**Pré‑condições:**  
- Usuário cadastrado com `tomsmith` / `SuperSecretPassword!`.  

**Dados de Teste:**  
| Campo | Valor |
|-------|-------|
| Username | `TomSmith` (primeira letra maiúscula) |
| Password | `SuperSecretPassword!` |

**Passos:**  
1. Inserir **Username** = `TomSmith`.  
2. Inserir **Password** = `SuperSecretPassword!`.  
3. Clicar em **Login**.  

**Resultado Esperado:**  
- Mensagem de erro vermelha: **“Your username is invalid!”** (login é case‑sensitive).  

**Prioridade:** Baixa  
**Tipo:** Usabilidade  

---  

## CT-008 – Verificação de Tempo de Resposta da Autenticação  

**Pré‑condições:**  
- Usuário válido (`tomsmith` / `SuperSecretPassword!`).  
- Ferramenta de captura de tempo (ex.: Chrome DevTools, JMeter).  

**Passos:**  
1. Iniciar medição de tempo ao clicar em **Login**.  
2. Preencher credenciais válidas e submeter.  
3. Parar a medição ao carregamento completo da página `/secure`.  

**Resultado Esperado:**  
- Tempo de resposta ≤ 2 s em ambiente de teste padrão.  

**Prioridade:** Média  
**Tipo:** Não‑funcional (Performance)  

---  

## CT-009 – Persistência da Sessão após Navegação  

**Pré‑condições:**  
- Login bem‑sucedido (CT‑001).  

**Passos:**  
1. Após o login, clicar em um link interno (ex.: “Elemental Selenium” no rodapé).  
2. Voltar à página `/secure` usando o botão **Back** do navegador.  

**Resultado Esperado:**  
- O usuário continua autenticado; a página `/secure` ainda exibe o cabeçalho “Secure Area” e o botão **Logout**.  

**Prioridade:** Média  
**Tipo:** Funcional  

---  

## CT-010 – Logout e Redirecionamento  

**Pré‑condições:**  
- Usuário logado (resultado de CT‑001).  

**Passos:**  
1. Clicar no botão **Logout**.  

**Resultado Esperado:**  
- Redirecionamento para a página de login (`/login`).  
- Mensagem verde: **“You logged out of the secure area!”**.  
- Campos de login permanecem vazios.  

**Prioridade:** Alta  
**Tipo:** Funcional  

---  

### Observações Gerais  

| Item | Comentário |
|------|------------|
| **Ambiente de Teste** | Chrome 118, Firefox 118, Edge 118 – versão mais recente. |
| **Dados Sensíveis** | Não armazenar senhas em texto plano nos artefatos de teste. |
| **Critério de Aceite** | Todos os casos acima devem ser executados com sucesso (pass) antes da liberação da funcionalidade de login. |
| **Risco** | Falha na validação de campos pode permitir acesso não autorizado ou gerar má experiência ao usuário. |

---  

*Documento elaborado por:* **[Seu Nome] – Analista de Testes QA Sênior**  
*Data:* 08/04/2026