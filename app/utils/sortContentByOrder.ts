type Orderable = { order: number };

export function sortContentByOrder<T extends Orderable> (a: T, b: T) {
  return b.order - a.order;
};
