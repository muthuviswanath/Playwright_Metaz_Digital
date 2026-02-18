var days;
(function (days) {
    days[days["Sun"] = 10] = "Sun";
    days[days["Mon"] = 11] = "Mon";
    days[days["Tue"] = 12] = "Tue";
    days[days["Wed"] = 13] = "Wed";
    days[days["Thu"] = 14] = "Thu";
    days[days["Fri"] = 15] = "Fri";
    days[days["Sat"] = 16] = "Sat";
})(days || (days = {}));
console.log(days[14]);
var directions;
(function (directions) {
    directions[directions["Up"] = 0] = "Up";
    directions[directions["Down"] = 1] = "Down";
    directions[directions["Left"] = 2] = "Left";
    directions[directions["Right"] = 3] = "Right";
})(directions || (directions = {}));
var move = directions[2];
console.log(move);
