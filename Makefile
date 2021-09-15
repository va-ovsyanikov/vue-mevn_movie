
# .DEFAULT_GOAL := initProject
# CWD := $(shell pwd)
# NETWORK := $(shell basename `pwd)_dafault
mongo:
	docker run -p 27017:27017\
		-d\
		--rm\
		--name mongodb\
		--network notes-net\
		mongo

server:
	docker run -p 3001:3001\
		-d\
		--rm\
		--name cont-server\
		--network notes-net\
		server

client:
	docker run -p 3002:3002\
		-d\
		--rm\
		--name cont-client\
		--network notes-net\
		client


dev:
	docker-compose -f docker-compose.yml up 


prod:
	docker-compose -f docker-compose.prod.yml up -d


down:
	docker-compose down


rmimage:
	docker image prune -a


# Подключение к серверу SSH
SSH_DATA:=root@00.000.000.000

ssh:
	ssh $(SSH_DATA)

copy-files:
	scp -r ./* $(SSH_DATA):/root/app