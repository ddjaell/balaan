<template>
    <v-container>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>이름</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="이름"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>연락처</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="연락처"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>주소</v-chip>            
            </v-col>
            <v-col>
                <v-btn>우편번호</v-btn>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-text-field disabled="true"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="end">
                <v-text-field disabled="true"></v-text-field>
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
    export default{
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
                return true;
            }
        }
    }
</script>