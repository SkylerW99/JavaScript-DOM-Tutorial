
/*
//this is how to grab html element by id
var banner = document.getElementById('page-banner');
var bookList = document.getElementById('book-list');

//grab element by class
var titles = document.getElementsByClassName('title');
titles[0];  //h1

//checek if titles is an array
console.log(Array.isArray(titles)); //it says false bc "titles" is not an array
console.log(Array.isArray(Array.from(titles))); //this converts "titles" to an array

//get each elelement in this array
Array.from(titles).forEach ((item) =>{
    console.log(item);
})


//by tagname
var li = document.getElementsByTagName('li')



//it does the same thing as getElementById
//get wise man's fear
var wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);



//return all elements in the collection
var books = document.querySelectorAll('#book-list li .name');
//console.log(books);

books.forEach(function(book){
    //modify the text content in the book list
    book.textContent += '(book title)';
});

//modify the content inside book list
var bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2> Books and more books... </h2>';
bookList.innerHTML += '<p>this is how you add HTML</p>'

*/

var banner = document.querySelector('#page-banner');
console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:',banner.nodeName);
console.log('#page-banner has child nodes:',banner.hasChildNodes());

//clone node
var clonedBanner = banner 