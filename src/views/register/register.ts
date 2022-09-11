import {Component, Vue} from "vue-property-decorator";
import VInput from "@/components/ui-kits/v-input/v-input.vue";
import VButton from "@/components/ui-kits/v-button.vue";
import {registerType} from "@/helpers/types";
import sendReq from "@/services/api";

@Component({
    components: {
        VInput,
        VButton
    }
})
export default class Register extends Vue {
    registerData: registerType = {
        email: '',
        password: '',
        name: ''
    }

    messageValid = '';

    goRegister(){
        sendReq('users', 'post', this.registerData).then(res => {
            if(res.message === "ok"){
                console.log("register success");
                localStorage.bh_token = res.token;
                this.$router.push({name: "homepage"});
            } else if(res.message === "email"){
                this.messageValid = "Данный email уже существует";
            }
        });
    }

    changeEmail(){
        this.messageValid = ""
    }
}
