require [
  'zepto'
  'deferred'
  'backbone'
  'underscore'
  ],
  ($, Deferred, Backbone, _) ->
    Deferred.installInto($)
    $.ajax({url:'sample.json'}).done (d)-> console.log d
