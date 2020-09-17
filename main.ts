input.onButtonPressed(Button.A, function () {
    if (Game_Started == true) {
        PlayerNumber += -1
    } else if (Game_Started == false) {
        Number2 += -1
    }
})
function WIN () {
    Number2 = 10
    Game_Started = false
    PlayerNumber = 0
    MaxNumber = 0
    basic.showString("YOU WON!")
}
function NUM_CHECK () {
    if (PlayerNumber == Number2) {
        WIN()
    } else {
        if (PlayerNumber < Number2) {
            basic.showString("HIGHER")
        } else if (PlayerNumber > Number2) {
            basic.showString("LOWER")
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (Game_Started == false) {
        Start_Game()
    } else if (Game_Started == true) {
        NUM_CHECK()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Game_Started == true) {
        PlayerNumber += 1
    } else if (Game_Started == false) {
        Number2 += 1
    }
})
function Start_Game () {
    Game_Started = true
    MaxNumber = Number2
    Number2 = randint(0, MaxNumber)
    basic.showString("START")
}
let MaxNumber = 0
let PlayerNumber = 0
let Game_Started = false
let Number2 = 0
Number2 = 10
Game_Started = false
PlayerNumber = 0
MaxNumber = 0
basic.forever(function () {
    if (Game_Started == false) {
        if (Number2 <= 5) {
            Number2 = 5
            basic.showString("MIN 5")
            basic.pause(5)
            basic.showNumber(Number2)
        } else if (Number2 >= 20) {
            Number2 = 20
            basic.showString("MAX 20")
            basic.pause(5)
            basic.showNumber(Number2)
        } else {
            basic.pause(5)
            basic.showNumber(Number2)
        }
    } else if (PlayerNumber < 0) {
        PlayerNumber = 0
    } else {
        basic.showNumber(PlayerNumber)
    }
})
