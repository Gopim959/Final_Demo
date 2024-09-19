import {
  DomSanitizer,
  HAMMER_LOADER
} from "./chunk-VJLJFJII.js";
import {
  NgIf
} from "./chunk-LMX4Y7SH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgZone,
  Optional,
  Output,
  ViewChild,
  first,
  fromEvent,
  isDevMode,
  merge,
  setClassMetadata,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-6ETDKSOJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/ngx-image-cropper/fesm2022/ngx-image-cropper.mjs
var _c0 = ["wrapper"];
var _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 5, 1);
    ɵɵlistener("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.imageLoadedInView());
    })("mousedown", function ImageCropperComponent_img_2_Template_img_mousedown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("touchstart", function ImageCropperComponent_img_2_Template_img_touchstart_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("error", function ImageCropperComponent_img_2_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.loadImageError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    ɵɵclassProp("ngx-ic-draggable", !ctx_r1.disabled && ctx_r1.allowMoveImage);
    ɵɵproperty("src", ctx_r1.safeImgDataUrl, ɵɵsanitizeUrl);
    ɵɵattribute("alt", ctx_r1.imageAltText);
  }
}
function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 9);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    });
    ɵɵelement(2, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 11);
    ɵɵelement(4, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 12);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    });
    ɵɵelement(6, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(7, "span", 13);
    ɵɵelement(8, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(9, "span", 14);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    });
    ɵɵelement(10, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "span", 15);
    ɵɵelement(12, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(13, "span", 16);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    });
    ɵɵelement(14, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(15, "span", 17);
    ɵɵelement(16, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(17, "span", 18);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(18, "span", 19);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 20);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(20, "span", 21);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
}
function ImageCropperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyboardAccess($event));
    });
    ɵɵelementStart(1, "div", 7);
    ɵɵlistener("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("top", ctx_r1.cropper.y1, "px")("left", ctx_r1.cropper.x1, "px")("width", ctx_r1.cropper.x2 - ctx_r1.cropper.x1, "px")("height", ctx_r1.cropper.y2 - ctx_r1.cropper.y1, "px")("margin-left", ctx_r1.alignImage === "center" ? ctx_r1.marginLeft : null)("visibility", ctx_r1.imageVisible ? "visible" : "hidden");
    ɵɵclassProp("ngx-ic-round", ctx_r1.roundCropper);
    ɵɵattribute("aria-label", ctx_r1.cropperFrameAriaLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.hideResizeSquares);
  }
}
var CropperSettings = class {
  constructor() {
    this.format = "png";
    this.output = "blob";
    this.maintainAspectRatio = true;
    this.transform = {};
    this.aspectRatio = 1;
    this.resetCropOnAspectRatioChange = true;
    this.resizeToWidth = 0;
    this.resizeToHeight = 0;
    this.cropperMinWidth = 0;
    this.cropperMinHeight = 0;
    this.cropperMaxHeight = 0;
    this.cropperMaxWidth = 0;
    this.cropperStaticWidth = 0;
    this.cropperStaticHeight = 0;
    this.canvasRotation = 0;
    this.initialStepSize = 3;
    this.roundCropper = false;
    this.onlyScaleDown = false;
    this.imageQuality = 92;
    this.autoCrop = true;
    this.backgroundColor = null;
    this.containWithinAspectRatio = false;
    this.hideResizeSquares = false;
    this.alignImage = "center";
    this.cropperFrameAriaLabel = "Crop photo";
    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.cropperScaledMaxWidth = 20;
    this.cropperScaledMaxHeight = 20;
    this.stepSize = this.initialStepSize;
  }
  setOptions(options) {
    Object.keys(options).filter((k) => k in this).forEach((k) => this[k] = options[k]);
    this.validateOptions();
  }
  setOptionsFromChanges(changes) {
    Object.keys(changes).filter((k) => k in this).forEach((k) => this[k] = changes[k].currentValue);
    this.validateOptions();
  }
  validateOptions() {
    if (this.maintainAspectRatio && !this.aspectRatio) {
      throw new Error("`aspectRatio` should > 0 when `maintainAspectRatio` is enabled");
    }
  }
};
var MoveTypes;
(function(MoveTypes2) {
  MoveTypes2["Drag"] = "drag";
  MoveTypes2["Move"] = "move";
  MoveTypes2["Resize"] = "resize";
  MoveTypes2["Pinch"] = "pinch";
})(MoveTypes || (MoveTypes = {}));
function getPositionForKey(key) {
  switch (key) {
    case "ArrowUp":
      return "top";
    case "ArrowRight":
      return "right";
    case "ArrowDown":
      return "bottom";
    case "ArrowLeft":
    default:
      return "left";
  }
}
function getInvertedPositionForKey(key) {
  switch (key) {
    case "ArrowUp":
      return "bottom";
    case "ArrowRight":
      return "left";
    case "ArrowDown":
      return "top";
    case "ArrowLeft":
    default:
      return "right";
  }
}
function getEventForKey(key, stepSize) {
  switch (key) {
    case "ArrowUp":
      return {
        clientX: 0,
        clientY: stepSize * -1
      };
    case "ArrowRight":
      return {
        clientX: stepSize,
        clientY: 0
      };
    case "ArrowDown":
      return {
        clientX: 0,
        clientY: stepSize
      };
    case "ArrowLeft":
    default:
      return {
        clientX: stepSize * -1,
        clientY: 0
      };
  }
}
function resizeCanvas(canvas, width, height) {
  const width_source = canvas.width;
  const height_source = canvas.height;
  width = Math.round(width);
  height = Math.round(height);
  const ratio_w = width_source / width;
  const ratio_h = height_source / height;
  const ratio_w_half = Math.ceil(ratio_w / 2);
  const ratio_h_half = Math.ceil(ratio_h / 2);
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const img = ctx.getImageData(0, 0, width_source, height_source);
    const img2 = ctx.createImageData(width, height);
    const data = img.data;
    const data2 = img2.data;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const x2 = (i + j * width) * 4;
        const center_y = j * ratio_h;
        let weight = 0;
        let weights = 0;
        let weights_alpha = 0;
        let gx_r = 0;
        let gx_g = 0;
        let gx_b = 0;
        let gx_a = 0;
        const xx_start = Math.floor(i * ratio_w);
        const yy_start = Math.floor(j * ratio_h);
        let xx_stop = Math.ceil((i + 1) * ratio_w);
        let yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);
        for (let yy = yy_start; yy < yy_stop; yy++) {
          const dy = Math.abs(center_y - yy) / ratio_h_half;
          const center_x = i * ratio_w;
          const w0 = dy * dy;
          for (let xx = xx_start; xx < xx_stop; xx++) {
            const dx = Math.abs(center_x - xx) / ratio_w_half;
            const w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              continue;
            }
            weight = 2 * w * w * w - 3 * w * w + 1;
            const pos_x = 4 * (xx + yy * width_source);
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            if (data[pos_x + 3] < 255)
              weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }
    canvas.width = width;
    canvas.height = height;
    ctx.putImageData(img2, 0, 0);
  }
}
function percentage(percent, totalValue) {
  return percent / 100 * totalValue;
}
var _CropService = class _CropService {
  crop(loadedImage, cropper, settings, output, maxSize) {
    const imagePosition = this.getImagePosition(loadedImage, cropper, settings, maxSize);
    const width = imagePosition.x2 - imagePosition.x1;
    const height = imagePosition.y2 - imagePosition.y1;
    const cropCanvas = document.createElement("canvas");
    cropCanvas.width = width;
    cropCanvas.height = height;
    const ctx = cropCanvas.getContext("2d");
    if (!ctx) {
      return null;
    }
    if (settings.backgroundColor != null) {
      ctx.fillStyle = settings.backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }
    const scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
    const scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
    const {
      translateH,
      translateV
    } = this.getCanvasTranslate(loadedImage, settings, maxSize);
    const transformedImage = loadedImage.transformed;
    ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2 + translateH, transformedImage.size.height / 2 + translateV);
    ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
    ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
    ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
    const result = {
      width,
      height,
      imagePosition,
      cropperPosition: __spreadValues({}, cropper)
    };
    if (settings.containWithinAspectRatio) {
      result.offsetImagePosition = this.getOffsetImagePosition(loadedImage, cropper, settings, maxSize);
    }
    const resizeRatio = this.getResizeRatio(width, height, settings);
    if (resizeRatio !== 1) {
      result.width = Math.round(width * resizeRatio);
      result.height = settings.maintainAspectRatio ? Math.round(result.width / settings.aspectRatio) : Math.round(height * resizeRatio);
      resizeCanvas(cropCanvas, result.width, result.height);
    }
    if (output === "blob") {
      return this.cropToBlob(result, cropCanvas, settings);
    } else {
      result.base64 = cropCanvas.toDataURL("image/" + settings.format, this.getQuality(settings));
      return result;
    }
  }
  cropToBlob(output, cropCanvas, settings) {
    return __async(this, null, function* () {
      output.blob = yield new Promise((resolve) => cropCanvas.toBlob(resolve, "image/" + settings.format, this.getQuality(settings)));
      if (output.blob) {
        output.objectUrl = URL.createObjectURL(output.blob);
      }
      return output;
    });
  }
  getCanvasTranslate(loadedImage, settings, maxSize) {
    if (settings.transform.translateUnit === "px") {
      const ratio = this.getRatio(loadedImage, maxSize);
      return {
        translateH: (settings.transform.translateH || 0) * ratio,
        translateV: (settings.transform.translateV || 0) * ratio
      };
    } else {
      return {
        translateH: settings.transform.translateH ? percentage(settings.transform.translateH, loadedImage.transformed.size.width) : 0,
        translateV: settings.transform.translateV ? percentage(settings.transform.translateV, loadedImage.transformed.size.height) : 0
      };
    }
  }
  getRatio(loadedImage, maxSize) {
    return loadedImage.transformed.size.width / maxSize.width;
  }
  getImagePosition(loadedImage, cropper, settings, maxSize) {
    const ratio = this.getRatio(loadedImage, maxSize);
    const out = {
      x1: Math.round(cropper.x1 * ratio),
      y1: Math.round(cropper.y1 * ratio),
      x2: Math.round(cropper.x2 * ratio),
      y2: Math.round(cropper.y2 * ratio)
    };
    if (!settings.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
    }
    return out;
  }
  getOffsetImagePosition(loadedImage, cropper, settings, maxSize) {
    const canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
    const ratio = this.getRatio(loadedImage, maxSize);
    let offsetX;
    let offsetY;
    if (canvasRotation % 2) {
      offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
      offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
    } else {
      offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
      offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
    }
    const out = {
      x1: Math.round(cropper.x1 * ratio) - offsetX,
      y1: Math.round(cropper.y1 * ratio) - offsetY,
      x2: Math.round(cropper.x2 * ratio) - offsetX,
      y2: Math.round(cropper.y2 * ratio) - offsetY
    };
    if (!settings.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
    }
    return out;
  }
  getResizeRatio(width, height, settings) {
    const ratioWidth = settings.resizeToWidth / width;
    const ratioHeight = settings.resizeToHeight / height;
    const ratios = new Array();
    if (settings.resizeToWidth > 0) {
      ratios.push(ratioWidth);
    }
    if (settings.resizeToHeight > 0) {
      ratios.push(ratioHeight);
    }
    const result = ratios.length === 0 ? 1 : Math.min(...ratios);
    if (result > 1 && !settings.onlyScaleDown) {
      return result;
    }
    return Math.min(result, 1);
  }
  getQuality(settings) {
    return Math.min(1, Math.max(0, settings.imageQuality / 100));
  }
};
_CropService.ɵfac = function CropService_Factory(t) {
  return new (t || _CropService)();
};
_CropService.ɵprov = ɵɵdefineInjectable({
  token: _CropService,
  factory: _CropService.ɵfac,
  providedIn: "root"
});
var CropService = _CropService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _CropperPositionService = class _CropperPositionService {
  resetCropperPosition(sourceImage, cropperPosition, settings, maxSize) {
    if (!sourceImage?.nativeElement) {
      return;
    }
    if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
      cropperPosition.x1 = 0;
      cropperPosition.x2 = maxSize.width > settings.cropperStaticWidth ? settings.cropperStaticWidth : maxSize.width;
      cropperPosition.y1 = 0;
      cropperPosition.y2 = maxSize.height > settings.cropperStaticHeight ? settings.cropperStaticHeight : maxSize.height;
    } else {
      const cropperWidth = Math.min(settings.cropperScaledMaxWidth, maxSize.width);
      const cropperHeight = Math.min(settings.cropperScaledMaxHeight, maxSize.height);
      if (!settings.maintainAspectRatio) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = cropperWidth;
        cropperPosition.y1 = 0;
        cropperPosition.y2 = cropperHeight;
      } else if (maxSize.width / settings.aspectRatio < maxSize.height) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = cropperWidth;
        const cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
        cropperPosition.y1 = (maxSize.height - cropperHeightWithAspectRatio) / 2;
        cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
      } else {
        cropperPosition.y1 = 0;
        cropperPosition.y2 = cropperHeight;
        const cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
        cropperPosition.x1 = (maxSize.width - cropperWidthWithAspectRatio) / 2;
        cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
      }
    }
  }
  move(event, moveStart, cropperPosition) {
    const diffX = this.getClientX(event) - moveStart.clientX;
    const diffY = this.getClientY(event) - moveStart.clientY;
    cropperPosition.x1 = moveStart.x1 + diffX;
    cropperPosition.y1 = moveStart.y1 + diffY;
    cropperPosition.x2 = moveStart.x2 + diffX;
    cropperPosition.y2 = moveStart.y2 + diffY;
  }
  resize(event, moveStart, cropperPosition, maxSize, settings) {
    const moveX = this.getClientX(event) - moveStart.clientX;
    const moveY = this.getClientY(event) - moveStart.clientY;
    switch (moveStart.position) {
      case "left":
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        break;
      case "topleft":
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case "top":
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case "topright":
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case "right":
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        break;
      case "bottomright":
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case "bottom":
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case "bottomleft":
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case "center":
        const scale = event.scale;
        const newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, Math.abs(moveStart.x2 - moveStart.x1) * scale), settings.cropperScaledMaxWidth);
        const newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, Math.abs(moveStart.y2 - moveStart.y1) * scale), settings.cropperScaledMaxHeight);
        cropperPosition.x1 = moveStart.clientX - newWidth / 2;
        cropperPosition.x2 = moveStart.clientX + newWidth / 2;
        cropperPosition.y1 = moveStart.clientY - newHeight / 2;
        cropperPosition.y2 = moveStart.clientY + newHeight / 2;
        if (cropperPosition.x1 < 0) {
          cropperPosition.x2 -= cropperPosition.x1;
          cropperPosition.x1 = 0;
        } else if (cropperPosition.x2 > maxSize.width) {
          cropperPosition.x1 -= cropperPosition.x2 - maxSize.width;
          cropperPosition.x2 = maxSize.width;
        }
        if (cropperPosition.y1 < 0) {
          cropperPosition.y2 -= cropperPosition.y1;
          cropperPosition.y1 = 0;
        } else if (cropperPosition.y2 > maxSize.height) {
          cropperPosition.y1 -= cropperPosition.y2 - maxSize.height;
          cropperPosition.y2 = maxSize.height;
        }
        break;
    }
    if (settings.maintainAspectRatio) {
      this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
    }
  }
  checkAspectRatio(position, cropperPosition, maxSize, settings) {
    let overflowX = 0;
    let overflowY = 0;
    switch (position) {
      case "top":
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "bottom":
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "topleft":
        cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(0 - cropperPosition.x1, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "topright":
        cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "right":
      case "bottomright":
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "left":
      case "bottomleft":
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(0 - cropperPosition.x1, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "center":
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
        const overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
        const overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
        const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
          cropperPosition.x1 += overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 * settings.aspectRatio : overflowX1;
          cropperPosition.x2 -= overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 * settings.aspectRatio : overflowX2;
          cropperPosition.y1 += overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
          cropperPosition.y2 -= overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
        }
        break;
    }
  }
  getClientX(event) {
    if ("touches" in event && event.touches[0])
      return event.touches[0].clientX;
    else if ("clientX" in event) {
      return event.clientX;
    }
    return 0;
  }
  getClientY(event) {
    if ("touches" in event && event.touches[0])
      return event.touches[0].clientY;
    else if ("clientX" in event) {
      return event.clientY;
    }
    return 0;
  }
};
_CropperPositionService.ɵfac = function CropperPositionService_Factory(t) {
  return new (t || _CropperPositionService)();
};
_CropperPositionService.ɵprov = ɵɵdefineInjectable({
  token: _CropperPositionService,
  factory: _CropperPositionService.ɵfac,
  providedIn: "root"
});
var CropperPositionService = _CropperPositionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CropperPositionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var testAutoOrientationImageURL = "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==";
function supportsAutomaticRotation() {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const supported = img.width === 1 && img.height === 2;
      resolve(supported);
    };
    img.src = testAutoOrientationImageURL;
  });
}
function getTransformationsFromExifData(exifRotationOrArrayBuffer) {
  if (typeof exifRotationOrArrayBuffer === "object") {
    exifRotationOrArrayBuffer = getExifRotation(exifRotationOrArrayBuffer);
  }
  switch (exifRotationOrArrayBuffer) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };
    case 3:
      return {
        rotate: 2,
        flip: false
      };
    case 4:
      return {
        rotate: 2,
        flip: true
      };
    case 5:
      return {
        rotate: 1,
        flip: true
      };
    case 6:
      return {
        rotate: 1,
        flip: false
      };
    case 7:
      return {
        rotate: 3,
        flip: true
      };
    case 8:
      return {
        rotate: 3,
        flip: false
      };
    default:
      return {
        rotate: 0,
        flip: false
      };
  }
}
function getExifRotation(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  if (view.getUint16(0, false) !== 65496) {
    return -2;
  }
  const length = view.byteLength;
  let offset = 2;
  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8)
      return -1;
    const marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 65505) {
      if (view.getUint32(offset += 2, false) !== 1165519206) {
        return -1;
      }
      const little = view.getUint16(offset += 6, false) == 18761;
      offset += view.getUint32(offset + 4, little);
      const tags = view.getUint16(offset, little);
      offset += 2;
      for (let i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 274) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 65280) !== 65280) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }
  return -1;
}
var _LoadImageService = class _LoadImageService {
  constructor() {
    this.autoRotateSupported = supportsAutomaticRotation();
  }
  loadImageFile(file, cropperSettings) {
    return __async(this, null, function* () {
      const arrayBuffer = yield file.arrayBuffer();
      return yield this.checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, file.type, cropperSettings);
    });
  }
  checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, imageType, cropperSettings) {
    if (!this.isValidImageType(imageType)) {
      return Promise.reject(new Error("Invalid image type"));
    }
    return this.loadImageFromArrayBuffer(arrayBuffer, cropperSettings, imageType);
  }
  isValidImageType(type) {
    return /image\/(png|jpg|jpeg|bmp|gif|tiff|svg|webp|x-icon|vnd.microsoft.icon)/.test(type);
  }
  loadImageFromURL(url, cropperSettings) {
    return __async(this, null, function* () {
      const res = yield fetch(url);
      const blob = yield res.blob();
      const buffer = yield blob.arrayBuffer();
      return yield this.loadImageFromArrayBuffer(buffer, cropperSettings, blob.type);
    });
  }
  loadBase64Image(imageBase64, cropperSettings) {
    const arrayBuffer = this.base64ToArrayBuffer(imageBase64);
    return this.loadImageFromArrayBuffer(arrayBuffer, cropperSettings);
  }
  base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data:([^;]+);base64,/gmi, "");
    const binaryString = atob(imageBase64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
  loadImageFromArrayBuffer(arrayBuffer, cropperSettings, imageType) {
    return __async(this, null, function* () {
      const res = yield new Promise((resolve, reject) => __async(this, null, function* () {
        try {
          const blob = new Blob([arrayBuffer], imageType ? {
            type: imageType
          } : void 0);
          const objectUrl = URL.createObjectURL(blob);
          const originalImage = new Image();
          const isSvg = imageType === "image/svg+xml";
          const originalImageSize = isSvg ? yield this.getSvgImageSize(blob) : void 0;
          originalImage.onload = () => resolve({
            originalImage,
            originalImageSize,
            originalObjectUrl: objectUrl,
            originalArrayBuffer: arrayBuffer
          });
          originalImage.onerror = reject;
          originalImage.src = objectUrl;
        } catch (e) {
          reject(e);
        }
      }));
      return yield this.transformImageFromArrayBuffer(res, cropperSettings, res.originalImageSize != null);
    });
  }
  getSvgImageSize(blob) {
    return __async(this, null, function* () {
      const parser = new DOMParser();
      const doc = parser.parseFromString(yield blob.text(), "image/svg+xml");
      const svgElement = doc.querySelector("svg");
      if (!svgElement) {
        throw Error("Failed to parse SVG image");
      }
      const widthAttr = svgElement.getAttribute("width");
      const heightAttr = svgElement.getAttribute("height");
      if (widthAttr && heightAttr) {
        return null;
      }
      const viewBoxAttr = svgElement.getAttribute("viewBox") || svgElement.getAttribute("viewbox");
      if (viewBoxAttr) {
        const viewBox = viewBoxAttr.split(" ");
        return {
          width: +viewBox[2],
          height: +viewBox[3]
        };
      }
      throw Error("Failed to load SVG image. SVG must have width + height or viewBox definition.");
    });
  }
  transformImageFromArrayBuffer(res, cropperSettings, forceTransform = false) {
    return __async(this, null, function* () {
      const autoRotate = yield this.autoRotateSupported;
      const exifTransform = getTransformationsFromExifData(autoRotate ? -1 : res.originalArrayBuffer);
      if (!res.originalImage || !res.originalImage.complete) {
        return Promise.reject(new Error("No image loaded"));
      }
      const loadedImage = {
        original: {
          objectUrl: res.originalObjectUrl,
          image: res.originalImage,
          size: res.originalImageSize ?? {
            width: res.originalImage.naturalWidth,
            height: res.originalImage.naturalHeight
          }
        },
        exifTransform
      };
      return this.transformLoadedImage(loadedImage, cropperSettings, forceTransform);
    });
  }
  transformLoadedImage(loadedImage, cropperSettings, forceTransform = false) {
    return __async(this, null, function* () {
      const canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
      const originalSize = loadedImage.original.size;
      if (!forceTransform && canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
        return {
          original: {
            objectUrl: loadedImage.original.objectUrl,
            image: loadedImage.original.image,
            size: __spreadValues({}, originalSize)
          },
          transformed: {
            objectUrl: loadedImage.original.objectUrl,
            image: loadedImage.original.image,
            size: __spreadValues({}, originalSize)
          },
          exifTransform: loadedImage.exifTransform
        };
      }
      const transformedSize = this.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
      const canvas = document.createElement("canvas");
      canvas.width = transformedSize.width;
      canvas.height = transformedSize.height;
      const ctx = canvas.getContext("2d");
      ctx?.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
      ctx?.rotate(Math.PI * (canvasRotation / 2));
      ctx?.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
      const blob = yield new Promise((resolve) => canvas.toBlob(resolve, cropperSettings.format));
      if (!blob) {
        throw new Error("Failed to get Blob for transformed image.");
      }
      const objectUrl = URL.createObjectURL(blob);
      const transformedImage = yield this.loadImageFromObjectUrl(objectUrl);
      return {
        original: {
          objectUrl: loadedImage.original.objectUrl,
          image: loadedImage.original.image,
          size: __spreadValues({}, originalSize)
        },
        transformed: {
          objectUrl,
          image: transformedImage,
          size: {
            width: transformedImage.width,
            height: transformedImage.height
          }
        },
        exifTransform: loadedImage.exifTransform
      };
    });
  }
  loadImageFromObjectUrl(objectUrl) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = objectUrl;
    });
  }
  getTransformedSize(originalSize, exifTransform, cropperSettings) {
    const canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
    if (cropperSettings.containWithinAspectRatio) {
      if (canvasRotation % 2) {
        const minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
        const minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
        return {
          width: Math.max(originalSize.height, minWidthToContain),
          height: Math.max(originalSize.width, minHeightToContain)
        };
      } else {
        const minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
        const minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
        return {
          width: Math.max(originalSize.width, minWidthToContain),
          height: Math.max(originalSize.height, minHeightToContain)
        };
      }
    }
    if (canvasRotation % 2) {
      return {
        height: originalSize.width,
        width: originalSize.height
      };
    }
    return {
      width: originalSize.width,
      height: originalSize.height
    };
  }
};
_LoadImageService.ɵfac = function LoadImageService_Factory(t) {
  return new (t || _LoadImageService)();
};
_LoadImageService.ɵprov = ɵɵdefineInjectable({
  token: _LoadImageService,
  factory: _LoadImageService.ɵfac,
  providedIn: "root"
});
var LoadImageService = _LoadImageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadImageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ImageCropperComponent = class _ImageCropperComponent {
  constructor(cropService, cropperPositionService, loadImageService, sanitizer, cd, zone, hammerLoader) {
    this.cropService = cropService;
    this.cropperPositionService = cropperPositionService;
    this.loadImageService = loadImageService;
    this.sanitizer = sanitizer;
    this.cd = cd;
    this.zone = zone;
    this.hammerLoader = hammerLoader;
    this.settings = new CropperSettings();
    this.setImageMaxSizeRetries = 0;
    this.resizedWhileHidden = false;
    this.marginLeft = "0px";
    this.maxSize = {
      width: 0,
      height: 0
    };
    this.moveTypes = MoveTypes;
    this.imageVisible = false;
    this.cropperFrameAriaLabel = this.settings.cropperFrameAriaLabel;
    this.output = this.settings.output;
    this.format = this.settings.format;
    this.transform = {};
    this.maintainAspectRatio = this.settings.maintainAspectRatio;
    this.aspectRatio = this.settings.aspectRatio;
    this.resetCropOnAspectRatioChange = this.settings.resetCropOnAspectRatioChange;
    this.resizeToWidth = this.settings.resizeToWidth;
    this.resizeToHeight = this.settings.resizeToHeight;
    this.cropperMinWidth = this.settings.cropperMinWidth;
    this.cropperMinHeight = this.settings.cropperMinHeight;
    this.cropperMaxHeight = this.settings.cropperMaxHeight;
    this.cropperMaxWidth = this.settings.cropperMaxWidth;
    this.cropperStaticWidth = this.settings.cropperStaticWidth;
    this.cropperStaticHeight = this.settings.cropperStaticHeight;
    this.canvasRotation = this.settings.canvasRotation;
    this.initialStepSize = this.settings.initialStepSize;
    this.roundCropper = this.settings.roundCropper;
    this.onlyScaleDown = this.settings.onlyScaleDown;
    this.imageQuality = this.settings.imageQuality;
    this.autoCrop = this.settings.autoCrop;
    this.backgroundColor = this.settings.backgroundColor;
    this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
    this.hideResizeSquares = this.settings.hideResizeSquares;
    this.allowMoveImage = false;
    this.cropper = {
      x1: -100,
      y1: -100,
      x2: 1e4,
      y2: 1e4
    };
    this.alignImage = this.settings.alignImage;
    this.disabled = false;
    this.hidden = false;
    this.imageCropped = new EventEmitter();
    this.startCropImage = new EventEmitter();
    this.imageLoaded = new EventEmitter();
    this.cropperReady = new EventEmitter();
    this.loadImageFailed = new EventEmitter();
    this.transformChange = new EventEmitter();
    this.reset();
  }
  ngOnChanges(changes) {
    this.onChangesUpdateSettings(changes);
    this.onChangesInputImage(changes);
    if (this.loadedImage?.original.image.complete && (changes["containWithinAspectRatio"] || changes["canvasRotation"])) {
      this.loadImageService.transformLoadedImage(this.loadedImage, this.settings).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
    }
    if (changes["cropper"] || changes["maintainAspectRatio"] || changes["aspectRatio"]) {
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      if (this.maintainAspectRatio && (this.resetCropOnAspectRatioChange || !this.aspectRatioIsCorrect()) && (changes["maintainAspectRatio"] || changes["aspectRatio"])) {
        this.resetCropperPosition();
      } else if (changes["cropper"]) {
        this.checkCropperPosition(false);
        this.doAutoCrop();
      }
    }
    if (changes["transform"]) {
      this.transform = this.transform || {};
      this.setCssTransform();
      this.doAutoCrop();
    }
    if (changes["hidden"] && this.resizedWhileHidden && !this.hidden) {
      setTimeout(() => {
        this.onResize();
        this.resizedWhileHidden = false;
      });
    }
  }
  onChangesUpdateSettings(changes) {
    this.settings.setOptionsFromChanges(changes);
    if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
      this.hideResizeSquares = true;
      this.settings.setOptions({
        hideResizeSquares: true,
        cropperMinWidth: this.settings.cropperStaticWidth,
        cropperMinHeight: this.settings.cropperStaticHeight,
        cropperMaxHeight: this.settings.cropperStaticHeight,
        cropperMaxWidth: this.settings.cropperStaticWidth,
        maintainAspectRatio: false
      });
    }
  }
  onChangesInputImage(changes) {
    if (changes["imageChangedEvent"] || changes["imageURL"] || changes["imageBase64"] || changes["imageFile"]) {
      this.reset();
    }
    if (changes["imageChangedEvent"] && this.isValidImageChangedEvent()) {
      this.loadImageFile(this.imageChangedEvent.target.files[0]);
    }
    if (changes["imageURL"] && this.imageURL) {
      this.loadImageFromURL(this.imageURL);
    }
    if (changes["imageBase64"] && this.imageBase64) {
      this.loadBase64Image(this.imageBase64);
    }
    if (changes["imageFile"] && this.imageFile) {
      this.loadImageFile(this.imageFile);
    }
  }
  isValidImageChangedEvent() {
    const files = this.imageChangedEvent?.target?.files;
    return files instanceof FileList && files.length > 0;
  }
  setCssTransform() {
    const translateUnit = this.transform?.translateUnit || "%";
    this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle(`translate(${this.transform.translateH || 0}${translateUnit}, ${this.transform.translateV || 0}${translateUnit}) scaleX(` + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ") scaleY(" + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ") rotate(" + (this.transform.rotate || 0) + "deg)");
  }
  ngOnInit() {
    this.settings.stepSize = this.initialStepSize;
    this.activatePinchGesture();
  }
  reset() {
    this.imageVisible = false;
    this.loadedImage = void 0;
    this.safeImgDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
    this.moveStart = {
      active: false,
      type: null,
      position: null,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      clientX: 0,
      clientY: 0
    };
    this.maxSize = {
      width: 0,
      height: 0
    };
    this.cropper.x1 = -100;
    this.cropper.y1 = -100;
    this.cropper.x2 = 1e4;
    this.cropper.y2 = 1e4;
  }
  loadImageFile(file) {
    this.loadImageService.loadImageFile(file, this.settings).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  loadBase64Image(imageBase64) {
    this.loadImageService.loadBase64Image(imageBase64, this.settings).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  loadImageFromURL(url) {
    this.loadImageService.loadImageFromURL(url, this.settings).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  setLoadedImage(loadedImage) {
    this.loadedImage = loadedImage;
    this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.objectUrl);
    this.cd.markForCheck();
  }
  loadImageError(error) {
    console.error(error);
    this.loadImageFailed.emit();
  }
  imageLoadedInView() {
    if (this.loadedImage != null) {
      this.imageLoaded.emit(this.loadedImage);
      this.setImageMaxSizeRetries = 0;
      setTimeout(() => this.checkImageMaxSizeRecursively());
    }
  }
  checkImageMaxSizeRecursively() {
    if (this.setImageMaxSizeRetries > 40) {
      this.loadImageFailed.emit();
    } else if (this.sourceImageLoaded()) {
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      this.resetCropperPosition();
      this.cropperReady.emit(__spreadValues({}, this.maxSize));
      this.cd.markForCheck();
    } else {
      this.setImageMaxSizeRetries++;
      setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
    }
  }
  sourceImageLoaded() {
    return this.sourceImage?.nativeElement?.offsetWidth > 0;
  }
  onResize() {
    if (!this.loadedImage) {
      return;
    }
    if (this.hidden) {
      this.resizedWhileHidden = true;
    } else {
      const oldMaxSize = __spreadValues({}, this.maxSize);
      this.setMaxSize();
      this.resizeCropperPosition(oldMaxSize);
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
    }
  }
  activatePinchGesture() {
    return __async(this, null, function* () {
      yield this.hammerLoader?.();
      const Hammer = window?.["Hammer"] || null;
      if (Hammer) {
        const hammer = new Hammer(this.wrapper.nativeElement);
        hammer.get("pinch").set({
          enable: true
        });
        hammer.on("pinchmove", this.onPinch.bind(this));
        hammer.on("pinchend", this.pinchStop.bind(this));
        hammer.on("pinchstart", this.startPinch.bind(this));
      } else if (isDevMode()) {
        console.warn("[NgxImageCropper] Could not find HammerJS - Pinch Gesture won't work");
      }
    });
  }
  resizeCropperPosition(oldMaxSize) {
    if (oldMaxSize.width !== this.maxSize.width || oldMaxSize.height !== this.maxSize.height) {
      this.cropper.x1 = this.cropper.x1 * this.maxSize.width / oldMaxSize.width;
      this.cropper.x2 = this.cropper.x2 * this.maxSize.width / oldMaxSize.width;
      this.cropper.y1 = this.cropper.y1 * this.maxSize.height / oldMaxSize.height;
      this.cropper.y2 = this.cropper.y2 * this.maxSize.height / oldMaxSize.height;
    }
  }
  resetCropperPosition() {
    this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings, this.maxSize);
    this.doAutoCrop();
    this.imageVisible = true;
  }
  keyboardAccess(event) {
    this.changeKeyboardStepSize(event);
    this.keyboardMoveCropper(event);
  }
  changeKeyboardStepSize(event) {
    const key = +event.key;
    if (key >= 1 && key <= 9) {
      this.settings.stepSize = key;
    }
  }
  keyboardMoveCropper(event) {
    const keyboardWhiteList = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"];
    if (!keyboardWhiteList.includes(event.key)) {
      return;
    }
    const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
    const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
    const moveEvent = getEventForKey(event.key, this.settings.stepSize);
    event.preventDefault();
    event.stopPropagation();
    this.startMove({
      clientX: 0,
      clientY: 0
    }, moveType, position);
    this.handleMouseMove(moveEvent);
    this.handleMouseUp();
  }
  startMove(event, moveType, position = null) {
    if (this.disabled || this.moveStart?.active && this.moveStart?.type === MoveTypes.Pinch || moveType === MoveTypes.Drag && !this.allowMoveImage) {
      return;
    }
    if ("preventDefault" in event) {
      event.preventDefault();
    }
    this.moveStart = __spreadValues({
      active: true,
      type: moveType,
      position,
      transform: __spreadValues({}, this.transform),
      clientX: this.cropperPositionService.getClientX(event),
      clientY: this.cropperPositionService.getClientY(event)
    }, this.cropper);
    this.initMouseMove();
  }
  initMouseMove() {
    merge(fromEvent(document, "mousemove"), fromEvent(document, "touchmove")).pipe(takeUntil(merge(fromEvent(document, "mouseup"), fromEvent(document, "touchend")).pipe(first()))).subscribe({
      next: (event) => this.zone.run(() => {
        this.handleMouseMove(event);
        this.cd.markForCheck();
      }),
      complete: () => this.zone.run(() => {
        this.handleMouseUp();
        this.cd.markForCheck();
      })
    });
  }
  startPinch(event) {
    if (!this.safeImgDataUrl) {
      return;
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    this.moveStart = __spreadValues({
      active: true,
      type: MoveTypes.Pinch,
      position: "center",
      clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
      clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2
    }, this.cropper);
  }
  handleMouseMove(event) {
    if (this.moveStart.active) {
      if ("stopPropagation" in event) {
        event.stopPropagation();
      }
      if ("preventDefault" in event) {
        event.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Move) {
        this.cropperPositionService.move(event, this.moveStart, this.cropper);
        this.checkCropperPosition(true);
      } else if (this.moveStart.type === MoveTypes.Resize) {
        if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
          this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
        }
        this.checkCropperPosition(false);
      } else if (this.moveStart.type === MoveTypes.Drag) {
        const diffX = this.cropperPositionService.getClientX(event) - this.moveStart.clientX;
        const diffY = this.cropperPositionService.getClientY(event) - this.moveStart.clientY;
        this.transform = __spreadProps(__spreadValues({}, this.transform), {
          translateH: (this.moveStart.transform?.translateH || 0) + diffX,
          translateV: (this.moveStart.transform?.translateV || 0) + diffY
        });
        this.setCssTransform();
      }
    }
  }
  onPinch(event) {
    if (this.moveStart.active) {
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Pinch) {
        this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
        this.checkCropperPosition(false);
      }
      this.cd.markForCheck();
    }
  }
  setMaxSize() {
    if (this.sourceImage) {
      const sourceImageStyle = getComputedStyle(this.sourceImage.nativeElement);
      this.maxSize.width = parseFloat(sourceImageStyle.width);
      this.maxSize.height = parseFloat(sourceImageStyle.height);
      this.marginLeft = this.sanitizer.bypassSecurityTrustStyle("calc(50% - " + this.maxSize.width / 2 + "px)");
    }
  }
  setCropperScaledMinSize() {
    if (this.loadedImage?.transformed?.image) {
      this.setCropperScaledMinWidth();
      this.setCropperScaledMinHeight();
    } else {
      this.settings.cropperScaledMinWidth = 20;
      this.settings.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMinWidth() {
    this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width) : 20;
  }
  setCropperScaledMinHeight() {
    if (this.maintainAspectRatio) {
      this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
    } else if (this.cropperMinHeight > 0) {
      this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
    } else {
      this.settings.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMaxSize() {
    if (this.loadedImage?.transformed?.image) {
      const ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
      this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
      this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
      if (this.maintainAspectRatio) {
        if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
          this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
        } else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
          this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
        }
      }
    } else {
      this.settings.cropperScaledMaxWidth = this.maxSize.width;
      this.settings.cropperScaledMaxHeight = this.maxSize.height;
    }
  }
  checkCropperPosition(maintainSize = false) {
    if (this.cropper.x1 < 0) {
      this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
      this.cropper.x1 = 0;
    }
    if (this.cropper.y1 < 0) {
      this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
      this.cropper.y1 = 0;
    }
    if (this.cropper.x2 > this.maxSize.width) {
      this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
      this.cropper.x2 = this.maxSize.width;
    }
    if (this.cropper.y2 > this.maxSize.height) {
      this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
      this.cropper.y2 = this.maxSize.height;
    }
  }
  handleMouseUp() {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      if (this.moveStart?.type === MoveTypes.Drag) {
        this.transformChange.emit(this.transform);
      } else {
        this.doAutoCrop();
      }
    }
  }
  pinchStop() {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      this.doAutoCrop();
    }
  }
  doAutoCrop() {
    if (this.autoCrop) {
      void this.crop();
    }
  }
  crop(output = this.settings.output) {
    if (this.loadedImage?.transformed?.image != null) {
      this.startCropImage.emit();
      if (output === "blob") {
        return this.cropToBlob();
      } else if (output === "base64") {
        return this.cropToBase64();
      }
    }
    return null;
  }
  cropToBlob() {
    return new Promise((resolve, reject) => this.zone.run(() => __async(this, null, function* () {
      const result = yield this.cropService.crop(this.loadedImage, this.cropper, this.settings, "blob", this.maxSize);
      if (result) {
        this.imageCropped.emit(result);
        resolve(result);
      } else {
        reject("Crop image failed");
      }
    })));
  }
  cropToBase64() {
    const result = this.cropService.crop(this.loadedImage, this.cropper, this.settings, "base64", this.maxSize);
    if (result) {
      this.imageCropped.emit(result);
      return result;
    }
    return null;
  }
  aspectRatioIsCorrect() {
    const currentCropAspectRatio = (this.cropper.x2 - this.cropper.x1) / (this.cropper.y2 - this.cropper.y1);
    return currentCropAspectRatio === this.aspectRatio;
  }
};
_ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
  return new (t || _ImageCropperComponent)(ɵɵdirectiveInject(CropService), ɵɵdirectiveInject(CropperPositionService), ɵɵdirectiveInject(LoadImageService), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(HAMMER_LOADER, 8));
};
_ImageCropperComponent.ɵcmp = ɵɵdefineComponent({
  type: _ImageCropperComponent,
  selectors: [["image-cropper"]],
  viewQuery: function ImageCropperComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sourceImage = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("resize", function ImageCropperComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, ɵɵresolveWindow);
    }
    if (rf & 2) {
      ɵɵstyleProp("text-align", ctx.alignImage);
      ɵɵclassProp("disabled", ctx.disabled)("ngx-ix-hidden", ctx.hidden);
    }
  },
  inputs: {
    imageChangedEvent: "imageChangedEvent",
    imageURL: "imageURL",
    imageBase64: "imageBase64",
    imageFile: "imageFile",
    imageAltText: "imageAltText",
    cropperFrameAriaLabel: "cropperFrameAriaLabel",
    output: "output",
    format: "format",
    transform: "transform",
    maintainAspectRatio: "maintainAspectRatio",
    aspectRatio: "aspectRatio",
    resetCropOnAspectRatioChange: "resetCropOnAspectRatioChange",
    resizeToWidth: "resizeToWidth",
    resizeToHeight: "resizeToHeight",
    cropperMinWidth: "cropperMinWidth",
    cropperMinHeight: "cropperMinHeight",
    cropperMaxHeight: "cropperMaxHeight",
    cropperMaxWidth: "cropperMaxWidth",
    cropperStaticWidth: "cropperStaticWidth",
    cropperStaticHeight: "cropperStaticHeight",
    canvasRotation: "canvasRotation",
    initialStepSize: "initialStepSize",
    roundCropper: "roundCropper",
    onlyScaleDown: "onlyScaleDown",
    imageQuality: "imageQuality",
    autoCrop: "autoCrop",
    backgroundColor: "backgroundColor",
    containWithinAspectRatio: "containWithinAspectRatio",
    hideResizeSquares: "hideResizeSquares",
    allowMoveImage: "allowMoveImage",
    cropper: "cropper",
    alignImage: "alignImage",
    disabled: "disabled",
    hidden: "hidden"
  },
  outputs: {
    imageCropped: "imageCropped",
    startCropImage: "startCropImage",
    imageLoaded: "imageLoaded",
    cropperReady: "cropperReady",
    loadImageFailed: "loadImageFailed",
    transformChange: "transformChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 10,
  consts: [["wrapper", ""], ["sourceImage", ""], ["class", "ngx-ic-source-image", "role", "presentation", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", "error", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], ["role", "presentation", 1, "ngx-ic-source-image", 3, "load", "mousedown", "touchstart", "error", "src"], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], ["role", "presentation", 1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]],
  template: function ImageCropperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵtemplate(2, ImageCropperComponent_img_2_Template, 2, 8, "img", 2);
      ɵɵelement(3, "div", 3);
      ɵɵtemplate(4, ImageCropperComponent_div_4_Template, 3, 16, "div", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("background", ctx.imageVisible && ctx.backgroundColor);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.safeImgDataUrl);
      ɵɵadvance();
      ɵɵstyleProp("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageVisible);
    }
  },
  dependencies: [NgIf],
  styles: ['[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:"";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ix-hidden[_nghost-%COMP%]{display:none}'],
  changeDetection: 0
});
var ImageCropperComponent = _ImageCropperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageCropperComponent, [{
    type: Component,
    args: [{
      selector: "image-cropper",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgIf],
      template: `<div
  [style.background]="imageVisible && backgroundColor"
  #wrapper
>
  <img
    #sourceImage
    class="ngx-ic-source-image"
    role="presentation"
    *ngIf="safeImgDataUrl"
    [src]="safeImgDataUrl"
    [style.visibility]="imageVisible ? 'visible' : 'hidden'"
    [style.transform]="safeTransformStyle"
    [class.ngx-ic-draggable]="!disabled && allowMoveImage"
    [attr.alt]="imageAltText"
    (load)="imageLoadedInView()"
    (mousedown)="startMove($event, moveTypes.Drag)"
    (touchstart)="startMove($event, moveTypes.Drag)"
    (error)="loadImageError($event)"
  >
  <div
    class="ngx-ic-overlay"
    [style.width.px]="maxSize.width"
    [style.height.px]="maxSize.height"
    [style.margin-left]="alignImage === 'center' ? marginLeft : null"
  ></div>
  <div class="ngx-ic-cropper"
       *ngIf="imageVisible"
       [class.ngx-ic-round]="roundCropper"
       [attr.aria-label]="cropperFrameAriaLabel"
       [style.top.px]="cropper.y1"
       [style.left.px]="cropper.x1"
       [style.width.px]="cropper.x2 - cropper.x1"
       [style.height.px]="cropper.y2 - cropper.y1"
       [style.margin-left]="alignImage === 'center' ? marginLeft : null"
       [style.visibility]="imageVisible ? 'visible' : 'hidden'"
       (keydown)="keyboardAccess($event)"
       tabindex="0"
  >
    <div
      (mousedown)="startMove($event, moveTypes.Move)"
      (touchstart)="startMove($event, moveTypes.Move)"
      class="ngx-ic-move"
      role="presentation">
    </div>
    <ng-container *ngIf="!hideResizeSquares">
            <span class="ngx-ic-resize ngx-ic-topleft"
                  role="presentation"
                  (mousedown)="startMove($event, moveTypes.Resize, 'topleft')"
                  (touchstart)="startMove($event, moveTypes.Resize, 'topleft')">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-top">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-topright"
            role="presentation"
            (mousedown)="startMove($event, moveTypes.Resize, 'topright')"
            (touchstart)="startMove($event, moveTypes.Resize, 'topright')">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-right">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-bottomright"
            role="presentation"
            (mousedown)="startMove($event, moveTypes.Resize, 'bottomright')"
            (touchstart)="startMove($event, moveTypes.Resize, 'bottomright')">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-bottom">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-bottomleft"
            role="presentation"
            (mousedown)="startMove($event, moveTypes.Resize, 'bottomleft')"
            (touchstart)="startMove($event, moveTypes.Resize, 'bottomleft')">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-left">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize-bar ngx-ic-top"
            role="presentation"
            (mousedown)="startMove($event, moveTypes.Resize, 'top')"
            (touchstart)="startMove($event, moveTypes.Resize, 'top')">
            </span>
      <span class="ngx-ic-resize-bar ngx-ic-right"
            role="presentation"
            (mousedown)="startMove($event, moveTypes.Resize, 'right')"
            (touchstart)="startMove($event, moveTypes.Resize, 'right')">
            </span>
      <span class="ngx-ic-resize-bar ngx-ic-bottom"
            role="presentation"
            (mousedown)="startMove($event, moveTypes.Resize, 'bottom')"
            (touchstart)="startMove($event, moveTypes.Resize, 'bottom')">
            </span>
      <span class="ngx-ic-resize-bar ngx-ic-left"
            role="presentation"
            (mousedown)="startMove($event, moveTypes.Resize, 'left')"
            (touchstart)="startMove($event, moveTypes.Resize, 'left')">
            </span>
    </ng-container>
  </div>
</div>
`,
      styles: [':host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.ngx-ic-source-image{max-width:100%;max-height:100%;transform-origin:center}:host>div img.ngx-ic-source-image.ngx-ic-draggable{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}:host .ngx-ic-overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}:host .ngx-ic-cropper{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){:host .ngx-ic-cropper{outline-width:100vh}}:host .ngx-ic-cropper:after{position:absolute;content:"";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}:host .ngx-ic-cropper .ngx-ic-move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .ngx-ic-cropper:focus .ngx-ic-move{border-color:#1e90ff;border-width:2px}:host .ngx-ic-cropper .ngx-ic-resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize .ngx-ic-square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topright{top:-12px;right:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar{position:absolute;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper.ngx-ic-round{outline-color:transparent}:host .ngx-ic-cropper.ngx-ic-round:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){:host .ngx-ic-cropper.ngx-ic-round:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}:host .ngx-ic-cropper.ngx-ic-round .ngx-ic-move{border-radius:100%}:host.disabled .ngx-ic-cropper .ngx-ic-resize,:host.disabled .ngx-ic-cropper .ngx-ic-resize-bar,:host.disabled .ngx-ic-cropper .ngx-ic-move{display:none}:host.ngx-ix-hidden{display:none}\n']
    }]
  }], function() {
    return [{
      type: CropService
    }, {
      type: CropperPositionService
    }, {
      type: LoadImageService
    }, {
      type: DomSanitizer
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [HAMMER_LOADER]
      }]
    }];
  }, {
    wrapper: [{
      type: ViewChild,
      args: ["wrapper", {
        static: true
      }]
    }],
    sourceImage: [{
      type: ViewChild,
      args: ["sourceImage", {
        static: false
      }]
    }],
    imageChangedEvent: [{
      type: Input
    }],
    imageURL: [{
      type: Input
    }],
    imageBase64: [{
      type: Input
    }],
    imageFile: [{
      type: Input
    }],
    imageAltText: [{
      type: Input
    }],
    cropperFrameAriaLabel: [{
      type: Input
    }],
    output: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    maintainAspectRatio: [{
      type: Input
    }],
    aspectRatio: [{
      type: Input
    }],
    resetCropOnAspectRatioChange: [{
      type: Input
    }],
    resizeToWidth: [{
      type: Input
    }],
    resizeToHeight: [{
      type: Input
    }],
    cropperMinWidth: [{
      type: Input
    }],
    cropperMinHeight: [{
      type: Input
    }],
    cropperMaxHeight: [{
      type: Input
    }],
    cropperMaxWidth: [{
      type: Input
    }],
    cropperStaticWidth: [{
      type: Input
    }],
    cropperStaticHeight: [{
      type: Input
    }],
    canvasRotation: [{
      type: Input
    }],
    initialStepSize: [{
      type: Input
    }],
    roundCropper: [{
      type: Input
    }],
    onlyScaleDown: [{
      type: Input
    }],
    imageQuality: [{
      type: Input
    }],
    autoCrop: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    containWithinAspectRatio: [{
      type: Input
    }],
    hideResizeSquares: [{
      type: Input
    }],
    allowMoveImage: [{
      type: Input
    }],
    cropper: [{
      type: Input
    }],
    alignImage: [{
      type: HostBinding,
      args: ["style.text-align"]
    }, {
      type: Input
    }],
    disabled: [{
      type: HostBinding,
      args: ["class.disabled"]
    }, {
      type: Input
    }],
    hidden: [{
      type: HostBinding,
      args: ["class.ngx-ix-hidden"]
    }, {
      type: Input
    }],
    imageCropped: [{
      type: Output
    }],
    startCropImage: [{
      type: Output
    }],
    imageLoaded: [{
      type: Output
    }],
    cropperReady: [{
      type: Output
    }],
    loadImageFailed: [{
      type: Output
    }],
    transformChange: [{
      type: Output
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize"]
    }]
  });
})();
function base64ToFile(base64Image) {
  const split = base64Image.split(",");
  const type = split[0].replace("data:", "").replace(";base64", "");
  const byteString = atob(split[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {
    type
  });
}
export {
  CropService,
  CropperSettings,
  ImageCropperComponent,
  LoadImageService,
  base64ToFile,
  resizeCanvas
};
//# sourceMappingURL=ngx-image-cropper.js.map
