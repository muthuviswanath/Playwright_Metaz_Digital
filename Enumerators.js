var weeks;
(function (weeks) {
    weeks[weeks["Mon"] = 0] = "Mon";
    weeks[weeks["Tue"] = 1] = "Tue";
    weeks[weeks["Wed"] = 2] = "Wed";
    weeks[weeks["Thu"] = 3] = "Thu";
    weeks[weeks["Fri"] = 4] = "Fri";
    weeks[weeks["Sat"] = 5] = "Sat";
    weeks[weeks["Sun"] = 6] = "Sun";
})(weeks || (weeks = {}));
console.log(weeks[0]);
