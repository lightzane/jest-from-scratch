export const sum = (...num: number[]): number => num.reduce((a, b) => a + b, 0);

export const fibonacci = (a: number, b: number): number[] => {
    let list: number[] = [];
    list.push(a);
    list.push(b);
    let total = a + b;
    for (let i = 1; list.length < 10; i++) {
        list.push(total);
        total = list[i] + list[i + 1];
    }
    return list;
};

// const sequence = fibonacci(5, 5);
// console.log(sequence, `=> Fibonacci Sequence`);
// console.log(`Total Sum:`, sum(...sequence));
// console.log(`7th number from sequence:`, sequence[6]);
// console.log(`7th num multiplied by 11:`, sequence[6] * 11);

console.log('Successful!');