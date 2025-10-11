// Bhaskara formula file

export default function bhaskara() {
    const A = 1;
    const B = 2;
    const C = 3;
    const delta = B ** 2 - 4 * A * C;

    if (delta < 0) {
        console.log("Delta é negativo - não existe raiz real");
        return "Delta é negativo - não existe raiz real";
    } else if (delta === 0) {
        const x = -B / (2 * A);
        return `Delta é nulo - existe apenas uma raiz real: ${x}`;
        console.log(`Delta é nulo - existe apenas uma raiz real: ${x}`);
    } else if (delta > 0) {
        const x1 = (-B + Math.sqrt(delta)) / (2 * A);
        const x2 = (-B - Math.sqrt(delta)) / (2 * A);
        return 'Delta é positivo - existem duas raízes reais: ' + x1 + ' e ' + x2;
        console.log(`Delta é positivo - existem duas raízes reais: ${x1} e ${x2}`);
    }
}