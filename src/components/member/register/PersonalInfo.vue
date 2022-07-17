<template>
    <v-container>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>이메일</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="이메일"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>비밀번호</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="비밀번호"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col align="center">
                <v-chip>비밀번호 확인</v-chip>            
            </v-col>
            <v-col>
                <v-text-field label="비밀번호 확인"></v-text-field>
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
        methods : {
            goToDelivery() {
                if(this.validateForm()){
                    this.$router.push("/delivery");
                }
            },
            validateForm() {
                return true;
            }
        }
    }
</script>