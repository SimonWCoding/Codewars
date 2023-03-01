// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    if (year % 1000 == 0){
      return year / 100
    }
     else return Math.ceil(year / 100)
   }

   // In reflection, I didn't consider that a year containing '000' wouldn't need to be rounded up because it is already a whole number, hence:

   const century = year => Math.ceil(year/100)