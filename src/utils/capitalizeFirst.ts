export default function capitalizeFirst(text: string, capitalizeAll = false) {

    if (capitalizeAll) {
        let words = text.split(/ +/g);
        for (const word of words) {
            const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
            words[words.indexOf(word)] = capitalizedWord;
        }
        return words.join(' ');
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
}