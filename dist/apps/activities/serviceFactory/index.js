"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var repoFactory_1 = __importDefault(require("../repoFactory"));
var service_1 = __importDefault(require("../service"));
exports.default = (function () {
    var repoFacade = repoFactory_1.default();
    return service_1.default({
        repo: repoFacade,
    });
});
//# sourceMappingURL=index.js.map