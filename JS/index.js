var car = new Car("AW456",  new Account("Andres Herrera", "AND1234")); //Creando instancia de la clase
car.passenger = 4;
var car2 = new Car("QW586",  new Account("Andrea Herrera", "ANDA5678")); //Creando instancia de la clase
car2.passenger = 3;

car.printDataCar(); //Llamando método de la clase Car
car2.printDataCar();

uberX = new UberX("AWE951", new Account("Jaime German", "JAG763"), "Chevrolet", "Spark");
uberX.passenger = 4;
uberX.printDataCar();

conductor = new Driver("Juan Salgado", "JUAN897");
conductor.printUserData();