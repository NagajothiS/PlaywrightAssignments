let sentence = "Playwright is a Playwright automation tool for Playwright testing"
let wordToFind = "Playwright"
let count = 0
let splitsentence = sentence.split(" ")
console.log(splitsentence)
console.log(splitsentence.length)


for (i = 0; i < splitsentence.length; i++) 
{
    if (splitsentence[i] === wordToFind)
    {
        count++
    }
}
console.log("The word " + wordToFind + " occurred " + count  + " times in the sentence.")

