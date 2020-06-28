export default (str) => {
  if (typeof str !== 'string') return '';
  str = str.toLowerCase();
  let kebabString = '';
  for (const ch of str) {
    if (ch === ' ') {
      kebabString += '-';
    } else kebabString += ch;
  }
  return kebabString;
};
export const firstCapital = (str) =>
  str && typeof str === 'string'
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : '';

export const simpleHeading = (kebab) => {
  if (typeof kebab !== 'string') return '';
  kebab = kebab.toLowerCase();
  let heading = '';
  for (const ch of kebab) {
    if (ch === '-') {
      heading += ' ';
    } else heading += ch;
  }
  return firstCapital(heading);
};
