var times;

document.getElementById('form').onsubmit = function()
{
  window.alert(document.getElementById('form').word.value);
}

var times = document.getElementById('form').word.value;

  for(var i = 1; i < times; i++)
  {
    var li = document.createElement('li');
    li.textContent = i + '回目';
    document.getElementById('loop').appendChild(li);
  }

