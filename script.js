const emailContainer = document.queryselector('.email-container')
const otpContainer = document.querySelector('.opt-container')
const submitOtp = document.querySelector('.opt-submit')
const submitEmail = document.querySelector('.email-submit')
const emailError = document.querySelector('.email-error')
const otpError = document.querySelector('.otp-error')

submitEmail.addEventListener('click',(e)=>{
    e.preventDefault()
    if(document.querrySelector('#email').value==''){
        error(emailError,"Email field can not be empty")
        return
    }

    fetch('/backend/login.php' ,{
        method: 'POST',
        body: new FormData(document.querySelector('.email-form'))
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.status=='success'){
            otpContainer.style.display='block'
            emailContainer.style.display='none'
        }
        else
        error(emailError , "You are not registered with us")
    })
})

//submit OTP eventlisterner logic 

submitOtp.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('submit otp')
    if(document.querrySelector('#otp').value==''){
        error(otpError,"OTP field can not be empty")
        return
    }

    fetch('/backend/login.php' ,{
        method: 'POST',
        body: new FormData(document.querySelector('.otp-form'))
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.status=='success'){
           window.location.replace("/frontend/dashboard.html")

        }
        else
        error(otpError , "Incorrect OTP provided")
    })

})

function error(span, msg){
    span.textContent =msg
    span.style.colour='red'
    setTimeout(()=>{span.textcontent=""},3000)
}