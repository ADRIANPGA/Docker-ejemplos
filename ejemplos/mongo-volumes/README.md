# Ejemplo Mongo

Ejemplo con mongodb para visualizar redes dentro de un docker compose.

Define una red con una serie de direcciones IP concretas y un mongo y mongoclient dentro de esa network, marcando la base de datos mongodb como solo accesible desde conexiones en esa red, permitiendo de esa forma solo conectarnos a traves del mongoclient.

## Connect to DB

```bash
docker container exec -it nucleo mongo

docker exec -it manto mongo 172.16.238.5
```

## Queries to fetch result

```sql
use admin
db.auth({user:"core", pwd:"3480"})

use geothermos
db.temperatures.find().sort({calefactor_top: 1})
```
