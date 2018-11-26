var result;
var calculatorType = prompt("what type of calculator would you like Basic or Advanced");
var checkerString = "yes";


if (calculatorType === "Basic" || calculatorType === "basic") {
  while (checkerString === "yes" || checkerString === "Yes") {
    var num1String = prompt("plese chose first number for the operation");
    num1 = parseFloat(num1String);
    if (isNaN(num1)) {
      num1 = 0;
    }
    var num2String = prompt("please enter value for secont number");
    num2 = parseFloat(num2String);
    if (isNaN(num2)) {
      num2 = 0;
    }
    var operationSign = prompt("now chose operation sign\n / or divide for divsion\n + or add for addition\n * or multiply for mutiplication \n - or subract for subtracing");
    switch (operationSign) {
      case "/":
      case "divide":
      case "Divide":
        {
          result = num1 / num2;
          checkerString = "no";
        }
        break;
      case "+":
      case "add":
      case "Add":
      case "":
        {
          result = num1 + num2;
          checkerString = "no";
        }
        break;
      case "*":
      case "multiply":
      case "Multiply":
        {
          result = num1 * num2;
          checkerString = "No";
        }
        break;
      case "-":
      case "subtract":
      case "Subtract":
        {
          result = num1 - num2;
          checkerString = "no"
          break;
        }
      default:
        var checkerString = prompt("operation sign not avalible would you like to start again?");
    }

    if (checkerString === "yes" || checkerString === "Yes") {
      checker = 1;
    } else if (checkerString === "no" || checkerString === "No") {
      checker = 2;
    }
    else {
      prompt("incorect answer calculator ending")
      checkerString = "no"
    }

  }

}

else if (calculatorType === "advanced" || calculatorType === "Advanced") {
  var num1String = prompt("plese chose first number for the operation");
  num1 = parseFloat(num1String);
  if (isNaN(num1)) {
    num1 = 0;
  }
  var num2String = prompt("please enter value for secont number");
  num2 = parseFloat(num2String);
  if (isNaN(num2)) {
    num2 = 0;
  }
  var operationSign = prompt("now chose operation sign\n / or divide for divsion\n + or add for addition\n * or multiply for mutiplication \n - or subract for subtracing");

  switch (operationSign) {
    case "/":
    case "divide":
    case "Divide":
      {
        result = num1 / num2;

      }
      break;
    case "+":
    case "add":
    case "Add":
    case "":
      {
        result = num1 + num2;

      }
      break;
    case "*":
    case "multiply":
    case "Multiply":
      {
        result = num1 * num2;

      }
      break;
    case "-":
    case "subtract":
    case "Subtract":
      {
        result = num1 - num2;

        break;
      }
    default:
      checkerString = "no";
  }

  window.alert("curent value is " + result);
  var calculatorContinue = prompt("would you like to coninue?")
  if (calculatorContinue === "yes" || calculatorContinue === "Yes") {
    checkerString = "continue"
  }
  else {
    checkerString = "no"
  }
  while (checkerString === "continue") {

    if (calculatorContinue === "yes" || calculatorContinue === "Yes") {
      var numNString = prompt("please enter value for next number");
      numN = parseFloat(numNString);
      var operationSign = prompt("now chose operation sign\n / or divide for divsion\n + or add for addition\n * or multiply for mutiplication \n - or subract for subtracing");
      if (isNaN(numN) && (operationSign === "/" || operationSign === "divide" || operationSign === "Divide" || operationSign === "*" || operationSign === "Multiply" || operationSign === "multiply")) {
        numN = 1;
      } else if (isNaN(numN)) {
        numN = 0;

      }
      switch (operationSign) {
        case "/":
        case "divide":
        case "Divide":
          {
            result = result / numN;
            checkerString = "continue";
          }
          break;
        case "+":
        case "add":
        case "Add":
        case "":
          {
            result = result + numN;
            checkerString = "continue";
          }
          break;
        case "*":
        case "multiply":
        case "Multiply":
          {
            result = result * numN;
            checkerString = "continue";
          }
          break;
        case "-":
        case "subtract":
        case "Subtract":
          {
            result = result - numN;
            checkerString = "continue"
            break;
          }
        default:
          prompt("operation sign not avalible")

      }
    }
    window.alert("curent value is " + result);
    var calculatorContinue = prompt("would you like to coninue?")
    if (calculatorContinue != "yes" || calculatorContinue != "yes") {
      checkerString = "no";
    }
  }

}



console.log(result);
window.alert("final result is :" + result);