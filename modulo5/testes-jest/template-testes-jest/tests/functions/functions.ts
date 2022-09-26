export const isPair = (n: number): boolean => {
    return n % 2 == 0;
}

export const upperCase = (string: string): string => {
    return string.toUpperCase();
}

export const arrayOfChar = (string: string): string[] => {
    return string.split("");
}

export const strToNumber = (string: string): number => {
    return Number(string);
}

export const lenStr = (string: string): number => {
    return string.length;
}

export const randomNumber1To10 = (): number => {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

interface IUsers {
    "name": string,
    "age": number
}
export const userList: IUsers[] = [
    { name: "Astrodev", age: 30 },
    { name: "Wall-e", age: 200 }
]

export const avg = (list: number[]): number => {
    return Math.ceil(list.reduce((a, b) => a + b, 0) / list.length);
}

export const todayAge = (birthYear: number): number => {
    return new Date().getFullYear() - birthYear;
}

export const formatDate = (stringDate: string): string => {
    const date = new Date(stringDate);
    return date.toLocaleDateString();
}