var times = document.getElementById('form').word.value;

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

function Show()
{
  document.getElementById("loop").style.visibility="visible";
}
