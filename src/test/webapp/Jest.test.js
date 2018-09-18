import { Name, showSomeValues } from "../../main/webapp/assets/js/log/logger";

describe("Jest-Tests", () => {
    test("Simple Test", () => {
        expect(true).toBe(true);
    });

    test("Test import",() => {
        let name = new Name("Mike", "Mitterer");
        expect(name.firstname).toBe("Mike");
    });

    it("return text", function () {
        const text = showSomeValues({text: "Mike"});
        expect(text).toBe("-Mike-");
    });

});
