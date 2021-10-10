/* eslint-disable */

export function limit(c) {
  return this.filter((x, i) => {
    if (i <= c - 1) {
      return true
    }
  })
}
Array.prototype.limit=limit;
// limit function,internally we have just used filter function and //used index of its callback function
// add it to Array.prototype ,so that any array in JS,can invoke it

export function skip(c) {
  return this.filter((x, i) => {
    if (i > c - 1) {
      return true
    }
  })
}
Array.prototype.skip = skip
