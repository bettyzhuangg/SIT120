const app = Vue.createApp ({
    data() {
      return {
        title: "Betty's to-do-list for SIT120:",
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
        item.checked = !item.checked
      }
    }
  });
app.mount('#app');