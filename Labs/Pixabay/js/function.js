
function searchImage() 
{
    
    $.ajax({
        type: "GET",
        url: "https://pixabay.com/api/",
        dataType: "json",
        data: { "key":"5589438-47a0bca778bf23fc2e8c5bf3e",
                "orientation":$("#orient").val(),
                "q":$("#kd").val() },
        success: function(result, status) 
        {
            result.hits = _.shuffle(result.hits);
            $('#image').html("<img src='"+ result.hits[0].webformatURL+"' width='500'>");
            $('#image').append("<br>Likes: " + result.hits[0].likes)
            
            $('#image2').html("<img src='"+ result.hits[1].webformatURL+"' width='500'>");
            $('#image2').append("<br>Likes: " + result.hits[1].likes)
            
            $('#image3').html("<img src='"+ result.hits[2].webformatURL+"' width='500'>");
            $('#image3').append("<br>Likes: " + result.hits[2].likes)
            
            $('#image4').html("<img src='"+ result.hits[3].webformatURL+"' width='500'>");
            $('#image4').append("<br>Likes: " + result.hits[3].likes)
        }
    }); //ajax 

}