// vue instance which creates a to-do list
const app = Vue.createApp ({
  // data property which stores data for this instance
    data() {
      return {
        // title is a string
        title: "Betty's to-do-list for SIT120:",
        // list is an object
        list: [
          { id: 'code-editor', text: "Familiarize a code editor: codepen", checked: true},
          { id: 'html', text: "Learn HTML", checked: true},
          { id: 'css', text: "Learn CSS", checked: true},
          { id: 'javascript', text: "Learn Javascript", checked: true},
          { id: 'github', text: "Create a github account", checked: true},
          { id: 'figma', text: "Familiarize figma", checked: false},
          { id: 'vue3', text: "Learn VUE ver 3.0", checked: false}
        ]
      };
    },
    methods: {
      toggleItem(item) {
        // toggle the truth value between item.checked
        item.checked = !item.checked
      }
    }
  });
  // mount this app onto app div
app.mount('#app');
