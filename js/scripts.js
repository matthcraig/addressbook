$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const street = $("input#street").val();
    const city = $("input#city").val();
    const state = $("input#state").val();
    const zip = $("input#zip").val();

    // $(".name").text(name);
    // $(".street").text(street);
    // $(".city").text(city);
    // $(".state").text(state);
    // $(".zip").text(zip);

    $(".address").show();

    $("h1.result").after($("<p class=\"contact-name\"></p>").text(name));
    $("p.contact-name").first().after($("<p class=\"contact-info\"></p>").text(street + " " + city + " " + state + " " + zip));
    $("h1.result").first().click(function() {
      $("h1.result").next("p.contact-info").toggle();
    });
  });
})