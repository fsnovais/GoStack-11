"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function UserData(request, response) {
    var user = CreateUser_1.default({
        name: 'Felipe',
        email: "fellipesn17@gmail.com",
        password: "12343",
        techs: ["Js", "React",
            { name: "Python", experience: 100
            }]
    });
    return response.json(user);
}
exports.default = UserData;
