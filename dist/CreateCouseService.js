"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCouseService = /** @class */ (function () {
    function CreateCouseService() {
    }
    CreateCouseService.prototype.execute = function (name, duration, educator) {
        console.log(name, duration, educator);
    };
    ;
    return CreateCouseService;
}());
exports.default = new CreateCouseService();
