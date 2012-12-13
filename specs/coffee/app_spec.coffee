describe "Tests", ->
  it "t01", ->
    expect(0).toEqual(0)
    require [
      'app',
      'modules/models/post'
      ],
      (App) ->
        new App()
