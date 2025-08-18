let para = document.getElementById('para');
let write = document.getElementById('writer');
let quoteData = document.getElementById('quotes')
let jokes = document.getElementById('joke');
let New = document.getElementById('new');
let GK = document.getElementById('gk');


async function getsans(url,type) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);

    switch (type) {
        case 'quote':
            para.innerText = `"${data.quote}"`;
            write.innerText = "- " + data.author;
            break;

        case 'joke':
            para.innerText = data.setup;
            write.innerText = data.punchline;
            break;

        case 'activity':
            para.innerText = data.text;
            write.innerText = "";
            break;

        case 'country':

            let num = Math.floor(Math.random() *  data.results.length)
            
            para.innerText = data.results[num].title;
            write.innerText = data.results[num].source_url;
            break;

        default:
            para.innerText = "Something went wrong!";
            write.innerText = "";
    }
}

quoteData.addEventListener('click', () => {
    getsans("https://dummyjson.com/quotes/random",'quote')
}) 

jokes.addEventListener('click', () => {
    getsans("https://official-joke-api.appspot.com/random_joke",'joke')    
}) 

New.addEventListener('click', () => {
    getsans("https://uselessfacts.jsph.pl/random.json?language=en",'activity')
})
    

GK.addEventListener('click', () => {
    getsans("https://newsdata.io/api/1/news?apikey=pub_9f15fa3d3dca4746a7a99fc729882fb2&q=pegasus",'country')
})


function tweet() {
 window.open("https://twitter.com/intent/tweet?text=" + para.innerText + write.innerText,"tweet Window","width=600,height=300px")
    
}

