# Distill post--example

Distill articles depend on [distillpub/template](https://github.com/distillpub/template) for styling and some functionality such as footnotes, citations, and math rendering. We built template as a standalone library of styles and [webcomponents](https://www.webcomponents.org/) to allow you to use any web development workflow you'd like. But what if you don't have strong opinions about that and just want a starter kit that works out of the box? This is such a starter kit.

This is using `webpack` for bundling, `svelte` & `svelte-loader` to build interactive components/diagrams, and `ejs` to inline SVGs—the same technology choices we used when building ambitious articles such as [Building Blocks of Interpretability](https://distill.pub/2018/building-blocks).

## Get started

Fork and rename, or simply copy this repository.

### First time setup

- [ ] Clone your fork or copy of this repository: `git clone …`
- [ ] [Install `npm` (Node Packet Manager)](https://docs.npmjs.com/getting-started/installing-node#installing-npm-from-the-nodejs-site). If you're on a Mac and have `brew`: `brew install node` will do the job.
- [ ] `cd post--example` into the root directory of this project.
- [ ] `npm install` to install dependencies.
- [ ] Execute `npm run dev` to run a development server that autoreloads when you make changes to the article ("hot-reloading"). The console output will link you to a hot-reloading preview of the article.
- [ ] Your article text is in `src/index.ejs`.
- [ ] Your article metadata is in a tag called `distill-frontmatter` in the same (`src/index.ejs`) file. It contains a password field, which you should customize or remove while you're working oon the article.

Components and diagrams are stored in `src`. The `.html` files are [svelte](https://svelte.technology/guide) components, the `.js` files are compilation endpoints that are also defined in `webpack.config.js`. These compiled endpoints are then consumed by hand authored `.ejs` files in `src`, such as `index.ejs` which contains your content. For most articles you can simply use the provided `index.ejs` for your text, `index.js` to instantiate diagrams, and `.html` svelte files to create them.


## Feedback

This is a new template, and we don't yet have a lot of documentation on it. Please bear with us while we work to improve it!

Please [join our Distill Slack workspace](https://join.slack.com/t/distillpub/shared_invite/enQtMzg1NzU3MzEzMTg3LWJkNmQ4Y2JlNjJkNDlhYTU2ZmQxMGFkM2NiMTI2NGVjNzJkOTdjNTFiOGZmNDBjNTEzZGUwM2U0Mzg4NDAyN2E) if you have any questions. [Open an issue](https://github.com/distillpub/post--example/issues) if you'd like to see something improved!
