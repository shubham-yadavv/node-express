var acc = 5000;
var nikeshoes = 3000;
var coupon = 400;

// == equal to
// ===
var val1 = 19;
var val2 = "19";

if (val1 === val2) {
    console.log("both are same")
} else {
    console.log("one of them is not equal")
}

if (nikeshoes <= acc) {
    acc -= nikeshoes;
    console.log("bought some dope shoes");
    console.log("acc balance " + acc);
} else if (nikeshoes - coupon <= acc) {
    console.log("we got some dope shoes with a coupon ");

}

else {
    console.log("you too shoes for shoes bruhh");
}

