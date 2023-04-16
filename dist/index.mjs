/**
 * name: @learning-code-npm/lib
 * version: v1.0.0
 * description: A library demo for learning-code-npm.
 * author: Akira
 * homepage: 
 */
function o(n = 0, t = 100, e = "round") {
  return Math[e](Math.random() * (t - n) + n);
}
function r() {
  const n = o(0, 1);
  return [!0, !1][n];
}
export {
  r as getRandomBoolean,
  o as getRandomNumber
};
