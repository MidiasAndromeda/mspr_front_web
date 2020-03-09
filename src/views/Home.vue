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
                <qrcode v-bind:value="qrcode._id" :options="{ margin: 0, height: 150, width: 150 }"></qrcode>
                <!-- <qrcode-vue :value="qrcode.id" renderAs="svg" class="qrcode-svg"></qrcode-vue> -->
              </div>
              <hr />
              <p class="text-cta mb-4">
                You need to have a
                <b>verified admin account</b> to go to the administration panel.
              </p>
              <input
                class="btn-cta mb-2"
                value="go to administration panel"
                type="button"
                @click="redirectToLogin()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Home.ts"></script>

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
  cursor: pointer;
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
  width: 160px;
  height: 160px;
  margin: 0 auto;
  padding: 5px;
  /* background: #fff url("./../../public/qrcode.png") no-repeat;
  background-size: 100%; */
  background: #fff;
  border-radius: 5px;
}

.qrcode-svg svg {
  width: 100% !important;
  height: 100% !important;
  -moz-transition: width 0.5 ease, height 0.5s ease;
  -webkit-transition: width 0.5s ease, height 0.5s ease;
  -o-transition: width 0.5s ease, height 0.5s ease;
  transition: width 0.5s ease, height 0.5s ease;
}
.qrcode:hover + qrcode-svg svg {
  height: 200px !important;
  width: 200px !important;
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
</style>
