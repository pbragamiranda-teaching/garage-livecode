const carForm = document.getElementById('new-car')

const submitNewCar = (garage) => {

  // event.preventDefault();

  const car =   {
    "brand": document.getElementById('brand').value,
    "model": document.getElementById('model').value,
    "owner": document.getElementById('owner').value,
    "plate": document.getElementById('plate').value
  }


  const garageUrl = `https://wagon-garage-api.herokuapp.com/${garage}/cars`

  fetch(garageUrl, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(car)
  });

};

export { submitNewCar, carForm }

