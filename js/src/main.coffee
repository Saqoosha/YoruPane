require('browsernizr/test/canvas')
require('browsernizr/test/svg')
require('browsernizr/test/requestanimationframe')
Modernizr = require('browsernizr')
console.log(Modernizr)

{mat2d: mat2d, vec2: vec2} = require('glmatrix')
{Snap: Snap, mina: mina} = require('svapsvg')


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
  update: =>
  draw: =>



class SVGApp

  constructor: ->
    document.getElementById('masthead').style.backgroundColor = 'white'

    @paper = Snap(window.innerWidth, window.innerHeight)
    @paper.node.style.position = 'fixed'
    @paper.node.style.left = 0
    @paper.node.style.top = 0
    @paper.node.style.zIndex = 0
#    @paper.node.style.display = 'none'
    @hidden = true

    @bg = @paper.rect(0, 0, window.innerWidth, window.innerHeight).attr(fill: '#ffffff')

    @navi = document.getElementById('navi')
    mtx = Snap.matrix()
    mtx.translate(Math.round((window.innerWidth - 950) / 2), Math.round(@navi.getBoundingClientRect().top))
    @g = @paper.g().attr(transform: mtx.toTransformString())

    @dots = {}


  getInfo: =>
    return [Math.round((window.innerWidth - 950) / 2), Math.round(@navi.getBoundingClientRect().top), window.innerWidth, window.innerHeight]


  show: =>
    @paper.node.style.display = 'block'
    @hidden = false
    @draw()


  hide: =>
    @paper.node.style.display = 'none'
    @hidden = true
    e.remove() for e in @g.selectAll('*')
    @bg.attr(fill: '#ffffff')
    @dots = {}


  update: (info) =>
    if @hidden then return
    try
      for {op: op, arg: arg} in info
        switch op
          when 'new'
            p = arg.from or arg
            d = @paper.circle(p.x, p.y, 0).attr(fill: '#' + ('00000' + p.color.toString(16)).substr(-6))
            @g.add(d)
            setTimeout(@animate, arg.delay * 1000, d, arg)
            @dots[arg.id] = d

          when 'move'
            d = @dots[arg.from]
            if d
              delete @dots[arg.from]
              setTimeout(@animate, arg.delay * 1000, d, arg)
              @dots[arg.id] = d if not arg.destroy
            else if not arg.destroy
              d = @paper.circle(arg.x, arg.y, 0).attr(fill: '#' + ('00000' + arg.color.toString(16)).substr(-6))
              @g.add(d)
              setTimeout(@animate, arg.delay * 1000, d, arg)
              @dots[arg.id] = d

          when 'del'
            d = @dots[arg]
            d?.remove()
            delete @dots[arg]

          when 'bg'
            @bg.attr(fill: '#' + ('00000' + arg.toString(16)).substr(-6))
    catch e
      console.log(e)

  animate: (d, arg) =>
    c = '#' + ('00000' + arg.color.toString(16)).substr(-6)
    d.animate(cx: arg.x, cy: arg.y, r: arg.r, fill: c, 100, mina.linear, ->
      if arg.destroy
        d.remove()
    )



window.dotgen = if Modernizr.svg then new SVGApp() else new BaseApp()
