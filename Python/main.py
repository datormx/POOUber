from car import Car #importando clase del archivo
from account import Account
from UberX import UberX
from Driver import Driver


if __name__ == "__main__":
    print("Hola todos")
    car = Car("AMS234", Account("Andres Herrera", "AND1234")) #Creando instancia de la clase
    """ car.license = "AMS234"
    car.driver = "Andres Herrera" """
    car.passengers = 4
    # print(vars(car))
    # print(vars(car.driver))
    car.printDataCar()

    """ car2 = Car("QWE564", Account("Andrea Herrera", "ANDA876"))
    car2.license = "QWE564"
    car2.driver = "Andrea Herrera"
    car2.passengers = 3
    print(vars(car2))
    print(vars(car2.driver)) """

    uberX1 = UberX("UBN342", Account("Miguel Khan", "MKN321"), "Chevrolet", "Spark")
    uberX1.printDataCar()

    conductor = Driver("Juan Salgado", "JUAN841")
    conductor.printUserData()