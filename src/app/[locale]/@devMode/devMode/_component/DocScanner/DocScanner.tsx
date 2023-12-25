import React, { useEffect, useState } from "react";
import styles from "./DocScanner.module.scss";

// let videoWidth = 0;
// let videoHeight = 0;
let idCardX1 = 0;
let idCardX2 = 0;
let idCardY1 = 0;
let idCardY2 = 0;
let ipad: any;

interface CameraResolution {
  width: number;
  height: number;
  ratio: number;
}

function DocScanner() {
  const [videoWidth, setVideoWidth] = useState(500);
  const [videoHeight, setVideoHeight] = useState(500);
  const [imagesList, setImagesList] = useState("");

  useEffect(() => {
    // if (window.screen.width > window.screen.height) {
    //   setVideoWidth(window.screen.width);
    //   setVideoHeight(window.screen.height);
    // } else {
    //   setVideoWidth(window.screen.height);
    //   setVideoHeight(window.screen.width);
    // }

    ipad = {
      idCardSize: {
        w: 607,
        h: 405,
      },
      screenSize: {
        w: videoWidth,
        h: videoHeight + 20,
      },
      name: "ipad",
    };

    setTimeout(async () => {
      const canvas = document.getElementById(
        "id-card-hightlight"
      ) as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");

      idCardX1 = Math.round((ipad.screenSize.w - ipad.idCardSize.w) / 2);
      idCardX2 = idCardX1 + ipad.idCardSize.w;
      idCardY1 = Math.round((ipad.screenSize.h - ipad.idCardSize.h) / 2);
      idCardY2 = idCardY1 + ipad.idCardSize.h;

      let idCardSizeW = ipad.idCardSize.w;
      let idCardSizeH = ipad.idCardSize.h;

      console.log(
        "🚀 ~ file: DocScanner.tsx:18 ~ useEffect ~ videoWidth:",
        videoWidth
      );
      console.log(
        "🚀 ~ file: DocScanner.tsx:19 ~ useEffect ~ videoHeight:",
        videoHeight
      );

      const footerBarH = 76;

      if (ctx) {
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fillRect(0, 0, idCardX1, canvas.height - footerBarH);

        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fillRect(idCardX2, 0, idCardX1, canvas.height - footerBarH);

        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fillRect(idCardX1, 0, idCardSizeW, idCardY1);

        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fillRect(idCardX1, idCardY2, idCardSizeW, idCardY1 - footerBarH);

        ctx.strokeStyle = "#da0000";
        ctx.lineWidth = 4;

        // lineStroke position
        const x11 = idCardX1 + 2;
        const x22 = idCardX2 - 2;
        const y11 = idCardY1 + 2;
        const y22 = idCardY2 - 2;

        // upper-left to right
        ctx.moveTo(x11, y11);
        ctx.lineTo(x11 + 50, y11);
        ctx.stroke();

        // upper-left to down
        ctx.moveTo(x11, y11);
        ctx.lineTo(x11, y11 + 50);
        ctx.stroke();

        // upper-right to left
        ctx.moveTo(x22, y11);
        ctx.lineTo(x22 - 50, y11);
        ctx.stroke();

        // upper-right to down
        ctx.moveTo(x22, y11);
        ctx.lineTo(x22, y11 + 50);
        ctx.stroke();

        // lower-left to right
        ctx.moveTo(x11, y22);
        ctx.lineTo(x11 + 50, y22);
        ctx.stroke();

        // lower-left to up
        ctx.moveTo(x11, y22);
        ctx.lineTo(x11, y22 - 50);
        ctx.stroke();

        // lower-right to left
        ctx.moveTo(x22, y22);
        ctx.lineTo(x22 - 50, y22);
        ctx.stroke();

        // lower-right to up
        ctx.moveTo(x22, y22);
        ctx.lineTo(x22, y22 - 50);
        ctx.stroke();

        // center upper
        ctx.moveTo(idCardX1 + idCardSizeW / 2, y11);
        ctx.lineTo(idCardX1 + idCardSizeW / 2 - 25, y11);
        ctx.stroke();
        ctx.moveTo(idCardX1 + idCardSizeW / 2, y11);
        ctx.lineTo(idCardX1 + idCardSizeW / 2 + 25, y11);
        ctx.stroke();

        // center bottom
        ctx.moveTo(idCardX1 + idCardSizeW / 2, y22);
        ctx.lineTo(idCardX1 + idCardSizeW / 2 - 25, y22);
        ctx.stroke();
        ctx.moveTo(idCardX1 + idCardSizeW / 2, y22);
        ctx.lineTo(idCardX1 + idCardSizeW / 2 + 25, y22);
        ctx.stroke();

        // center left
        ctx.moveTo(x11, idCardY1 + idCardSizeH / 2);
        ctx.lineTo(x11, idCardY1 + idCardSizeH / 2 - 25);
        ctx.stroke();
        ctx.moveTo(x11, idCardY1 + idCardSizeH / 2);
        ctx.lineTo(x11, idCardY1 + idCardSizeH / 2 + 25);
        ctx.stroke();

        // center right
        ctx.moveTo(x22, idCardY1 + idCardSizeH / 2);
        ctx.lineTo(x22, idCardY1 + idCardSizeH / 2 - 25);
        ctx.stroke();
        ctx.moveTo(x22, idCardY1 + idCardSizeH / 2);
        ctx.lineTo(x22, idCardY1 + idCardSizeH / 2 + 25);
        ctx.stroke();
      }
      await openCamera();
    }, 2000);
  }, []);

  const openCamera = async () => {
    // this.cfpLoadingBar.start();

    console.log("opening camera");

    // const videoResolution = this.sharedStorage.get(
    //   "cameraResolution"
    // ) as CameraResolution;

    const videoResolution = {
      width: 1280,
      height: 706,
      ratio: 1.8113207547169812,
    };

    let videoParam = {
      width: { min: videoResolution.width },
      height: { min: videoResolution.height },
      facingMode: "environment",
    } as MediaTrackConstraints;

    // facingMode: environment mean use back camera
    await navigator.mediaDevices
      .getUserMedia({
        video: videoParam,
        audio: false,
      })
      .then((mediaStream) => {
        console.log(
          "🚀 ~ file: DocScanner.tsx:193 ~ .then ~ mediaStream:",
          mediaStream,
          videoWidth,
          videoHeight
        );
        const video = document.querySelector("#video") as HTMLVideoElement;
        video.srcObject = mediaStream;
        // video.width = videoWidth;
        // video.height = videoHeight;
        console.log("🚀 ~ file: DocScanner.tsx:201 ~ .then ~ video:", video);

        video.onloadedmetadata = () => {
          setTimeout(() => {
            video.play();
          }, 300);
        };
      });
  };

  const takePicture = () => {
    // const videoResolution = this.sharedStorage.get(
    //   "cameraResolution"
    // ) as CameraResolution;

    const videoResolution = {
      width: 1280,
      height: 706,
      ratio: 1.8113207547169812,
    };

    let flashElement = document.getElementById("flash-screen");
    if (flashElement) {
      flashElement.style.animation = "none";
      flashElement.offsetHeight;
      flashElement.style.animation = "flash 0.2s ease-in-out";
    }

    // let shutterSoundElement = document.getElementById('shutter-sound') as HTMLAudioElement;
    // shutterSoundElement.play();

    const video = document.querySelector("#video") as HTMLVideoElement;
    // Get invisible canvas and draw image
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const maxAllowWidth = 1600;
    // canvas.width = videoResolution.width;
    // canvas.height = videoResolution.height;
    canvas.width = maxAllowWidth;
    canvas.height = maxAllowWidth / videoResolution.ratio;

    canvas
      ?.getContext("2d")
      ?.drawImage(video, 0, 0, canvas.width, canvas.height);
    // console.log(image_data_url);
    // if (!this.idCard) {
    //   const image_data_url = canvas.toDataURL("image/jpeg");
    //   this.imagesList.push(image_data_url);
    //   if (this.imagesList.length === 20) {
    //     this.dialogs.flashMessage({
    //       type: "warning",
    //       message: "สามารถถ่ายรูปได้จำกัดจำนวน 20 รูป",
    //     });
    //     this.switchToGallery();
    //   }
    // } else {
    const cropCanvas = document.createElement("canvas") as HTMLCanvasElement;

    console.log("showing id card size : " + JSON.stringify(ipad.idCardSize));

    cropCanvas.width = (ipad.idCardSize.w * canvas.width) / videoWidth;
    cropCanvas.height = (ipad.idCardSize.h * canvas.height) / videoHeight;

    console.log(
      "new id card size when capture : " +
        cropCanvas.width +
        "x" +
        cropCanvas.height
    );

    const x1 = (canvas.width - cropCanvas.width) / 2;
    const y1 = (canvas.height - cropCanvas.height) / 2;
    cropCanvas
      ?.getContext("2d")
      ?.drawImage(
        canvas,
        x1,
        y1,
        cropCanvas.width,
        cropCanvas.height,
        0,
        0,
        cropCanvas.width,
        cropCanvas.height
      );
    const resizeCanvas = document.createElement("canvas") as HTMLCanvasElement;

    resizeCanvas.width = maxAllowWidth;
    resizeCanvas.height = maxAllowWidth / (3 / 2);
    resizeCanvas
      ?.getContext("2d")
      ?.drawImage(cropCanvas, 0, 0, resizeCanvas.width, resizeCanvas.height);
    // const cropCanvasUrl = cropCanvas.toDataURL('image/png')
    // console.log(croppedImageUrl);
    console.log(
      "🚀 ~ file: DocScanner.tsx:305 ~ takePicture ~ resizeCanvas.toDataURL:",
      resizeCanvas.toDataURL("image/png")
    );

    setImagesList(resizeCanvas.toDataURL("image/png"));
    // this.imagesList.length = 0;
    // this.imagesList.push(resizeCanvas.toDataURL("image/png"));
    // this.switchToGallery();
    // }
  };

  //   switchToGallery(crossButton?: boolean) {

  //     const video = document.querySelector('#video') as HTMLMediaElement;
  //     if (video.srcObject) {
  //         const stream = video.srcObject as MediaStream;
  //         stream.getTracks().forEach(track => track.stop());
  //     }

  //     if (this.isFirstTime && crossButton) {
  //         this.routing.goto('scb-widget-checklist', { transition: this.transition.bottom.back });
  //         return;
  //     }
  //     this.cfpLoadingBar.start();

  //     this.tookImage = true;
  //     this.imagePreview = true;

  //     this.$timeout(() => {
  //         this.cfpLoadingBar.complete();
  //     }, 1000);

  // }

  return (
    <div style={{ position: "relative" }}>
      DocScanner
      <canvas
        id="id-card-hightlight"
        width={videoWidth}
        height={videoHeight}
        // width={500}
        // height={500}
        // height="100%"
        // style="z-index: 2; position: absolute;"
        style={{ zIndex: 2, position: "absolute" }}
      ></canvas>
      <video
        id="video"
        style={{ zIndex: 1, backgroundColor: "aquamarine" }}
        width={videoWidth}
        height={videoHeight}
        // width={500}
        // height={500}
      ></video>
      <div id="flash-screen" className={styles.flash}></div>
      {imagesList != "" && (
        <img
          src={imagesList}
          height={100}
          style={{ zIndex: 10000, position: "absolute" }}
        />
      )}
      <div className={styles["footer-shutter"]}>
        <img
          // style="left: 0px; right: 0px; margin: auto;top: 1rem;position: absolute"
          style={{
            left: "0px",
            right: "0px",
            margin: "auto",
            top: "1rem",
            position: "absolute",
          }}
          src="/images/Camera Button.svg"
          height="62px"
          width="auto"
          onClick={takePicture}
          // ng-click="$ctrl.takePicture()"
        />
      </div>
    </div>
  );
}

export default DocScanner;
