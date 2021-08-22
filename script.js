let container = document.querySelector(".container");
function api(type)
{
    fetch("https://api.currentsapi.services/v1/latest-news?%20language=us&apiKey=cS2DksdPXlPI2whg9ahfx4J74aIoAS-lrtcjsHJU81LLxKx-")
    .then(data=>data.json())
    .then(news=> createnews(news,type));
    container.innerHTML="";
    
}
api("all");

function createnews(x,type)
{
    //for all news
    if(type == "all")
    {
        x.news.forEach(news=>{
            createcard(news);
        })
    }
    //for filtering news types
    else
    {
       let region = x.news.filter(x=>x.category.includes(type));
       if(region.length !=0)
       {
        region.forEach(news=>createcard(news));
       }
       else{
        container.innerHTML="<h1>No Results</h1>";
       }
    }
   
}

//for creating news cards
function createcard(news)
{
    let date = new Date(`${news.published}`);
    
    let card = document.createElement("div");
    card.innerHTML=`
    <h1>${news.title}</h1>
    <p class="date">${date.getDate()}-${date.getMonth()}-${date.getFullYear()}</p>
    <div><img src="${news.image}" alt="news image"></div>
    <p class="desc">${news.description}</p>
    `;
    container.append(card);
    card.className="card";
}

//for menu animations
function burgertoggle()
{
   document.querySelector(".burger").classList.toggle("change");
   document.querySelector(".buttons").classList.toggle("change");
   document.querySelector("button").classList.toggle("change");
}