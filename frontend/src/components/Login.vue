<template>
    <div class="login-wrapper">

        <div class="login-box">
            <div class="login-title">로그인</div>
            <div class="login-form">
                <div class="login-id">
                    <input type="text" placeholder="아이디를 입력해주세요" name="id" class="input-id"/>
                </div>
                <div class="login-pw">
                    <input type="text" placeholder="비밀번호를 입력해주세요" name="pw" class="input-pw"/>
                </div>
                <div class="find-form">
                    <div class="find-id">아이디 찾기</div>
                    <span class="bar"></span>
                    <div class="find-pw">비밀번호 찾기</div>
                </div>
                <div class="submit-btn">
                    <button class="login-btn">
                        <span class="btn-txt">로그인</span>
                    </button>
                    <input type="button" class="kakao-btn">
                    <span class="bottom-bar"></span>
                    <div class="join-title">아직 회원이 아니라면</div>
                    <button class="join-btn">
                        <span class="btn-txt">회원가입</span>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
    return {}
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
}
button {
    cursor: pointer;
}
.login-wrapper {
    min-width: 1050px;
    margin-top: 88px;
    margin-bottom: 60px;

    > .login-box {
        width: 680px;
        margin: 0 auto;
        box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.07);
        border-radius: 12px;

        > .login-title {
            padding-top: 48px;
            font-size: 26px;
            line-height: 26px;
            text-align: center;
        }

        > .login-form {
            width: 340px;
            margin: 0px auto;

            >.login-id {
                padding-bottom: 12px;
                margin: 30px 0 5px 0;

                > .input-id {
                    height: 54px;
                    width: 100%;
                    padding: 0px 11px 1px 15px;
                    border-radius: 4px;
                    border: 1px solid rgb(221, 221, 221);
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 1.5;
                    color: rgb(51, 51, 51);
                    outline: none;
                    box-sizing: border-box;
                }
            }

            > .login-pw {
                padding-bottom: 12px;
                
                > .input-pw {
                    height: 54px;
                    width: 100%;
                    padding: 0px 11px 1px 15px;
                    border-radius: 4px;
                    border: 1px solid rgb(221, 221, 221);
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 1.5;
                    color: rgb(51, 51, 51);
                    outline: none;
                    box-sizing: border-box;
                }
            }

            > .find-form {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: end;
                -ms-flex-pack: end;
                -webkit-justify-content: flex-end;
                justify-content: flex-end;
                margin-top: 10px;
                font-size: 13px;

                > .find-id {
                    color: #333;
                    cursor: pointer;
                }

                > .bar {
                    width: 1px;
                    height: 10px;
                    margin: 3px 6px 0;
                    background-color: #333;
                }

                > .find-pw {
                    color: #333;
                    cursor: pointer;
                }
            }

            > .submit-btn {
                margin-top: 28px;
                padding-bottom: 48px;

                > .login-btn {
                    display: block;
                    padding: 0 10px;
                    text-align: center;
                    overflow: hidden;
                    width: 100%;
                    height: 54px;
                    border-radius: 12px;
                    color: #fff;
                    background-color: #175436;
                    border: 0 none;

                    > .btn-txt {
                        display: inline-block;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }

                > .kakao-btn {
                    margin-top: 10px;
                    display: block;
                    text-align: center;
                    overflow: hidden;
                    width: 100%;
                    height: 54px;
                    border-radius: 12px;
                    border: none;
                    background: url("@/assets/img/kakao_login_large_wide.png") no-repeat;
                    background-size: 340px 54px;
                    cursor: pointer;
                }

                > .bottom-bar {
                    display: block;
                    margin-top: 17px;
                    width: 100%;
                    height: 1px;
                    background-color: #ddd;
                }

                > .join-title {
                    margin-top: 22px;
                    text-align: center;
                }

                > .join-btn {
                    margin-top: 14px;
                    display: block;
                    padding: 0 10px;
                    text-align: center;
                    overflow: hidden;
                    width: 100%;
                    height: 54px;
                    border-radius: 12px;
                    color: #175436;
                    background-color: #fff;
                    border: 1px solid #175436;

                    > .btn-txt {
                        display: inline-block;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
            }
        }
    }

}
</style>