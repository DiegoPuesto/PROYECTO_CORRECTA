"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBreedDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateBreedDto {
}
exports.CreateBreedDto = CreateBreedDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'El nombre de la raza de gato',
        example: 'Persa',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3, { message: 'El nombre de la raza debe tener al menos 3 caracteres' }),
    __metadata("design:type", String)
], CreateBreedDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Qué tan amigable es con los niños (escala del 1 al 5)',
        example: 5,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateBreedDto.prototype, "childFriendly", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nivel de energía del gato (escala del 1 al 5)',
        example: 2,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateBreedDto.prototype, "energyLevel", void 0);
//# sourceMappingURL=create-breed.dto.js.map