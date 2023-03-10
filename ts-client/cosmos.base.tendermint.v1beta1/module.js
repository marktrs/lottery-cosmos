"use strict";
// Generated by Ignite ignite.com/cli
exports.__esModule = true;
exports.queryClient = exports.txClient = exports.registry = void 0;
var proto_signing_1 = require("@cosmjs/proto-signing");
var registry_1 = require("./registry");
var rest_1 = require("./rest");
var types_1 = require("./types");
var types_2 = require("./types");
var types_3 = require("./types");
var types_4 = require("./types");
var types_5 = require("./types");
var types_6 = require("./types");
var types_7 = require("./types");
exports.registry = new proto_signing_1.Registry(registry_1.msgTypes);
function getStructure(template) {
    var structure = { fields: [] };
    for (var _i = 0, _a = Object.entries(template); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
var defaultFee = {
    amount: [],
    gas: "200000"
};
var txClient = function (_a) {
    var _b = _a === void 0 ? { addr: "http://localhost:26657", prefix: "cosmos" } : _a, signer = _b.signer, prefix = _b.prefix, addr = _b.addr;
    return {};
};
exports.txClient = txClient;
var queryClient = function (_a) {
    var _b = _a === void 0 ? { addr: "http://localhost:1317" } : _a, addr = _b.addr;
    return new rest_1.Api({ baseURL: addr });
};
exports.queryClient = queryClient;
var SDKModule = /** @class */ (function () {
    function SDKModule(client) {
        var _this = this;
        this.registry = [];
        this.query = (0, exports.queryClient)({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {
            Validator: getStructure(types_1.Validator.fromPartial({})),
            VersionInfo: getStructure(types_2.VersionInfo.fromPartial({})),
            Module: getStructure(types_3.Module.fromPartial({})),
            ProofOp: getStructure(types_4.ProofOp.fromPartial({})),
            ProofOps: getStructure(types_5.ProofOps.fromPartial({})),
            Block: getStructure(types_6.Block.fromPartial({})),
            Header: getStructure(types_7.Header.fromPartial({}))
        };
        client.on('signer-changed', function (signer) {
            _this.updateTX(client);
        });
    }
    SDKModule.prototype.updateTX = function (client) {
        var _a;
        var methods = (0, exports.txClient)({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: (_a = client.env.prefix) !== null && _a !== void 0 ? _a : "cosmos"
        });
        this.tx = methods;
        for (var m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    };
    return SDKModule;
}());
;
var Module = function (test) {
    return {
        module: {
            CosmosBaseTendermintV1Beta1: new SDKModule(test)
        },
        registry: registry_1.msgTypes
    };
};
exports["default"] = Module;
