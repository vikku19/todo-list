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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoController = class TodoController {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async create(todo) {
        return this.todoRepository.create(todo);
    }
    async count(where) {
        return this.todoRepository.count(where);
    }
    async find(filter) {
        return this.todoRepository.find(filter);
    }
    async updateAll(todo, where) {
        return this.todoRepository.updateAll(todo, where);
    }
    async findById(id, filter) {
        return this.todoRepository.findById(id, filter);
    }
    async updateById(id, todo) {
        await this.todoRepository.updateById(id, todo);
    }
    async replaceById(id, todo) {
        await this.todoRepository.replaceById(id, todo);
    }
    async deleteById(id) {
        await this.todoRepository.deleteById(id);
    }
};
__decorate([
    (0, rest_1.post)('/todos'),
    (0, rest_1.response)(200, {
        description: 'Todo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Todo) } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, {
                    title: 'NewTodo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    (0, rest_1.get)('/todos/count'),
    (0, rest_1.response)(200, {
        description: 'Todo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    __param(0, rest_1.param.where(models_1.Todo)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "count", null);
__decorate([
    (0, rest_1.get)('/todos'),
    (0, rest_1.response)(200, {
        description: 'Array of Todo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Todo, { includeRelations: true }),
                },
            },
        },
    }),
    __param(0, rest_1.param.filter(models_1.Todo)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "find", null);
__decorate([
    (0, rest_1.patch)('/todos'),
    (0, rest_1.response)(200, {
        description: 'Todo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    __param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.where(models_1.Todo)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Todo, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateAll", null);
__decorate([
    (0, rest_1.get)('/todos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Todo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { includeRelations: true }),
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.filter(models_1.Todo, { exclude: 'where' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findById", null);
__decorate([
    (0, rest_1.patch)('/todos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Todo PATCH success',
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateById", null);
__decorate([
    (0, rest_1.put)('/todos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Todo PUT success',
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, (0, rest_1.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "replaceById", null);
__decorate([
    (0, rest_1.del)('/todos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Todo DELETE success',
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteById", null);
TodoController = __decorate([
    __param(0, (0, repository_1.repository)(repositories_1.TodoRepository)),
    __metadata("design:paramtypes", [repositories_1.TodoRepository])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map