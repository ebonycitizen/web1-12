var IsButtonDown = false;

document.getElementById('form').onsubmit = function()
{
  window.alert(document.getElementById('form').word.value);
  IsButtonDown = true;
}


  for(var i = 1; i < word; i++)
  {
    var li = document.createElement('li');
    li.textContent = i + '回目';
    document.getElementById('loop').appendChild(li);
  }

