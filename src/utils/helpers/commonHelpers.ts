export const removeLeadingZeros = (number: string | number, CBType?: "string" | "number") => {
  // Use a regular expression to replace leading zeros
  const numberStr = `${number}`;
  if (CBType && CBType === "number") {
    return +numberStr.replace(/^0+/, "") || 0;
  }
  return numberStr.replace(/^0+/, "") || "0";
};

export const maxInputNumber = (number: string | number, max: number) => {
  if (!number) {
    return ''
  }
  // Check if the input value is less than or equal to the max
  const numericValue = parseInt(`${number}`, 10);
  if (numericValue > max) {
    return '';
  }

  // If valid, update the value and clear any error messages
  return number;
};
