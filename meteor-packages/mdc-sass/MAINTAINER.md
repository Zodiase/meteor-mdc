## Update Material Components Version

1. Make sure `/meteor-packages/mdc-sass/package.mdcVersion` matches `/package.dependencies.material-components-web`.
2. Bump `/meteor-packages/mdc-sass/package.version` as needed.
3. Run `/scripts/setup-sass.js` to update the SCSS files.
4. Update and run tests.
