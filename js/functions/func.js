function trasaction(price){
    if (price <= balance ){
            balance -= price;
            console.log("success");  
    }else {
            console.log("insufficient balance");

    }
}

console.log(balance);
trasaction(1890);

console.log(balance);
trasaction(145);

console.log(balance);
trasaction(1890);

console.log(balance);
trasaction(1890);

