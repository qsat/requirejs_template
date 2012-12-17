requirejs.config
  baseUrl: 'js',
  paths:
    zepto: "lib/zepto",
    underscore: "lib/lodash",
    backbone: "lib/backbone"
    deferred: "lib/deferred"
  shim:
    backbone:
      deps: ["underscore", "zepto"],
      exports: "Backbone",
    zepto:
      exports: "Zepto"
    deferred:
      exports: "Deferred"


# require [
#   'zepto', 'app'
#   ],
#   ($, App) ->
#     $ ->
#       new App()
