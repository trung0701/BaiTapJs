


function tinhTien() {
    var workDay = document.getElementById("workDay").value;
    var toTal = 0;
    toTal = workDay * 100000;
    document.getElementById("tongTienLuong").innerHTML = toTal;
}


document.getElementById("btn").onclick = function (){
    var numberOne = +document.getElementById("numberOne").value;
    var numberTwo = +document.getElementById("numberTwo").value;
    var numberThree = +document.getElementById("numberThree").value;
    var numberFour = +document.getElementById("numberFour").value;
    var numberFive = +document.getElementById("numberFive").value;

    var average = 0;
    average = (numberOne + numberTwo + numberThree + numberFour + numberFive)/5;
    

    document.getElementById("average2").innerHTML = average; 
}

document.getElementById("btn3").onclick = function() {
    var moneyInput = +document.getElementById("moneyInput").value;
    var toTal3 = 0;
    toTal3 = moneyInput * 23500;

     
    document.getElementById("money").innerHTML = toTal3;
    new Intl.NumberFormat('vn-VN').format(toTal3);
}

document.getElementById("btn4").onclick = function () {
    var lengthInput = +document.getElementById("lengthInput").value;
    var widthInput = +document.getElementById("widthInput").value;

    var perimeter = 0;
    perimeter = (lengthInput + widthInput)*2;
    document.getElementById("total4").innerHTML = perimeter;
}

document.getElementById("btn5").onclick = function () {
    var numberInput = +document.getElementById("numberInput").value;

    intDonVi = numberInput % 10;

    
    intHangChuc = Math.floor(numberInput / 10);
    
    var sum = 0;
    sum = intDonVi + intHangChuc;
    document.getElementById("total5").innerHTML = sum;
}