function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextFib = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFib);
    }
    return sequence;
}

console.log(fibs(4));

function fibsRecursive(n, sequence = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return sequence;

    let nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];

    return fibsRecursive(n -1, [...sequence, nextFib]);
}

console.log(fibsRecursive(4));