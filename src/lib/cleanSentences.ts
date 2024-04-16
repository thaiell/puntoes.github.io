export const removeExtraSpaces = ( word: string | undefined ) => {
    if(!word){
        return "";
    }
    return word.trim().replace(/\s+/g, ' ');
}