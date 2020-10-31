
# COVID Portal

## Links

 - [Trello](https://trello.com/b/XOOBy51q/covidgovcz)
 - [Frontend on Vercel](https://covid-gov-cz.ceskodigital.vercel.app/)

## Getting started

### Backend - Drupal

We're using docker containers from `docker` folder:

-  `cd docker`

Copy and modify env file as needed

-  `cp .env.example .env`

Start containers

-  `docker-compose up -d`

Install dependencies

-  `docker-compose exec drupal composer install` 

Install Drupal with existing config

- `docker-compose exec drupal drush si --db-url=mysql://root:password@mysql:3306/covid --existing-config -y`

Access site on `http://localhost:1577` if you didn't change

`COVID_PORT_NGINX` variable in your `env` file

---

### Frontend - GatsbyJS

**Environment Variables**

Create a `.env.development` file from `.env.development.sample` in `gatsby` directory

**Starting a dev server**

Navigate to project directory

-  `cd gatsby`

Install Gatsby CLI

-  `yarn global add gatsby-cli`

Install dependencies

-  `yarn install`  

Run dev server

-  `yarn dev`

---
