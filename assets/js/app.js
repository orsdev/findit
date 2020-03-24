async function makeHttpRequest(query) {
 const key = "AIzaSyCwmcFdumiaV93CEzz5tCyaexgoM5lV7Jk";
 let url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=010994708637721124207:qesamehgdnf&q=${query}`;

 const request = await fetch(url);

 return request.json();
}

const getInputValue = () => {
 const input = document.querySelector('.search');
 if (input.value) {
  return input.value;
 }
}
