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
  email = document.getElementById("email")
  password = document.getElementById("password")
  error = document.getElementById("error")

  if(!email.value.endsWith("@gmail.com")){
    error.innerHTML = "Email must end with @gmail.com"
    alert("Email must end with @gmail.com")
  }
  else if(!isAplhaNumeric(password.value)){
    error.innerHTML = "Wrong Password"
    alert("Wrong Password")
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
