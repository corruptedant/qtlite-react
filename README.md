# Quicktrack Lite

Quickly tracks how much people owe you.

## Inspiration

I wanted to made sure that whoever I lent my money to, I keep a good track of it. I wanted a quick, and reliable way to track people's _hutang_(loan in Malay), so I made this app.

## Technologies

-   Vite (with Vite PWA)
-   React (with React Router)
-   tailwindcss
-   Django (with Django Rest Framework)

## Setting Up

This application is deployed to Heroku(Procfile and runtime.txt)

This uses the Python package (since we are running Django). We are also serving the React files via staticfiles/whitenoise from Django itself, which means we don't have to deal with CORS, or even Token Authentication. This project uses Session Authentication.

I also have setup a custom settings folder, so you need a environ of `DJANGO_SETTINGS` set to `qtlite.settings.production`.

You should also set a new secret key as well, done using `DJANGO_SECRET_KEY`.

First, do

    yarn

Then, make the production build

    yarn build

Include it into git (on branch `main`)

    git add .
    git commit -m "Staging to Heroku"

Then push to Heroku

    git push heroku main

## Local Development (Linux)

    python -m venv env
    source env/bin/activate
    pip install -r requirements.txt
    yarn

Run on 2 terminals:

    yarn dev
    yarn runserver
