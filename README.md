# web-analytics

## Description
Le but du projet est de développer une plateforme de Web analytics.
Le scope du projet s’arrête à la récupération de données côté frontend + backend + côté api de la plateforme. En
résumé, les interconnexions à créer sont celles entre le visiteur / le site de tests(frontend et backend) / l’API
analytics / le backoffice de la plateforme.

## Getting Started


### Launch the project:

#### Using Docker:

Rebuild the containers:
```bash
docker compose up -d --remove-orphans --force-recreate --build
```

Up the containers:
```bash
docker compose up -d
```

#### Using NPM:

Launch the frontend:
```bash
cd front && npm run dev
```

Launch the backend:
```bash
cd nest-app && npm run start:dev
```

Launch the test website:
```bash
cd ItetsuLaTable && npm run start
```

### Init the postgres database:

Create the .env file using the .env.example file:


```bash
npx prisma migrate dev --name init
```
