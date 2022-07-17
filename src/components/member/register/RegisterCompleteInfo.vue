<template>
    <v-container>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-text-field disabled>'{{this.getMemberName}}'님 회원가입을 되었습니다.</v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-text-field disabled>이메일 : {{this.getMemberEmail}}</v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-text-field disabled>주소 : {{this.getMemberAddress}}</v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-text-field disabled>연락처 : {{this.getMemberPhoneNumber}}</v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default{
        computed : {

        }
    }
</script>