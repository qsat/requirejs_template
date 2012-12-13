requirejs.config
  baseUrl: 'js',
  paths:
    zepto: "lib/zepto",
    underscore: "lib/lodash",
    backbone: "lib/backbone"
  shim:
    backbone:
      deps: ["underscore", "zepto"],
      exports: "Backbone",
    zepto:
      exports: "Zepto"


# require [
#   'zepto', 'app'
#   ],
#   ($, App) ->
#     $ ->
#       new App()
