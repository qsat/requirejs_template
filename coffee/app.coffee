define [
  'zepto'
  'deferred'
  'backbone'
  'underscore'
  'tmpl/index'
  ],
  ($, Deferred, Backbone, _, t1) ->
    Deferred.installInto($)
    ->
      $('body').append t1 projects:[
        {name:"12312"},{name:"12312"},{name:"12312"}]

      $.ajax({url:'sample.json'}).done (d)-> console.log d
