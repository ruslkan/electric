### Introduction

This is the layout of a landing page for an electrician. With adaptation to mobile screens.
Demo: https://ruslkan.github.io/electric/
Based on ZURB Foundation Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression


### Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 6 or greater recommended, tested with 6.11.4 and 8.12.0)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.


### Using the CLI

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```
Now `cd` to your project name and to start your project run 

```bash
foundation watch
```


### Manual Setup

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
yarn
```

Finally, run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `yarn run build`.


### License

Electrician is an open source project that is licensed under MIT.