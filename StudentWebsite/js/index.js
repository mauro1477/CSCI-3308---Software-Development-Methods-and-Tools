$(document).ready(function() {
  Object.keys(state_info).forEach(function(state) {
        var apiKey = "4c45ba2b5326000a9af43187a52ca70b" // Enter your API Key here

    var latitude = state_info[state].lat.toString();
    var longitude = state_info[state].lng.toString();
    var url = 'https://api.darksky.net/forecast/' + apiKey +'/' + latitude + ',' + longitude;
     $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
       //var temperature = data.currently.temperature;
       if (data.currently.temperature <= 10){
           $(`#${state}`).css('fill', '#6495ED');
       }
       else if(data.currently.temperature > 10 && data.currently.temperature <= 20){
           $(`#${state}`).css('fill', '#7FFFD4');
       }
       else if(data.currently.temperature > 20 && data.currently.temperature <= 30){
           $(`#${state}`).css('fill', '#0000FF');
       }
       else if(data.currently.temperature > 30 && data.currently.temperature <= 40){
           $(`#${state}`).css('fill', '#008B8B');
       }
       else if(data.currently.temperature > 50 && data.currently.temperature <= 60){
           $(`#${state}`).css('fill', '#00BFFF');
       }
       else if(data.currently.temperature > 60 && data.currently.temperature <= 70){
           $(`#${state}`).css('fill', '#F08080');
       }
       else if(data.currently.temperature > 70 && data.currently.temperature <= 80){
           $(`#${state}`).css('fill', '#CD5C5C');
       }
       else if(data.currently.temperature > 80 && data.currently.temperature <= 90){
           $(`#${state}`).css('fill', '#8B0000');
       }
       else if(data.currently.temperature > 90){
           $(`#${state}`).css('fill', '#FF0000');
       }
       else
       {
         $(`#${state}`).css('fill', '#808080');
       }
     })
  });
});
