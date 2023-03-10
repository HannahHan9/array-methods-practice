const {
    isAttending,
    belowTen,
    hasMultipleCats,
    multiplyByTwo,
    makeGuestList,
    cancelMemberships,
} = require("../array-methods");

describe("belowTen", () => {
    test("should return empty array when passed empty array", () => {
        expect(belowTen([])).toEqual([]);
    });
    test("should return same array when all below 10", () => {
        const input = [1, 2];
        expect(belowTen(input)).toEqual([1, 2]);
    });
    test("should return numbers below 10 in mixed array", () => {
        const input = [1, 10, 2, 10, 12];
        expect(belowTen(input)).toEqual([1, 2]);
    });
    test("should not mutate input array", () => {
        const input = [1, 10, 2, 10, 12];
        const inputCopy = [1, 10, 2, 10, 12];
        belowTen(input);
        expect(input).toEqual(inputCopy);
    });
    test("should return new array", () => {
        const input = [1, 10, 2, 10, 12];
        const result = belowTen(input);
        expect(result).not.toBe(input);
    });
});

describe.skip("isAttending", () => {
    test("should return an empty array when passed empty", () => {
        expect(isAttending([])).toEqual([]);
    });
    test("should return single guest name confirmed", () => {
        const input = [{ name: "Tom", confirmed: true }];
        const expectedResult = [{ name: "Tom", confirmed: true }];
        expect(isAttending(input)).toEqual(expectedResult);
    });
    test("should return multiple guest names confirmed", () => {
        const input = [
            { name: "Tom", confirmed: true },
            { name: "Jess", confirmed: true },
        ];
        const expectedResult = [
            { name: "Tom", confirmed: true },
            { name: "Jess", confirmed: true },
        ];
        expect(isAttending(input)).toEqual(expectedResult);
    });
    test("should return multiple guest names confirmed from mixed array", () => {
        const input = [
            { name: "Tom", confirmed: true },
            { name: "Dan", confirmed: false },
            { name: "Jess", confirmed: true },
        ];
        const expectedResult = [
            { name: "Tom", confirmed: true },
            { name: "Jess", confirmed: true },
        ];
        expect(isAttending(input)).toEqual(expectedResult);
    });
    test("should not mutate input array", () => {
        const input = [
            { name: "Tom", confirmed: true },
            { name: "Dan", confirmed: false },
            { name: "Jess", confirmed: true },
        ];
        const inputCopy = [
            { name: "Tom", confirmed: true },
            { name: "Dan", confirmed: false },
            { name: "Jess", confirmed: true },
        ];
        isAttending(input);
        expect(input).toEqual(inputCopy);
    });
    test("should return a new array", () => {
        const input = [
            { name: "Tom", confirmed: true },
            { name: "Dan", confirmed: false },
            { name: "Jess", confirmed: true },
        ];

        const result = isAttending(input);
        expect(input).not.toBe(result);
    });
});

describe.skip("hasMultipleCats", () => {
    test("should return an empty array when passed empty", () => {
        expect(hasMultipleCats([])).toEqual([]);
    });
    test("should return array with single object of owners with multiple cats", () => {
        const input = [{ name: "jess", catCount: 2 }];
        const expected = [{ name: "jess", catCount: 2 }];
        expect(hasMultipleCats(input)).toEqual(expected);
    });
    test("should return array with multiple objects of owners with multiple cats", () => {
        const input = [
            { name: "jess", catCount: 2 },
            { name: "Tom", catCount: 2 },
        ];
        const expected = [
            { name: "jess", catCount: 2 },
            { name: "Tom", catCount: 2 },
        ];
        expect(hasMultipleCats(input)).toEqual(expected);
    });
    test("should return array with multiple mixed objects of owners with multiple cats", () => {
        const input = [
            { name: "jess", catCount: 2 },
            { name: "Tom", catCount: 2 },
            { name: "Danny", catCount: 0 },
        ];
        const expected = [
            { name: "jess", catCount: 2 },
            { name: "Tom", catCount: 2 },
        ];
        expect(hasMultipleCats(input)).toEqual(expected);
    });
    test("should not mutate input array", () => {
        const input = [
            { name: "jess", catCount: 2 },
            { name: "Tom", catCount: 2 },
            { name: "Danny", catCount: 0 },
        ];
        const inputCopy = [
            { name: "jess", catCount: 2 },
            { name: "Tom", catCount: 2 },
            { name: "Danny", catCount: 0 },
        ];
        hasMultipleCats(input);
        expect(input).toEqual(inputCopy);
    });
    test("should return a new array", () => {
        const input = [
            { name: "jess", catCount: 2 },
            { name: "Tom", catCount: 2 },
            { name: "Danny", catCount: 0 },
        ];

        const result = hasMultipleCats(input);
        expect(input).not.toBe(result);
    });
});

