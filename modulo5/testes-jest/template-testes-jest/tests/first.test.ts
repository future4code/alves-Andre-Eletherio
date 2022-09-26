import { arrayOfChar, avg, formatDate, isPair, lenStr, randomNumber1To10, strToNumber, todayAge, upperCase, userList } from "./functions/functions";

describe("Exercise 0", () => {
    test("10 must return true", () => {
        const input = 10;
        const output = isPair(input)
        expect(output).toBe(true);
    })

    test("9 must be false", () => {
        const input = 9;
        const output = isPair(input);
        expect(output).toBe(false);
    })

    test("-1 must be false", () => {
        const input = -1;
        const output = isPair(input);
        expect(output).toBe(false);
    })
})


describe("Exercise 1", () => {
    test("'Oi, tudo bem?' must return 'OI, TUDO BEM?'", () => {
        const input = "Oi, tudo bem?";
        const output = upperCase(input);
        expect(output).toBe("OI, TUDO BEM?")
    })

    test("'Eu tenho 40 anos' must return 'EU TENHO 40 ANOS'", () => {
        const input = "Eu tenho 40 anos";
        const output = upperCase(input);
        expect(output).toBe("EU TENHO 40 ANOS")
    })
})


describe("Exercise 2", () => {
    test("'dev' must return ['d', 'e', 'v']", () => {
        const input = "dev";
        const output = arrayOfChar(input);
        expect(output).toEqual(["d", "e", "v"]);
    })
})


describe("Exercise 3", () => {
    test("'7' must return 7", () => {
        const input = 7;
        const output = strToNumber("7");
        expect(output).toBe(7);
    })
})


describe("Exercise 4", () => {
    test("'Paçoca' must return 6", () => {
        const input = "Paçoca";
        const output = lenStr(input);
        expect(output).toBe(6);
    })
})


describe("Exercise 5", () => {
    test("Output must be between 1-10 included", () => {
        const output = randomNumber1To10();
        expect(output).toBeGreaterThanOrEqual(1);
        expect(output).toBeLessThanOrEqual(10);
    })
})


describe("Exercise 6", () => {
    test("Astrodev must be in the list", () => {
        const astrodev = { name: "Astrodev", age: 30 };
        expect(userList).toContainEqual(astrodev);
    })
})


describe("Exercise 7", () => {
    test("[1, 2, 3, 1] must return 2", () => {
        const input = [1, 2, 3, 1];
        const output = avg(input);
        expect(output).toBe(2);
    })
})


describe("Exercise 8", ()=> {
    test("In 2022, 2000 must return 22", ()=> {
        const input = 2000;
        const output = todayAge(input);
        expect(output).toBe(22);
    })
})


describe("Exercise 9", ()=> {
    test("2022/09/26 must return 26/09/2022", ()=> {
        const input = "2022/09/26";
        const output = formatDate(input);
        expect(output).toBe("26/09/2022");
    })
})