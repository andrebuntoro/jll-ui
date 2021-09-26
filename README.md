# Documentation

---

## Setup

- install npm modules.

```bash
npm install
```

- setup firebase init

  - get your web api key [here](https://console.firebase.google.com/project/jll-service/settings/general) for `firebaseInit.ts`

- run nginx with the server specified in `nginx` file

## Start Server

- start react app

```bash
npm start
```

- open `http://localhost:17000/` as specified in nginx

---

## Features

#### Admin user

- Grant Admin Role
- Get Cat Breeds
- Get Cats by Breed
- Get Random Cat

#### Non Admin user

- Get Random Cat
