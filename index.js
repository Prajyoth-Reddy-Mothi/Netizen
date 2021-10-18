var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

function auth() {

  var number = '+91' + document.getElementById('mobileNo').value;

  firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e) {

      console.log('OTP sent Sucessfully!');

      var

        code = prompt('Enter OTP', '');

      if (code === null) return;

      e.confirm(code).then(function(result) {

        console.log('Sucessfully Regestered', result.user);

      }).catch(function(error) {

        console.error('Registration Failed', error);

      });

    })

    .catch(function(error) {

      console.error('Failed to send OTP', error);

    });

}

var user = firebase.auth().currentUser;

if (user) {

  alert("Loged in")

} else {

  alert('logged off')

}

