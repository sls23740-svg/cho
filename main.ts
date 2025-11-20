input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(number)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    if (number == 1) {
        radio.sendString("a")
    }
    if (number == 2) {
        radio.sendString("b")
    }
    if (number == 3) {
        radio.sendString("c")
    }
    if (number == 4) {
        radio.sendString("d")
    }
    if (number == 5) {
        radio.sendString("e")
    }
    if (number == 6) {
        radio.sendString("f")
    }
    if (number == 7) {
        radio.sendString("g")
    }
    if (number == 8) {
        radio.sendString("h")
    }
    if (number == 9) {
        radio.sendString("i")
    }
    if (number == 10) {
        radio.sendString("j")
    }
    if (number == 11) {
        radio.sendString("k")
    }
    if (number == 12) {
        radio.sendString("l")
    }
    if (number == 13) {
        radio.sendString("m")
    }
    if (number == 14) {
        radio.sendString("n")
    }
    if (number == 15) {
        radio.sendString("o")
    }
    if (number == 16) {
        radio.sendString("p")
    }
    if (number == 17) {
        radio.sendString("q")
    }
    if (number == 18) {
        radio.sendString("r")
    }
    if (number == 19) {
        radio.sendString("s")
    }
    if (number == 20) {
        radio.sendString("t")
    }
    if (number == 21) {
        radio.sendString("u")
    }
    if (number == 22) {
        radio.sendString("v")
    }
    if (number == 23) {
        radio.sendString("w")
    }
    if (number == 24) {
        radio.sendString("x")
    }
    if (number == 25) {
        radio.sendString("y")
    }
    if (number == 26) {
        radio.sendString("z")
    }
    if (number == 27) {
        radio.sendString(",")
    }
    if (number == 28) {
        radio.sendString("")
    }
    if (number == 29) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
number = 0
radio.setGroup(140)
basic.showNumber(number)
