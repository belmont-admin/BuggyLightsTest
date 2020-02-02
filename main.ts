input.onButtonPressed(Button.B, function () {
    PixelArray.clear()
    PixelArray.show()
})
input.onButtonPressed(Button.A, function () {
    PixelArray.showRainbow(1, 360)
})
let PixelArray: neopixel.Strip = null
PixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    PixelArray.rotate(1)
    PixelArray.show()
    basic.pause(200)
})
