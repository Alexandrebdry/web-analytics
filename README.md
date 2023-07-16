# web-analytics

## Description
Le but du projet est de développer une plateforme de Web analytics.
Le scope du projet s’arrête à la récupération de données côté frontend + backend + côté api de la plateforme. En
résumé, les interconnexions à créer sont celles entre le visiteur / le site de tests(frontend et backend) / l’API
analytics / le backoffice de la plateforme.

## Getting Started

Un .env est nécessaire dans les dossiers suivants : 

 - front 
 - nest-app


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

### Init the project
```bash
npx prisma migrate dev --name init
```

```bash
docker compose exec api npm run seed
```


Le site vitrine est accessible ici
http://localhost

le dashboard est accessible ici
http://localhost:5173


l'identifiant admin généré via le seedeur est : 
- email : admin@admin.fr
- pwd : admin
