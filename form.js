let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");



function validate(){

        if(inputEmail.value!="admin"){

            alert("Wrong Username");
            return false;
    
        }
        else if(inputPassword.value!="12345"){
            
            alert("Wrong Password");
            return false;
        }
        else if(inputEmail.value=="admin"&&inputPassword.value=="12345"){
            
        submit(callback);
        }
    }
    function submit(callback)
            {
               callback();
            }    
     
    function callback(){
            $(window.location).attr('href', 'home.html');
    }
     
