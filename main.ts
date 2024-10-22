/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Lucas Nguyen
 * Created on: Oct 2024
 * This program generates two random numbers, and compares them.
*/

basic.showIcon(IconNames.Happy)
let randomNumberOne: number
let randomNumberTwo: number
randomNumberOne = randint(0, 99)
randomNumberTwo = randint(0, 99)

// number 1 display
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showString('#1: ' + randomNumberOne)
  basic.showIcon(IconNames.Happy)
})

// number 2 display
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('#2: ' + randomNumberTwo)
  basic.showIcon(IconNames.Happy)
})

// comparison
input.onGesture(Gesture.Shake, function () {
  basic.clearScreen()
  if (randomNumberOne < randomNumberTwo) {
  basic.showString (randomNumberOne.toString() + ' < ' + randomNumberTwo.toString())
}
  else
      basic.showString(randomNumberOne.toString() + ' > ' + randomNumberTwo.toString())
  basic.showIcon(IconNames.Sad)
})
