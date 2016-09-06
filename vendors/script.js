console.log('fist bump');

//global variables
var redClick = 0;
var yellowClick = 0;
var greenClick = 0;
var blueClick = 0;

$(document).ready(function () {
  console.log('fire');

  var output = $('#outputDiv');

  $('#redButton').on('click', function() {
    console.log('in redButton');
    output.append('<div class="red square"></div>');
    redClick++;
    $('#redCount').html(redClick);
  });// end redButton click

  $('#yellowButton').on('click', function() {
    console.log('in yellowButton');
    output.append('<div class="yellow square"></div>');
    yellowClick++;
    $('#yellowCount').html(yellowClick);
  });//end yellowButton click

  $('#greenButton').on('click', function() {
    console.log('in greenButton');
    output.append('<div class="green square"></div>');
    greenClick++;
    $('#greenCount').html(greenClick);
  });// end greenButton click

  $('#blueButton').on('click', function() {
    console.log('in blueButton');
    output.append('<div class="blue square"></div>');
    blueClick++;
    $('#blueCount').html(blueClick);
  });// end blueButton click



    $('body').on('click', '.square', function () {
      // console.log('in body square click');
      $(this).addClass('hide');
      console.log($(this).attr('class'));
      if ($(this).attr('class') === 'red square hide') {
          redClick--;
          $('#redCount').html(redClick);
      }
      if ($(this).attr('class') === 'yellow square hide') {
          yellowClick--;
          $('#yellowCount').html(yellowClick);
      }
      if ($(this).attr('class') === 'green square hide') {
          greenClick--;
          $('#greenCount').html(greenClick);
      }
      if ($(this).attr('class') === 'blue square hide') {
          blueClick--;
          $('#blueCount').html(blueClick);
      }
    });// end body on click
});// end doc ready
