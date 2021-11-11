const $ = document;

function click_b1() {
  const form_1 = $.getElementById("form_1");
  //form_1.hidden = true;
  const input1 = $.getElementById("dt_1").innerText
  const input2 = $.getElementById("tb1").innerText
    $.write(input1 + " " + input2);
}
