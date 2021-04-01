import {
    dayOfYear,
    weekOfYear
  } from "https://deno.land/std/datetime/mod.ts";
  

const greetings = "Hello World";
console.log(greetings);

let today = new Date()
today  = new Date(today.getTime() - today.getTimezoneOffset() * 60000)

console.log(today);
console.log(dayOfYear(today));
console.log(weekOfYear(today));