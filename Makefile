DEBUG = 0


.PHONY: all
all:
ifeq ($(DEBUG),1)
	@npm run build:debug
else
	@npm run build
endif

.PHONY: run
run:
	@npm run start


.PHONY: clean
clean:
	@if [ -d ./dist ]; then rm -r ./dist; fi
	@if [ -d ./pages/js ]; then rm -r ./pages/js; fi
	@find . -type f -name '*~' -exec rm -v {} \;

