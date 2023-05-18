let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Only I Can Save Myself"', 
    '"Smile In The Face Of Adversity"',
    '"It\'s Possible!"',
    '"Time Is The Ultimate Equaliser"',
    '"I Have To Be The Best"',
    '"Nobody Cares, Work Harder"',
    '"Your Choices Have Real Consequences"',
    '"You Miss 100% Of The Shots You Don\'t Take"'
];

btn.addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
});