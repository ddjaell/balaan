<template>
    <v-container>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>이름</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="이름"
                v-model="memberName"
                :rules="nameRule"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>연락처</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="연락처"
                v-model="memberPhoneNumber"
                :rules="phoneNumRule"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>주소</v-chip>            
            </v-col>
            <v-col>
                <v-btn @click="searchAddress">우편번호</v-btn>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-text-field readonly
                v-model="memberMainAddress" label="주소"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="end">
                <v-text-field
                v-model="memberSubAddress" label="상세주소"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-btn @click="goToHome">이전</v-btn>
            </v-col>
            <v-col>
                <v-btn @click="goToPayment">다음</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        data () {
            return{
                nameRegEx : /^[가-힣]{2,}|[a-zA-Z]{3,}$/,
                phoneNumRegEx : /(^0[0-9]{2})-?\s?([0-9]{3,4})-?\s?([0-9]{4})$/,
                nameRule : [v => this.nameRegEx.test(v) || '이름이 올바르지 않습니다.'],
                phoneNumRule : [v => this.phoneNumRegEx.test(v) || '휴대폰 양식이 올바르지 않습니다.']
            }
        },
        computed : {
            memberName : {
                get() {
                    return this.$store.getters.getName
                },
                set(val) {
                    this.$store.commit("setName", val)
                }
            },
            memberMainAddress : {
                get() {
                    return this.$store.getters.getMainAddress
                },
                set(val) {
                    this.$store.commit("setMainAddress", val)
                }
            },
            memberSubAddress : {
                get() {
                    return this.$store.getters.getSubAddress
                },
                set(val) {
                    this.$store.commit("setSubAddress", val)
                }
            },
            memberPhoneNumber : {
                get() {
                    return this.$store.getters.getPhoneNumber
                },
                set(val) {
                    this.$store.commit("setPhoneNumber", val)
                }
            },

        },
        methods : {
            goToHome() {
                this.$router.push("/");
                
            },
            goToPayment() {
                if(this.validateForm()){
                    
                    this.$router.push("/payment");
                }
            },
            validateForm() {
                if(this.memberName === null || !this.nameRegEx.test(this.memberName)){
                    alert("이름이 올바르지 않습니다.")
                    return false
                }
                if(!this.phoneNumRegEx.test(this.memberPhoneNumber)){
                    alert("휴대폰 양식이 올바르지 않습니다")
                    return false
                }
                if(this.memberMainAddress === "" || this.memberMainAddress === undefined){
                    alert("주소가 올바르지 않습니다.")
                    return false
                }
                return true
            },
            searchAddress() {
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        this.memberMainAddress = data.address
                    }
                }).open();
            }
        }
    }
</script>