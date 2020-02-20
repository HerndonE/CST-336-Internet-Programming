
   $(document).ready(function(){

            var score = 0;

            $("button").on("click", gradeQuiz);

            $(".q5Choice").on("click", function(){
                $(".q5Choice").css("background", "");
                $(this).css("background", "rgb(255, 255, 0)");
            });

            displayQ4Choices();

            function displayQ4Choices() {
                let q4ChoicesArray = ["Civil War", "Infinity War", "Dark World", "Endgame"];
                q4ChoicesArray = _.shuffle(q4ChoicesArray);
                for (let i = 0; i < q4ChoicesArray.length; i++){
                    $("#q4Choices").append(`<input type="radio" name="q4" id="${q4ChoicesArray[i]}"
                        value="${q4ChoicesArray[i]}"><label for="${q4ChoicesArray[i]}">
                        ${q4ChoicesArray[i]}</label>`);
                }
            }

            function isFormValid() {
                let isValid = true;
                if ($("#q1").val() == ""){
                    isValid = false;
                    $("#validationFdbk").html("Question 1 was not answered");
                }
                return isValid;
            }

            function rightAnswer(index) {
                $(`#q${index}Feedback`).html("Correct!");
                $(`#q${index}Feedback`).attr("class", "bg-success text-white");
                $(`#markImg${index}`).html("<img src='img/checkmark.png'>");
                score += 20;
            }

            function wrongAnswer(index) {
                $(`#q${index}Feedback`).html("Incorrect!");
                $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
                $(`#markImg${index}`).html("<img src='img/xmark.png' alt='xmark'>");
            }

            function gradeQuiz() {
                $("#validationFdbk").html("");
                if (!isFormValid()){
                    return;
                }

                score = 0;
                let q1Response = $("#q1").val().toLowerCase();
                let q2Response = $("#q2").val();
                let q4 = $("input[name=q4]:checked").val();

                if (q1Response == "thor odinson"){
                    rightAnswer(1);
                }
                else{
                    wrongAnswer(1);
                }

                if (q2Response == "mo"){
                    rightAnswer(2);
                }
                else {
                    wrongAnswer(2);
                }

                if ($("#Loki").is(":checked") && $("#Hela").is(":checked")
                    && !$("#Jackson").is(":checked") && !$("#Hulk").is(":checked")){
                    rightAnswer(3);
                }
                else {
                    wrongAnswer(3);
                }

                if (q4 == "Infinity War"){
                    rightAnswer(4);
                }
                else {
                    wrongAnswer(4);
                }

                //if($("#seal2").css("background-color") == "rgb(255, 255, 0)"){
                  //  rightAnswer(5);
                //}
               if ($("#hammer2").is(":checked")  && !$("#hammer1").is(":checked") && !$("#hammer3").is(":checked") ){
                    rightAnswer(5);
                }
                else{
                    wrongAnswer(5);
                }

                //$("#totalScore").html(`Total Score: ${score}`);

                if(score < 80){
                    $("#totalScore").addClass("red");
                    $("#totalScore").removeClass("green");
                      $("#totalScore").html(`Thor is NOT with you! Total Score: ${score}`);
                }
                else{
                    $("#totalScore").addClass("green");
                    $("#totalScore").removeClass("red");
                     $("#totalScore").html(`Thor is with you! Total Score: ${score}`);
                }

            }
        }) //ready