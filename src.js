import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

alert("Capturing Image")

function handleClick() {
  var captureElement = document.body;

  // html_to_image_append();
  // html_to_image_download();
  // html_to_image_download_2x();
  // html2canvas_append();
  html2canvas_download();

  function html_to_image_append() {
    htmlToImage
      .toPng(captureElement)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  function html_to_image_download() {
    htmlToImage.toPng(captureElement).then(function (dataUrl) {
      saveAs(dataUrl, "html-to-image.png");
    });
  }

  function html_to_image_download_2x() {
    htmlToImage.toPng(captureElement, {pixelRatio: 2}).then(function (dataUrl) {
      saveAs(dataUrl, "html-to-image_2x.png");
    });
  }

  function html2canvas_append() {
    html2canvas(captureElement).then(function (canvas) {
      document.body.appendChild(canvas);
    });
  }

  function html2canvas_download() {
    html2canvas(captureElement).then(function (canvas) {
      const image = canvas.toDataURL("image/png", 1.0);

      canvas.toBlob(function (blob) {
        saveAs(blob, "html2canvas.png");
      });
    });
  }

}
handleClick();
