# 🏍️ motofast

A FORMA MAIS RÁPIDA DE IR EM BUSCA DOS SEUS SONHOS

## Aplicação motofast

UI desenvolvida pelo time Hipster: https://www.figma.com/file/U0XH9kxFqqBYiHRJ57ycEP/Motofast---Projeto-Chef%C3%A3o?node-id=0%3A1

### Páginas:

* **Página inicial**: https://motofast.vercel.app/

  Overview do serviço

* **Como funciona:** https://motofast.vercel.app/como-funciona

  Passo a passo e moto padrão

* **Planos:** https://motofast.vercel.app/planos

  Usuário insere CEP, data de início do aluguel e data de devolução, e a aplicação retorna o ponto de aluguel mais próximo que tenha motos disponíveis, indicando também o plano mais adequado e o total
  
  Endpoint da API relacionado (com exemplo): https://motofast-api.herokuapp.com/locais/proximos/04714001/inicio/2021-11-15/fim/2021-12-20

* **Sua conta - aluguel:** https://motofast.vercel.app/usuario

  No caso de um usuário que busca alugar motos pontualmente, a página Sua Conta mostra os pontos de aluguel, o histórico de aluguel e o prazo de devolução

* **Sua conta - empresa:** https://motofast.vercel.app/empresa

  No caso de uma empresa que busca contratar parceiros motofasters para auxiliar em seu negócio, a página Sua Conta mostra a lista de parceiros podendo ser filtrada por zona da cidade e horário
  
  Endpoint da API relacionado (com exemplo): https://motofast-api.herokuapp.com/motofasters/zona/Norte/turno/Tarde

* **Sua conta - motofaster:** https://motofast.vercel.app/motofaster

  No caso de um paceiro motofaster que busca ser contratado por seus serviços, a página Sua Conta mostra o histórico de corridas

<hr>

## Tecnologias Utilizadas [Frontend]

* Next.js
* React
* Bootstrap

Link para repositório backend: https://github.com/cordeirolucas42/gamaxp-api-motofast
