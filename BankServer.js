var username = "Kavin";
var login;
login = function (username, password, captcha) { return "welcome ".concat(username); };
console.log(login(username, "pass", "23ERT"));
login = function (card, pin) { return "welcome ".concat(username); };
console.log(login("Visa", 1234));
login = function (number, pin) { return "welcome ".concat(username); };
console.log(login(9876543234, 1234));
