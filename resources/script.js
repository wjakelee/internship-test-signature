let canvas = document.getElementById("sign");
let signaturePad = new SignaturePad(canvas);
let dataURL;

//reset canvas
const resetButton = () => {
  signaturePad.clear();
};

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  let ratio =  Math.max(window.devicePixelRatio || 1, 1);

  // This part causes the canvas to be cleared
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

  signaturePad.clear();
}

window.onresize = resizeCanvas;
resizeCanvas();


//final submission POST
$(document).ready(function(){
  $('#contract').submit(function(event){
    event.preventDefault(); //prevent default action

    let dataURL = signaturePad.toDataURL();
    let color = document.getElementById("color-select").value;
    let name = document.getElementById("name").value;

    //first ajax POST with signature image data URL
    let a1 = $.ajax({
      type: "POST",
      url: "https://www.quixi.com/signature_data",
      data: {
        image_data: dataURL
      }
    });

    // second ajax POST with color and name
    let a2 = $.ajax({
      type: "POST",
      url: "https://www.quixi.com/internship-form",
      data: {
        color: color,
        name: name
      }
    });
    
    //asynchronous ajax calls, first the signature data and second the color/name data
    $.when(a1, a2).done(function(r1, r2) {
      // Each returned resolve has the following structure:
      // [data, textStatus, jqXHR]
      // e.g. To access returned data, access the array at index 0
      console.log(r1[0]);
      console.log(r2[0]);
    });
  });
});