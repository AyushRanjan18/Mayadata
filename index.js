$(document).ready(function(){

    $("#abtus").click(function(){
        $("#meeting").hide();
        $(".aboutme").show();
        $("#abtus").css("background-color", "#133B5C");
        $("#hme").css("background-color", "#1E5F74");
      });

      $("#hme").click(function(){
        $("#meeting").show();
        $(".aboutme").hide();
        $("#abtus").css("background-color", "#1E5F74");
        $("#hme").css("background-color", "#133B5C");
      });
  
  });