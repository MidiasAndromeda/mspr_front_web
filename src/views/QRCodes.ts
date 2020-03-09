// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";
import Component from "vue-class-component";
import QRCode from '@/interfaces/qrcode.interface';

@Component({
})
export default class QRCodes extends Vue {
    qrcodes: QRCode[] = [{
        id: '',
        code: '',
        discountRate: 0
    }];
    displayAddForm: boolean = false;
    code: string = '';
    discountRate: number = 0;

    mounted() {
        this.qrcodes = [];
        this.displayAddForm = false;
        this.code = '';
        this.discountRate = 0;
        fetch("https://hidden-savannah-62572.herokuapp.com/qrcodes")
            .then(res => res.json())
            .then(res => this.qrcodes = res)
            .catch(err => console.error(err));
    }

    redirectToHome() {
        this.$router.push('/');
    }

    deleteQrCode(id: number) {
        fetch("https://hidden-savannah-62572.herokuapp.com/qrcode/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                this.qrcodes = [];
                fetch("https://hidden-savannah-62572.herokuapp.com/qrcodes")
                    .then(res => res.json())
                    .then(res => this.qrcodes = res)
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }

    changeAddFormDisplay() {
        if (this.displayAddForm) this.displayAddForm = false;
        else this.displayAddForm = true;
    }

    validateAddForm() {
        fetch("https://hidden-savannah-62572.herokuapp.com/qrcode/", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                code: this.code,
                discountRate: this.discountRate
            })
        })
            .then(res => res.json())
            .then(res => {
                this.qrcodes = [];
                fetch("https://hidden-savannah-62572.herokuapp.com/qrcodes")
                    .then(res => res.json())
                    .then(res => {
                        this.qrcodes = res
                        this.code = '';
                        this.discountRate = 0;
                        this.displayAddForm = false;
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));

    }
}
