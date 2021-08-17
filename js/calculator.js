function getValue(e) {
  document.getElementById("result").innerText += e.innerText;
  return document.getElementById("result").innerText;
}
function calculation() {
  const result = eval(document.getElementById("result").innerText);
  document.getElementById("result").innerText = parseFloat(result);
}
function Clear() {
  const dispStr = document.getElementById("result").innerText;
  const clearOne = dispStr.substring(0, dispStr.length - 1);
  console.log(clearOne);
  document.getElementById("result").innerText = clearOne;
}
function allClear() {
  document.getElementById("result").innerText = "";
}
