var myVue = new Vue({
  el: "#flashcards-app",
  data: {
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
  },
  methods: {
    addCard : function () {
      var category = "history";
      var radios = document.getElementsByName("cat");
      for (var i = 0, n = radios.length; i < n; i++) {
        var ele = radios[i];
        if (ele.checked) {
          category = ele.value;
          break;
        }
      }
      var question = document.getElementById("quest").value;
      var answer = document.getElementById("answr").value;
      var newcard = {
        question:question,
        answer:answer,
        category:category,
        flipped:false
      }
      this.cards.push(newcard);
    }
  }
})