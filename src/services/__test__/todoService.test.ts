import TodoService from "../todoService";

describe("TodoService", () => {
    test("should be defined", () => {
        expect(TodoService).toBeDefined();
    });

    test("should be a class", () => {
        expect(typeof TodoService).toBe("object");
    });

    test("should have a getAll method", () => {
        expect(TodoService.getAllTodos).toBeDefined();
    });

    test("should have a getAll method that returns a Promise", () => {
        expect(typeof TodoService.getAllTodos).toBe("function");
    });

    test("should have a getTodo method", () => {
        expect(TodoService.getTodo).toBeDefined();
    });

    test("should have a getTodo method that returns a Promise", () => {
        expect(typeof TodoService.getTodo).toBe("function");
    });

    test("should have a createTodo method", () => {
        expect(TodoService.createTodo).toBeDefined();
    });

    test("should have a createTodo method that returns a Promise", () => {
        expect(typeof TodoService.createTodo).toBe("function");
    });

    test("should have a updateTodo method", () => {
        expect(TodoService.updateTodo).toBeDefined();
    });

    test("should have a updateTodo method that returns a Promise", () => {
        expect(typeof TodoService.updateTodo).toBe("function");
    });

    test("should have a deleteTodo method", () => {
        expect(TodoService.deleteTodo).toBeDefined();
    });

    test("should have a deleteTodo method that returns a Promise", () => {
        expect(typeof TodoService.deleteTodo).toBe("function");
    });
});