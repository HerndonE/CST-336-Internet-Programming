

//0451526538
//1594200092
function buildBook() 
{
    
    $.ajax({
        type: "GET",
        url: "https://openlibrary.org/api/books?bibkeys=ISBN:"+$('#number-books').val()+"&format=json&jscmd=data",
        dataType: "json",
        data: { 
        },
        success: function(result, status) 
        {
           console.log(result);
         
            $('#results5').html("<img src="+result["ISBN:"+$('#number-books').val()].cover.large+">");
            $("#results").html("Title: " + result["ISBN:"+$('#number-books').val()].title);
            $("#results1").html("Author: " + result["ISBN:"+$('#number-books').val()].authors[0].name);
            $("#results2").html("Publisher: " + result["ISBN:"+$('#number-books').val()].publish_date);
            $("#results3").html("ISBN: " +$('#number-books').val());
            $("#results4").html("Pages: " + result["ISBN:"+$('#number-books').val()].number_of_pages);
          
           
        }
    }); //ajax 

}





