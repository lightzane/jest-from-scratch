# Typescript (jest-from-scratch)

Learning [Jest](https://jestjs.io/) with [Typescript](https://www.typescriptlang.org/)

## How this Project is Created

1. `npm init -y`
2. `npm i -D typescript nodemon ts-node`
3. `npx tsc --init`
4. Update generated `tsconfig.json` (see [here](#typescript-configuration))
5. Update **package.json** `scripts#start` to `nodemon ./src/main.ts`
6. Update **package.json** `scripts#test` to `jest`
7. Create `src/main.ts` and `src/main.spec.ts` and your other code logic to test in `Jest`
8. `npm i -D jest ts-jest @types/jest`
9. `npx jest --init`
10. Update generated `jest.config.ts` (see [here](#jest-configuration))

## Running the App

1. `npm start` to execute the functionality
2. `npm test` to run Jest and execute unit tests

### Typescript Configuration

**tsconfig.json**

1. Change `baseUrl` to `./src`

### Jest Configuration

When running `npx jest --init`, the command will prompt questions:

✅ Would you like to use Jest when running "test" script in "package.json" ? `>>` **yes**

✅ Would you like to use Typescript for the configuration file? `>>` **yes**

✅ Choose the test environment that will be used for testing `>>` **node**

✅ Do you want Jest to add coverage reports `>>` **yes**

✅ Which provide should be used to instrument code for coverage `>>` **v8**

✅ Automatically clear mock calls, instances, contexts and results before every test? `>>` **yes**

**jest.config.ts**

Add the following `preset` and `testMatch` property in the generated config:

```ts
preset: "ts-jest",
testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
],
```

## About the devDependencies installed

| node_modules  | description                                         |
| ------------- | --------------------------------------------------- |
| `typescript`  | core node package to write `.ts` files and language |
| `jest`        | javascript testing framework                        |
| `ts-jest`     | required by Jest in order to execute `.ts` files    |
| `@types/jest` | required by Typescript compiler to understand Jest  |
| `nodemon`     | watcher for development to listen for changes made  |
| `ts-node`     | required by nodemon in order to execute `.ts` files |
