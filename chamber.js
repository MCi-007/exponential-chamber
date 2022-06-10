var num = 0
var power = 1
var operator = 0
var hue = 0

  window.setInterval(function() {
    var hue = ExpantaNum.add(hue,1)
    updatenum()
    updateoperator()
    updatepow()
    document.getElementById("num").innerHTML = num
    document.getElementById("body").uh.backgroundColor = hsl(hue, 100, 50)
  }, 50);
  function updatenum() {
  if (operator == 0) {
      num = ExpantaNum.add(num,power)
  }
  if (operator == 1) {
    num = ExpantaNum.mul(num,ExpantaNum.add(ExpantaNum.div(power,100),1))
}
  if (operator == 1.1) {
    num = ExpantaNum.mul(num,ExpantaNum.add(ExpantaNum.mul(power,1.5),5))
}
  if (operator == 1.2) {
    num = ExpantaNum.mul(num,ExpantaNum.add(ExpantaNum.mul(power,50),350))
}
  if (operator == 1.3) {
    num = ExpantaNum.mul(num,ExpantaNum.add(ExpantaNum.mul(power,5e7),5e8))
}
  if (operator == 1.4) {
    num = ExpantaNum.mul(num,ExpantaNum.add(ExpantaNum.mul(power,ExpantaNum.mul(5e9,ExpantaNum(num).logBase(3.5))),2.5e10))
}
  if (operator == 2) {
    num = ExpantaNum.pow(num,ExpantaNum.add(ExpantaNum.div(power,9e4),1))
}
  if (operator == 2.1) {
    num = ExpantaNum.pow(num,ExpantaNum.add(ExpantaNum.div(power,4096),1))
}
  if (operator == 2.2) {
    num = ExpantaNum.pow(num,ExpantaNum.add(ExpantaNum.div(power,100),1))
}
  if (operator == 2.3) {
    num = ExpantaNum.pow(num,ExpantaNum.add(ExpantaNum.mul(power,0.8),5))
}
  if (operator == 3) {
    num = ExpantaNum.tetr(num,ExpantaNum.add(ExpantaNum.div(power,3e5),1))
}
  }
  function updatepow() {
  if (ExpantaNum.gte(num,10) && ExpantaNum.lt(num,100) == true) {
    power = 2.5}
 if (ExpantaNum.gte(num,100) && ExpantaNum.lt(num,1e15) == true) {
      power = 8}
 if (ExpantaNum.gte(num,1e15) && ExpantaNum.lt(num,1e71) == true) {
     power = 25}
 if (ExpantaNum.gte(num,1e71) && ExpantaNum.lt(num,ExpantaNum.pow(10,616.5)) == true) {
     power = 55}
  if (ExpantaNum.gte(num,ExpantaNum.pow(10,616.5)) && ExpantaNum.lt(num,ExpantaNum.pow(10,6e5)) == true) {
    power = 110}
 if (ExpantaNum.gte(num,ExpantaNum.pow(10,6e5)) && ExpantaNum.lt(num,ExpantaNum.pow(10,ExpantaNum.pow(10,308))) == true) {
     power = 300}
if (ExpantaNum.gte(num,ExpantaNum.pow(10,1e308)) && ExpantaNum.lt(num,ExpantaNum.tetr(10,8)) == true) {
        power = 1000}
if (ExpantaNum.gte(num,ExpantaNum.tetr(10,8)) && ExpantaNum.lt(num,ExpantaNum.tetr(10,ExpantaNum.pow(10,5))) == true) {
         power = 4096}
  }
  function updateoperator() {
    if (ExpantaNum.gte(num,200) && ExpantaNum.lt(num,ExpantaNum.pow(10,159)) == true) {
        operator = 1}
    if (ExpantaNum.gte(num,ExpantaNum.pow(10,159)) && ExpantaNum.lt(num,ExpantaNum.pow(10,990)) == true) {
         operator = 1.1}    
    if (ExpantaNum.gte(num,ExpantaNum.pow(10,990)) && ExpantaNum.lt(num,ExpantaNum.pow(10,3000)) == true) {
          operator = 1.2}
    if (ExpantaNum.gte(num,ExpantaNum.pow(10,3000)) && ExpantaNum.lt(num,ExpantaNum.pow(10,3e4)) == true) {
          operator = 1.3}
     if (ExpantaNum.gte(num,ExpantaNum.pow(10,3e4)) && ExpantaNum.lt(num,ExpantaNum.pow(10,199999)) == true) {
          operator = 1.4}
  }