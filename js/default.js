var times;
var IsButtonDown = false;

document.getElementById('form').onsubmit = function()
{
  document.getElementById('loop').style.visibility="visible";
  IsButtonDown = true;
  return false;
}

var times = document.getElementById('form').word.value;

if(IsButtonDown === true)
{
  for(var i = 1; i < times; i++)
  {
    var li = document.createElement('li');
    if(i%3 === 0)
    {
      li.textContent = 'Fizz';
    }
    else if(i%5 === 0)
    {
      li.textContent = 'Buzz';
    }
    else if(i%3 === 0 && i%5 === 0)
    {
      li.textContent = 'FizzBuzz';
    }
    else
    {
      li.textContent = i;
    }
    document.getElementById('loop').appendChild(li);
  }
}
