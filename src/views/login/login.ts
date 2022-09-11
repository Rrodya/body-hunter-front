import {Component, Vue} from "vue-property-decorator";
import VInput from "@/components/ui-kits/v-input/v-input.vue";
import VButton from "@/components/ui-kits/v-button.vue";
import {loginData} from "@/helpers/types";
import sendReq from "@/services/api";

@Component({
    components: {
        VInput,
        VButton
    }
})
export default class Login extends Vue {
    loginData: any = {
        email: '',
        password: ''
    }

    messageValid = "";

    goLogin(){
        const loginDataKeys = Object.keys(this.loginData);
        let valid = true;

        loginDataKeys.forEach((key: any) => {
            if(this.loginData[key] == ""){
                valid = false;
            }
        })

        if(valid){
            sendReq('login', 'post', this.loginData).then(res => {
                if(res.message === "ok"){
                    console.log("login success");
                    localStorage.bh_token = res.token;
                    this.$router.push({name: "homepage"});
                } else if(res.message === "password"){
                    this.messageValid = "Данные введены неверно";
                }
            })
        }
    }
}
