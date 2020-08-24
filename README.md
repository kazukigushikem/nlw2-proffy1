<div align="center">
   <p align="center">
      <img src="https://user-images.githubusercontent.com/16246420/89484585-31827480-d775-11ea-9e48-c208a40a1f13.png" alt"Proffy" title="Proffy" />
   </p>

   <h1 align="center">
    Next Level Week by <img src=".github/rocketseat.svg">
   </h1>

   <p align="center">	
      <a href="https://www.linkedin.com/in/kazuki-gushikem-52238114b">
         <img alt="Kazuki G" src="https://img.shields.io/badge/-KazukiG-8257E5?style=flat&logo=Linkedin&logoColor=white" />
      </a>

   <a aria-label="Completed" href="https://nextlevelweek.com/episodios/omnistack/edicao/2">
      <img src="https://img.shields.io/badge/Proffy-NLW 2.0-8257E5?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
   </a>

   <img alt="Repository size" src="https://img.shields.io/github/repo-size/KazukiG/nlw2-proffy?color=774DD6">

   <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
   </p>
</div>

---

## 🤔 Mas o que é isso?

A NLW é uma iniciativa criada pela Rocketseat de uma semana com muito conteúdo prático, desafios, hacks e um projeto que nos ajudam a avançar para o próximo nível e impulsionar e incentivar a nossa carreira.

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias)
- [Layout](#-layout)
- [Site de demonstração](#-site-de-demo)
- [Instalar e Executar](#-instalar-e-executar)
- [Licença](#-licença)

---

## ✨ Sobre o projeto:

O Proffy é um projeto desenvolvido para conectar professores a alunos.
> <p style="margin-left:5em">🏭  &nbsp;&nbsp;&nbsp;&nbsp;./server - API REST usando TypeScript, Express e banco de dados SQLite </p>
> <p style="margin-left:5em">🔮  &nbsp;&nbsp;&nbsp;&nbsp;./web - Interface web em ReactJS e TypeScript </p>
> <p style="margin-left:5em">📱 &nbsp;&nbsp;&nbsp;&nbsp;./mobile - Interface mobile em ReactNative, TypeScript e Expo </p>

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

---

## 🎨 Layout

Design feito por [Tiago Luchtenberg](https://www.instagram.com/tiagoluchtenberg/)
<br>
Para acessar o Layout use o [Figma](https://www.figma.com/file/Snen317VmzHluRUHBRlzTE/Proffy-Web-Copy?node-id=0%3A1).

<div>
   <table>
      <tr>
         <td align="center" colspan="2"><h3>Web<h3></td>
      </tr>
      <tr>
         <td><img src=".github/web-landing.png" width="400px"></td>
         <td><img src=".github/web-list.png" width="400px"></td>
      </tr>
   </table>

   <table>
      <tr>
         <td align="center" colspan="4"><h3>Mobile</h3></td>
      </tr>
      <tr>
         <td><img src=".github/mobile-splash.png" width="180"></td>
         <td><img src=".github/mobile-onboarding.png" width="180"></td>
         <td><img src=".github/mobile-home.png" width="180"></td>
         <td><img src=".github/mobile-favoritos.png" width="180"></td>
      </tr>
   </table>
</div>

---

## 👀 Site de Demo
Você pode acessar o site em:     
👉  demo: https://proffy-kazuki.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/6b13a4b1-96e1-4ff3-86e3-4c9b981c77cf/deploy-status)](https://app.netlify.com/sites/proffy-kazuki/deploys)    

---

## 👷 Instalar e Executar

Clone ou faça o downlod desse repositório:

```
# Clone o repositório
$ git clone https://github.com/KazukiG/nlw2-proffy.git
```

#### Acesse a pasta server e faça as instalações:
##### npm

```
# Acesse a pasta do backend
$ cd server/

# Instale as dependencias
$ npm install

# Execute as migrations
$ npm knex:migrate

# Execute os seeds
$ npm knex:seed

# Rode a API
$ npm run dev

# running on port 3333
```

##### yarn 

```
# Acesse a pasta do backend
$ cd server/

# Instale as dependencias
$ yarn install

# Execute as migrations
$ yarn start

# running on port 3333
```

#### Acesse a pasta web e faça as instalações:
##### npm

```
# Acesse a pasta do frontend
$ cd web/

# Instale as dependencias
$ npm install

# Rode
$ npm start

# running on port 3000
```

##### yarn

```
# Acesse a pasta do frontend
$ cd web/

# Instale as dependencias
$ yarn install

# Rode
$ yarn start

# running on port 3000
```

#### Acesse a pasta mobile e faça as instalações:
##### npm

```
# Acesse a pasta do mobile
$ cd mobile/

# Instale as dependencias
$ npm install

# Rode
$ npm start

# A Expo será aberta, basta digitalizar o qrcode no terminal ou na página da exposição

# Se houver algum problema com as fontes, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

# Você pode installar o aplicativo Expo para testar no celular
```

##### yarn

```
# Acesse a pasta do mobile
$ cd mobile/

# Instale as dependencias
$ yarn install

# Rode
$ yarn start

# A Expo será aberta, basta digitalizar o qrcode no terminal ou na página da exposição

# Se houver algum problema com as fontes, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

# Você pode installar o aplicativo Expo para testar no celular
```

---

## 📕 Licença

Todos os arquivos incluídos aqui, incluindo este _README_, estão sob [Licença MIT](./LICENSE).

---

Agradecimentos [Rocketseat](https://rocketseat.com.br/), [Adriana Lima](https://github.com/dxwebster), [Rafael Goulart](https://github.com/RafaelGoulartB), [Roberta Soares](https://github.com/rosooares)<br>
Criado com ❤ por [KazukiG](https://github.com/KazukiG)