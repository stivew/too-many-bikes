export default function formatForDisplay(key) {
  if (typeof key != 'string') {
    return key.toString();
  }

  let words;
  const camelCaseRegex = /^[a-z]+([A-Z][a-z]+)+/;
  const hyphenatedRegex = /\b\w+(-\w+)+\b/;

  if (camelCaseRegex.test(key)) {
    words = key.split(/(?=[A-Z])/);
  } else if (hyphenatedRegex.test(key)) {
    words = key.split('-');
  }

  if (words) {
    return words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return key.charAt(0).toUpperCase() + key.slice(1);
}
