class Car{ //Definición de clase


    constructor(license, driver) //Método constructor
    { 
        this.id;
        this.license = license;
        this.driver = driver;
        this.passenger;
    }

    printDataCar() //Método de la clase
    { 
        console.log(this.driver)
        console.log("Name Driver: " + this.driver.name)
        console.log("Car License: " + this.license)
    }

}