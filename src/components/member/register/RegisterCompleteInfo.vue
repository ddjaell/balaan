<template>
    <v-container>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-text-field readonly v-model="memberName"
                  class="text-h4"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-text-field readonly v-model="memberEmail"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-text-field readonly v-model="memberAddress"></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-text-field readonly v-model="memberPhoneNumber"></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default{
        computed : {
            memberName : {
                get() {
                    return this.$store.getters.getName + '님 회원가입 되었습니다. '
                }
            },
            memberEmail : {
                get() {
                    return '이메일 : ' + this.$store.getters.getEmail
                }
            },
            memberAddress : {
                get() {
                    return '주소 : ' + this.$store.getters.getAddress
                }
            },
            memberPhoneNumber : {
                get() {
                    return '연락처 : ' + this.$store.getters.getPhoneNumber
                    .replace(/[^0-9]/g, "")
                    .replace(/(^02|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3")
                    .replace("--", "-")
                }
            }
        }
    }
</script>