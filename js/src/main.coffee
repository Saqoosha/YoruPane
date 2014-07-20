require('browsernizr/test/canvas')
require('browsernizr/test/svg')
require('browsernizr/test/requestanimationframe')
Modernizr = require('browsernizr')
console.log(Modernizr)

{mat2d: mat2d, vec2: vec2} = require('glmatrix')

try
  console.log('loading snapsvg')
  {Snap: Snap} = require('svapsvg')
  console.log(Snap)
  console.log('loaded snapsvg!')
catch e
  console.log e




class Rectangle

  constructor: (@x, @y, @w, @h) ->

  inflate: (w, h) =>
    @x -= w
    @y -= h
    @w += w * 2
    @h += h * 2

  contains: (v) ->
    @x <= v[0] <= @x + @w and @y <= v[1] <= @y + @h



class BaseApp
  show: =>
  hide: =>
  draw: =>



class SVGApp

  constructor: ->
    document.getElementById('masthead').style.backgroundColor = 'white'

    @paper = Snap(window.innerWidth, window.innerHeight)#.attr(style: 'position:absolute;left:0;top:0;')
    @paper.node.style.position = 'fixed'
    @paper.node.style.left = 0
    @paper.node.style.top = 0
    @paper.node.style.zIndex = 0
    @paper.node.style.display = 'none'
    @hidden = true

    @circle = @paper.circle(150, 150, 300).attr(fill: 'red')

  show: =>
    @paper.node.style.display = 'block'
    @hidden = false
    @draw()

  hide: =>
    @paper.node.style.display = 'none'
    @hidden = true

  draw: (params) =>
    if not params
      params = @params
    else
      @params = params

    if @hidden then return

    try
      @circle.attr(fill: params.bgcolor)
    catch e
      console.log e



class CanvasApp extends BaseApp

  constructor: ->
    document.getElementById('masthead').style.backgroundColor = 'white'

    @canvas = document.createElement('canvas')
    @canvas.width = window.innerWidth
    @canvas.height = window.innerHeight
    document.body.appendChild(@canvas)
    @canvas.style.position = 'fixed'
    @canvas.style.left = 0
    @canvas.style.top = 0
    @canvas.style.display = 'none';
    @hidden = true

    @navi = document.getElementById('navi')
    @ctx = @canvas.getContext('2d')
    @ctx.fillStyle = 'red'
    @ctx.fillRect(0, 0, 100, 100)

  show: =>
    @canvas.style.display = 'block'
    @hidden = false
    @draw()

  hide: =>
    @canvas.style.display = 'none'
    @hidden = true

  draw: (params) =>
    if not params
      params = @params
    else
      @params = params

    if @hidden then return

    @ctx.clearRect(0, 0, @canvas.width, @canvas.height)
    @ctx.fillStyle = params.bgcolor
    @ctx.fillRect(0, 0, @canvas.width, @canvas.height)
    bannerPos = [Math.round((window.innerWidth - 950) / 2), Math.round(@navi.getBoundingClientRect().top)]

    w = window.innerWidth
    h = window.innerHeight

    try
      mat = mat2d.create()
      mat2d.rotate(mat, mat, params.rotation * Math.PI / 180)
      mat2d.translate(mat, mat, [-(bannerPos[0] + params.origin.x), -(bannerPos[1] + params.origin.y)])
      a = params.shear * Math.PI / 180
      mat2d.multiply(mat, [1, Math.sin(a), 0, Math.cos(a), 0, 0], mat)

      tl = vec2.transformMat2d(vec2.create(), [0, 0], mat)
      tr = vec2.transformMat2d(vec2.create(), [w, 0], mat)
      bl = vec2.transformMat2d(vec2.create(), [0, h], mat)
      br = vec2.transformMat2d(vec2.create(), [w, h], mat)
      x0 = Math.min(tl[0], tr[0], bl[0], br[0])
      x1 = Math.max(tl[0], tr[0], bl[0], br[0])
      y0 = Math.min(tl[1], tr[1], bl[1], br[1])
      y1 = Math.max(tl[1], tr[1], bl[1], br[1])

      radius = params.radius
      interval = params.interval
      hit = new Rectangle(0, 0, w, h)
      hit.inflate(radius, radius)

      mat2d.invert(mat, mat)
      sy = Math.ceil((y0 - radius) / interval) * interval
      ey = Math.ceil((y1 + radius) / interval) * interval
      sx = Math.ceil((x0 - radius) / interval) * interval
      ex = Math.ceil((x1 + radius) / interval) * interval
      p = vec2.create()
      @ctx.fillStyle = params.color
      for y in [sy...ey] by interval
        for x in [sx...ex] by interval
          vec2.transformMat2d(p, [x, y], mat)
          if hit.contains(p)
            @ctx.beginPath()
            @ctx.arc(p[0], p[1], radius, 0, Math.PI * 2, false)
            @ctx.fill()


    catch e
      console.log(e)



#window.dotgen = if Modernizr.canvas then new CanvasApp() else new BaseApp()
window.dotgen = if Modernizr.svg then new SVGApp() else new BaseApp()
console.log('Installed', window.dotgen)
