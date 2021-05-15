// Работа с простыми типами
type TypeConcatFn = (s1: string, s2: string,) => string;

const concat: TypeConcatFn = (s1, s2) => s1 + s2;

// function concat(s1: string, s2: string,): string{
// 	return s1 + s2;
// }

concat('Hello ', 'World'); // -> Hello World;




// Работа с интерфейсами

interface MyObjInterface {
	howIDoIt: string,
	simeArray: (number | string)[]
}

interface MyInterface {
	howIDoIt: string,
	simeArray: (number | string)[],
	withData: MyObjInterface[]
}

const myHometask: MyInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}


// Типизация функций, используя Generic

interface MyArray<T> {
	[n: number]: T;

	reduce<U>(fn: (previousValue: U, item: T, index: number, array: MyArray<T>) => T, initial: U): U;
}

const tsArr: MyArray<number> = [1,2,3,4];

tsArr.reduce((previousValue, item, index, array) => previousValue + item, 0);