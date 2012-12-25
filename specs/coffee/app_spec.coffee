describe "Tests", ->
  it "t01", ->
    expect(0).toEqual(0)
    require ['app'],
      (app)->
        #console.log new app() is true

