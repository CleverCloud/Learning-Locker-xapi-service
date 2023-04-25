"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = __importDefault(require("jscommons/dist/expressPresenter/mixins/cors"));
var helmet_1 = __importDefault(require("jscommons/dist/expressPresenter/mixins/helmet"));
var deleteProfile_1 = __importDefault(require("./deleteProfile"));
var getProfiles_1 = __importDefault(require("./getProfiles"));
var postProfile_1 = __importDefault(require("./postProfile"));
var putProfile_1 = __importDefault(require("./putProfile"));
exports.default = (function (config) {
    var router = express_1.Router();
    router.use(cors_1.default());
    router.use(helmet_1.default());
    router.delete('', deleteProfile_1.default(config));
    router.get('', getProfiles_1.default(config));
    router.put('', putProfile_1.default(config));
    router.post('', postProfile_1.default(config));
    return router;
});
//# sourceMappingURL=index.js.map