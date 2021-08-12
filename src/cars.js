const buildCarHTML = (car_info) => {

  const carHTML =
      `<div class="car">
         <div class="car-image">
           <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
         </div>
         <div class="car-info">
           <h4>${car_info.brand} - ${car_info.model}</h4>
           <p><strong>Owner:</strong> ${car_info.owner} </p>
           <p><strong>Plate:</strong> ${car_info.plate}</p>
         </div>
       </div>`

    document.querySelector('.cars-list').insertAdjacentHTML('beforeend', carHTML)
};

const fetchAllCars = (garage) => {

  const garageUrl = `https://wagon-garage-api.herokuapp.com/${garage}/cars`

  fetch(garageUrl)
    .then(response => response.json())
    .then((data) => {
      data.forEach(buildCarHTML);
    });

};

export { fetchAllCars, buildCarHTML };
