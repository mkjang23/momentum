const quoteSet = [
    {
        quote : "Love looks not with the eyes, but with the mind.",
        author : "William Shakespeare",
    },
    {
        quote : "Laughter is the tonic, the relief, the surcease for pain.",
        author : "Charlie Chaplin",
    },
    {
        quote : "You have to expect things of yourself before you do them.",
        author : "Michael Jordan",
    },
    {
        quote : "The gratification comes in the doing, not in the results.",
        author : "James Dean",
    },
    {
        quote : "It's lack of faith that makes people afraid of meeting challenges, and I believe in myself.",
        author : "Muhammad Ali",
    },
    {
        quote : "The journey is the reward.",
        author : "Steve Jobs",
    },
    {
        quote : "A genius is just a talented person who does his homework.",
        author : "Thomas A. Edison",
    },
    {
        quote : "Let every man be respected as an individual and no man idolized.",
        author : "Albert Einstein",
    },
    {
        quote : "No man is good enough to govern another man without that other's consent.",
        author : "Abraham Lincoln",
    },
    {
        quote : "The ornament of a house is the friends who frequent it.",
        author : "Ralph Waldo Emerson",
    },
]

const quoteOne = quoteSet[Math.floor(Math.random()*quoteSet.length)];
// console.log(quoteOne);

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = `"${quoteOne.quote}"`;
author.innerText = `-${quoteOne.author}-`;
