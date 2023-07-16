# web-analytics

## Description
Le but du projet est de développer une plateforme de Web analytics.
Le scope du projet s’arrête à la récupération de données côté frontend + backend + côté api de la plateforme. En
résumé, les interconnexions à créer sont celles entre le visiteur / le site de tests(frontend et backend) / l’API
analytics / le backoffice de la plateforme.

## Getting Started

### SDK Front 
Voir le README du dossier front-sdk

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

L'identifiant user généré via le seedeur est :
- email : user@user.fr
- pwd : user

L'identifiant admin généré via le seedeur est : 
- email : admin@admin.fr
- pwd : admin

### Test the project:

Par défaut, ce projet vous permet de tester l'API d'analyse en utilisant le site de test (ItetsuLaTable) et le backend de test (nest-app).

1. Lancer le seedeur

2. Connectez-vous au backoffice en utilisant les identifiants suivants :
```bash
email: user@user.fr
password: user
```

3. Lier votre application (ItetsuLaTable) à l'API d'analyse en utilisant l'appID et l'appSecret générés lors du seeding (voir les logs pour un gain de temps)

4. Lancer le site de test (ItetsuLaTable) et naviguez dessus pour ajouter des données à l'API d'analyse