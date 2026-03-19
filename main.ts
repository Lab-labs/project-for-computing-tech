radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, 160)
    } else if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 140)
    } else if (receivedNumber == 3) {
        pins.servoWritePin(AnalogPin.P0, 120)
    } else if (receivedNumber == 4) {
        pins.servoWritePin(AnalogPin.P0, 100)
    } else if (receivedNumber == 5) {
        pins.servoWritePin(AnalogPin.P0, 80)
    } else if (receivedNumber == 6) {
        pins.servoWritePin(AnalogPin.P0, 60)
    } else if (receivedNumber == 7) {
        pins.servoWritePin(AnalogPin.P0, 40)
    } else if (receivedNumber == 8) {
        pins.servoWritePin(AnalogPin.P0, 20)
    } else if (receivedNumber == 12) {
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Chessboard)
    basic.clearScreen()
    basic.showString("Hello! Wizard online!")
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.showString("Ask a question!")
})
let numbcheck = 0
// This is for the AT1
radio.setGroup(456)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        numbcheck += 1
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(numbcheck)
        basic.showNumber(numbcheck)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        numbcheck = 0
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(12)
    }
    if (numbcheck > 10) {
        numbcheck = 0
    }
})
