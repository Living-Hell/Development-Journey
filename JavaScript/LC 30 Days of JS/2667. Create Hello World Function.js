//M1

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

//M2

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return () => "Hello World";
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
