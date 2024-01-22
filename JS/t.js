function submit(){
  var a =document.getElementById("name");
  var b =document.getElementById("email");
  var c =document.getElementById("password");
  var d =document.getElementById("city");
  if(a.value=="tamil"&&b.value=="kumaran@gmail.com"&&c.value=="admin"&&d.value=="chennai"){
    console.log(a.value)
    console.log(b.value)
    console.log(c.value)
    console.log(d.value)
    alert("yes successfully done")
    a.value=""
    b.value=""
    c.value=""
    d.value=""
  }
  else{
    alert("login failed")
    a.value=""
    b.value=""
    c.value=""
    d.value=""
  }
}
