"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var getAgentsFromStatement_1 = require("../../../service/storeStatements/queriables/getAgentsFromStatement");
var mboxAgent = {
    objectType: 'Agent',
    mbox: 'mailto:test@test.com',
};
var mboxShaAgent = {
    objectType: 'Agent',
    mbox_sha1sum: '1234567890qwryuiop',
};
var openIDAgent = {
    objectType: 'Agent',
    openid: 'http://example.org/user/1',
};
var accountAgent = {
    objectType: 'Agent',
    account: {
        name: '123',
        homePage: 'https://example.com',
    },
};
var identifiedGroup = __assign(__assign({}, mboxAgent), { objectType: 'Group' });
var membersGroup = __assign(__assign({}, identifiedGroup), { member: [mboxShaAgent, openIDAgent, accountAgent, mboxShaAgent] });
describe('create ident from agent', function () {
    it('should take an mbox actor and return an array with the ident', function () {
        var idents = getAgentsFromStatement_1.getActorIdents(mboxAgent);
        assert_1.default.deepStrictEqual(idents, [mboxAgent.mbox]);
    });
    it('should take an mboxsha1_sum actor and return an array with the ident', function () {
        var idents = getAgentsFromStatement_1.getActorIdents(mboxShaAgent);
        assert_1.default.deepStrictEqual(idents, [mboxShaAgent.mbox_sha1sum]);
    });
    it('should take an account actor and return an array with the ident', function () {
        var idents = getAgentsFromStatement_1.getActorIdents(accountAgent);
        var expectedIdent = accountAgent.account.homePage + "|" + accountAgent.account.name;
        assert_1.default.deepStrictEqual(idents, [expectedIdent]);
    });
    it('should take an openid actor and return an array with the ident', function () {
        var idents = getAgentsFromStatement_1.getActorIdents(openIDAgent);
        assert_1.default.deepStrictEqual(idents, [openIDAgent.openid]);
    });
    it('should take a group and return an array of idents including the members', function () {
        var idents = getAgentsFromStatement_1.getGroupIdents(membersGroup);
        var member = membersGroup.member;
        assert_1.default.strictEqual(member.length, idents.length);
        assert_1.default.deepStrictEqual(idents.sort(), [
            mboxAgent.mbox,
            openIDAgent.openid,
            accountAgent.account.homePage + "|" + accountAgent.account.name,
            mboxShaAgent.mbox_sha1sum,
        ].sort());
    });
});
//# sourceMappingURL=getIdents.test.js.map