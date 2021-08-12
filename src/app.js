// TODO: Build an awesome garage!

// Consts
const garage689 = 'fastfurious'

// Imports
import { submitNewCar, carForm } from './form'
import { fetchAllCars, buildCarHTML } from './cars'

// Listeners
carForm.addEventListener('submit', submitNewCar(garage689))

// Function
fetchAllCars(garage689);
