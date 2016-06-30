// parenthesis.js
/*
Write a stack client Parentheses.js that reads in sequence of left and right parentheses, braces, and brackets from standard input and uses a stack to determine whether the sequence is properly balanced. For example, your program should print true for [()]{}{[()()]()} and false for [(]).
*/

var DataStructures = require('algorithms').DataStructures;
var Stack = DataStructures.Stack;
var pairs = { ']' : '[',
              ')' : '(',
              '}' : '{'
            };

var parenthesis = function(string){
  var stack = new Stack();

  for(i=0; i < string.length; i++) {

    if( /[\[\{\(]/.test(string.charAt(i))){
      stack.push(string.charAt(i));
      continue;
    }
    else if( pairs.hasOwnProperty(string.charAt(i)) && (pairs[string.charAt(i)] === stack.peek())) {
      stack.pop();
    }
    else {
      return false;
    }

  }
  return true;
}

console.log("parenthesis.js output\n-------------------");
console.log(parenthesis("[()]{}{[()()]()}"));
console.log(parenthesis("[(])]"));
