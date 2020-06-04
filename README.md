# mongo_docker_latest

## introduction

This is docker-compose.yml for latest mongo version

##  verify

login into container

```script==
docker exec -it mongo ${MONGO_INITDB_ROOT_USERNAME} -p
```
## createUser for InitDB

```script===
db.createUser({"user":"username", "pwd":"pwd", "roles":[{"role":"readWrite", "db":"dbname"}]})
```
## run with demo
```script==
npm i
```
```script==
npm run demo
```