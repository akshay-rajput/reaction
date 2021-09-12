// truncate text to character limit
const truncateText = (text, numberOfCharacters) =>{
    if(text.length >= numberOfCharacters){
        return text.substring(0,numberOfCharacters)+'...';
    }
    return text;
}

export default truncateText;