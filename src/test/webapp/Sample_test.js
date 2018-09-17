import { Name, showSomeValues } from "../../main/webapp/assets/js/log/logger";

describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });

    it("show last name 'Mitterer'", function () {
        const name = new Name("Mike", "Mitterer");
        expect(name.lastame).toBe("Mitterer");
    });

    it("return text", function () {
        const text = showSomeValues({text: "Mike"});
        expect(text).toBe("-Mike-");
    });
});
