## Plano de Testes – Cadastro de Usuários  
**Sistema:** https://front.serverest.dev/cadastrarusuarios  
**Versão:** 1.0  
**Data:** 08/04/2026  
**Responsável:** Analista de Testes QA Sênior  

---  

# Índice de Casos de Teste
| ID | Título | Tipo | Prioridade |
|----|--------|------|------------|
| CT-001 | Cadastro com sucesso – Dados válidos | Funcional | Alta |
| CT-002 | Campo **Nome** obrigatório | Negativo | Alta |
| CT-003 | Campo **Email** obrigatório | Negativo | Alta |
| CT-004 | Campo **Senha** obrigatório | Negativo | Alta |
| CT-005 | Email em formato inválido | Negativo | Média |
| CT-006 | Senha que não atende à política de segurança | Negativo | Média |
| CT-007 | Tentativa de cadastro com e‑mail já existente | Negativo | Alta |
| CT-008 | Validação de tamanho máximo do campo **Nome** (255 caracteres) | Negativo | Baixa |
| CT-009 | Validação de tamanho máximo do campo **Email** (255 caracteres) | Negativo | Baixa |
| CT-010 | Navegação – Botão **Voltar** retorna à página anterior | Usabilidade | Baixa |

---  

## CT-001 – Cadastro com sucesso – Dados válidos

**Pré‑condições:**  
- O usuário está na página de cadastro (`/cadastrarusuarios`).  
- Não há nenhum usuário cadastrado com o e‑mail **sergio.coti@gmail.com**.

**Passos:**  
1. Preencher o campo **Nome** com `Sergio Mendes`.  
2. Preencher o campo **Email** com `sergio.coti@gmail.com`.  
3. Preencher o campo **Senha** com `@Admin123`.  
4. Clicar no botão **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de sucesso exibida: *"Usuário criado com sucesso"* (ou equivalente).  
- O usuário é redirecionado para a tela de listagem de usuários ou permanece na tela com o formulário limpo.  
- O novo usuário aparece na lista de usuários ao consultar a API `/usuarios` ou a tela de listagem.

**Prioridade:** Alta  
**Tipo:** Funcional  

---  

## CT-002 – Campo **Nome** obrigatório

**Pré‑condições:**  
- Usuário na página de cadastro.

**Passos:**  
1. Deixar o campo **Nome** vazio.  
2. Preencher **Email** com `teste@exemplo.com`.  
3. Preencher **Senha** com `@Admin123`.  
4. Clicar em **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de erro ao lado do campo **Nome**: *"Nome é obrigatório"* (ou texto equivalente).  
- O cadastro não é concluído.

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

## CT-003 – Campo **Email** obrigatório

**Pré‑condições:**  
- Usuário na página de cadastro.

**Passos:**  
1. Preencher **Nome** com `Ana Silva`.  
2. Deixar o campo **Email** vazio.  
3. Preencher **Senha** com `@Admin123`.  
4. Clicar em **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de erro ao lado do campo **Email**: *"Email é obrigatório"*.  
- O cadastro não é concluído.

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

## CT-004 – Campo **Senha** obrigatório

**Pré‑condições:**  
- Usuário na página de cadastro.

**Passos:**  
1. Preencher **Nome** com `Carlos Lima`.  
2. Preencher **Email** com `carlos.lima@example.com`.  
3. Deixar o campo **Senha** vazio.  
4. Clicar em **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de erro ao lado do campo **Senha**: *"Senha é obrigatória"*.  
- O cadastro não é concluído.

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

## CT-005 – Email em formato inválido

**Pré‑condições:**  
- Usuário na página de cadastro.

**Passos:**  
1. Preencher **Nome** com `Mariana Costa`.  
2. Preencher **Email** com `mariana.costa[at]mail.com` (formato inválido).  
3. Preencher **Senha** com `@Admin123`.  
4. Clicar em **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de erro ao lado do campo **Email**: *"Formato de e‑mail inválido"* (ou similar).  
- O cadastro não é concluído.

