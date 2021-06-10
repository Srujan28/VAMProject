function customer(cusId,cusName,cusAcno)
{
    this.custId=cusId;
    this.cusName=cusName;
    this.cusAcno=cusAcno;
}

var hdfc=new customer(1,'Sunny',98574363);
var icici=new customer(2,'Srujan',5869455);

console.log(hdfc.custId,hdfc.cusName,hdfc.cusAcno);
console.log(icici.custId,icici.cusName,icici.cusAcno);
