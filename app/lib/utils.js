// JavaScript program to check if a given credit
// card is valid or not.

// Return this number if it is a single digit, otherwise,
// return the sum of the two digits
export function getDigit(number) {
  if (number < 9) return number;
  return Math.floor(number / 10) + (number % 10);
}

// Return the number of digits in d
function getSize(d) {
  let num = d.toString();
  return num.length;
}

// Return the first k number of digits from
// number. If the number of digits in number
// is less than k, return number.
function getPrefix(number, k) {
  if (getSize(number) > k) {
    let num = number.toString();
    return parseInt(num.substring(0, k));
  }
  return number;
}

// Return true if the digit d is a prefix for number
function prefixMatched(number, d) {
  return getPrefix(number, getSize(d)) == d;
}

// Get the result from Step 2
function sumOfDoubleEvenPlace(number) {
  let sum = 0;
  let num = number.toString();
  for (let i = getSize(number) - 2; i >= 0; i -= 2)
    sum += getDigit((num.charCodeAt(i) - "0".charCodeAt(0)) * 2);

  return sum;
}

// Return sum of odd-place digits in number
function sumOfOddPlace(number) {
  let sum = 0;
  let num = number.toString();
  for (let i = getSize(number) - 1; i >= 0; i -= 2)
    sum += num.charCodeAt(i) - "0".charCodeAt(0);
  return sum;
}

// Return true if the card number is valid
export function isValidatedCardNumber(numbers) {
  let number = parseInt(numbers.replace("-", ""), 10);
  return (
    getSize(number) >= 13 &&
    getSize(number) <= 16 &&
    (prefixMatched(number, 4) ||
      prefixMatched(number, 5) ||
      prefixMatched(number, 37) ||
      prefixMatched(number, 6)) &&
    (sumOfDoubleEvenPlace(number) + sumOfOddPlace(number)) % 10 == 0
  );
}
