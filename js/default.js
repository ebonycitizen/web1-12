document.getElementById('form').onsubmit = function()
{
  window.alert(document.getElementById('form').word.value);
  return false;
}
