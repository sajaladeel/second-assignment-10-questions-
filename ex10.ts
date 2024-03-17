 //calculate bill from units 
 function calculateBill(unitsConsumed :
    number):number{
        let totalBill:number;

        if (unitsConsumed>500){
            totalBill = unitsConsumed +
            (unitsConsumed*0.25);
        }else if (unitsConsumed >200){
            totalBill = unitsConsumed +
            (unitsConsumed*0.15)
        }else if (unitsConsumed>100){
            totalBill =unitsConsumed +
            (unitsConsumed*0.10);
        }else{
            totalBill = unitsConsumed;
        }
        return totalBill;
    }
    const unit1  = 250
    const billAmount =calculateBill(unit1);
    console.log(`the total bill amount is $${billAmount}.`)

    const unit2  = 700
    const billAmount2 =calculateBill(unit2);
    console.log(`the total bill amount is $${billAmount2}.`)

    const unit3  = 1300
    const billAmount3 =calculateBill(unit3);
    console.log(`the total bill amount is $${billAmount3}.`)
    