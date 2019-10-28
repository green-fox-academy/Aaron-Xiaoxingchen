
export default interface LinkedList<T> {
  add(value: T, index?: number): void;
  get(index: number): T;
  removeItem(value: T): void;
  remove(index: number): T;
  size(): number;
}
