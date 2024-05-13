#! /bin/usr/env node

// count down timer
// npm i date-fns
// npm fund

// step 1
import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";

function* countdownTimer(second: number) {
  while (second > 0) {
    yield second;
    second--;
  }
}

// step 2  counter inilization

let timerIterator = countdownTimer(10);

// function to create a countdown timer

function displayCountdown() {
  let result = timerIterator.next();
  if (!result.done) {
    // current date  and time calls
    const now = new Date();
    // calculate minutes in time
    const countdownTime = new Date(now.getTime() + result.value * 1000);
    // calculate remaining seconds in time
    const remainingSeconds = differenceInSeconds(countdownTime, now);
    console.log(`Remaining Seconds: ${remainingSeconds}`);
    setTimeout(displayCountdown, 1000); // 1 second = 1000 ms
  } else {
    console.log("Time is up");
  }
}
// invoke

displayCountdown();
