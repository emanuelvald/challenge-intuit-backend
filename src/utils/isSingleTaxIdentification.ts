export function isSingleTaxIdentification(identification: string): boolean {
  if (identification.length != 13) return false;

  const cuitNumber = identification.replace('-', '');
  const codes = '6789456789';
  const checker = parseInt(cuitNumber[cuitNumber.length - 1]);

  let x = 0;
  let rv = false;
  let result = 0;

  while (x < 10) {
    let digitValidator = parseInt(codes.substring(x, x + 1));

    if (isNaN(digitValidator)) digitValidator = 0;

    let digit = parseInt(cuitNumber.substring(x, x + 1));

    if (isNaN(digit)) digit = 0;

    const digitValidation = digitValidator * digit;

    result += digitValidation;

    x++;
  }

  result = result % 11;

  rv = result == checker;

  return rv;
}
