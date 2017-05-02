
;(function ($, window, document, undefined) {
    var pluginName = "editable",
        defaults = {
            keyboard: true,
            dblclick: true,
            button: true,
            buttonSelector: ".edit",
	    cancelSelector: ".cancel",
            deleteSelector: ".delete",
            maintainWidth: true,
            dropdowns: {},
            edit: function() {},
            save: function() {},
            cancel: function() {},
	    remove: function() {}
        };

    function editable(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    editable.prototype = {
        init: function() {
            this.editing = false;

            if (this.options.dblclick) {
                $(this.element)
                    .css('cursor', 'pointer')
                    .bind('dblclick', this.toggle.bind(this));
            }

            if (this.options.button) {
                $(this.options.buttonSelector, this.element)
                    .bind('click', this.toggle.bind(this));
                $(this.options.cancelSelector, this.element)
                    .bind('click', this.cancel.bind(this));
                $(this.options.deleteSelector, this.element)
                    .bind('click', this.remove.bind(this));
            }
        },

        toggle: function(e) {
            e.preventDefault();

            this.editing = !this.editing;

            if (this.editing) {
                this.edit();
            } else {
                this.save();
            }
        },

        edit: function() {
            var instance = this,
                values = {};

            $('td[data-field],div[data-field]', this.element).each(function() {
                var input,
                    field = $(this).data('field'),
                    value = $(this).text().replace(/\s+$/g,''),
                    width = $(this).width();

                values[field] = value;

                $(this).empty();

                if (instance.options.maintainWidth) {
                    $(this).width(width);
                }

                if (field in instance.options.dropdowns) {
                    input = $('<select></select>');

                    for (var i = 0; i < instance.options.dropdowns[field].length; i++) {
                        $('<option></option>')
                             .text(instance.options.dropdowns[field][i])
                             .appendTo(input);
                    };

                    input.val(value)
                         .data('old-value', value)
                         .dblclick(instance._captureEvent);
                } else {
                    input = $('<input type="text" style="width:100%; box-sizing:border-box" />')
                        .val(value)
                        .data('old-value', value)
                        .dblclick(instance._captureEvent);
                }

                input.appendTo(this);

                if (instance.options.keyboard) {
                    input.keydown(instance._captureKey.bind(instance));
                }
            });

            this.options.edit.bind(this.element)(values);
        },

        save: function() {
            var instance = this,
                values = {};

            $('td[data-field],div[data-field]', this.element).each(function() {
                var value = $(':input', this).val();

                values[$(this).data('field')] = value;

		var repl = value.replace(/\$(\w+),*/g,
			      '<i class="tooltip-params" data-toggle="tooltip" data-container="body" title="">$$$1</i>');
                $(this).empty()
                       .html(repl);
            });

            this.options.save.bind(this.element)(values);
        },

        cancel: function() {
            var instance = this,
                values = {};
            this.editing = false;

            $('td[data-field],div[data-field]', this.element).each(function() {
                var value = $(':input', this).data('old-value');

                values[$(this).data('field')] = value;

		var repl = value.replace(/\$(\w+),*/g,
			      '<i class="tooltip-params" data-toggle="tooltip" data-container="body" title="">$$$1</i>');
                $(this).empty()
                       .html(repl);
            });

            this.options.cancel.bind(this.element)(values);
        },

        remove: function() {
            var instance = this,
                values = {};

            $('td[data-field],div[data-field]', this.element).each(function() {
                var value = $(':input', this).val();

                values[$(this).data('field')] = value;
            });

            this.options.remove.bind(this.element)(values);
        },

        _captureEvent: function(e) {
            e.stopPropagation();
        },

        _captureKey: function(e) {
            if (e.which === 13) {
                this.editing = false;
                this.save();
            } else if (e.which === 27) {
                this.editing = false;
                this.cancel();
            }
        }
    };

    $.fn[pluginName] = function(options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new editable(this, options));
            }
        });
    };

})(jQuery, window, document);
