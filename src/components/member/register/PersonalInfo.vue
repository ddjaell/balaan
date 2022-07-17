<template>
    <v-container>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>이메일</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="이메일"
                :rules="emailRule"
                v-model="memberEmail"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>비밀번호</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="비밀번호"
                :rules="passwordRule"
                v-model="memberPassword"
                type="password"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>비밀번호 확인</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="비밀번호 확인"
                :rules="passwordCheckRule"
                v-model="memberPasswordCheck"
                type="password"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-btn @click="goToDelivery">다음</v-btn>            
        </v-row>
    </v-container>
</template>
<script>
    export default{
        data () {
            return{
                memberEmail : null,
                memberPassword : null,
                memberPasswordCheck : null,
                emailRegEx : /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                passwordRegEx : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
                emailRule : [v => this.emailRegEx.test(v) || '이메일 형식을 확인해주세요.'],
                passwordRule : [v => this.passwordRegEx.test(v) || '비밀번호는 대문자, 소문자, 특수문자 포함 최소 8자입니다.'],
                passwordCheckRule : [v => v === this.memberPassword || '비밀번호가 다릅니다.'],
            }
        },
        methods : {
            goToDelivery() {
                if(this.validateForm()){
                    this.setPersonalInfo()
                    this.$router.push("/delivery")
                }
            },
            validateForm() {
                if(!this.emailRegEx.test(this.memberEmail)){
                    alert("메일 확인 부탁드립니다.")
                    return false
                }
                if(!this.passwordRegEx.test(this.memberPassword) || this.memberPasswordCheck !== this.memberPassword) {
                    alert("비밀번호 확인 부탁드립니다.")
                    return false
                }
                return true
            },
            setPersonalInfo() {
                this.$store.commit('setEmail', this.memberEmail)
                this.$store.commit('setPassword', this.memberPassword)
            }
        }
    }
</script>