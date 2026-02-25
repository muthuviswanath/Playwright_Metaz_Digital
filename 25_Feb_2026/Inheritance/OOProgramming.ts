/*
Identify the objects that are present in the scenarios:

1. An ATM Machine dispense cash when a person gives card, pin and amount
he needed as input
ATM, Person, Card, Cash

*/

class ATM{

    dispense(card:Card, pin:number, amount:number):Cash{
        let money = new Cash()
        return money
    }
}
class Person{
    withdraw():Cash{
       let atm = new ATM()
       let c = new Card()
       let amt = atm.dispense(c,1234,30000)
       return amt
    }
}
class Card{}
class Cash{}

/*
1. Rohan reads Novel
2. MysoreManu sells Vegetables
3. Cow gives Milk
4. Conductor issues ticket by taking money and destination from the passenger

1. Identify the Objects
2. Use the appropriate methods inside the respective classes

*/