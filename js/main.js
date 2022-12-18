let num=parseInt(prompt("enter the number"))
let length=parseInt(prompt("length of table"));
let a=1;
for(i=1;i<=length;i++){
    a=num*i;
    document.write(a+"<br>")
}
