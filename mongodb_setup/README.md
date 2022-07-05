# Mongodb Setup With Native Docker CMD

---

## Pull

```powershell
$ docker pull mongo

$ docker pull mongo-express
```

## Network

```powershell
$ docker images

$ docker network create <NETWORK NAME>
```

## Run Containers

### mongo

```powershell
$ docker run -d \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    --name mongodb \
    --net  mongo-network \
    mongo
```

### mongo-express

```powershell
$ docker run -d \
    -p 8081:8081 \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=secret \
    -e ME_CONFIG_MONGODB_SERVER=mongodb \
    --net mongo-network \
    --name mongo-express \
    mongo-express
```

## Logs

```powershell
$ docker logs <CONTAINER ID>
```

## Stop Containers

```powershell
$ docker stop <CONTAINER ID>
```

## Delete Network

```powershell
$ docker network rm NETWORK [NETWORK...]
```

---

### Connections String

`` 
mongodb://mongoadmin:<PASSWORD>@localhost:27017
``

---