const resVar = document.getElementById("res");

const change = () => {
    if(resVar.id === "res") resVar.id += "ponsive";
    else resVar.id = "res";
}

const resize = () => {
    if(window.innerWidth > 768) resVar.id = "res";
}


function validateForm(event){
  event.preventDefault()
  s = document.getElementById("s")
  username = document.getElementById("username")
  email = document.getElementById("email")
  password = document.getElementById("password")
  confirmpassword = document.getElementById("confirmpassword")
  male = document.getElementById("male")
  female = document.getElementById("female")
  agree = document.getElementById("agree")
  error = document.getElementById("error")
  
  if(username.value.length < 5){
    error.innerHTML = "Username must be at least 5 characters!"
    alert("Username must be at least 5 characters!")
  }
  else if(!email.value.endsWith("@gmail.com")){
    error.innerHTML = "Email must end with @gmail.com"
    alert("Email must end with @gmail.com")
  }
  else if(!isAplhaNumeric(password.value)){
    error.innerHTML = "Please Insert Alpha Numeric Password"
    alert("Please Insert Alpha Numeric Password")
  }
  else if(password.value != confirmpassword.value){
    error.innerHTML = "Password doesn't match"
    alert("Password doesn't match")
  }
  else if(!(male.checked || female.checked)){
    error.innerHTML = "Gender must be selected"
    alert("Gender must be selected")
  } 
  else if(!agree.checked){
    error.innerHTML = "Please check the checkbox"
    alert("Please check the checkbox")
  }
}

function isAplhaNumeric(pw){
  var num = false
  var alpha = false
  for(let i = 0; i <pw.length; i++){
      if(!isNaN(pw[i])){
          // isNaN = is not a number
          num = true
      }
      else{
          alpha = true
      }
      if(num && alpha)
      return true
  }
  return false
}
