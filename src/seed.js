const mongoose = require('mongoose') //Database mongodb connection
const config = require('./config/database')


//database connect
mongoose.connect(config.database)
var db = mongoose.connection
var url = config.url

const User = require('./models/user')
// db.once('open', function(){
// 	db.collection('users').find().remove()
// })
const Bmw = require('./models/bmwdata')
const Car = require('./models/car')
const Notification = require('./models/notification')
//Seed users ------------------------------------
exports.seedUsers = function(){
	const users = [
	{id:'1',name: 'Manuel Wiesche', position: "HR Specialist",image:'https://s3.eu-central-1.amazonaws.com/fleetme/ManuelPhoto.jpeg'},
	{id:'2',name: 'Maximilian Schreieck', position: "Software Engineer",image:'https://s3.eu-central-1.amazonaws.com/fleetme/max_photo.jpeg'},
	{id:'3',name: 'Christoph Pflügler', position: "Customer Solutions Manager",image:'https://s3.eu-central-1.amazonaws.com/fleetme/ChristophPhoto.jpeg'},
     {id:'4',name: 'Baris Yazici', position: "Backend Developer",image:'https://s3.eu-central-1.amazonaws.com/fleetme/Barisphtoo.png'},
     {id:'5',name: 'Lukas Kick', position: "Business Developer",image:'https://s3.eu-central-1.amazonaws.com/fleetme/lukasphoto.png'},
     {id:'6',name: 'Diego Gaboardi', position: "Frontend Developer",image:'https://s3.eu-central-1.amazonaws.com/fleetme/diegophoto.png'},
     {id:'7',name: 'Asad Khaliq', position: "Business Analyst",image:'https://s3.eu-central-1.amazonaws.com/fleetme/asadphoto.png'}
	]
	for(user of users){
		var newUser = new User(user)
		newUser.save()
	}
}
// Seed Cars -------------------------------------
exports.seedCars = function(){
     const cars = [
          {vin:'WBA1J71080V593471',model: 'M235i', image: 'https://s3.eu-central-1.amazonaws.com/fleetme/cars/bmw-m235i.jpg'},
          {vin:'WBA1S51010V834224',model: '120', image: 'https://s3.eu-central-1.amazonaws.com/fleetme/cars/120.jpg'},
          {vin:'WBY1Z21000V308999',model: 'i3', image: 'https://s3.eu-central-1.amazonaws.com/fleetme/cars/i3.png'},
          {vin:'WBA1S510805J88762',model: '320i', image: 'https://s3.eu-central-1.amazonaws.com/fleetme/cars/320i.jpeg'},
          {vin:'WBAUD91090P381103',model: '120d', image: 'https://s3.eu-central-1.amazonaws.com/fleetme/cars/120.jpg'}
     ]
     for(car of cars){
          var newCar= new Car(car)
          newCar.save()
     }
}
// Seed Notifications -------------------------------------
exports.seedNotifications = function(){
     const notifications = [
     {id:'1',date: '2017-12-25',hour: '08:30', name: '120d', problem:'Low Utilization', value:'5%', type:'Vehicle', photo:'http://oumma-city.com/wp-content/uploads/2017/07/2012-bmw-1-series-coupe-11-bmw-1-series-e82-2010-2013.jpg', triporvehicleNumber:'5a40c7444216fa001599ccda', employeeNum:'' },
     {id:'2',date: '2018-01-05',hour: '16:30', name: 'M235i', problem:'Low Utilization', value:'6%', type:'Vehicle', photo:'https://gts-models.com/1027-thickbox_default/bmw-m235i.jpg', triporvehicleNumber:'5a40c7444216fa001599ccd6', employeeNum:'' },
     {id:'3',date: '2018-01-12',hour: '01:30', name: 'i3', problem:'Low Charging State', value:'3%', type:'Vehicle', photo:'https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2013/11/bmw_i3_top_post.png?itok=bnK2Upuo', triporvehicleNumber:'5a40c7444216fa001599ccd8', employeeNum:'' },
     {id:'4',date: '2018-01-13',hour: '10:30', name: '320i', problem:'Inspection of Braking System', value:'Warning', type:'Vehicle', photo:'https://car-pictures.cars.com/images/?IMG=USC60BMC201A021001_2.jpg&HEIGHT=600', triporvehicleNumber:'5a40c7444216fa001599ccd9', employeeNum:'' },
     {id:'5',date: '2017-12-21',hour: '18:30', name: '120d', problem:'Low Fuel State', value:'7l', type:'Vehicle', photo:'http://oumma-city.com/wp-content/uploads/2017/07/2012-bmw-1-series-coupe-11-bmw-1-series-e82-2010-2013.jpg', triporvehicleNumber:'5a40c7444216fa001599ccda', employeeNum:'' },
     {id:'6',date: '2018-01-12',hour: '09:30', name: 'Christoph Pflügler', problem:'Bad Driving Behaviour', value:'0', type:'Employee', photo:'https://s3.eu-central-1.amazonaws.com/fleetme/ChristophPhoto.jpeg',triporvehicleNumber:'5a53bf247601940015bdd4e2', employeeNum:'2' },
     {id:'7',date: '2017-12-20',hour: '13:30', name: 'Asad Khaliq', problem:'High Fuel Consumption', value:'20l/100km', type:'Employee', photo:'https://s3.eu-central-1.amazonaws.com/fleetme/asadphoto.png',triporvehicleNumber:'5a61e485e4092503d89b05e7', employeeNum:'7' },
     //{id:'8',date: '2018-01-19T',hour: '12:28:53.549Z', name: 'Asad Khaliq', problem:'High Fuel Consumption', value:'20l/100km', type:'Employee', photo:'https://s3.eu-central-1.amazonaws.com/fleetme/asadphoto.png',triporvehicleNumber:'5a61e485e4092503d89b05e7', employeeNum:'7' },
     ]
     for(notification of notifications){
          var newNotification= new Notification(notification)
          newNotification.save()
     }
}



