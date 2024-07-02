# Ejemplo Final

Levantar un esquema de aplicación compleja con escalabilidad tanto en backend como en frontend, persistencia de base de datos y acceso a esta solo desde el backend, combinando imagenes ya creadas (base de datos) con imagenes construidas con Dockerfile (backend y frontend)

## Check DB changes

```bash
mongo mongodb://mongodb:27017/sample_db
db.random_collection.find()
db.random_collection.insertMany([
  {
    id: 22,
    name: "Mariana Fernandez Ruiz",
    value: 5.34
  },
  {
    id: 23,
    name: "Santiago Lopez Martinez",
    value: 9.21
  }
])
```