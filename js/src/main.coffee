require('browsernizr/test/canvas')
require('browsernizr/test/requestanimationframe')
Modernizr = require('browsernizr')
console.log(Modernizr)

{mat2d: mat2d, vec2: vec2} = require('glmatrix')


class Rectangle

  constructor: (@x, @y, @w, @h) ->

  inflate: (w, h) =>
    @x -= w
    @y -= h
    @w += w * 2
    @h += h * 2

  contains: (v) ->
    @x <= v[0] <= @x + @w and @y <= v[1] <= @y + @h


class App

  constructor: ->
    document.getElementById('masthead').style.backgroundColor = 'white'

    @canvas = document.createElement('canvas')
    @canvas.width = window.innerWidth
    @canvas.height = window.innerHeight
    document.body.appendChild(@canvas)
    @canvas.style.position = 'fixed'
    @canvas.style.left = 0
    @canvas.style.top = 0

    @navi = document.getElementById('navi')
    @ctx = @canvas.getContext('2d')

    @startTime = Date.now()
    @draw()
    @count = 0

    @rotation = 0


  draw: =>
    requestAnimationFrame(@draw)
#    t = Date.now() - @startTime
#    if ++@count % 5 isnt 0 then return

    @ctx.clearRect(0, 0, @canvas.width, @canvas.height)
#    @ctx.fillStyle = 'blue'
    bannerPos = [Math.round((window.innerWidth - 950) / 2), Math.round(navi.getBoundingClientRect().top)]
#    @ctx.fillRect(bannerPos[0], bannerPos[1], 950, 600)

    w = window.innerWidth
    h = window.innerHeight

    try

      mat = mat2d.create()
      mat2d.rotate(mat, mat, @rotation)
      mat2d.translate(mat, mat, [-(bannerPos[0] + 950/2), -(bannerPos[1] + 600/2)])
      a = 30 * Math.PI / 180
      mat2d.multiply(mat, [1, Math.sin(a), 0, Math.cos(a), 0, 0], mat)
      tl = vec2.transformMat2d(vec2.create(), [0, 0], mat)
      tr = vec2.transformMat2d(vec2.create(), [w, 0], mat)
      bl = vec2.transformMat2d(vec2.create(), [0, h], mat)
      br = vec2.transformMat2d(vec2.create(), [w, h], mat)
      x0 = Math.min(tl[0], tr[0], bl[0], br[0])
      x1 = Math.max(tl[0], tr[0], bl[0], br[0])
      y0 = Math.min(tl[1], tr[1], bl[1], br[1])
      y1 = Math.max(tl[1], tr[1], bl[1], br[1])

      radius = 10
      interval = 50
      hit = new Rectangle(0, 0, w, h)
      hit.inflate(radius, radius)

      mat2d.invert(mat, mat)
      sy = Math.floor((y0 - radius) / interval) * interval
      ey = Math.ceil((y1 + radius) / interval) * interval;
      sx = Math.floor((x0 - radius) / interval) * interval;
      ex = Math.ceil((x1 + radius) / interval) * interval;
      p = vec2.create()
      @ctx.fillStyle = 'rgba(0, 0, 255, 0.5)'
      for y in [sy...ey] by interval
        for x in [sx...ex] by interval
          vec2.transformMat2d(p, [x, y], mat)
          if hit.contains(p)
            @ctx.beginPath()
            @ctx.arc(p[0], p[1], radius, 0, Math.PI * 2, false)
            @ctx.fill()


    catch e
      console.log(e)




window.dotgen = new App()
