# RoutingApp

# Test Docker with Angular and Deploy to Pivotal Cloud Foundry

## Build a project
```
npm run build
```

## Build docker image
```
$ docker build -t image-name . 
```

##Push image to registry (DickerHub)
```
$ docker tag image-name username/repository:tag
$ docker push username/repository:tag
```

## Push docker image to cloud foundry
```
cf push app-name --docker-image username/repository:tag
```
