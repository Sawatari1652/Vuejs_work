Vue.createApp({})
  .component('my-book', {
    data() {
      return {
        book: {
          isbn: '978-4-8222',
          title: '作って楽しむプログラミング',
          price: 2000,
          publish: '日経BP'
        }
      };
    },
    template: `<div>
      <!--<slot>{{book.title}}（{{book.publish}}）</slot>-->
      <slot v-bind:book="book">{{book.title}}（{{book.publish}}）</slot>
    </div>`
  })
  .mount('#app');