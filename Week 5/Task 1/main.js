// a component which holds a method to find the minimum number out of an array
const Minimum = Vue.component('minimum', {
    props: {nums: {
        type: Array,
      }},
    template: '<div class="minimum"><h4>The minimum number from the array is {{ findMinimum() }}</h4></div>',
    methods: {
        findMinimum: function() {
            var len = this.nums.length;
            var min = this.nums[0];

            for (var i = 0; i < len; i++ ) {
                if (min > this.nums[i]) {
                    min = this.nums[i];
                }
            }
            return min;
        }
    }
   });

   // a component which holds a method to find the maxi mum number out of an array
   const Maximum = Vue.component('maximum', {
    props: {nums: {
        type: Array,
      }},
    template: '<div class="maximum"><h4>The maximum number from the array is {{ findMaximum() }}</h4></div>',
    methods: {
        findMaximum: function() {
            var len = this.nums.length;
            var max = this.nums[0];

            for (var i = 0; i < len; i++ ) {
                if (max < this.nums[i]) {
                    max = this.nums[i];
                }
            }
            return max;
        }
    }
   });

// vue instance which controls the data of the app div
const app = new Vue({
    el: '#app',
    data  : function(){
      return{
        title: 'I am learning vue components!',
        numArray: [4,8,2,20,7,2,5,3,100,6,33,56,24,57,83,24,121,40,87,63,55,23],
        numArray2: [26,76,73,48,46,55,46,35,76,45,25,75,47,89,97,80,63,42],
        numArray3: [45,75,35,38,65,56,47,68,75,81,90,24,33,41,57,62,86],
        }
      },
  });
