"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3030;
app.use('/', userRoute_1.default);
app.get("/", (req, res) => {
    res.send("home page");
});
(0, database_1.default)();
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
