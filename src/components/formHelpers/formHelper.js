
// функция заполняет стейт опциями
export function createOptionName(fieldType = "text", fieldName, fieldPlaceholder) {
  return {
    type: fieldType,
    name: fieldName,
    placeholder: fieldPlaceholder
  }
}