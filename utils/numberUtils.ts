export const parseAmount = (value: unknown): number => {
  if (value === null || value === undefined || value === '') return 0;

  if (typeof value === 'number') return isNaN(value) ? 0 : value;

  if (typeof value === 'string') {
    // Replace commas with dots just in case locale issues are present
    const normalized = value.replace(/,/g, '.');
    const parsed = parseFloat(normalized);
    return isNaN(parsed) ? 0 : parsed;
  }

  return 0;
};
