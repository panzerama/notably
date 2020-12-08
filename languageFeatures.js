/**
 * Code Formatting
 * style guide?
 *
 */

/**
 * `console.log`
 * When you're trying to debug some code you've written, the very most basic
 * way to get feedback is to print information out to the console. If you're
 * running Node in some server or from the command line, that output might
 * display in the terminal. In a browser, you'll view it through developer
 * tools.
 */

function stdOut(someValue) {
  console.log(someValue);
}

/**
 * var, let, const
 * In ES5 (an earlier language specification), you could declare a variable with
 * `var`.  In JavaScript, variables declared with `var` are scoped to the
 * nearest function.
 */

function scopeItOut() {
  if (true) {
    var x = 42;
  }
  console.log(x); // prints 42
}

/**
 * ES6 introduces two new options: `let` and `const`. They both are scoped to
 * the nearest block. Note that `const` creates a constant which cannot be later
 * overwritten.
 */
function scopeItIn() {
  const y = 32;
  if (!false) {
    let z = "stringy";
  }
  console.log(z); // error
  y = "another string";
}

/**
 * Function Declarations
 * In ES5, we declare functions much like those above, using the keyword
 * `function`, some identifier and may have parameters.
 */

function theBest(first, second, last) {
  return first + second + last;
}

/**
 * ES6 introduces other options: arrow funtions and default parameters.
 */

const arrowFunc = (aThing = "default", anotherThing, aThirdThing) => {
  return aThing + anotherThing + aThirdThing;
};

/**
 * Types, Objects, Collections
 * In Java and other strongly-typed languages, a variable must have a specific
 * type. This is not true in Javascript.
 */

const changingTypes = () => {
  let foo = 20; // It's a number
  foo = "Whan that Aprill with his shoures soote"; // It's a string
  foo = true; // And now it's a boolean
  console.log(typeof foo);
};

/**
 * A JavaScript object is very similar to a dictionary in other languages. In
 * point of fact, most of what we'd consider collections (maps, arrays, sets) in
 * other languages are objects in JavaScript.
 */

const object = {
  key: "a string value",
  validKey: 42,
  truth: false,
  aFunc: changingTypes,
};

// Note that we've just assigned a variable to a key in this object.

object.aFunc();

const anArray = [82, "heterogenous", object];

/**
 * Closures
 * JavaScript closures allow functions to access variables in scope when the
 * function was defined.
 */

const myCounter = () => {
  let counter = 0;
  return {
    increment: (inc) => {
      counter += inc;
    },
    getValue: () => {
      return counter;
    },
  };
};

/** Strings */
// String concatenation
// Template string

/**
 * Control Statements, Truthiness/Falsiness
 * JavaScript provides the kind of control structures we'd expect: if/else
 * statements, while loops, try/catch/finally. In addition, JavaScript has a
 * novel way of evaluating true and false for values.
 */

//Some Values are Falsey and Truthy
// Falsey - evaluates to false
var isNull = null;
var isUndef = undefined;
var isFalse = false;
var isZero = 0;

// Truthy - evaluates to true
var isDef = "Hello, world!";
var isTrue = true;
var isNotZero = 1;

/** synchronous/asynchronous */
/** promises and async/await */
/** modules (with this as an example) */
/** first class functions */
/** map/filter/reduce */
/** Node, callbacks, the tick, events */
/** repl, npm */
/** a node web server as the example? */
