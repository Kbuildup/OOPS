function login(){
    var signInEmail = document.querySelector('#signInEmail');
    var signInPassword = document.querySelector('#signInPassword');

    if (signInEmail.value == "" && signInPassword.value == ""){
        alert("로그인을 할 수 없습니다.")
    }
    else {
         alert("로그인 되셨습니다.");
    }
}
   

function back() {
    history.go(-1);
}

function create_id() {
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');

    if(id.value == ""|| pw.value =="" || PictureInPictureWindow.value=="") {
        alert("회원가입을 할 수 없습니다.")
    }
    else{
        if(pw.value !== PictureInPictureWindow.value) {
            alert("비밀번호를 확인해주세요!")
        }
        else {
            location.href = 'login.html';
        }
    }
    
}



