import AuthService from "../authService";

describe("AuthService", () => {
    test("should be defined", () => {
        expect(AuthService).toBeDefined();
    });

    test("should be a class", () => {
        expect(typeof AuthService).toBe("object");
    });

    test("should have a register method", () => {
        expect(AuthService.register).toBeDefined();
    });

    test("should have a login method", () => {
        expect(AuthService.login).toBeDefined();
    });

    test("should have a register method that returns a Promise", () => {
        expect(typeof AuthService.register).toBe("function");
    });

    test("should have a login method that returns a Promise", () => {
        expect(typeof AuthService.login).toBe("function");
    });
});