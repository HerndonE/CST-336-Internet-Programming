var name = $('#kd').val()

function searchGender() 
{
    
    $.ajax({
        type: "GET",
        url: "https://www.behindthename.com/api/lookup.json?name=",
        dataType: "json",
        data: { "key":"lm991396175",
                "name":$("#kd").val() },
        success: function(result, status) 
        {

        /* This is how the api is structured
        [{"name":"Mary","gender":"f","usages":[{"usage_code":"eng","usage_full":"English",
        "usage_gender":"f"},{"usage_code":"eng-bibl","usage_full":"Biblical",
        "usage_gender":"f"}]}]
        */

           console.log(result);
             $("#result1").html("Name: " + result[0].name);
             
             $("#result2").html("Gender: " + result[0].gender);
    
           if(result[0].gender == 'm')
           {
               $('body').css('background-color','blue');
            
               $('#genderImage').html("<img src='img/MaleSign.png' alt='xmark' width='500'>");
           }
           else if(result[0].gender == 'f')
           {
            $('body').css('background-color','red');
            
            $('#genderImage').html("<img src='img/FemaleSign.jpg' alt='xmark' width='500' >");
           }
           else if(result[0].gender == 'mf')
           {
            $('body').css('background-color','yellow');
            
             $('#genderImage').html("<img src='img/MaleFemaleSign.png' alt='xmark' width='500'>");
           }
           
            //$("#result3").html("Background: " + result[0].usages[0].usage_full);

            $('#result3').html("Background: ");
             result[0].usages.forEach(function(BG)
             {
                $('#result3').append(BG.usage_full + ", "); 
             });
           
        }
    }); //ajax 

}
