const api ={
    key: "5e6a8bb80c1a09f12b1e88034b278e09",
    baseurl: "https://api.operweathermap.org/data/2.5"
}
const searchbox =document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt)
{
    if(evt.keycode==13)
  //  getresults(searchbox.value)//
  console.log(seacgbox.value);
}