# Docker Image Build
```powershell
$ docker build -t myapp .
```
# Docker Run Image
```powershell
$ docker run -d -p 80:80 myapp

$ docker exec -it <CONTAINER_ID> /bin/bash
$ docker exec -it <CONTAINER_ID> /bin/sh
```
# Deploying To Heroku

```powershell
$ heroku login

$ heroku apps

$ heroku stack:set container -a <APPNAME>

$ heroku git:remote -a <APPNAME>

$ git push heroku master

```