describe.skip("multiplyByTwo", () => {
    test("should return an empty array when passed empty", () => {
        expect(multiplyByTwo([])).toEqual([]);
    });
    test("should multiply single number", () => {
        expect(multiplyByTwo([1])).toEqual([2]);
    });
    test("should multiply multiple numbers", () => {
        expect(multiplyByTwo([1, 2])).toEqual([2, 4]);
        expect(multiplyByTwo([5, 9, 10])).toEqual([10, 18, 20]);
    });
    test("should return a new array", () => {
        const input = [10];
        const result = multiplyByTwo(input);
        expect(result).not.toBe(input);
    });
    test("should not mutate input array", () => {
        const input = [10];
        const inputCopy = [10];
        multiplyByTwo(input);
        expect(inputCopy).toEqual(input);
    });
});

describe.skip("makeGuestList", () => {
    test("should return an empty array when passed empty", () => {
        expect(makeGuestList([])).toEqual([]);
    });
    test("should return name of single guest attending", () => {
        const input = [{ name: "Dan", age: 20 }];
        const expectedResult = ["Dan"];
        expect(makeGuestList(input)).toEqual(expectedResult);
    });
    test("should return name of multiple guests attending", () => {
        const input = [
            { name: "Dan", age: 20 },
            { name: "Jess", age: 21 },
            { name: "Bill", age: 50 },
        ];
        const expectedResult = ["Dan", "Jess", "Bill"];
        expect(makeGuestList(input)).toEqual(expectedResult);
    });
    test("should return a new array", () => {
        const input = [
            { name: "Dan", age: 20 },
            { name: "Jess", age: 21 },
            { name: "Bill", age: 50 },
        ];
        const result = makeGuestList(input);
        expect(result).not.toBe(input);
    });
    test("should not mutate input array", () => {
        const input = [
            { name: "Dan", age: 20 },
            { name: "Jess", age: 21 },
            { name: "Bill", age: 50 },
        ];
        const inputCopy = [
            { name: "Dan", age: 20 },
            { name: "Jess", age: 21 },
            { name: "Bill", age: 50 },
        ];
        makeGuestList(input);
        expect(input).not.toBe(inputCopy);
    });
});

describe.skip("cancelMemberships", () => {
    test("should return an empty array when passed empty", () => {
        expect(cancelMemberships([])).toEqual([]);
    });
    test("should return an members already cancelled", () => {
        const input = [{ memberId: 10, status: "cancelled" }];
        const expected = [{ memberId: 10, status: "cancelled" }];
        expect(cancelMemberships(input)).toEqual(expected);
    });
    test("should return cancel single member", () => {
        const input = [{ memberId: 10, status: "active" }];
        const expected = [{ memberId: 10, status: "cancelled" }];
        expect(cancelMemberships(input)).toEqual(expected);
    });
    test("should return cancel multiple members", () => {
        const input = [
            { memberId: 10, status: "active" },
            { memberId: 1022, status: "active" },
        ];
        const expected = [
            { memberId: 10, status: "cancelled" },
            { memberId: 1022, status: "cancelled" },
        ];
        expect(cancelMemberships(input)).toEqual(expected);
    });
    test("should return cancel multiple members with mixed statuses", () => {
        const input = [
            { memberId: 10, status: "active" },
            { memberId: 1022, status: "active" },
            { memberId: 505, status: "cancelled" },
        ];
        const expected = [
            { memberId: 10, status: "cancelled" },
            { memberId: 1022, status: "cancelled" },
            { memberId: 505, status: "cancelled" },
        ];
        expect(cancelMemberships(input)).toEqual(expected);
    });
    test("should not mutate input array", () => {
        const input = [
            { memberId: 10, status: "active" },
            { memberId: 1022, status: "active" },
            { memberId: 505, status: "cancelled" },
        ];
        const inputCopy = [
            { memberId: 10, status: "active" },
            { memberId: 1022, status: "active" },
            { memberId: 505, status: "cancelled" },
        ];
        cancelMemberships(input);
        expect(input).toEqual(inputCopy);
    });
    test("should return a new array", () => {
        const input = [
            { memberId: 10, status: "active" },
            { memberId: 1022, status: "active" },
            { memberId: 505, status: "cancelled" },
        ];

        const result = cancelMemberships(input);
        expect(result).not.toBe(input);
    });
});
