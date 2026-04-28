"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const users_controller_1 = require("./users.controller");
const node_test_1 = require("node:test");
(0, node_test_1.describe)('UsersController', () => {
    let controller;
    (0, node_test_1.beforeEach)(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [users_controller_1.UsersController],
        }).compile();
        controller = module.get(users_controller_1.UsersController);
    });
    (0, node_test_1.it)('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=users.controller.spec.js.map