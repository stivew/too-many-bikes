export default function pluralize(string) {
    if (typeof string != 'string') {
        return;
    }

    const lastCharacter = string.slice(-1);

    if (lastCharacter === 's') {
        return string;
    }

    return `${string}s`;
}