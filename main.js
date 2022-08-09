$('button').on('click', function () {
  var text = $('#message').val();
  var name = $('#name').val();
  var both = text + ' -Posted By: ' + name;

  var removeButton = document.createElement('button');
  removeButton.innerHTML = 'remove';
  removeButton.id = 'oneId';

  var $postsParagraph = $('.posts').append("<p id='someId'>");
  var $postSpan = $('p').append('<span>');
  var $remove = $('span').append(removeButton);
  var $sent = $('span').append(both);
  var $HR = $('span').append('<hr>');

  document.getElementById('message').value = '';
  document.getElementById('name').value = '';

  function clearMessage() {
    $('#someId').remove();
  }
  removeButton.addEventListener('click', function () {
    clearMessage();
  });
});
