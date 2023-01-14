# How to setup an NPM package ?

- Build with TypeScript
- Using ES Moudles (but also compatible with CommonJS)
- That can be used in JavaScript AND TypeScript projects
- That can be used in web or node environement

/!\ This package config will not fully  work in a `CommonJS` modules /!\

## 1/ Init NPM package

```shell
    $ yarn init
```
Then fill all fields (you can use default values for instance)

## Install dependencies for `typescript` 

```shell
    $ yarn add -D typescript tsc @types/node
```

## 3/ Add `tsconfig.json`

```json
    {
        "compilerOptions": {
            "module": "node16",             // Type of modules to use (also see moduleResolution)
            "target": "esnext",             // Version of the transpilled JS
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "outDir": "./dist",             // Folder for transpilled files (.js and .d.ts)
            "rootDir": "./src",             // Folder with source files
            "declaration": true,            // Create .d.ts files for 'types'
            "declarationMap": true,         // 
            "moduleResolution": "node16",   // !important if you want to be able to use JS out with ES modules
        },

        "include": [
            "src/**/*"
        ],
        "exclude": [
            "node_modules"
        ]
    }
```

## 4/ Edit the `package.json`

### Config package entries and type

```json
    ...
    "type": "module",               // You want to use ES modules
    "types": "./dist/index.d.ts",   // Entries for Ts types
    "main": "./dist/index.js",      // Entries for Js usage
    ...
```

### Add build script

```json
    "scripts": {
        "build": "tsc"              // tsc will transpile the source files into .js and .d.ts files
    },
```

## 5/ Add `.gitignore` and `.npmignore` files

/!\ It's importante to add the `.npmignore` event if you leave it empty as we will ignore the `dist/`folder in the github repo but we want to include it in the `NPM Package. In a way the `.npmignore` will overwrite the `.gitignore` for `npm`. /!\

### `.gitingore`

```
    node_modules/
    dist/
    yarn.lock
```

### `.npmignore`

```
    yarn.lock
    src/
```

Add the `src/`folder if you don't want to publish the source files on npm