# nuxt-vitest-playground

This repository exists to inspect the order of execution of setup files and the Nuxt runtime when using [`nuxt-vitest`](https://github.com/danielroe/nuxt-vitest).

To run the tests, perform the following steps:

```shell
git clone https://github.com/adam-gipril/nuxt-vitest-playground.git
cd nuxt-vitest-playground
npm install
npm test
```

You should see the following output:

```plaintext
❯ npm test

> nuxt-app@0.0.0 test
> vitest

global setup

 DEV  v0.33.0 /Users/adam.gipril/Developer/nuxt-vitest-playground

stdout | unknown test
<Suspense> is an experimental feature and its API will likely change.

stdout | unknown test
setup file

 ✓ app.test.ts (1)
   ✓ is 2

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  14:31:58
   Duration  553ms (transform 216ms, setup 3ms, collect 6ms, tests 1ms, environment 382ms, prepare 53ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

- The text `"global setup"` comes from a `console.log` in [`.test/global-setup.ts`](.test/global-setup.ts), which is listed as a [`globalSetup`](https://vitest.dev/config/#globalsetup) file in [`vitest.config.ts`](vitest.config.ts).
- The text `"DEV v0.33.0..."` illustrates the start of the Nuxt runtime.
- The text `"setup file"` comes from a `console.log` in [`.test/setup-file.ts`](.test/setup-file.ts), which is listed as a [`setupFiles`](https://vitest.dev/config/#setupfiles) file in [`vitest.config.ts`](vitest.config.ts).
