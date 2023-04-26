<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="ログインID" 
            v-model="name" 
          />
          <v-text-field 
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
          />
          <v-card-actions>
            <v-btn class="info" @click="submit">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    
    <div id="nav">
      <router-link to="/BookSearch">一覧画面</router-link>
    </div>
  </v-app>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',

  data(){
    return {
      showPassword : false,
      name:'',
      password:'',
    }
  },
  methods:{
    submit(){
      axios.get('http://127.0.0.1:4321/login')
        .then(response => {
          if (response.status === 200) {
            this.$router.push('/BookSearch')
          }
        })
    }
  }
}
</script>