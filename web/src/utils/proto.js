Array.remove = function (array,b) {
  var a = array.indexOf(b);
  if (a >= 0) {
    array.splice(a, 1);
    return true;
  }
  return false;
};
