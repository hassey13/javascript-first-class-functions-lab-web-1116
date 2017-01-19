function countdown(fn) {
  window.setTimeout(fn, 2000);
}


function createMultiplier(mult) {
  return (function(num) {
    return num * mult
  })
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(mult, num) {
  return mult * num
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
