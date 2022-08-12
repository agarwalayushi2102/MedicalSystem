function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
    fetch('/auth/login', {
            method: 'POST', body: JSON.strigify({
                name: profile.getName(),
                email: profile.getEmail(),
            }),
        });
    localStorage.setItem('patient_id', patient_id)
}

//route auth/login


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
        localStorage.removeItem('patient_id')
    });
}