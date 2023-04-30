input.onGesture(Gesture.LogoUp, function () {
    let index = 0
    let testlist: number[] = []
    list = randint(0, testlist.length - 1)
    basic.showString("" + (testlist[index]))
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
let list = 0
let text_list = ["puppy", "clock", "night"]
game.startCountdown(30000)
basic.forever(function () {
	
})
