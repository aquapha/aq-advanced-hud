export function ValidateStatusInput(value?: string | null) {
  if (
    value === undefined
      || value === null
      || Number.isNaN(value)
  ) return 'Ne skaicius';

  const useableValue = parseInt(value, 10);

  if (useableValue > 100 || useableValue < 0) return 'Daugiau negu 100 arba maziau negu 0';
}
