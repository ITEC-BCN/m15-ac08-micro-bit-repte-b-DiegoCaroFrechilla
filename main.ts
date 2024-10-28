input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.setTempo(200)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("G C5 G A B E E A ", 100), music.PlaybackMode.UntilDone)
})
