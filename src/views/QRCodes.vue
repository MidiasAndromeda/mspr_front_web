<template>
  <div class="qrcodes">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-10 col-sm-12 centered-container">
          <div class="main-container p-4">
            <div class="title p-2 mb-2">
              <h3 v-on:click="redirectToHome()">
                <i class="material-icons">android</i> Codlify
              </h3>
            </div>
            <div class="text-center">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      <b>#</b>
                    </th>
                    <th scope="col">Code</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(qrcode, index) in qrcodes" v-bind:key="qrcode._id">
                    <th scope="row">{{ index }}</th>
                    <td>{{ qrcode.code }}</td>
                    <td class="text-right">{{ qrcode.discountRate }} %</td>
                    <td>
                      <span
                        class="badge badge-pill badge-light mr-2"
                        v-on:click="showQrCode(qrcode._id)"
                      >Show</span>
                      <span
                        class="badge badge-pill badge-danger"
                        v-on:click="deleteQrCode(qrcode._id)"
                      >Delete</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div id="qrcode" class="mb-4" v-if="showDetailedQrCode">
                <qrcode v-bind:value="idQrCode" :options="{ margin: 0, height: 150, width: 150 }"></qrcode>
              </div>
              <input
                class="btn-cta mb-2"
                v-bind:value="!displayAddForm ? 'create a new qrcode' : 'hide the form'"
                type="button"
                v-on:click="changeAddFormDisplay()"
              />
              <div v-if="displayAddForm" class="row">
                <hr />
                <div class="form-group mx-sm-3 mb-2">
                  <input
                    type="text"
                    class="form-control"
                    id="inputCode"
                    placeholder="Code..."
                    v-model="code"
                  />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    width="100px"
                    class="form-control"
                    id="inputDiscount"
                    placeholder="Discount..."
                    v-model="discountRate"
                  />
                </div>

                <input
                  class="btn-cta mb-2"
                  value="validate"
                  type="button"
                  v-on:click="validateAddForm()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./QRCodes.ts"></script>

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
table {
  color: hsla(0, 0%, 100%, 0.9);
}

.badge {
  cursor: pointer;
}
</style>
