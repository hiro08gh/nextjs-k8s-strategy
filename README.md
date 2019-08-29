# nextjs-k8s-strategy

## setup && development

```
$ yarn install
$ yarn dev
```

## docker build

```
$ docker build -t hiro08/nextjs-k8s-strategy .
```

## docker run 

```
$ docker run -d -p 3000:3000 hiro08/nextjs-k8s-strategy:latest
```

## docker registory

```
$ docker pull hiro08/nextjs-k8s-strategy:latest
```

Open localhost:3000

# minikube

start minikube

```
$ minikube start
```

create namespace

```
$ kubectl create -f kube/namespace
```

created myspace


## Deployment & service

```
$ kubectl create -f kube/deployment.yaml --namespace=myspace 
```

```
$ kubectl get services --namespace=myspace 
```

```
$ kubectl get pods --namespace=myspace 
```

```
$ minikube service nextjs-k8s-strategy --namespace=myspace 
```
## Ingress

todo
