const quotes = [
    {
        quote: "Don’t beat yourself up.",
    },
    {
        quote: "Don’t dream, Be it.",
    },
    {
        quote: "No pain, No gain.",
    },
    {
        quote: "I was never less alone than when by myself.",
    },
    {
        quote: "If not now, then when?",
    },
    {
        quote: "You deserve to be loved.",
    },
    {
        quote: "Love what you do.",
    },
    {
        quote: "Life is unfair, get used to it.",
    },
    {
        quote: "I find the harder I work, the more luck I have.",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
    }

];

const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;