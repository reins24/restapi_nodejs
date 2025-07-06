# INSTALL

npm init

entry point : src/main.js
test command : jest
type : module


# Package Library

## Joi - Validasi

npm install Joi

## Express JS

npm install express
npm install --save-dev @types/express

## Prisma - Database

npm install --save-dev prisma

## Winston - Logger

npm install winston

## Bcrypt - Untuk Hashing Password

npm install bcrypt
npm install --save-dev @types/bcrypt

## UUID - Membuat Uinque Id

npm install uuid
npm install --save-dev @types/uuid

## Jest - Untuk Unit Testing

npm install --save-dev jest @types/jest

## Babel - untuk support jest di module

npm install --save-dev babel-jest @babel/preset-env

setting package.json

```
"jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
```

create babel.config.json

```
{
  "presets": ["@babel/preset-env"]
}
```

## Supertest - untuk testing express Js

npm install --save-dev supertest @types/supertest


## Cara Set Up Awal

# Prisma

npx prisma init

npx prisma migrate dev