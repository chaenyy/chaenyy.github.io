// 로그인 시 헤더에 표시
const loginInfo = () => {
    const loginData = JSON.parse(localStorage.getItem("loginInfo"));
    const loginMemberInfoDiv = document.querySelector(".loginMemberInfo");
    
    if(loginData) {
        if(loginData.permission === 'normal') {
            loginMemberInfoDiv.innerHTML = `<a href='myPage.html'>${loginData.userName}</a>님, 환영합니다!`;
            loginText.innerHTML = `LOGOUT`;
            joinText.innerHTML = '';
        } else if(loginData.permission === 'admin') {
            loginMemberInfoDiv.innerHTML = `<a href='managerPage.html'>매니저 ${loginData.managerId}</a> 계정으로 접속되었습니다.`;
            loginText.innerHTML = `LOGOUT`;
            joinText.innerHTML = '';
        }
    } else {
        loginMemberInfoDiv.innerHTML = '';
        loginText.innerHTML = 'LOGIN';
        joinText.innerHTML = 'JOIN';
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

// 회원 정보 나타내기
const memberInfoPrint = () => {
    const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    const members = JSON.parse(localStorage.getItem("members"));

    const userIdBox = document.querySelector("#userId");
    const userPwdQuestionBox = document.querySelector("#userPwd_Question");
    const userPwdAnswerBox = document.querySelector("#userPwd_Answer");
    const userNameBox = document.querySelector("#userName");
    const userPhoneBox = document.querySelector("#phone");
    const userMobileBox = document.querySelector("#mobile");
    const userEmailBox = document.querySelector("#userEmail");
    const informationText = document.querySelector(".informationText");

    if(loginInfo) {
        if(loginInfo.permission === 'normal') {
            const loginMemberInfo = members.find((member) => {
                return member.userId == loginInfo.userId;
            });
            const {userId, userPwd_Question, userPwd_Answer, userName, phoneNumber, mobileNumber, userEmail} = loginMemberInfo;
            informationText.innerHTML = `이용해주셔서 감사합니다. <strong>${userName}</strong> 님은 <strong>[${loginInfo.permission}]</strong> 회원이십니다.`;
            userIdBox.innerHTML = userId;
            userPwdQuestionBox.innerHTML = userPwd_Question;
            userPwdAnswerBox.innerHTML = userPwd_Answer;
            userNameBox.innerHTML = userName;
            userPhoneBox.innerHTML = phoneNumber;
            userMobileBox.innerHTML = mobileNumber;
            userEmailBox.innerHTML = userEmail;
        }
    } else return;
};

memberInfoPrint();