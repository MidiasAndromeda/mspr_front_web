// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";
import Component from "vue-class-component";

@Component({
})
export default class LogIn extends Vue {
    username: string = "";
    password: string = "";
    isLoggedIn: boolean = false;

    mounted() {
        this.isLoggedIn = false;
    }

    sendLoginForm() {
        fetch("https://hidden-savannah-62572.herokuapp.com/user", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res) this.$router.push('/qrcodes');
                else alert("Please log in first.");

            })
            .catch(err => console.error(err));
    }
    redirectToHome() {
        this.$router.push('/');
    }
}
