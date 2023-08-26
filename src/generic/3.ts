/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type ObjType = { [prop: string]: any };

function merge<T extends ObjType, U extends ObjType>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

export {};
