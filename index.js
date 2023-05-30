class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^a-zA-Z0-9-' ]/g, "")
  }
  static titleize(str){
    const lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    return str.toLowerCase().split(' ').map((word, index) => {
      if(index !== 0 && lowerCaseWords.includes(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
}