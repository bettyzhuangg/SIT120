Vue.component('event', {
    template: '<div class = "event">' + 
                '<div class = "event-image">' +
                // adds slots for image, slot will be filled during render
                '<slot name = "image"></slot>' +
                '</div>' +
                '<a href="">' +
                '<div class = "description">' +
                '<div class = "title">' +
                // adds slot for event title, slot will be filled during render
                '<slot name = "title"></slot>' +
                '</div>' +
                '<div class = "date">' +
                // adds slot for event date, slot will be filled during render
                '<slot name = "date"></slot>' +
                '</div>' + 
                '<div class = "city">' +
                // adds slot for city, slot will be filled during render
                '<slot name = "city"></slot>' +
                '</div>' +
                // adds slot for price, slot will be filled during render
                '<div class = "price">' +
                '<slot name = "price"></slot>' +
                '</div>' +
                '</div>' +    
                '</a>' +
                '</div>'
})

var app = new Vue ({
    el: '#app',
    data() {
        return {
          title: 'Use Slots',
      }
    }
  })

  