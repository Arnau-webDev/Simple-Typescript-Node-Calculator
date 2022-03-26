type Operation = "multiply" | "add" | "divide";

const calculator = (a: number, b: number, op: Operation): number => {

    if (op === "multiply") return a * b;
    if (op === "add") return a + b;
    if (op === "divide") {
        if (b === 0) throw new Error("Can't divide by 0 sorry!");
        return a / b;
    };

    throw new Error("Operation is not valid!");
};

const result = calculator(0, 1, "add");
console.log(result);