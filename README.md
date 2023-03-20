# COVID Portal 🦠 🖥 🇨🇿

| ⚠️ Development has moved to a [public code.gov.cz repository](https://code.gov.cz/gov-cz/covid-portal). This is no longer updated. ⚠️ |
| --- |

## Links

- 🖥  **production version** - [https://covid.gov.cz/](https://covid.gov.cz/)
- 🛠 "staging" version - [https://covidportal.dev/](https://covidportal.dev/) (hosted on Vercel)
- [Trello](https://trello.com/b/XOOBy51q/covidgovcz)

## Contribute  

- join 🇨🇿 **cesko.digital** through - [https://join.cesko.digital/](https://join.cesko.digital/)

1. after receiving slack link, join us in the respective channel:

`#p-informacni-web-ceska`
`#p-informacni-web-frontend`
`#p-informacni-web-drupal`

2. introduce yourself + just fork this project or just ask for GitHub privileges in our Slack

3. choose your starter task from our [Trello](https://trello.com/b/XOOBy51q/covidgovcz)

4. create a branch and PR for the task
*we usually tend to use a descriptive PR title e.g.:* `gatsby/feat: task title` *or*  `drupal/fix: task title`, *i guess you get the point*

6. after PR creation:
  - we will receive a notification in our slack channel to do the review
  - your branch will be deployed to a feature branch on Vercel (comment by Vercel bot)
  - check your changes in the prod build on Vercel

7. after the review and approval ✅, we will merge the PR and it will be eventually deployed to production

  

## Getting started 

### Frontend - Gatsby

  

If you only want to run frontend part of this app, you **dont have to install Docker** and the backend part. It works standalone as well - see the frontend  for more details

- 🚀 [see how to get up and running with the frontend](/gatsby/README.md#gatsby) ➡️ 
  

### Backend - Drupal

We're using docker containers from `docker` folder:

-  `cd docker`

Copy and modify env file as needed

-  `cp .env.example .env`

Start containers

-  `docker-compose up -d`

Install dependencies

-  `docker-compose exec drupal composer install` 

Install Drupal with existing config, database connection is already injected in settings.php file

- `docker-compose exec drupal drush si --existing-config -y`

Access site on `http://localhost:1577` if you didn't change

`COVID_PORT_NGINX` variable in your `env` file
