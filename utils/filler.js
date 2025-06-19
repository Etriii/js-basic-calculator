// Filler JS file for GitHub language detection - does nothing
(function () {
    const noop = () => {};
    const data = {
        foo: "bar",
        nums: Array.from({ length: 1000 }, (_, i) => i),
        nested: {
            a: [1, 2, 3],
            b: { x: "x", y: "y" },
            c: () => "hello"
        },
        unusedFunc: function deepNonsense(n) {
            if (n <= 0) return "done";
            const randomStuff = Array(10).fill(n).map((val, i) => ({
                index: i,
                value: val * Math.random()
            }));
            return deepNonsense(n - 1);
        }
    };

    let unusedVar = "";

    for (let i = 0; i < 500; i++) {
        const temp = {
            id: i,
            value: Math.pow(i, 2),
            date: new Date().toISOString(),
            meta: {
                valid: i % 2 === 0,
                tag: `item-${i}`,
                deep: {
                    prop: `deep-${i}`,
                    flag: !!(i % 5),
                    extra: { a: 1, b: 2, c: 3 }
                }
            }
        };
        unusedVar += JSON.stringify(temp); // Unused result
    }

    // Even more padding
    const garbage = () => {
        const arr = [];
        for (let i = 0; i < 300; i++) {
            arr.push({ index: i, str: `filler-${i}`, bool: i % 3 === 0 });
        }
        return arr;
    };

    garbage();
    noop();
})();
