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
        document.getElementById("gamedivdiv").innerHTML += "<div class='gamediv' width = '375px'> <h3 class='name'>" + this.name + "</h3> <p class='rating'>Rating: " + this.rating + "/10 </p> <p class='release'>Release date: " + this.releaseday + "/" + this.releasemonth + " " + this.releaseyear + "</p> <p>Price (€): " + this.price + " euro</p> <img src=" + this.img + " alt=" + this.name + " coverart' class='game' height='400px'> </div>";
    }
}
let bioshock2 = new Game("Bioshock 2", 7, 9, 2, 2010, 20,  "bioshock2temp.jpg")
let subnautica = new Game("Subnautica", 9, 1, 23, 2018, 30, "subnauticaboxart.jpg")
let nierAutomata = new Game("Nier: Automata", 10, 3, 17, 2017, 40, "nierAutomataboxart.jpg")
let cryoffear = new Game("Cry of fear", 8, 4, 25, 2013, 0, "cryoffearboxart.jpg")
let re7 = new Game("Resident evil 7", 9, 1, 23, 2017, 30, "re7boxart.jpg")
reviews.push(bioshock2);
reviews.push(subnautica);
reviews.push(nierAutomata);
reviews.push(cryoffear);
reviews.push(re7);
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

function SortGamesByRating(a, b)
{
    if (a.rating > b.rating)
    {
        return -1;
    }
    else if (a.rating < b.rating)
    {
        return 1;
    }
    return 0;
}
function SortGamesByName(a, b)
{
    let aname = a.name.toLowerCase();
    let bname = b.name.toLowerCase();
    if (aname > bname)
    {
        return 1;
    }
    else if (aname < bname)
    {
        return -1;
    }
    return 0;
}
function SortGamesByRelease(a, b)
{
    console.log("Release");
    if (a.releaseyear == b.releaseyear && a.releasemonth == b.releasemonth)
    {
        console.log("day sort");
    if (a.releaseday > b.releaseday)
    {
        return -1;
    }
    else if (a.releaseday < b.releaseday)
    {
        return 1;
    }
    return 0;
    }
    else if (a.releaseyear == b.releaseyear)
    {
        console.log("month sort");
        if (a.releasemonth > b.releasemonth)
    {
        return -1;
    }
    else if (a.releasemonth < b.releasemonth)
    {
        return 1;
    }
    return 0;
    }
    else
    {
        if (a.releaseyear > b.releaseyear)
    {
        return 1;
    }
    else if (a.releaseyear < b.releaseyear)
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
        reviews = reviews.sort(SortGamesByRating);
    }
    else if (input === "name")
    {
        reviews = reviews.sort(SortGamesByName);
}
    else if (input === "release")
    {
        reviews = reviews.sort(SortGamesByRelease);
        Displayreviews();       
}
    else if (input === "price")
    {
        reviews = reviews.list(SortGamesByPrice);
        /*{
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
    reviews = reviews.sort(SortGamesByRating);
    Displayreviews();
}
function ValueName()
{
    input = "name"
    //ResortHTML(input);
    /*var i;
    for (i = 0; i < reviews.length; i++)
    {
        reviews.sort(SortGamesByName);
    }*/
    reviews = reviews.sort(SortGamesByName);
    Displayreviews();
}
function ValueRelease()
{
    input = "release"
    reviews = reviews.sort(SortGamesByRelease);
    Displayreviews();
}
function ValuePrice()
{
    reviews = reviews.sort((a, b)=>{return b.price - a.price});
    Displayreviews();
}
function Displayreviews()
{
    console.table(reviews);
    document.getElementById("gamedivdiv").innerHTML = "";
for (let i = 0; i < reviews.length; i++)
{
    reviews[i].CreateHTML();
}
console.log("Sorted!");
}
//reviews.sort(SortGamesByRating)
//reviews.sort(function(a, b){return a.price - b.price});
