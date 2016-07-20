// parenthesis.js
/*
Write a stack client Parentheses.js that reads in sequence of left and right
parentheses, braces, and brackets from standard input and uses a stack to
determine whether the sequence is properly balanced. For example, your program
should print true for [()]{}{[()()]()} and false for [(]).
*/

const DataStructures = require('algorithms').DataStructures;
const Stack = DataStructures.Stack;
const pairs = { ']': '[',
              ')': '(',
              '}': '{',
            };

const parenthesis = (string) => {
  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    if (/[\[\{\(]/.test(string.charAt(i))) {
      stack.push(string.charAt(i));
      continue;
    } else if (pairs.hasOwnProperty(string.charAt(i)) &&
              (pairs[string.charAt(i)] === stack.peek())) {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
};

console.log("parenthesis.js output\n-------------------");
console.log(parenthesis("[()]{}{[()()]()}"));
console.log(parenthesis("[(])]"));
