import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: null
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(currencies => this.currencies = currencies)
      },
      convertFromEuros: function(){
        let result = this.requiredAmount * this.selectedCurrency;
        return result.toFixed(2);
      }
    }
  })
})
