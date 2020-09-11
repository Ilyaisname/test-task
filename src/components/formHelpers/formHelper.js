
// функция заполняет стейт опциями
export function createOptionName(fieldType = "text", fieldName, fieldPlaceholder) {
  return {
    type: fieldType,
    name: fieldName,
    placeholder: fieldPlaceholder
  }
}

// сравнивает два объекта
export const isEqual = (a, b) => {
  if (a === b) return true;
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  return keys.every(k => isEqual(a[k], b[k]));
}



