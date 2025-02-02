let quotes=[
    {quote:"Unity and secularism will be the motto of the government. We can't afford divisive polity in India.",
        author:"Manmohan Singh"

    },
    {
        quote:"Man needs his difficulties because they are necessary to enjoy success." ,
       author: "A.P.J. Abdul Kalam"
    },
    {
        quote:"Be so busy improving your self that you have no time to criticize others.",
        author:"Chetan Bhagat"
    },
    {
        quote:"The only people who see the whole picture, are the ones who step out of the frame.”",
        author:"Salman Rushdie"
    },
    {
        quote:"What is now in the past was once in the future.",
        author:"Ramachandra Guha"
    },
    {
        quote:"Remember, no one is stopping you from lighting a lamp in a dark night.",
        author:"Harivansh Rai Bachchan"
    },

]
 let button=document.querySelector("button");    
    let quote=document.querySelector(".quote");
    let authorName=document.querySelector(".authorName");
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        quote.style.display="block";
        authorName.style.display="block";
        button.textContent="Another Quote"
        let randomIndex=Math.floor(Math.random()*quotes.length);
        let randomQuote=quotes[randomIndex];
    
    quote.textContent=`${randomQuote.quote}`;
    authorName.textContent=`~${randomQuote.author}`
        
    })
    
    


    
  
