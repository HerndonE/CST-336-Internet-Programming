

function searchDog() 
{
    var name = $('#kd').val()
    
    $.ajax({
        type: "GET",
        url: "https://dog.ceo/api/breeds/image/random/" + name,
        dataType: "json",
        success: function(result, status) 
        {
            $('.flex-container').empty();
           console.log(result);
           result.message.forEach(function(BG){
           var img = "<div class='img-thumbnail flex-item'><img src='" + BG + "'></div>";
           $(".flex-container").append(img);
      });

}
    }); //ajax 

}
