"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cats_service_1 = require("./cats.service");
const node_test_1 = require("node:test");
(0, node_test_1.describe)('CatsService', () => {
    let service;
    (0, node_test_1.beforeEach)(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [cats_service_1.CatsService],
        }).compile();
        service = module.get(cats_service_1.CatsService);
    });
    (0, node_test_1.it)('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=cats.service.spec.js.map