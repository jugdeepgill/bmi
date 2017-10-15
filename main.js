function getBMI() {
  document.getElementById('bmiBox').style.display = 'block';

  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;

  var bmi = (weight / height / height) * 10000;
  console.log(bmi);

  document.getElementById('bmi').innerHTML = bmi;

  if (bmi <= 18) {
    document.getElementById('condition').innerHTML = "Underweight";
    document.getElementById('message').className = 'message is-warning'
    document.getElementById('height').className = 'input is-large is-warning column-4'
    document.getElementById('weight').className = 'input is-large is-warning column-4'
    document.getElementById('button').className = 'button is-large is-warning column-4'
    document.getElementById('bmiSpan').className = 'tag is-warning'
    document.getElementById('conditionSpan').className = 'tag is-warning'
  } else if (bmi >= 18 && bmi <= 24.9) {
    document.getElementById('condition').innerHTML = "Healthy & Normal";
    document.getElementById('message').className = 'message is-success'
    document.getElementById('height').className = 'input is-large is-success column-4'
    document.getElementById('weight').className = 'input is-large is-success column-4'
    document.getElementById('button').className = 'button is-large is-success column-4'
    document.getElementById('bmiSpan').className = 'tag is-success'
    document.getElementById('conditionSpan').className = 'tag is-success'
  } else if (bmi > 25 && bmi <= 29.9) {
    document.getElementById('condition').innerHTML = "Overweight";
    document.getElementById('message').className = 'message is-danger'
    document.getElementById('height').className = 'input is-danger is-warning column-4'
    document.getElementById('weight').className = 'input is-danger is-warning column-4'
    document.getElementById('button').className = 'button is-danger is-warning column-4'
    document.getElementById('bmiSpan').className = 'tag is-danger'
    document.getElementById('conditionSpan').className = 'tag is-danger'
  } else {
    document.getElementById('condition').innerHTML = "Obesity";
    document.getElementById('message').className = 'message is-danger'
    document.getElementById('height').className = 'input is-danger is-warning column-4'
    document.getElementById('weight').className = 'input is-danger is-warning column-4'
    document.getElementById('button').className = 'button is-danger is-warning column-4'
    document.getElementById('bmiSpan').className = 'tag is-danger'
    document.getElementById('conditionSpan').className = 'tag is-danger'
  }

}
