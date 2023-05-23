export function first<Type>(array:Type[]):Type {
  return array[0];
}

export function updateItem<Type>(array: Type[], index: number, updatedItem: Type): Type[] {
  if (!array.some((_element, indexFromElement) => indexFromElement === index)) return array;

  return array.map((element, indexFromElement) => {
    if (indexFromElement === index) return updatedItem;
    return element;
  });
}