const quotes = [
    {
        quote:"To have doubted one's own first principles is the mark of a civilized man.",
        author:"Oliver Wendell Holmes Jr",
    },
    {
        quote:"Men govern nothing with more difficulty than their tongues, and can moderate their desires more than their words.",
        author:"Baruch Spinoza",
    },
    {
        quote:"Whatever you are by nature, keep to it; never desert your line of talent. Be what nature intended you for and you will succeed.",
        author:"Sydney Smith",
    },
    {
        quote:"Fashion is architecture: it is a matter of proportions.",
        author:"Gabriel Coco Chanel",
    },
    {
        quote:"Fathers send their sons to college either because they went to college or because they didn't.",
        author:"L. L. Henderson",
    },
    {
        quote:"He not busy being born is busy dying.",
        author:"Bob Dylan",
    },
    {
        quote:"What is a friend? A single soul dwelling in two bodies.",
        author:"Aristotle",
    },
    {
        quote:"Youth is easily deceived because it is quick to hope.",
        author:"Aristotle",
    },
    {
        quote:"Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.",
        author:"Martin Luther King Jr.",
    },
    {
        quote:"Dream as if you'll live forever. Live as if you'll die today.",
        author:"James Dean",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;