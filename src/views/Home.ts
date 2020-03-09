// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";
import Component from "vue-class-component";
import QRCode from "./../interfaces/qrcode.interface";
const VueQrcode = require("@chenfengyuan/vue-qrcode");


Vue.component(VueQrcode.name, VueQrcode);

@Component({
    components: {VueQrcode}
})
export default class Home extends Vue {
    qrcode: QRCode = {
        id: '',
        code: '',
        discountRate: 0
    };

    mounted() {
        fetch("https://hidden-savannah-62572.herokuapp.com/qrcode")
            .then(res => res.json())
            .then(res => {
                this.qrcode = res;
            })
            .catch(err => console.error(err));
    }

    redirectToLogin() {
        this.$router.push('/login');
    }
}
