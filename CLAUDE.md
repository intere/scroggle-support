# Scroggle Support

AngularJS 1.4 support site for the Scroggle word game.

## Stack

- **Framework:** AngularJS 1.4 with `ui.router`, `ui.bootstrap`, `toastr`, `angular-google-analytics`
- **Language:** CoffeeScript (`.coffee` files in `src/app/`)
- **Styles:** SASS (`.scss`), Bootstrap 3
- **Build:** Gulp 3.9 (tasks split across `gulp/*.js`)
- **Package managers:** npm (dev tooling), Bower (frontend deps)
- **Testing:** Karma + Jasmine (unit), Protractor (e2e)
- **Dev server:** BrowserSync

## Commands

```bash
gulp          # Clean + build
gulp serve    # Dev server with live reload
gulp test     # Run unit tests (Karma)
gulp protractor # Run e2e tests (Protractor)
```

## Project Structure

```
src/app/           # CoffeeScript source (AngularJS modules)
src/assets/        # Static assets
gulp/              # Gulp task definitions
styles/            # Compiled CSS output
e2e/               # Protractor e2e tests
bower.json         # Frontend dependencies
package.json       # Dev tooling dependencies
```

## Conventions

- Module pattern: `angular.module('ScroggleSupport')` — single module, no sub-modules
- Use `'ngInject'` annotation string for dependency injection
- Main branch: `gh-pages` (GitHub Pages deployment)
- Gitmoji prefixes for commit messages
