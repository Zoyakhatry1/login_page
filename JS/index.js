const form = document.getElementById('form');   //accessing the element with id form
const username = document.getElementById('username');   //accessing the element with id username
const password = document.getElementById('password');   //accessing the element with id password
const password2 = document.getElementById('password2'); //accessing the element with id password2

form.addEventListener('submit',(e)=>{    //Detecting the event
    e.preventDefault();    //prevents default action
    checkInputs();  //user-defined function
    setTimeout(newForm,1700);  //again rendering the form page
});


function checkInputs()
{
   const usernameValue= username.value.trim(); //accsessing values & trim is used to remove spaces
   const passwordValue= password.value.trim();
   const password2Value= password2.value.trim();
   if(usernameValue==='')
   {
      setErrorFor(username,'username cannot be blank');
   }
   else{
      setSuccessFor(username);
   }
   if(passwordValue=='')
   {
       setErrorFor(password,'password cannot be blank');
   }
   else
   {
       setSuccessFor(password);
   }
   if(password2Value=='')
   {
       setErrorFor(password2,'password cannot be blank');
       alert('OOPS!! Enter the details Correctly!!!');
   }
   else if(password2Value!=passwordValue)
   {
       setErrorFor(password2,'password doesnt match!!');
       alert('OOPS!! Enter the details Correctly!!!');
   }
   else
   {
       setSuccessFor(password2);
       alert('Yayy!! Account created Successfully!!!');
   }
}

function setErrorFor(input,message)
{
    const formControl=input.parentElement;   //access the parentelement of input which is div
                                            //with classname form-control
    const small=formControl.querySelector('small');

    small.innerText=message;
    formControl.className='form-control error'  //add class 
}

function setSuccessFor(input)
{
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function newForm()
{
    window.location.href='index.html';   //render index.html again
}