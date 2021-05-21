/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return Math.min(...this.arr);
};
