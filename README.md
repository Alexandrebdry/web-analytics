# web-analytics

## Description
Le but du projet est de développer une plateforme de Web analytics.
Le scope du projet s’arrête à la récupération de données côté frontend + backend + côté api de la plateforme. En
résumé, les interconnexions à créer sont celles entre le visiteur / le site de tests(frontend et backend) / l’API
analytics / le backoffice de la plateforme.

## Getting Started


### Launch the project:

Create the .env file using the .env.example file. Two env files are needed in : 

- front folder
- nest-app folder

#### Using Docker:

Rebuild the containers:
```bash
docker compose up -d --remove-orphans --force-recreate --build
```

Up the containers:
```bash
docker compose up -d
```

### Init the postgres database:


```bash
docker compose exec api npx prisma migrate dev --name init
```

### Test the project:

By default, this project allow you to test the analytics API using the test website (ItetsuLaTable) and the test backend (nest-app).

1. Launch the seeding :
```bash
docker compose exec api npm run seed
```

2. Connect to the backoffice using the following credentials: http://localhost:5173
```bash
email: user@user.fr
password: user
```

3. Link your app (ItetsuLaTable) to the analytics API using appID and appSecret logged during the seeding.
You need to change credentials in src/App.jsx and in src/views/AProposView.jsx

5. Launch the test website (ItetsuLaTable) and navigate on it to add some data to the analytics API : http://localhost

6.  to see how to use the SDK in front app go to front-sdk/readme.md
