# Steps

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
