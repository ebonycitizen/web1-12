var times = document.getElementById('form').word.value;

document.getElementById('form').onsubmit = function()
{
    window.alert(document.getElementById('form').word.value);
    return false;
}

for(var i = 1; i < 100; i++)
{
  var li = document.createElement('li');
  if(i%3 === 0)
  {
    li.textContent = 'Fizz';
  }
  if(i%5 === 0)
  {
    li.textContent = 'Buzz';
  }
  if(i%3 === 0 && i%5 === 0)
  {
    li.textContent = 'FizzBuzz';
  }
  li.textContent = i;
  document.getElementById('loop').appendChild(li);
}
