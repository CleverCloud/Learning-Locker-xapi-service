"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __importStar(require("assert"));
var rulr_1 = require("rulr");
var validateAgent_1 = __importDefault(require("../../utils/validateAgent"));
describe('validateAgent', function () {
    var assertWarnings = function (agent) {
        try {
            validateAgent_1.default(agent);
        }
        catch (err) {
            var actualConstructor = err.constructor;
            assert.strictEqual(actualConstructor, rulr_1.Warnings);
        }
    };
    it('should throw an error when using an invalid mbox value', function () {
        assertWarnings({ mbox: 'test@example.org' });
    });
    it('should throw an error when using an invalid mbox_sha1sum value', function () {
        assertWarnings({ mbox_sha1sum: 'test@example.org' });
    });
    it('should throw an error when using an invalid openid value', function () {
        assertWarnings({ openid: 'www.example.org' });
    });
    it('should throw an error when using an invalid homePage value', function () {
        assertWarnings({
            account: {
                homePage: 'www.example.org',
                name: 'dummy_account_name',
            },
        });
    });
    it('should throw an error when using an invalid name type', function () {
        assertWarnings({
            account: {
                homePage: 'http://www.example.org',
                name: 10,
            },
        });
    });
    it('should throw an error when using an invalid homePage value and name type', function () {
        assertWarnings({
            account: {
                homePage: 'www.example.org',
                name: 10,
            },
        });
    });
    it('should throw an error when using an invalid mbox type', function () {
        assertWarnings({ mbox: 10 });
    });
    it('should throw an error when using an invalid mbox_sha1sum type', function () {
        assertWarnings({ mbox_sha1sum: 10 });
    });
    it('should throw an error when using an invalid openid type', function () {
        assertWarnings({ openid: 10 });
    });
    it('should throw an error when using an invalid homePage type', function () {
        assertWarnings({
            account: {
                homePage: 10,
                name: 'dummy_account_name',
            },
        });
    });
    it('should throw an error when using an invalid homePage type and name type', function () {
        assertWarnings({
            account: {
                homePage: 10,
                name: 10,
            },
        });
    });
    it('should throw an error when using too many IFIs', function () {
        assertWarnings({
            mbox: 'mailto:test@example.org',
            openid: 'http://www.example.org',
        });
    });
    it('should throw an error when using no IFIs', function () {
        assertWarnings({});
    });
    it('should throw an error when using an invalid IFI', function () {
        assertWarnings({ foo: 'bar' });
    });
});
//# sourceMappingURL=validateAgent.test.js.map