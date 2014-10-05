var counter=1;
$('#button').on('click', function() {
  counter++;
  $(".info"+counter).show();
});
