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
function AddGameData()
{
    let NewGame = { //test
        rating,
        name,
        release,
        price
    };
    reviews.push(NewGame);
}
reviews.sort(SortGamesByRating)
reviews.sort(SortGamesByName)
reviews.sort(SortGamesByRelease)
reviews.sort(SortGamesByPrice)
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