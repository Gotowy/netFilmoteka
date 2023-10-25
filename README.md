# netFilmoteka - movie browsing portal (under construction)

This is going to be a refactored Vue version of my old personal React project where main purpose was to build an application which uses a third part API in case to create some functional web portal. In current approach I wanted to use newer technologies I am currently working with and keep code cleaner in order to have no problem with expanding it even more in the future.

## Technologies:

TypeScript <br />
Vue 3 (Composition API with Router)<br />
Pinia <br />
Sass <br />
Vite <br />
Vitest <br />
Vue Test Utils <br />
Cypress <br />
TMDb API <br />
Google fonts <br />

## Functionality:

The web site will allow to browse movies existing in The Movie Database by part of name in multiple languages. There will be also possibility of searching movies by genre or filter them by certain criterium and check for more details about chosen movie (including its IMDB profile). The project is responsive and going to include pagination.

## Status:

I have just started migration of the project from old React version to Vue. Currently I have divided it into modules and prepared some UI elements and views. I still need to: connect it with the API, incorporate store, add pagination and adjust filtering. I am also going to include unit and E2E tests with Vitest and Cypress. This could be the end of the first stage of the project. Next I would think about some BE solutions enabling user accounts with some more advanced options enabled.

