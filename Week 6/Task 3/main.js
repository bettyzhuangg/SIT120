var bread = new Vue({
    el: "#bread",
    data: {
        title: 'Which bread would you like to use for your sandwich?',
        // a variable which stores user's selection
        selected: '',
        // array of options that user can choose from
        options: [
        { text: 'Wheat Bread', value: 'A - Wheat Bread' },
        { text: 'White Bread', value: 'B - White Bread' },
        { text: 'Italian Herb & Cheese', value: 'C - Italian Herb & Cheese' },
        { text: 'Malted Rye', value: 'D - Malted Rye' },
      ]
  },
})

var cheese= new Vue({
    el: "#cheese",
    data: {
        title: 'Which cheese would you like to use for your sandwich?',
        // a variable which stores user's selection
      selected: '',
      // array of options that user can choose from
      options: [
        { text: 'Natural Cheddar Cheese', value: 'A - Natural Cheddar Cheese' },
        { text: 'Mozzarella Cheese', value: 'B - Mozzarella Cheese' },
        { text: 'Old English Cheese ', value: 'C - Old English Cheese ' },
      ]
  },
})
