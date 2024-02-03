//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, doors) {
        super(make, model, year, color, mileage);
        this.doors = doors;
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduledMaintenance = false;
    }

    loadPassenger() {
        if (this.passenger < this.maxPassengers) {
            this.passenger++;
            console.log("Passenger loaded");
        } else {
            console.log("Car is full");
        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }

    scheduledMaintenance(mileage) {
        if (mileage > 30000) {
            this.scheduledMaintenance = true;
            console.log("Car needs maintenance");
        } else {
            this.scheduledMaintenance = false;
            console.log("Car is in good condition");
        }
    }
}










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
