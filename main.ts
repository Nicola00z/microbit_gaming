function diasplayL () {
    if (L < 1000) {
        basic.showString("Buio")
    } else {
        basic.showString("Luce")
    }
}
input.onButtonPressed(Button.A, function () {
    diasplayL()
})
function diasplayT () {
    if (T >= 75) {
        basic.showString("caldo ")
    } else {
        basic.showString("freddo")
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(T)
    diasplayT()
})
let T = 0
let L = 0
basic.showString("Premi A per Luce, B per Temp")
loops.everyInterval(10000, function () {
    L = pins.analogReadPin(AnalogPin.P0)
    T = pins.analogReadPin(AnalogPin.P1)
})
basic.forever(function () {
	
})
