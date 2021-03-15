let Leer = 0
basic.forever(function () {
    Leer = input.lightLevel()
    led.plotBarGraph(
    Leer,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Leer)
    }
})
