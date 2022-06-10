// 아이디 유효성 검사
document.querySelector("#userId").addEventListener('blur', (event) => {
    const inputId = event.target;
    
    if(!inputId.value) return;
    
    if(!/^[a-z][a-z\d]{4,16}$/g.test(inputId.value)) {
        idInfo.innerHTML = '아이디는 영문소문자/숫자 4자리 이상 16자리 이하로 입력해주세요.';
        idInfo.style.color = 'lightcoral';
        inputId.select();
        return;
    } else {
        const members = JSON.parse(localStorage.getItem("members"));
        if(members) {
            for(const member of members) {
                if(inputId.value === member.userId) {
                    idInfo.innerHTML = `<strong>${inputId.value}</strong>는 이미 사용 중인 아이디입니다.`;
                    inputId.select();
                    idInfo.style.color = 'lightcoral';
                    return;
                }
            }
        }
        idInfo.innerHTML = `<strong>${inputId.value}</strong>는 사용 가능한 아이디입니다.`;
        idInfo.style.color = '';
    }
});

// 비밀번호 유효성 검사
document.querySelector("#userPwd").addEventListener('blur', (event) => {
    const inputPwd = event.target;

    if(!inputPwd.value) return;

    const regExpArr = [/[^{8,16}]$/g, /[0-9]/g, /[a-zA-Z]/g, /[!@#$%^&*]/g];

    let trueCnt = 0;
    for(let i = 0; i < regExpArr.length; i++) {
        if(!regExpArr[i].test(inputPwd.value)) {
            pwdInfo.innerHTML = '비밀번호는 대문자 혹은 소문자/숫자/특수문자를 모두 포함한 8자리 이상 16자리 이하로 입력해주세요.';
            pwdInfo.style.color = 'lightcoral';
            inputPwd.select();
            trueCnt = 0;
            return;
        } else ++trueCnt;
        
        if(trueCnt == 4) {
            pwdInfo.innerHTML = '사용 가능한 비밀번호입니다.';
            pwdInfo.style.color = '';
        }
    };
});

// 비밀번호 일치 검사
document.querySelector("#userPwdCheck").addEventListener('blur', (event) => {
    if(event.target.value == "") {
        pwdCheckInfo.innerHTML = '';
        pwdCheckInfo.style.color = '';
        return;
    }

    if(document.querySelector("#userPwd").value !== event.target.value) {
        pwdCheckInfo.innerHTML = '비밀번호가 일치하지 않습니다.';
        pwdCheckInfo.style.color = 'lightcoral';
        event.target.select();
        return;
    } else if(document.querySelector("#userPwd").value === event.target.value) {
        pwdCheckInfo.innerHTML = '';
        pwdCheckInfo.style.color = '';
    }
});

// 이름 유효성 검사
document.querySelector("#userName").addEventListener('blur', (event) => {
    const inputName = event.target;

    if(!inputName.value) return;

    if(!/^[가-힣]{2,6}$/.test(inputName.value)) {
        userNameInfo.innerHTML = '이름은 한글 2자리 이상 6자리 이하로 입력해주세요.';
        userNameInfo.style.color = 'lightcoral';
        inputName.select();
        return;
    } else {
        userNameInfo.innerHTML = '';
        userNameInfo.style.color = '';
    }
});

// 일반전화 유효성 검사
document.querySelectorAll("[name=phone]").forEach((querySelector) => {
    querySelector.addEventListener('blur', (event) => {
        const inputPhone = event.target;

        if(!inputPhone.value) {
            phoneInfo.innerHTML = '';
            phoneInfo.style.color = '';
            return;
        }

        if(!/^[0-9]{3,4}$/.test(inputPhone.value)) {
            phoneInfo.innerHTML = '일반전화는 3자리 이상 4자리 이하 숫자만 입력해주세요.';
            phoneInfo.style.color = 'lightcoral';
            inputPhone.select();
            return;
        } else if(/^[0-9]{3,4}$/.test(inputPhone.value)) {
            phoneInfo.innerHTML = '';
            phoneInfo.style.color = '';
        }
    });
});

// 휴대전화 유효성 검사
document.querySelectorAll("[name=mobile]").forEach((querySelector) => {
    querySelector.addEventListener('blur', (event) => {
        const inputMobile = event.target;

        if(!inputMobile.value) return;

        if(!/^[0-9]{3,4}$/.test(inputMobile.value)) {
            mobileInfo.innerHTML = '휴대전화는 3자리 이상 4자리 이하 숫자만 입력해주세요.';
            mobileInfo.style.color = 'lightcoral';
            inputMobile.select();
            return;
        } else if(/^[0-9]{3,4}$/.test(inputMobile.value)) {
            mobileInfo.innerHTML = '';
            mobileInfo.style.color = '';
        }
    });
}); 

// 이메일 유효성 검사
document.querySelector("#userEmail").addEventListener('blur', (event) => {
    const inputEmail = event.target;

    if(!inputEmail) return;

    if(!/^[\w]{3,}@[\w]+(\.[\w]+){1,3}$/.test(inputEmail.value)) {
        emailInfo.innerHTML = '이메일 양식에 맞지 않습니다.';
        emailInfo.style.color = 'lightcoral';
        inputEmail.select();
        return;
    } else if(/^[\w]{3,}@[\w]+(\.[\w]+){1,3}$/.test(inputEmail.value)) {
        emailInfo.innerHTML = '';
        emailInfo.style.color = '';
    }
});

// 유효성 검사
document.joinForm.onsubmit = () => {
    if(!userId.value || !userPwd.value || !userPwd_Question || !userPwd_Answer || !userName || !mobile_front || !mobile_middle || !mobile_last || !userEmail) {
        alert('필수사항(*)을 반드시 입력해주세요.');
        return false;
    }
    alert('회원가입이 완료 되었습니다. 로그인을 진행해주세요.');
    window.location.href = "login.html";
}

class Member {
    constructor(userId, userPwd, userPwd_Question, userPwd_Answer, userName, phoneNumber, mobileNumber, userEmail) {
        this.userId = userId;
        this.userPwd = userPwd;
        this.userPwd_Question = userPwd_Question;
        this.userPwd_Answer = userPwd_Answer; 
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.mobileNumber = mobileNumber;
        this.userEmail = userEmail;
    }
};

const questionText = (inputQuestion) => {
    let question = '';
    switch(inputQuestion) {
        case 'hint_1' : question = "기억에 남는 추억의 장소는?"; break;
        case 'hint_2' : question = "자신의 인생 좌우명은?"; break;
        case 'hint_3' : question = "자신의 보물 제 1호는?"; break;
        case 'hint_4' : question = "가장 기억에 남는 선생님 성함은?"; break;
        case 'hint_5' : question = "내가 좋아하는 캐릭터는?"; break;
        case 'hint_6' : question = "타인이 모르는 나만의 신체비밀은?"; break;
    }
    return question;
}

// 정보 저장
const saveMemberInfo = () => {
    const userIdVal = userId.value;
    const userPwdVal = userPwd.value;
    const userPwd_QuestionVal = questionText(userPwd_Question.value);
    const userPwd_AnswerVal = userPwd_Answer.value;
    const userNameVal = userName.value;
    const phone_numberVal = phone_front.value + phone_middle.value + phone_last.value; 
    const mobile_numberVal = mobile_front.value + mobile_middle.value + mobile_last.value; 
    const userEmailVal = userEmail.value;

    const member = new Member(userIdVal, userPwdVal, userPwd_QuestionVal, userPwd_AnswerVal, userNameVal, phone_numberVal, mobile_numberVal, userEmailVal);

    const members = JSON.parse(localStorage.getItem("members")) || [];
    members.push(member);

    const memberData = JSON.stringify(members);

    localStorage.setItem('members', memberData);
    document.joinForm.reset();
};

// 로그인 시 헤더에 표시
const loginInfo = () => {
    const loginData = JSON.parse(localStorage.getItem("loginInfo"));
    const loginMemberInfoDiv = document.querySelector(".loginMemberInfo");
    
    if(loginData) {
        if(loginData.permission === 'normal') {
            loginMemberInfoDiv.innerHTML = `<a href='myPage.html'>${loginData.userName}</a>님, 환영합니다!`;
            loginText.innerHTML = `LOGOUT`;
        } else if(loginData.permission === 'admin') {
            loginMemberInfoDiv.innerHTML = `<a href='managerPage.html'>매니저 ${loginData.managerId}</a> 계정으로 접속되었습니다.`;
            loginText.innerHTML = `LOGOUT`;
        }
    } else {
        loginMemberInfoDiv.innerHTML = '';
        loginText.innerHTML = 'LOGIN';
    }
};

loginInfo();

const loginBtn = (element) => {
    const loginMemberInfoDiv = document.querySelector(".loginMemberInfo");
    
    if(element.innerHTML === 'LOGIN') {
        window.location.href = "login.html";
        return;
    }

    if(element.innerHTML === 'LOGOUT') {
        const flag = confirm("로그아웃 하시겠습니까?");
        if(flag) {
            localStorage.removeItem('loginInfo');
            loginMemberInfoDiv.innerHTML = '';
            loginText.innerHTML = 'LOGIN';
            joinText.innerHTML = 'JOIN';
            window.location.href = 'index.html';
        } else {
            return;
        }
    }
};