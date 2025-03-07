## Instructions

1. Install [npm and node.js](https://nodejs.org/en/download/)
2. Clone the repo
3. Run: `npm install`
4. To run locally: `npm run dev`, then browse to http://localhost:3000
5. To deploy the local version to GitHub: `npm run deploy`.
   This builds the website and pushes the compiled version to the branch 
   `gh-pages` in the remote repo `zvikabh.github.io` of user `zvikabh`.
   GitHub Actions will publish the new version to http://zvikabh.github.io
   within a few minutes.

## Branches

The setup here is a bit silly. The main branch contains the source code, and
the `gh-pages` branch contains the built version, which is just a bunch of
static html+js+css files ready to be rendered by the client.
