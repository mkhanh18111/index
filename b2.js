var a;

a = prompt("Nhập vào số a", "0");
 

a = parseInt(a);
 

if (a % 2 == 0){
    document.write("a là số chẵn");
}
else{
    document.write("a là số lẻ");
}