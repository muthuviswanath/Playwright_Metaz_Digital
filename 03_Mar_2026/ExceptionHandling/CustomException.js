var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Create a class that inherits from the class called Error
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    //Create a constructor and enter the message string that is needed to tell what type
    // of error it is
    function ValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ValidationError";
        return _this;
    }
    return ValidationError;
}(Error));
// Create a function where the possibility for error might be there and when 
// the error occurs, use the throw keyword and throw the custom exception object
function registerUser(age) {
    if (age < 18) {
        throw new ValidationError("User should be 18+ to get registered");
    }
    return "New user registered successfully";
}
//Wherever you consume it, use try and catch block to handle the exception
try {
    console.log(registerUser(16));
}
catch (error) {
    var err = error;
    console.log(err.message);
}
