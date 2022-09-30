export function getConvertFixedNumberToString(number:number): string {
    return Number(number.toFixed(4)).toString();
}

export function getConvertFixedStringToNumber(string:string): number {
    return Number(parseFloat(string).toFixed(4));
}

