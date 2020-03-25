document.addEventListener('DOMContentLoaded', getUserLocation);

function renderToDom() {
 const getYear = currentYear();
 const element = document.querySelector('.date');
 element.textContent = getYear;
}

function currentYear() {
 const date = new Date();
 return date.getFullYear();
};

function getUserLocation() {
 fetch('http://ip-api.com/json')
  .then(function (response) {
   return response.json();
  })
  .then(function (data) {
   const country = document.getElementById('country');
   const region = document.getElementById('region');

   country.textContent = data.country + ',';
   region.textContent = data.regionName;

  })
  .catch(function (err) {
   console.log(err)
  })
}

renderToDom();