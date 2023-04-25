"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = __importDefault(require("jscommons/dist/expressPresenter/mixins/cors"));
var helmet_1 = __importDefault(require("jscommons/dist/expressPresenter/mixins/helmet"));
var deleteState_1 = __importDefault(require("./deleteState"));
var getStates_1 = __importDefault(require("./getStates"));
var postState_1 = __importDefault(require("./postState"));
var putState_1 = __importDefault(require("./putState"));
exports.default = (function (config) {
    var router = express_1.Router();
    router.use(cors_1.default());
    router.use(helmet_1.default());
    router.delete('', deleteState_1.default(config));
    router.get('', getStates_1.default(config));
    router.put('', putState_1.default(config));
    router.post('', postState_1.default(config));
    return router;
});
//# sourceMappingURL=index.js.map