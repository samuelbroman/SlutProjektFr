const RatingButton = document.querySelector('#ratingbutton')
const NameButton = document.querySelector('#namebutton')
const ReleaseButton = document.querySelector('#releasebutton')
const PriceButton = document.querySelector('#pricebutton')
const Titles = document.querySelector('titlebutton')
/*const rating = document.querySelector('#rating')
const name = document.querySelector('#name')
const release = document.querySelector('#release')
const price = document.querySelector('#price')
console.log(rating)
console.log(name)
console.log(release)
console.log(price)*/

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
    CreateHTML() {
        document.getElementById("gamedivdiv").innerHTML += "<div class='gamediv' width = '375px'> <h3 class='name'>" + this.name + "</h3> <p class='rating'>" + this.rating + "/10 </p> <p class='release'>" + this.releaseday + "/" + this.releasemonth + " " + this.releaseyear + "</p> <img src=" + this.img + " alt=" + this.name + " coverart' class='game' height='400px'> </div>";
    }
}
let bioshock2 = new Game("Bioshock 2", 7, 2, 9, 2010, 20,  "bioshock2temp.jpg")
let subnautica = new Game("Subnautica", 9, 23, 1, 2018, 30, "bioshock2temp.jpg")
reviews.push(bioshock2);
reviews.push(subnautica);
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
var input;
RatingButton.addEventListener('click', ValueRating())//, ResortHTML(input))
NameButton.addEventListener('click', ValueName())//, ResortHTML(input))
ReleaseButton.addEventListener('click', ValueRelease())//, ResortHTML(input))
PriceButton.addEventListener('click', ValuePrice())//, ResortHTML(input))

/*RatingButton.addEventListener('click', input="rating", reviews.sort(SortGamesByRating), Displayreviews)
NameButton.addEventListener('click', input="name", reviews.sort(SortGamesByName), Displayreviews)
ReleaseButton.addEventListener('click', input="release", reviews.sort(SortGamesByRelease), Displayreviews)
PriceButton.addEventListener('click', input="price", reviews.sort(SortGamesByPrice), Displayreviews)*/
function SortGamesByRating(a, b)
{
    console.log("test")
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
    if (a.releaseyear === b.releaseyear && a.releasemonth === b.releasemonth)
    {
    if (a.releaseday > b.releaseday)
    {
        return 1;
    }
    else if (a.releaseday < b.releaseday)
    {
        return -1;
    }
    return 0;
    }
    else if (a.releaseyear === b.releaseyear)
    {
        if (a.releasemonth > b.releasemonth)
    {
        return 1;
    }
    else if (a.releasemonth < b.releasemonth)
    {
        return -1;
    }
    return 0;
    }
    else
    {
        if (a.releaseeyar > b.releaseeyar)
    {
        return 1;
    }
    else if (a.releaseeyar < b.releaseeyar)
    {
        return -1;
    }
    return 0;
    }
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
function ResortHTML(input)
{
    if (input === "rating")
    {
        /*reviews.sort(SortGamesByRating) 
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
        }*/
    }
    else if (input === "name")
    {
    reviews.sort(SortGamesByName)
    /*{
        if (a.name > b.name)
    {
        return 1;
    }
    else if (a.name < b.name)
    {
        return -1;
    }
    return 0;
    }*/
}
    else if (input === "release")
    {
        /*reviews.sort(SortGamesByRelease)
        {
        if (a.releaseyear === b.releaseyear && a.releasemonth === b.releasemonth)
    {
    if (a.releaseday > b.releaseday)
    {
        return 1;
    }
    else if (a.releaseday < b.releaseday)
    {
        return -1;
    }
    return 0;
    }
    else if (a.releaseyear === b.releaseyear)
    {
        if (a.releasemonth > b.releasemonth)
    {
        return 1;
    }
    else if (a.releasemonth < b.releasemonth)
    {
        return -1;
    }
    return 0;
    }
    else
    {
        if (a.releaseeyar > b.releaseeyar)
    {
        return 1;
    }
    else if (a.releaseeyar < b.releaseeyar)
    {
        return -1;
    }
    return 0;
    }
}*/
}
    else if (input === "price")
    {
        /*reviews.list(SortGamesByPrice)
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
    }*/
    }
    Displayreviews();
}
function ValueRating()
{
    input = "rating";
    ResortHTML(input);
}
function ValueName()
{
    input = "name"
    ResortHTML(input);
}
function ValueRelease()
{
    input = "release"
    ResortHTML(input);
}
function ValuePrice()
{
    input = "price"
    ResortHTML(input);
}
function Displayreviews()
{
    document.getElementById("gamedivdiv").innerHTML = "";
var i;
for (i = 0; i < reviews.length; i++)
{
    reviews[i].CreateHTML();
}
}
reviews.sort(SortGamesByRating) 
var i;
for (i = 0; i < reviews.length; i++)
{
    reviews[i].CreateHTML();
}