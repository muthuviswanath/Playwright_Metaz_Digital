enum ApprovalStatus{
    Draft,
    Submitted,
    Approved,
    Rejected
}

const request = {
    id: 1001,
    status: ApprovalStatus.Rejected,
    description: "Awaiting approval"
}

if(request.status === ApprovalStatus.Approved){
    //send email
    //http request
    console.log("Approved")
    request.description = "Approved"
}
else if(request.status === ApprovalStatus.Rejected){
    //send email
    //http request
    console.log("Rejected")
    request.description = "Rejected"
}

console.log(request)