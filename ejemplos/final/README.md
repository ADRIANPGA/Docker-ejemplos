# Useful commands

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