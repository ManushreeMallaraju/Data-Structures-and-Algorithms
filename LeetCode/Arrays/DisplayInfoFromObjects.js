function displayInformation() {
    // var library is defined, use it to print the information
   library.map(book => {
       book.readingStatus ? console.log(`Already read '${book.title.replace(/["']/g, "")}' by ${book.author}.`) : console.log(`You still need to read '${book.title.replace(/["']/g, "")}' by ${book.author}.`); 
   })
} 

// tail starts here
var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       readingStatus: false
   }
];

displayInformation();