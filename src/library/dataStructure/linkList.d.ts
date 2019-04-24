interface Function {
  (): any;
}
interface FunctionElement {
  (element: any): any;
}
interface FunctionPosition {
  (position: any, element?: any): any;
}
interface LinkedListClass {
  append: FunctionElement;
  insert: FunctionPosition;
  removeAt: FunctionPosition;
  remove: FunctionElement;
  indexOf: FunctionElement;
  isEmpty: Function;
  size: Function;
  toString: Function;
  print: Function;
}
export default class LinkedList implements LinkedListClass {
  length: number;
  head: any;
  constructor();
  append(element: any): void;
  insert(position: any, element: any): boolean;
  remove(element: any): void;
  removeAt(position: any): any;
  indexOf(element: any): void;
  isEmpty(): void;
  size(): void;
  toString(): void;
  print(): void;
}
export {};
