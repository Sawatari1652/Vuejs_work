<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-data-table
          :headers="headers"
          :items="items"
        ></v-data-table>
      </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

  data(){
    return {
      headers: [
          { 
            text: 'ID', 
            value: 'id' 
          },
          {
            text: '名前',
            value: 'name',
          },
          { text: '年齢', 
            value: 'age' 
          },
        ],
        items:[
        { 
          id : 1 , 
          name : "高田健志" , 
          age : 33 
        },
        { 
          id : 2 , 
          name : "横山緑" , 
          age: 42
        },
        { 
          id : 3 , 
          name : "山田太郎" , 
          age: 10
        },
      ]
    }
  },

}
</script>
