/*jshint esversion: 6 */
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 function calculatorModule() {

  let memory = 0;
  let total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function load(x) {
    if (typeof x !== 'number') {
      throw new Error("Invalid entry.");
    } else {
      total = x;
      return total;
    }
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
   function getTotal() {
    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x) {
    if (typeof x !== 'number') {
      throw new Error("Invalid entry.");
    } else {
      return total += x;
    }
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function subtract(x) {
     if (typeof x !== 'number') {
      throw new Error("Invalid entry.");
    } else {
      return total -= x;
    }
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function multiply(x) {
     if (typeof x !== 'number') {
      throw new Error("Invalid entry.");
    } else {
      return total *= x;
    }
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function divide(x) {
     if (typeof x !== 'number') {
      throw new Error("Invalid entry.");
    } else {
      return total /= x;
    }
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function recallMemory() {
    return memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */
   function saveMemory() {
    memory = total;
    return memory;
  }

  /**
   * Clear the value stored at `memory`
   */
   function clearMemory() {
    memory = 0;
    return memory;
  }

  /**
   * Validation
   */


   return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
  };
}