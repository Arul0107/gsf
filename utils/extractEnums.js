export const extractEnumValues = (schema, fieldName) => {
  const path = schema.path(fieldName);
  return path?.enumValues || [];
};
