input.onButtonPressed(Button.A, function () {
    music.playMelody("C C C E G E C G ", 120)
    for (let index = 0; index < 4; index++) {
        led.plot(1, 3)
    }
})
