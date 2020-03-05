<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-9 col-sm-12 centered-container">
          <div class="main-container p-4">
            <div class="title p-2 mb-2">
              <h3>
                <i class="material-icons">android</i> Codlify
              </h3>
            </div>
            <div class="text-center">
              <p>
                Use the
                <b>Codlify app</b> to scan this
              </p>
              <div id="qrcode">
                <!-- <img src="./../../public/qrcode.png" class="img-fluid" /> -->
              </div>
              <hr />
              <p class="text-cta mb-4">
                You need to have a
                <b>verified admin account</b> to go to the administration panel.
              </p>
              <input class="btn-cta mb-2" value="go to administration panel" type="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Home extends Vue {}
</script>

<style scoped>
h3 {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1;
}
b {
  font-weight: 700;
}
p {
  font-size: 13px;
}
.title {
  color: #fff !important;
}
.text-cta {
  font-size: 15px;
  width: 80%;
  margin: 0 auto;
  letter-spacing: 0.4px;
}

.centered-container {
  margin: 0 auto;
  margin-top: 100px;
}
.main-container {
  border-radius: 20px;
  background-color: hsl(237, 85%, 66%);
  box-shadow: 0 2px 12px 0 hsla(0, 0%, 0%, 0.5);
  color: hsla(0, 0%, 100%, 0.7);
}
.main-container b {
  color: hsla(0, 0%, 100%, 1);
}
#qrcode {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  padding: 5px;
  background: #fff url('./../../public/qrcode.png') no-repeat;
  background-size: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 hsla(0, 0%, 0%, 0.25);
  -moz-transition: width 0.5 ease, height 0.5s ease;
  -webkit-transition: width 0.5s ease, height 0.5s ease;
  -o-transition: width 0.5s ease, height 0.5s ease;
  transition: width 0.5s ease, height 0.5s ease;
}
#qrcode:hover {
  height: 200px;
  width: 200px;
}
hr {
  width: 80%;
  background: #fff;
}
.btn-cta {
  color: hsla(0, 0%, 100%, 0.9);
  background: #878df4;
  border-radius: 20px;
  border: none;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  padding: 8px 15px;
}
.btn-cta:hover {
}
</style>
