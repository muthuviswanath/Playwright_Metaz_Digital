var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Draft"] = 0] = "Draft";
    ApprovalStatus[ApprovalStatus["Submitted"] = 1] = "Submitted";
    ApprovalStatus[ApprovalStatus["Approved"] = 2] = "Approved";
    ApprovalStatus[ApprovalStatus["Rejected"] = 3] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
var request = {
    id: 1001,
    status: ApprovalStatus.Rejected,
    description: "Awaiting approval"
};
if (request.status === ApprovalStatus.Approved) {
    //send email
    //http request
    console.log("Approved");
    request.description = "Approved";
}
else if (request.status === ApprovalStatus.Rejected) {
    //send email
    //http request
    console.log("Rejected");
    request.description = "Rejected";
}
console.log(request);
