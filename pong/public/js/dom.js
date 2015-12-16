$(document).ready(function (){
  $('.click').click(function (){
    var getter = $.ajax ({
      url: "https://randomuser.me/api/",
      method: 'GET',
      dataType: 'json'
    })
    getter.done(function (returned){
      var result = returned['results'][0]['user']['picture']['thumbnail'];
      $('.pic').empty().append('<img src="'+result+'"/>')
      // $('.left').append(returned['results'][0]['user']['name']['first'])
    })
  })
})
