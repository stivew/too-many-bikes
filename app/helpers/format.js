export default function formatForDisplay(key) {
  if (typeof key != 'string') {
    return key.toString();
  }

  const camelCaseRegex = /^[a-z]+([A-Z][a-z]+)+/;

  if (camelCaseRegex.test(key)) {
    const words = key.split(/(?=[A-Z])/);

    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  } else {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }
}
