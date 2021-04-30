let length = 0
let width = 0
let number = 0

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  length = document.getElementById('input').value
  width = document.getElementById('input2').value

  length = parseInt(length)
  width = parseInt(width)

  number = length * width

  alert(number)
}
