# RUN AND DEPLOY

`nvm use 10`
`yarn start` (http://localhost:8000)

Deploy:

Commit + push

Depyloment is done via netlify direct from GitHub

# My Homepage

This is my homepage that runs at [https://nilshartmann.net](https://nilshartmann.net). The site is built with [Gatsby](https://gatsbyjs.org) and React.

## Preconditions

- Make sure you have Gatsby installed globally on your machine. Currently using version `2.4.x`

## Run locally

- Run `yarn start` to run a local webserver with hot reloading.
- Access the site at `http://localhost:8080`

## Run locally with hostname

To test the side from other devices than the local machine:

- Run `yarn dev-m`
- Make sure env HOSTNAME is set to a name that is visible in your network. (On my machine it just works™️, as `HOSTNAME` is correctly set on MacOS)
- This exposes the site at http://$HOSTNAME:8080

## Test the finished site locally

- Run `yarn build`. This builds all static assets etc that later will be deployed
- Run `yarn serve` to start a webserver that serves the build assets. Note: this only starts a webserver. No re-building is done automatically. In order
  to update the assets run again `yarn build`
- The webserver runs on `http://localhost:9000`.

## Deploy to website

- Run `copy-to-server.sh`
- This builds the site
- Copies to my webserver

## Contact

I'm Nils, and you can find me on [Twitter](https://twitter.com/nilshartmann), on [GitHub](https://github.com/nilshartmann) or on [Xing](https://www.xing.com/profile/Nils_Hartmann2). If you want to work with me (I'm a freelancer and build software with Java, JavaScript/TypeScript, React, GraphQL) drop me a line.
