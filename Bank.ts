class Bank
{
    cName:String;
    cId:Number;
    cAmount:Number;
    constructor(name:String,id:Number,amount:number)
    {
        this.cName=name;
        this.cId=id;
        this.cAmount=amount;
    }
    getFixedDeposit(){
        return `CustomerName:${this.cName} with Id:${this.cId} has Amount:${this.cAmount}`
    }
    getSavingsDeposit(){
        return `CustomerName:${this.cName} with Id:${this.cId} has Amount:${this.cAmount}`
    }
}
let hdfc=new Bank('Srujan',1,50000);
let icici=new Bank('Sunny',2,60000);
let boi=new Bank('pooja',3,80000);
let baroda=new Bank('raj',4,52000);
console.log(hdfc.getFixedDeposit())
console.log(icici.getFixedDeposit())
console.log(boi.getSavingsDeposit())
console.log(baroda.getSavingsDeposit())