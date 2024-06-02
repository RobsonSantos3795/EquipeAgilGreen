# Deploy do TechForge

Tutorial de como fazer o deployment do **TechForge** localmente.

## Requesitos

- Node.js version 18.0 or above (which can be checked by running node -v). Você pode usar o nvm para gerenciar múltiplas versões do Node em uma única máquina.

## Preparando o terreno

Para iniciar o deployment do **TechForge** localmente, é necessário **[baixar o repositorio do projeto no Github](https://github.com/RobsonSantos3795/EquipeAgilGreen.git)**


#### Clonando o repositorio na maquina
Clone o repositorio do projeto na sua pasta de preferência
```
  git clone https://github.com/RobsonSantos3795/EquipeAgilGreen.git
```

#### Acessando o repositorio e baixando as dependências
Acesse o repositorio do projeto e instale todos os pacotes necessários para o funcionamento da aplicação.
```
cd /EquipeAgilGreen/techforge/src/

npm install --save
```
#### Iciando a aplicação
Inicie a aplicação localmente utilizando o npm script

```
npm run dev
```