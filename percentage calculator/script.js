var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById("resultField");
var form = document.getElementById('whatpercentage')

form.addEventListener('submit', function () {


    if (!numField.value || !numField2.value) {
        alert("please enter value in the fields");
    } else {
        var x = numField1.value;
        var y = numField2.value;

       alert(x+y);
    }
}
);

