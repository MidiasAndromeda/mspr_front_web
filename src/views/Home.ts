// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";
import Component from "vue-class-component";
import QRCode from "./../interfaces/qrcode.interface";
import QrcodeVue from 'qrcode.vue'

@Component({
    components: {QrcodeVue}
})
export default class Home extends Vue {
    qrcode: QRCode | null = null;

    mounted() {
        fetch("https://hidden-savannah-62572.herokuapp.com")
            .then(res => res.json())
            .then(res => {
                this.qrcode = res;
                console.log(this.qrcode);
            })
            .catch(err => console.error(err));
    }
}
