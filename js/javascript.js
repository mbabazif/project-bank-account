// business logic
function balance(name, initialdeposit) {
  this.name = name;
  this.initialdeposit = initialdeposit;
}

balance.prototype.fulcalc = function(balance) {
  if (this.initialdeposit === 0) {
    return "No balance";
  } else if (this.initialbalance > 0) {
    balance = this.initialdeposit + deposit;
  }
  return balance;
};
balance.prototype.fulcalc = function(balance) {
  if (this.initialdeposit === 0) {
    return "No balance";
  } else if (this.initialbalance > 0) {
    balance = this.deposit - this.withdraw;
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
    alert("Seeing me");
    event.preventDefault();
    var inputName = $("input#new-name").val();
    var inputInitialDeposit = parseInt($("input#new-initialdeposit").val());
    // var inputWithdraw = $("input#new-deposit").val();
    var fal = new balance(inputName, inputInitialDeposit);
    $("ul#balance").append(
      "<li><span class='balance'>" +
        fal.name +
        " " +
        fal.initialdeposit +
        "</span></li"
    );
  });
  $(document).ready(function() {
    $("#movements").submit(function(event) {
      alert("Seeing me");
      event.preventDefault();
      var inputDeposit = parseInt($("input#new-deposit").val());

      var finalBalance = new Finalbalance(inputDeposit);
      $("ul#balance").append(
        "<li><span class='balance'>" + finalBalance.deposit + "</span></li>"
      );
    });
    $(document).ready(function() {
      $("#draw").submit(function(event) {
        alert("Seeing me");
        event.preventDefault();
        var inputWithdraw = parseInt($("input#new-withdraw").val());

        $("ul#balance").append(
          "<li><span class='balance'>" + finalBalance.deposit + "</span></li>"
        );
      });
    });
  });
});
