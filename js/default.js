var times = document.getElementById('form').word.value;
var input = false;
document.getElementById('form').onsubmit = function()
{
    window.alert(document.getElementById('form').word.value);
    input = true;
}

for(var i = 1; i < times; i++)
{
  var li = document.createElement('li');
  if(i%3 === 0 && i%5 === 0)
  {
    li.textContent = 'FizzBuzz';
  }
  else if(i%3 === 0)
  {
    li.textContent = 'Fizz';
  }
  else if(i%5 === 0)
  {
    li.textContent = 'Buzz';
  }
  else
  {
    li.textContent = i;
  }
  document.getElementById('loop').appendChild(li);
}
if(input === true)
{
    history.back();history.back();
}
