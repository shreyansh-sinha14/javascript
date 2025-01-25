const name = "SINHA"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Java-script')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,5)
console.log(newString);

const newNewString = gameName.slice(-6,2)
console.log(newNewString);

const spaceString = "   Hello  "
console.log(spaceString);
console.log(spaceString.trim());

const url = "https://hello.com/goodbye%20welcome"
console.log(url.replace('%20','-'));

console.log(url.includes('hello'));

console.log(gameName.split('-'));

// /workspaces/javascript/.devcontainer/01_basics/05_strings.js











