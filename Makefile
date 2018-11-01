SHELL := /bin/bash

build:
	@docker-compose up --build
start:
	@docker-compose up
stop:
	@docker-compose down
prune:
	@docker container prune -f && docker network prune -f
enter_server:
	@docker exec -it chat_server /bin/bash
enter_db:
	@docker exec -it chat_db mongodb
