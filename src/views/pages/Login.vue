<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group mb-0">
            <div class="card p-4">
              <div class="card-block">
                <h1 v-message="'commons.buttons.login'"></h1>
                <p class="text-muted" v-message="'commons.login.info'"></p>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <input type="text" class="form-control" 
                         v-model="username" v-placeholder="'commons.account'">
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-lock"></i></span>
                  <input type="password" class="form-control" 
                         v-placeholder="'commons.password'"
                         v-model="password">
                </div>
                <div class="row">
                  <div class="col-6">
                    <button type="button" class="btn btn-primary px-4" 
                    v-message="'commons.buttons.login'" @click="login">
                    </button>
                  </div>
                  <div class="col-6 text-right">
                    <button type="button" class="btn btn-link px-0" v-message="'commons.login.forgot'"></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-inverse card-primary py-5 d-md-down-none" style="width:44%">
              <div class="card-block text-center">
                <div>
                  <h2 v-message="'commons.login.signup'"></h2>
                  <p v-message="'commons.login.desc'"></p>
                  <button type="button" class="btn btn-primary active mt-3" v-message="'commons.buttons.register'">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery'
    import UrlService from 'services/UrlService.es6'
    import { LOGON } from 'xStore/xType.es6'

    export default {

        name: 'Login',

        data () {
            return {
                username: "",
                password: ""
            }
        },

        methods: {

            login () {
                let {username, password} = this.$data,
                    url = UrlService.url('login/check')
                $.post(url, {
                    username,
                    password
                }, datas => {
                    if(datas.logon) {
                        this.$store.commit(LOGON, {
                            state: datas.logon,
                            timestamp: datas.timestamp,
                            username: datas.username
                        })
                    }
                })
            }
        }
    }
</script>
