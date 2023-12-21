$(document).ready(function () {
  var currentYear = new Date().getFullYear();
  var startYear = 1900;
  var endYearRange = 5;
  var $yearstartselect = $("#yearstart");
  var $yearEndSelect = $("#yearend");
  var $yearstartselectOpt = $("#yearstartopt");
  var $yearEndSelectOpt = $("#yearendopt");
  for (var year = currentYear; year >= startYear; year--) {
    $yearstartselect.append(
      "<option value='" + year + "'>" + year + "</option>"
    );
  }
  for (var year = currentYear + endYearRange; year >= startYear; year--) {
    $yearEndSelect.append("<option value='" + year + "'>" + year + "</option>");
  }
  for (var year = currentYear; year >= startYear; year--) {
    $yearstartselectOpt.append(
      "<option value='" + year + "'>" + year + "</option>"
    );
  }
  for (var year = currentYear + endYearRange; year >= startYear; year--) {
    $yearEndSelectOpt.append(
      "<option value='" + year + "'>" + year + "</option>"
    );
  }
  $(".schoolyear .start").text(currentYear);
  $(".schoolyear .end").text(currentYear);
  $("#yearend").val(currentYear);

  $("#phonenum").on("input", function () {
    // Allow only numeric characters
    $(this).val(function (i, value) {
      return value.replace(/\D/g, "");
    });
  });
  $("#fullname").on("keyup", function () {
    $(".fullname").text($(this).val());

    var inputValue = $(this).val();

    if (inputValue.trim() === "") {
      // If the input is empty, set a default text
      $(".fullname").text("Jane Doe Smith");
    } else {
      // If the input is not empty, set the text to the input value
      $(".fullname").text(inputValue);
    }
  });
  $("#phonenum").on("keyup", function () {
    $(".phonenum").text($(this).val());
    var inputValue = $(this).val();

    if (inputValue.trim() === "") {
      // If the input is empty, set a default text
      $(".phonenum").text("09123456789");
    } else {
      // If the input is not empty, set the text to the input value
      $(".phonenum").text(inputValue);
    }
  });
  $("#email").on("keyup", function () {
    $(".email").text($(this).val());

    var inputValue = $(this).val();

    if (inputValue.trim() === "") {
      // If the input is empty, set a default text
      $(".email").text("sample@mail.only");
    } else {
      // If the input is not empty, set the text to the input value
      $(".email").text(inputValue);
    }
  });
  $("#schoolloc").on("keyup", function () {
    $(".schoolloc").text($(this).val());

    var inputValue = $(this).val();

    if (inputValue.trim() === "") {
      // If the input is empty, set a default text
      $(".schoolloc").text("");
    } else {
      // If the input is not empty, set the text to the input value
      $(".schoolloc").text(inputValue);
    }
  });
  $("#schoollocopt").on("keyup", function () {
    $(".schoollocopt").text($(this).val());

    var inputValue = $(this).val();

    if (inputValue.trim() === "") {
      // If the input is empty, set a default text
      $(".schoollocopt").text("");
    } else {
      // If the input is not empty, set the text to the input value
      $(".schoollocopt").text(inputValue);
    }
  });
  $("#school").on("keyup", function () {
    $(".school").text($(this).val());

    var inputValue = $(this).val();

    if (inputValue.trim() === "") {
      // If the input is empty, set a default text
      $(".school").text("[Name of Institution]");
    } else {
      // If the input is not empty, set the text to the input value
      $(".school").text(inputValue);
    }
  });
  $("#schoolopt").on("keyup", function () {
    $(".schoolopt").text($(this).val());
  });
  $("#course").on("keyup", function () {
    $(".course").text($(this).val());

    var inputValue = $(this).val();

    if (inputValue.trim() === "") {
      // If the input is empty, set a default text
      $(".course").text("[Course]");
    } else {
      // If the input is not empty, set the text to the input value
      $(".course").text(inputValue);
    }
  });
  $("#courseopt").on("keyup", function () {
    $(".courseopt").text($(this).val());
  });
  $(".objective").text(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus ipsa nam, dolores ex mollitia impedit officiis architecto libero odit, quas id nobis voluptatibus consectetur earum delectus. Harum, aliquid ducimus."
  );
  $("#objective").on("keyup", function () {
    $(".objective").text($(this).val());

    var inputValue = $(this).val();

    if (inputValue.trim() === "") {
      // If the input is empty, set a default text
      $(".objective").text(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus ipsa nam, dolores ex mollitia impedit officiis architecto libero odit, quas id nobis voluptatibus consectetur earum delectus. Harum, aliquid ducimus."
      );
      $(".objective").css({
        "border-bottom": "solid 1px #000",
        width: "100%",
        "text-align": "justify",
        "white-space": "pre-wrap",
        "word-wrap": "break-word",
        "max-width": "80%",
        "font-size": "0.75rem",
        // Add more properties as needed
      });
    } else {
      // If the input is not empty, set the text to the input value
      $(".objective").text(inputValue);
    }
  });
  $("#yearstart").on("change", function () {
    var startYearValue = $(this).val();
    $(".schoolyear .start").text(startYearValue);
  });
  $("#yearend").on("change", function () {
    var startYearValue = $(this).val();
    $(".schoolyear .end").text(startYearValue);
  });

  $("#yearstartopt").on("change", function () {
    var selectedOption = $(this).find(":selected");

    if (!selectedOption.prop("disabled")) {
      var startYearValue = $(this).val();
      $(".schoolyear .startopt").text(startYearValue);

      // Set yearendopt to the current year
      $("#yearendopt").val(currentYear);

      // Update endopt value
      $(".schoolyear .endopt").text($("#yearstart").val());

      $(".optto").css("display", "inline-block");
    } else {
      $(".optto").css("display", "none");
    }
  });

  $("#yearendopt").on("change", function () {
    var endYearValue = $(this).val();
    $(".schoolyear .endopt").text(endYearValue);
  });
  $("#sex").on("change", function () {
    $(".sex").text($(this).val());
  });
  $("#height").on("keyup", function () {
    const heightValue = $(this).val();

    if (heightValue) {
      $(".height").text(heightValue + " cm");
    } else {
      $(".height").text("");
    }
  });
  $("#weight").on("keyup", function () {
    const weightValue = $(this).val();

    if (weightValue) {
      $(".weight").text(weightValue + " kg");
    } else {
      $(".weight").text("");
    }
  });
  $("#bday").on("change", function () {
    $(".bday").text(
      new Date($(this).val()).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  });
});