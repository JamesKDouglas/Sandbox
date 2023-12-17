let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');

inputElement.addEventListener('change', (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

imgElement.onload = function() {
  let mat = cv.imread(imgElement);

  //Now the image file is imported in a standard format. We can process it. 

  // let grayImg = new cv.Mat();
  // cv.cvtColor(mat, grayImg, cv.COLOR_RGBA2GRAY, 0);

  let dst = new cv.Mat();

  let low = new cv.Mat(mat.rows, mat.cols, mat.type(), [0, 0, 0, 0]);
  let high = new cv.Mat(mat.rows, mat.cols, mat.type(), [150, 150, 150, 255]);
  cv.inRange(mat, low, high, dst);
  cv.imshow('canvasOutput', dst);
  mat.delete(); 
  dst.delete();
  
  // cv.imshow('canvasOutput', grayImg);
};
var Module = {
  // https://emscripten.org/docs/api_reference/module.html#Module.onRuntimeInitialized
  onRuntimeInitialized() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
  }
};