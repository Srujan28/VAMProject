var bankDetails = {
    customerName:'Srujan',
    age:35,
    isMarried:false,
    getBankdetailsInfo:function(){
        console.log('Mr '+this.Customername+'Your Age is--->'+this.age+'Are you married---->'+this.isMarried)
    },
    address:{
        street:'Shubash nagar',
        city:'Nizamabad',
        postalcode:503245,
    },
    mobiles:[1234567890,08765431678]
}
console.log(bankDetails)
console.log(bankDetails.customerName)
console.log(bankDetails.address['street'])
console.log(bankDetails.address['city'])
console.log(bankDetails.address['postalcode'])