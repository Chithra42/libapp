function check(){
    var email= document.getElementById("email").value
    var error= document.querySelector(".error-text")
    
    if (email!="admin") {
        
        error.style.color=" red"
        error.style.display="block"
        } 
        if(email=="admin") {
        
        error.style.display="none"
        }
    }


function loginpass(){
    var x=document.getElementById("form2Example27").value
    var y=document.getElementById("loginpass")
  
    if (x!=12345) {
       y.style.display="block"
        y.style.color=" red"
        }if(x==12345) {
        
        y.style.display="none"
    }    
}


function login(){
 
  var username= document.getElementById("email").value
  var pass=document.getElementById("form2Example27").value
  var logine=document.getElementById("loginend")
  if (pass!=12345|username!="admin") {
    logine.style.display="block"
    logine.style.color="red"
    return false
    } 
     else{
         return true
    // $(".loginform").load("main.html")
 }

}





function todolist(){
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
                if(this.readyState==4&&this.status==200){
                var response= JSON.parse(this.responseText);
                var output="";
            //     for(var i=0;i<3;i++){
            //          output+= ` <input type="checkbox" checked id="chk">${response[i].title}<br>`;
            //     } 
            //     for(var i=4;i<response.length;i++){
            //         output+= ` <input type="checkbox" id="chkk" onclick="ale()">${response[i].title}<br>`;
            //    }
                
                  for(var i=0;i<response.length;i++){
                    out=response[i].completed
                     if(out===false){
                        output+= `<div class="col-lg-12" class="container-fluid"> <input type="checkbox"  id="chkk" onclick="ale()">${response[i].title} </div> <br>`;
                //         $("input").prop("checked",true)
                     }else{
                        output+= `<div class="col-lg-12" class="container-fluid"> <input type="checkbox" checked id="chk" >${response[i].title}</div><br>`; 
                     }}
                document.getElementById("activities").innerHTML=output;
            }
        }
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
        }


     
            
function ale(){
    var checkboxes=$("#chkk:checked").length
    let p= new Promise(function(resolve,reject){
            if(checkboxes==5)
            resolve(checkboxes)
    })
    p.then(function(c){
        alert("Congrats. "+c+" Tasks have been successfully completed")
    })           
    }


   
function validate(){
    var username=document.getElementById("username")
    var email= document.getElementById("email")
    var confirmpassword=document.getElementById("confirmpassword")
    var phonenumber=document.getElementById("phonenumber")
    var password=document.getElementById("password")
    var empty=document.getElementById("empty")
    var regexp=/^[A-Za-z0-9\.-]+[@][A-Za-z0-9\-]+[\.][a-z]{2,3}(\.[a-z]{2,3})?$/
    var regexpo=/^\d{3}[\.\-\s]?\d{3}[\.\-\s]?\d{4}$/
    var regexpoo=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
   
    // if(username.value==""|email.value==""|confirmpassword.value==""|phonenumber.value==""|password.value==""){
    //     empty.style.display='block'
    //     return false
    // }
    if(email.value.match(regexp)&&username.value!=""&&email.value!=""&&confirmpassword.value!=""&&phonenumber.value!=""&&password.value!=""){
        return true
    }
    
    else{
    
        empty.style.display='block'
        return false
    }
    //   if(password.value.match(regexpoo)&&email.value.match(regexp)&&phonenumber.value.match(regexpo)&&confirmpassword.value==password.value&&username.value!=""){
    //     empty.style.display="none"
    //     return true
    //   }else{
    //     empty.style.display="block"
    //     empty.style.color="red"
    //     return false}
              
    }

   
