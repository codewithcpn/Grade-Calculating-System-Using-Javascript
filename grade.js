function calculator() {
     var a = parseInt(document.getElementById('bookone').value);
     var b = parseInt(document.getElementById('booktwo').value);
     var c = parseInt(document.getElementById('bookthree').value);
     var d = parseInt(document.getElementById('bookfour').value);
     var e = parseInt(document.getElementById('bookfive').value);
    // if (isNaN(a) || a > 100 || b > 100 || c > 100 || d > 100 || e > 100 || a <0 || b < 0 || c < 0 || d < 0 || e <0) {
    //     alert('Please enter a correct Marks?.');
    // }
    let x1 = document.getElementById("bookone").value;
    // If x is Not a Number or less than one or greater than 100
    let text1;
    if (isNaN(x1) || x1 < 1 || x1 > 100) {
      text1 = "❌";
    } else {
      text1 = "✔";
    }
    document.getElementById("demo1").innerHTML = text1;

    let x2 = document.getElementById("booktwo").value;
    // If x is Not a Number or less than one or greater than 10
    let text2;
    if (isNaN(x2) || x2 < 1 || x2 > 100) {
      text2 = "❌";
    } else {
      text2 = "✔";
    }
    document.getElementById("demo2").innerHTML = text2;

    let x3 = document.getElementById("bookthree").value;
    // If x is Not a Number or less than one or greater than 10
    let text3;
    if (isNaN(x3) || x3 < 1 || x3 > 100) {
      text3 = "❌";
    } else {
      text3 = "✔";
    }
    document.getElementById("demo3").innerHTML = text3;
    let x4 = document.getElementById("bookfour").value;
    // If x is Not a Number or less than one or greater than 10
    let text4;
    if (isNaN(x4) || x4 < 1 || x4 > 100) {
      text4 = "❌";
    } else {
      text4 = "✔";
    }
    document.getElementById("demo4").innerHTML = text4;

    let x5 = document.getElementById("bookfive").value;
    // If x is Not a Number or less than one or greater than 10
    let text5;
    if (isNaN(x5) || x5 < 1 || x5 > 100) {
      text5 = "❌";
    } else {
      text5 = "✔";
    }
    document.getElementById("demo5").innerHTML = text5;
  
  
    
        var obtain = a + b + c + d + e;
        document.getElementById("obtain").innerHTML = obtain;
        var per = obtain / 500 * 100;
        document.getElementById("per").innerHTML = per;
        if (a > 33 && b > 33 && c > 33 && d > 33 && e > 33) {
            document.getElementById("remarks").innerHTML = "<span style='color:#925'>Pass</span>";
        }
        else {
            document.getElementById("remarks").innerHTML = "<span style='color:red'>Fail</span>";
        }
         if (per >= 80) {
            document.getElementById("grade").textContent = "A";
        }
        else if (per >= 70) {
            document.getElementById("grade").textContent = "B";
        }
        else if (per >= 60) {
            document.getElementById("grade").textContent = "C";
        }
       else if (per >= 50) {
            document.getElementById("grade").textContent = "D";
        }
        else if (per >= 33) {
            document.getElementById("grade").textContent = "E";
        }
        else {
            document.getElementById("grade").textContent = "F";
        }
        

    
}