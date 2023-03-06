function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  if(isNaN(inputFieldValue)){
    alert('Enter valid number!!!');
    return;
  }
  else if( inputFieldValue < 0){
    alert('Input should not be negative!!!');
    return;
  }
  else{

    return inputFieldValue;
  }
}

function getTextElementValueById(elementId) {

  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  if(isNaN(newValue)){
    return;
  }
  else{

    textElement.innerText = newValue;
  }
}
