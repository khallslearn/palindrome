//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let reverse = x.split("").reverse().join("")
    if(x.toUpperCase () == reverse.toUpperCase ()){
      return true
    } return false
  }