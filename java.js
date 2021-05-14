const RatingButton = document.querySelector('#ratingbutton')
const NameButton = document.querySelector('#namebutton')
const ReleaseButton = document.querySelector('#releasebutton')
const PriceButton = document.querySelector('#pricebutton')
const Titles = document.querySelector('titlebutton')
const rating = document.querySelector('#rating')
const name = document.querySelector('#name')
const release = document.querySelector('#release')
const price = document.querySelector('#price')
console.log(rating)
console.log(name)
console.log(release)
console.log(price)

let reviews = [];
class Game
{
    constructor(name, rating, releaseday, releasemonth, releaseyear, price, img)
    {
        this.name = name;
        this.rating = rating;
        this.releaseday = releaseday;
        this.releasemonth = releasemonth;
        this.releaseyear = releaseyear;
        this.price = price;
        this.img = img;
        this.imgdesc = name + " coverart";
    }
}
let bioshock2 = new Game("Bioshock 2", 7, 2, 9, 2010, 20,  "bioshock2temp.jpg")
reviews.push(bioshock2);
console.log(reviews[0])
/*function AddGameData()
{
    let NewGame = {
        rating,
        name,
        release,
        price
    };
    reviews.push(NewGame);
}*/
rating.addEventListener('click', reviews.sort(SortGamesByRating))
name.addEventListener('click', reviews.sort(SortGamesByName))
release.addEventListener('click', reviews.sort(SortGamesByRelease))
price.addEventListener('click', reviews.sort(SortGamesByPrice))
function SortGamesByRating(a, b)
{
    if (a.rating > b.rating)
    {
        return 1;
    }
    else if (a.rating < b.rating)
    {
        return -1;
    }
    return 0;
}
function SortGamesByName(a, b)
{
    if (a.name > b.name)
    {
        return 1;
    }
    else if (a.name < b.name)
    {
        return -1;
    }
    return 0;
}
function SortGamesByRelease(a, b)
{
    if (a.release > b.release)
    {
        return 1;
    }
    else if (a.release < b.release)
    {
        return -1;
    }
    return 0;
}
function SortGamesByPrice(a, b)
{
    if (a.price > b.price)
    {
        return 1;
    }
    else if (a.price < b.price)
    {
        return -1;
    }
    return 0;
}

