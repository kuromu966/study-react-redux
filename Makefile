DESTDIR = /usr/local/share/study-react-redux
OUTPUT = ./dist
DEBUG = 0
DIRS = js css font img localize

LEGACY_LIB = ./legacy
LOCALIZED_LIB = ./localize

.PHONY: all
all:
	@if [ -d $(OUTPUT) ]; then \
	echo "Already exists $(OUTPUT)"; \
	echo "Please try 'make clean' command."; \
	exit 1; \
	fi
	@mkdir -pv $(OUTPUT)
ifeq ($(DEBUG),1)
	@npm run build:devel
else
	@npm run build
endif


.PHONY: install
install:
	@if [ ! -d $(OUTPUT) ]; then \
	echo "Failed to exists $(OUTPUT)"; \
	echo "Please try 'make' command"; \
	exit 1; \
	fi
	@for dir in $(DIRS); do \
	mkdir -pv $(DESTDIR)/$$dir; \
	done
	@for name in `find $(OUTPUT)/js -type f -exec basename {} \; | grep -v "^test"`; do \
	install -v -m 0644 $(OUTPUT)/js/$$name $(DESTDIR)/js; \
	done
	@for path in `find $(OUTPUT)/css -type f`; do \
	install -v -m 0644 $$path $(DESTDIR)/css; \
	done
	cp -r $(OUTPUT)/font $(DESTDIR)
	cp -r $(OUTPUT)/img $(DESTDIR)
	cp -r $(LEGACY_LIB) $(DESTDIR)
	cp -r $(LOCALIZED_LIB) $(DESTDIR)
	@for path in `find $(DESTDIR) -type f | grep "~$$"`; do \
	rm $$path; \
	done


.PHONY: uninstall
uninstall:
	rm -r $(DESTDIR)

.PHONY: run
run:
	@npm run start

.PHONY: story
story:
	@npm run storybook

.PHONY: css
css:
	@if [ -d ./img ]; then cp -r ./img/ $(OUTPUT)/img/; fi
ifeq ($(DEBUG),1)
	@npm run build:devel:css
else
	@npm run build:css
endif

.PHONY: js
js:
ifeq ($(DEBUG),1)
	@npm run build:devel:js
else
	@npm run build:js
endif

.PHONY: clean
clean:
	@if [ -d $(OUTPUT) ]; then rm -r $(OUTPUT); fi
	@find . -type f -name '*~' -exec rm -v {} \;

.PHONY: setup
setup:
	npm install
	cp -r ./node_modules/admin-lte/dist/img ./node_modules/admin-lte/build
	#npm dedupe

.PHONY: check
check:
	@echo "If you update module, please try 'npm david'"
	@npm outdated

