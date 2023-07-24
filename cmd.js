const title1 = document.getElementById("my_title");
const text = document.getElementById("text");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const output = document.getElementById("output");

// TEXT DISPLAY

function fun2() {
  output.innerHTML = title1.value + "<br>" + text.value;
}
submit.addEventListener('click', fun2);

// TEXT RESET

function re_set() {
  output.innerHTML = '';
}
reset.addEventListener('click', re_set);

//IMAGE DISPLAY

const img_inp = document.querySelector("#my-file");
var uploaded_image = "";
img_inp.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

reset.addEventListener("click",function(){
  uploaded_image= " ";
  document.querySelector('#display_image').style.backgroundImage = "";
  img_inp.value = "";
})

// VIDEO DISPLAY

function selectedvideo(self) {
  var file = self.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var src = e.target.result;
    var video = document.getElementById("video_player");
    var source = document.getElementById("source");

    source.setAttribute("src", src);
    video.load();
    video.play();
  };
  reader.readAsDataURL(file);
}

// ADD EVENT LISTENER
document.getElementById("my_video").addEventListener("input", function() {
  selectedvideo(this);
});


// RESET BUTTOON

function resetVideoPlayer() {
  var video = document.getElementById("video_player");
  var source = document.getElementById("source");

  source.setAttribute("src", "");
  video.load();
  video.pause();
}
document.getElementById("reset").addEventListener("click", function() {
  resetVideoPlayer();
});
