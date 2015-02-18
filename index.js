"use strict";

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var slogans = [
    "– Come in and find out",
    "– The beautiness company",
    "macht Kinder froh",
    "– Don't Be evil",
    "– wenn's um Geld geht",
    "– Ganz schön unanständig",
    "– seriös anders",
    "– From laboratory to life.",
    "– Nie ohne.",
    "– For generations to come.",
    "– Stets zu Diensten!",
    "– Von Natur aus das Beste.",
    "– Great reputations are built on details.",
    "– The hidden ingredient.",
    "– Das Magazin für werdende Väter.",
    "– Wir wachsen mit Licht.",
    "– Das Ingeneurbüro im Sauerland.",
    "– Shaping the future.",
    "– Turn sweat into energy.",
    "– Macht aus Schweiß Energie.",
    "– There's something in the water.",
    "– With added super heroes.",
    "– Everything you need to look and feel like a star.",
    "– The toughest hoarding panels known to man.",
    "– Denken. Wo andere programmieren.",
    "– Unleash all your horses.",
    "– High-Tech im Rolltreppenbau.",
    "– Il buon caffè italiano.",
    "– Norddeutschlands bester Stau-Service.",
    "– Sleep well. Move better.",
    "– Gönn dir was!",
    "– The 24 carat Scotch.",
    "– Everything should taste like bacon.",
    "– Now we know better!",
    "– Wir verkaufen Lösungen, keine Produkte!",
    "– Der sichere Weg zu Windows 7.",
    "– Glamour! Stars! Hollywood!",
    "– Ist doch ganz einfach.",
    "– Let somebody else do the job for you!",
    "– Schön zu sehen - gut zu gehen.",
    "– Strahlend in Eleganz und Qualität.",
    "– Dröpje voor Dröpje Qualität. ",
    "– Mehr Konzept. Weniger Erfolg.",
    "– More Blubble, less Code",
    "– Tische & Softeis",
    "– all kinds of everything",
    "- Arbeitswut tut selten gut",
    "– Ganz schön und anständig"
    "— Das Auto",
    "— Qualitysoftware since 1784"
];

module.exports = function giveMeSillySlogan(companyName) {
    return companyName + " " + slogans[getRandomInt(0, slogans.length - 1)];
};

