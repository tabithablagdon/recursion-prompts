// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  return n < 0 ? null : n > 1 ? n * factorial(n-1) : 1;
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, index) {
  index = index || 0;
  return index === array.length ? 0 : array[index] + sum(array, index+1);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, index) {
  index = index || 0;
  return index === array.length ? 0 : arraySum(array, index+1) + (Array.isArray(array[index]) ? arraySum(array[index]) : array[index]);
};

// 4. Check if a number is even.
var isEven = function(n) {
  return n === 0 ? true : n === 1 ? false : isEven(Math.abs(n)-2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  return n === 0 ? 0 : n < 0 ? (n+1) + sumBelow(n+1) : (n-1) + sumBelow(n-1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var result = []; // can be re-written with result as a 3rd parameter
  if (x === y-1 || Math.abs(y-x) <= 1) {
    return result;
  }
  if (x < y) {
    result.push(x+1);
    return result.concat(range(x+1, y));
  } else {
    result.push(x-1);
    return result.concat(range(x-1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  return exp > 0 ? base * exponent(base, exp-1) : +(1/base * exponent(base, exp+1)).toFixed(5);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n, num) { // is there an easier way?
  num = num || 2;
  if (n === 1 || num === n) {
    return true;
  }
  if (num > n) {
    return false;
  }
  return powerOfTwo(n, num*2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  return string.length === 1 ? string : reverse(string.slice(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.replace(/\s/g,'').toLowerCase();
  return string.length < 2 ? true : string[0] !== string[string.length - 1] ? false : palindrome(string.slice(1, string.length-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  var isNeg = false;
  if (y === 0) {
    return NaN;
  }
  if (x < 0) {
  	isNeg = true;
  	x = -x;
  }
  if (y < 0) {
  	y = -y;
  }
  if (x < y) {
  	return isNeg ? -x : x;
  } else {
    return isNeg ? -modulo(x-y,y) : modulo(x-y,y);
  }
};


// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  return y < 0 ? -multiply(x, -y) : x + multiply(x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, count) {
  if (x === 0 && y === 0) {
    return NaN;
  }
  if (x < 0) {
    return -divide(-x, y);
  }
  if (y < 0) {
    return -divide(x, -y);
  }
  if (x < y) {
  	return 0;
  }
  return 1 + divide(x-y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  // Dijkstra's algorithm
  if (x === y) {
    return x;
  } else {
    return x > y ? gcd(x-y, y) : gcd(x, y-x);
  }
  // Alternate solution using Euclid's Algorithm
  /*
  if (x > y) {
    return x % y === 0 ? y : gcd(y, x%y);
  } else {
    return y % x === 0 ? x : gcd(x, y%x);
  }*/
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length ===0) {
    return true;
  }
  if (str1.length === 1) {
    return str1 === str2;
  }
  if (str1[0] !== str2[0]) {
    return false;
  }
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  var arrayWord = [];
  if (str.length === 0) {
    return arrayWord;
  }
  arrayWord.push(str[0]);
  return arrayWord.concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  var result = [];
  if (array.length === 0) {
    return result;
  }
  result.push(array.pop());
  return result.concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var list = [];
  if (length === 0) {
    return list;
  }
  list.push(value);
  return list.concat(buildList(value, length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count) {
  count = count || 0;
  if (array.length === 0) {
    return count;
  }
  if (array[0] === value) {
    count++;
  }
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  newArray.push(callback(array[0]));
  return newArray.concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var k in obj) {
    if (k === key) {
      count++;
    }
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      count += countKeysInObj(obj[k], key);
    }
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj) {
    if (obj[key] === value) {
      count++;
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  var newObj = {};
  for (var k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      newObj[newKey] = replaceKeysInObj(obj[k], key, newKey);
    } else {
      newObj[newKey] = obj[k];
    }
  }
  return newObj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, result) {
  result = result || [];

  var getFib = function(n) {
    if (n < 2) {
  	  return n;
    }
    return getFib(n-1) + getFib(n-2);
  };
    if (n <= 0) {
    return null;
  }
  if (n === 1) {
    result.unshift(0, 1);
    return result;
  }

  result.unshift(getFib(n));
  return fibonacci(n-1, result);

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n < 2) {
    return n;
  }
  return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  var result = [];
  if (input.length === 0) {
    return result;
  }
  result.push(input.shift().toUpperCase());
  return result.concat(capitalizeWords(input));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, result) {
  result = result || [];
  if (array.length === 0) {
    return result;
  }
  var word = array.shift();
  result.push(word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizeFirst(array, result);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) { // needs work
  var sum = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  return arrays.reduce(function(flattened, toFlatten) {
    return flattened.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  obj = obj || {};
  if (str.length === 0) {
    return obj;
  }
  if (obj[str[0]]) {
    obj[str[0]]++;
  } else {
    obj[str[0]] = 1;
  }
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, result) { // this works?  Why not passing test?
  result = result || [];
  if (list.length === 0) {
    return result;
  }
  if (result[result.length - 1] !== list[0]) {
    result.push(list[0]);
  }
  return compress(list.slice(1), result);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, result) {
  result = result || [];
  if (array.length === 0) {
    return result;
  }
  array[0].push(aug);
  result.push(array.shift());
  return augmentElements(array, aug, result);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, minArray) {
  minArray = minArray || [];
  if (array.length === 0) {
    return minArray;
  }
  if (array[0] !== 0 || (array[0] === 0 && minArray[minArray.length-1] !== 0)) {
    minArray.push(array[0]);
  }
  return minimizeZeroes(array.slice(1), minArray);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, altArray) {
  altArray = altArray || [];
  if (array.length === 0) {
    return altArray;
  }
  if (altArray[altArray.length - 1] > 0) {
    altArray.push(array[0] < 0 ? array[0] : (-1 * array[0]));
  } else {
    altArray.push(array[0] > 0 ? array[0] : (-1 * array[0]));
  }
  return alternateSign(array.slice(1), altArray);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newStr) {
  newStr = newStr || '';
  var nums = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };
  if (str.length === 0) {
    return newStr;
  }
  newStr += nums.hasOwnProperty(str.charAt(0)) ? nums[str.charAt(0)] : str.charAt(0);
  return numToText(str.slice(1), newStr);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
  var merge = function(left, right) {
    var result = [],
      leftIndex = 0,
      rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    return result;
  };

  var mSort = function(arr) {
    if (arr.length === 1) {
      return arr;
    }
    var mid = arr.length/2;
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    return merge(mSort(left), mSort(right));
  };

  return mSort(array);
};
