---
published: true
title: "Subpath imports / exports"
date: 2022-08-24
tags: ["typescript","node"]
---

Node 14.6+ and 12.19+ added support for new `imports` and `exports` fields in
`package.json`. These fields are essentially aliases that can be defined and
used across tooling.

Typescript added support for the fields in 4.7+

Parcel has an open issue to support it: https://github.com/parcel-bundler/parcel/issues/7840

**Example**

`tsconfig.json`

```javascript
    {
      "compilerOptions": {
        "moduleResolution": "node16", // <-- 🔑 need's to be `node16` or `nodenext`
        "noEmit": true,
      },
      "include": ["src/**/*.ts"]
    }
```

`src/index.ts`
```javascript
    import { foo } from "#me/nest/bird";

    console.log(foo);
```

`src/next/bird.ts`
```javascript
    export const foo = "bar";
```

`package.json`
```javascript
    {
      "name": "foo",
      "imports": {
        "#me/*": "./src/*.js"
      },
      "dependencies": {
        "typescript": "^4.7.4"
      }
    }
```