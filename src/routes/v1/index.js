const express = require('express')
const CityController = require('../../controllers/city-controller')
const router = express.Router();
const FlightController = require('../../controllers/flight-controller');



router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id',CityController.update);


router.post('/flights',FlightController.create);
router.get('/flights', FlightController.getAll);
module.exports = router;
