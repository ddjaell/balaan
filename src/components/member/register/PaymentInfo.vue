<template>
    <v-container>
        <v-row align="center"
      justify="center">
            <v-col>            
                <v-chip>카드번호</v-chip>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>            
                <v-text-field></v-text-field>
            </v-col>
            <v-col>            
                <v-text-field></v-text-field>
            </v-col>
            <v-col>            
                <v-text-field></v-text-field>
            </v-col>
            <v-col>            
                <v-text-field></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center"
      justify="center">
            <v-col>
                <v-btn @click="goToDelivery">이전</v-btn>
            </v-col>
            <v-col>
                <v-btn @click="goToComplete">완료</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default{
        methods : {
            goToComplete() {
                if(this.validateForm()){
                    this.$router.push("/complete");
                }
            },
            goToDelivery() {
                this.$router.push("/delivery");
            },
            validateForm() {
                return true;
            }
        }
    }
</script>