//Seed BMW _----------------------
const request = require("request")

var postConfig = {}
var postSuccessHandler = function(err, httpResponse, body){
	// console.log(err)
	console.log('JSON response from the server: ' + body)
}


exports.seedBmw = function(){
	const bmwdatas = [
	{vinBmw: 'WBAUD91090P381103',
     gpsLat: '41.193607',
     gpsLng: '10.568653',
     remainingFuel: '7l',
     airTemperature: '7.5',
     remainingRange: '20',
     mileage: '35002',
     segmentLastTripAccelerationStars: '2',
     lastTripBrakingStars: '3',
     lastTripElectricEnergyConsumptionOverall: '4',
     lastTripRecuperationOverall: '4',
     fuelConsumption: '7l'
     },
    {vinBmw: 'WBA1S51010V834224',
     gpsLat: '50.193607',
     gpsLng: '20.568653',
     remainingFuel: '80',
     airTemperature: '2.5',
     remainingRange: '40',
     mileage: '35003',
     segmentLastTripAccelerationStars: '4',
     lastTripBrakingStars: '3',
     lastTripElectricEnergyConsumptionOverall: '5',
     lastTripRecuperationOverall: '1',
     fuelConsumption: '20l'
     },
    {vinBmw: 'WBA1S510805J88762',
     gpsLat: '55.193607',
     gpsLng: '13.568653',
     remainingFuel: '50',
     airTemperature: '1',
     remainingRange: '100',
     mileage: '150004',
     segmentLastTripAccelerationStars: '2',
     lastTripBrakingStars: '4',
     lastTripElectricEnergyConsumptionOverall: '1',
     lastTripRecuperationOverall: '1',
     fuelConsumption: '10l'
      },
     {vinBmw: 'WBA1S51010V834224',
     gpsLat: '37.193607',
     gpsLng: '18.568653',
     remainingFuel: '28',
     airTemperature: '18',
     remainingRange: '70',
     mileage: '14000',
     segmentLastTripAccelerationStars: '4',
     lastTripBrakingStars: '1',
     lastTripElectricEnergyConsumptionOverall: '5',
     lastTripRecuperationOverall: '5',
     fuelConsumption: '10l'
     },
     {vinBmw: 'WBY1Z21000V308999',
     gpsLat: '25.193607',
     gpsLng: '19.568653',
     remainingFuel: '40',
     airTemperature: '20',
     remainingRange: '40',
     mileage: '70007',
     segmentLastTripAccelerationStars: '3',
     lastTripBrakingStars: '5',
     lastTripElectricEnergyConsumptionOverall: '3',
     lastTripRecuperationOverall: '4',
     fuelConsumption: '10l'
     }
	]
	for(bmwdata of bmwdatas){
          // another approach, in this approach user is not updated. Should do user match to trip in model of bmwdata.
		// var newBmwdata = new Bmw(bmwdata)
		// newBmwdata.save()
		postConfig = {
			url: url + 'api/bmwdata',
			form: bmwdata 
		}
		//console.log("PostConfig",postConfig)
		request.post(postConfig, postSuccessHandler);
	}
}

