# VrLib

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build vr-lib
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. To build the library, run:

```bash
ng build vr-lib
``

2. compile css to dist folder
   ```bash
   npx sass --load-path=node_modules projects/vr-lib/src/lib/styles/styles.scss dist/vr-lib/styles.css
   ```

3. Login to npm (if not already logged in):
   ```bash
   npm login
   ```

4. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
