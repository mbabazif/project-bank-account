var balance;
// business logic
function data(name, initialdeposit) {
  this.Name = name;
  this.Initialdeposit = initialdeposit;
}

data.prototype.fulcalc = function(depo) {
  if (this.Initialdeposit === 0) {
    return "No balance";
  } else if (this.Initialbalance > 0) {
    balance = this.Initialdeposit + depo;
  }
  return balance;
};
data.prototype.bank = function(withd) {
  if (this.Initialdeposit === 0) {
    return "No balance";
  } else if (this.Initialbalance > 0) {
    balance = this.Initialbalance - withd;
  }
  return balance;
};

// function resetfields() {
//   $("input#new-name").val("");
//   $("input#new-initialdeposit").val("");
//   $("input#new-deposit").val("");
//   $("input#new-withdraw").val("");
// }

//  user interface
$(document).ready(function() {
  $("form#Info").submit(function(event) {
    // alert("Seeing me");
    event.preventDefault();
    var inputName = $("input#new-name").val();
    var inputInitialDeposit = parseInt($("input#new-initialdeposit").val());
    // var inputWithdraw = $("input#new-deposit").val();
    var fal = new balance(inputName, inputInitialDeposit);
    $("ul#balance").append(
      "<li><span class='balance'>" +
        fal.Name +
        " " +
        fal.Initialdeposit +
        "</span></li"
    );
    $("#movements").show();
  });
  $("#movements").submit(function(event) {
    event.preventDefault();
    var inputDeposit = parseInt($("input#new-deposit").val());
    // var inputWithdraw = $("input#new-withdraw").val();
    // var finalBalance = new balance(inputDeposit);
    // var finalBalance = new Finalbalance(inputDeposit, inputWithdraw)
    $("ul#balance").append(
      "<li><span class='balance'>" + finalBalance.deposit + "</span></li>"
    );
  });

  $("#draw").submit(function(event) {
    event.preventDefault();
    var inputDeposit = $("input#new-deposit").val();
    var inputWithdraw = $("input#new-withdraw").val();
    var finalBalance = new balance(inputDeposit, inputWithdraw);
    // var finalBalance = new Finalbalance(inputDeposit, inputWithdraw)
    $("ul#balance").append(
      "<li><span class='balance'>" + finalBalance.deposit + "</span></li>"
    );
  });
});
