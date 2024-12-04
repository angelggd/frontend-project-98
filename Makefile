# Makefile
angel: # prueba inicial
	@echo 'Hola angel, desde Makefile'

install: 
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

