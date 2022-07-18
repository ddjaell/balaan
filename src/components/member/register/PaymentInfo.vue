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
                <v-text-field v-model="memberCardNum1"
                :rules="cardNumRule"></v-text-field>
            </v-col>
            <v-col>            
                <v-text-field v-model="memberCardNum2"
                :rules="cardNumRule"></v-text-field>
            </v-col>
            <v-col>            
                <v-text-field v-model="memberCardNum3"
                :rules="cardNumRule"></v-text-field>
            </v-col>
            <v-col>            
                <v-text-field v-model="memberCardNum4"
                :rules="cardNumRule"></v-text-field>
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
        data () {
            return{
                memberCardNum1 : "",
                memberCardNum2 : "",
                memberCardNum3 : "",
                memberCardNum4 : "",
                cardNumRule : [v => v.length <= 4 || '네자리를 넘을 수 없습니다.']
                
            }
        },
        methods : {
            fullCardNumber() {
                return this.memberCardNum1 + this.memberCardNum2 + this.memberCardNum3 + this.memberCardNum4
            },
            goToComplete() {
                if(this.validateForm()){
                    this.setPaymentInfo()
                    this.$router.push("/complete");
                }
            },
            goToDelivery() {
                this.$router.push("/delivery");
            },
            validateForm() {
                if(this.checkEmptyCardNumber()) {
                    alert("카드번호를 모두 입력해주세요.")
                    return false
                }

                if(!this.checkValidCardNumber()){
                    alert("카드번호를 확인해주세요.")
                    return false
                }
                return true
            },
            checkEmptyCardNumber() {
                return this.memberCardNum1 === "" || this.memberCardNum2 === ""
                || this.memberCardNum3 === "" || this.memberCardNum4 === ""
            },
            checkValidCardNumber() {
                let fullCardNumber = this.fullCardNumber()
                fullCardNumber = fullCardNumber.split("")
                let cardNumberSum = 0
                for(let i = 0; i<fullCardNumber.length; i++){
                    if((i+1) % 2 == 0){
                        let multiplyByTwo = fullCardNumber[i] * 2
                        if(multiplyByTwo > 9){
                            let numberArr = multiplyByTwo.toString().split("")
                            cardNumberSum += (Number(numberArr[0]) + Number(numberArr[1]))
                        }else{
                            cardNumberSum += multiplyByTwo
                        }
                    }else{
                        cardNumberSum += Number(fullCardNumber[i])
                    }
                }
                console.log(cardNumberSum)
                if(cardNumberSum % 10 !== 0){
                    return false
                }
                return true
            },
            setPaymentInfo() {
                this.$store.commit("setCardNumber", this.fullCardNumber())
            }
        }
    }
</script>