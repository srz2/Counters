Counters
==============

This is a recipe viewing app

## Counters Web

This was a tutorial I followed to learn [TailWindCSS](https://tailwindcss.com) from TheNetNinja on [YouTube](https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw&index=1&pp=iAQB)

This was extended upon my github repo [netninja-tailwind](https://github.com/srz2/netninja-tailwind) and integrated with a web api to get the data

## Counters Api

This is the API for the Counter application which was a front end project. This api moved the content of the app to its own database and api service to allow extensability

## Resources for Deployment

- Web Interface - [Netlify](netlify.com)
- Api Application - [Render](render.com)
- Sql Database - [CockroachLabs](cockroachlabs.cloud)

## Build Instructions

1. Clone the repository

        git clone https://github.com/srz2/Counters.git

2. Start the api

        cd counters-api
        npm install
        npm start dev

3. Start the web client

        cd counters-web
        npm install
        echo VITE_BASE_URL=localhost:3000/mock > .env
        npm start dev
