"use strict";
exports.__esModule = true;
exports.MsgClientImpl = exports.MsgMultiSendResponse = exports.MsgMultiSend = exports.MsgSendResponse = exports.MsgSend = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = require("protobufjs/minimal");
var coin_1 = require("../../base/v1beta1/coin");
var bank_1 = require("./bank");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseMsgSend() {
    return { fromAddress: "", toAddress: "", amount: [] };
}
exports.MsgSend = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSend();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgSend();
        message.fromAddress = (_a = object.fromAddress) !== null && _a !== void 0 ? _a : "";
        message.toAddress = (_b = object.toAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseMsgSendResponse() {
    return {};
}
exports.MsgSendResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSendResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgSendResponse();
        return message;
    }
};
function createBaseMsgMultiSend() {
    return { inputs: [], outputs: [] };
}
exports.MsgMultiSend = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.inputs; _i < _a.length; _i++) {
            var v = _a[_i];
            bank_1.Input.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.outputs; _b < _c.length; _b++) {
            var v = _c[_b];
            bank_1.Output.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgMultiSend();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputs.push(bank_1.Input.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.outputs.push(bank_1.Output.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            inputs: Array.isArray(object === null || object === void 0 ? void 0 : object.inputs) ? object.inputs.map(function (e) { return bank_1.Input.fromJSON(e); }) : [],
            outputs: Array.isArray(object === null || object === void 0 ? void 0 : object.outputs) ? object.outputs.map(function (e) { return bank_1.Output.fromJSON(e); }) : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map(function (e) { return e ? bank_1.Input.toJSON(e) : undefined; });
        }
        else {
            obj.inputs = [];
        }
        if (message.outputs) {
            obj.outputs = message.outputs.map(function (e) { return e ? bank_1.Output.toJSON(e) : undefined; });
        }
        else {
            obj.outputs = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgMultiSend();
        message.inputs = ((_a = object.inputs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bank_1.Input.fromPartial(e); })) || [];
        message.outputs = ((_b = object.outputs) === null || _b === void 0 ? void 0 : _b.map(function (e) { return bank_1.Output.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseMsgMultiSendResponse() {
    return {};
}
exports.MsgMultiSendResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgMultiSendResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgMultiSendResponse();
        return message;
    }
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.Send = this.Send.bind(this);
        this.MultiSend = this.MultiSend.bind(this);
    }
    MsgClientImpl.prototype.Send = function (request) {
        var data = exports.MsgSend.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
        return promise.then(function (data) { return exports.MsgSendResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    MsgClientImpl.prototype.MultiSend = function (request) {
        var data = exports.MsgMultiSend.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
        return promise.then(function (data) { return exports.MsgMultiSendResponse.decode(new minimal_1["default"].Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
