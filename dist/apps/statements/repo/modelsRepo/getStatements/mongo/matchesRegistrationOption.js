"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var matchesModel_1 = __importDefault(require("./matchesModel"));
var matcher = function (registration) {
    return {
        registrations: registration,
    };
};
exports.default = matchesModel_1.default(matcher, function (opts) {
    return opts.registration;
});
//# sourceMappingURL=matchesRegistrationOption.js.map