# A propos 

Ce projet à pour but d'utiliser des fonctionnalités de bases d'Angular.
Utilisation des composants, des services et de l'injection des données dans les éléments.
Pour le coté Css on a essayé avec beaucoup d'embuches d'associer Bootstrap avec Material component. 
Le front est en Angular et pour simuler le back-end on a utiliser json-server qu'on peut retrouver sur https://github.com/typicode/json-server 

# Comment lancer

Cloner le repertoire du git : 
> git clone https://github.com/objectifMH/projet27.git

Mettre à jours les dépendances du projet :
> npm install 

Pour lancer le server json, il faut se rendre dans le dossier \src :
> cd src 
> json-server --watch projet.json

Cette commande va simuler une API rest qu'on peut interroger avec : 

  Resources
  http://localhost:3000/utilisateurs
  http://localhost:3000/objets
  http://localhost:3000/messages

  Home
  http://localhost:3000
  
Une fois le json démarrer, on peut considérer que notre BACK est lancé.
Pour lancer le front en Angular on lance à la racine du dossier la commande : 
> ng serve 




# Technologies

# MonAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
