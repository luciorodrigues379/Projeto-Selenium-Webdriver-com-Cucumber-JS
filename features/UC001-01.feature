Feature: UC001 - Cadastrar Usuario
    
O usuário preenche os campos: nome, e-mail, senha e confirmação de senha.
O usuário clica no botão 'Cadastrar'.
O sistema exibe uma mensagem de sucesso.

Scenario: Fluxo Principal
Given O usuario acessa o menu de cadastro
When Prenche campos nome, e-mail, senha e confirmação de senha
Then O sistema exibe uma mensagem de sucesso