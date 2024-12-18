# Makefile
angel: # prueba inicial
	@echo 'Hola angel, desde Makefile'

install: 
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-games.js

brain-calc:
	node bin/brain-calc.js

brain-angel:
	node bin/brain-angel.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

