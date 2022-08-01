const yourAge = prompt("please insert your age", "");
// default ban dau cua string la rong ""
let message = "sorry, you can not enter";
if (Number(yourAge) >= 18) {
  message = "you can enter";
}
alert(message);