**Prioridade:** Média  
**Tipo:** Negativo  

---  

## CT-006 – Senha que não atende à política de segurança

**Pré‑condições:**  
- Usuário na página de cadastro.

**Passos:**  
1. Preencher **Nome** com `Pedro Alves`.  
2. Preencher **Email** com `pedro.alves@example.com`.  
3. Preencher **Senha** com `admin123` (sem caractere especial e sem letra maiúscula).  
4. Clicar em **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de erro ao lado do campo **Senha**: *"A senha deve conter ao menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial"* (ou texto equivalente).  
- O cadastro não é concluído.

**Prioridade:** Média  
**Tipo:** Negativo  

---  

## CT-007 – Tentativa de cadastro com e‑mail já existente

**Pré‑condições:**  
- Um usuário já cadastrado com e‑mail `joao.silva@example.com`.  

**Passos:**  
1. Preencher **Nome** com `João Silva`.  
2. Preencher **Email** com `joao.silva@example.com`.  
3. Preencher **Senha** com `@Admin123`.  
4. Clicar em **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de erro global: *"Este e‑mail já está cadastrado"* (ou similar).  
- O cadastro não é concluído.

**Prioridade:** Alta  
**Tipo:** Negativo  

---  

## CT-008 – Validação de tamanho máximo do campo **Nome** (255 caracteres)

**Pré‑condições:**  
- Usuário na página de cadastro.

**Passos:**  
1. Inserir no campo **Nome** uma string com 256 caracteres (por exemplo, 256 letras “a”).  
2. Preencher **Email** com `teste.tamanho@example.com`.  
3. Preencher **Senha** com `@Admin123`.  
4. Clicar em **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de erro ao lado do campo **Nome**: *"O nome deve ter no máximo 255 caracteres"*.  
- O cadastro não é concluído.

**Prioridade:** Baixa  
**Tipo:** Negativo  

---  

## CT-009 – Validação de tamanho máximo do campo **Email** (255 caracteres)

**Pré‑condições:**  
- Usuário na página de cadastro.

**Passos:**  
1. Preencher **Nome** com `Teste Tamanho`.  
2. Inserir no campo **Email** uma string que, ao incluir o domínio, ultrapasse 255 caracteres (ex.: `a…a@example.com`).  
3. Preencher **Senha** com `@Admin123`.  
4. Clicar em **Cadastrar**.

**Resultado Esperado:**  
- Mensagem de erro ao lado do campo **Email**: *"O e‑mail deve ter no máximo 255 caracteres"*.  
- O cadastro não é concluído.

**Prioridade:** Baixa  
**Tipo:** Negativo  

---  

## CT-010 – Navegação – Botão **Voltar** retorna à página anterior

**Pré‑condições:**  
- Usuário já está na página de cadastro.  

**Passos:**  
1. Clicar no botão **Voltar** (ou no ícone de seta do navegador).  
2. Verificar a página exibida.

**Resultado Esperado:**  
- O usuário é redirecionado para a tela anterior (geralmente a listagem de usuários ou a página inicial).  
- Não há perda de estado inesperada nem mensagens de erro.

**Prioridade:** Baixa  
**Tipo:** Usabilidade  

---  

# Observações Gerais
- Todos os campos devem ser validados tanto no **frontend** (mensagens imediatas) quanto no **backend** (código de status HTTP 400 e corpo de erro).  
- Os testes de segurança (ex.: injeção de script) deverão ser incluídos em um ciclo de testes de penetração separado.  
- Os dados de teste (e‑mails) devem ser limpos ou marcados como “test” para evitar conflitos com usuários reais.  

---  

*Documento elaborado por:*  
**[Seu Nome]** – Analista de Testes QA Sênior  
*Data:* 08/04/2026