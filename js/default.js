var times;
var IsButtonDown = false;

document.getElementById('form').onsubmit = function()
{
  window.alert(document.getElementById('form').word.value);
  IsButtonDown = true;
  return false;
}

var times = document.getElementById('form').word.value;
if(IsButtonDown)
{
  document.getElementById('loop').style.visibility="visible";
}

for(var i = 1; i < times; i++)
{
  var li = document.createElement('li');
  li.textContent = i + '回目';
  document.getElementById('loop').appendChild(li);
}
