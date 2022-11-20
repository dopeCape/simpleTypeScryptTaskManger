"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConnectDB_1 = __importDefault(require("./db/ConnectDB"));
const routes_1 = require("./routes/routes");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(express_1.default.static(path_1.default.join(__dirname, '/public')));
app.use("/api/v1", routes_1.router);
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "/public/index.html"));
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, ConnectDB_1.default)();
        app.listen(9000, () => {
            console.log("listing on port 9000");
        });
    }
    catch (_a) {
        throw ("some random errr");
    }
});
start();
