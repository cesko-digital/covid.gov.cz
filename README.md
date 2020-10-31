# COVID Portal
## Backend - Drupal

We're using docker containers from `docker` folder:

- `cd docker`

Copy and modify env file as needed 
- `cp .env.example .env`

Start containers
- `docker-compose up -d`

Install dependencies
- `docker-compose exec drupal composer install`

Install Drupal with existing config
- `docker-compose exec drupal drush si 
  --db-url=mysql://root:password@mysql:3306/covid --existing-config -y`

Access site on `http://localhost:1577` if you didn't change
`COVID_PORT_NGINX` variable in your `env` file 

## Frontend - GatsbyJS


### Environment Variables

Create a `.env.development` file from `.env.development.example` in `gatsby` directory 

### Getting started

- `cd gatsby`

Install Gatsby CLI
- `yarn global add gatsby-cli`


Install dependencies
- `yarn install`

Run dev server
- `yarn dev`
