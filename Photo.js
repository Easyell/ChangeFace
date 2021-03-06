// Request animation frame shim
window.requestAnimFrame = (function() {
	return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(callback, element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

window.ontouchmove = function(_e){
    _e.preventDefault();
    _e.stopPropagation();
};

var uploadPhotoX = 0;
var uploadPhotoY = 0;
var startFingerDist;
var startFingerX;
var startFingerY;
var ratio = 1;
var lastRatio = 1;
var lastRotateDegree = 0;
var rotateDegree = 0;
var finger = false;
var btn_finish = document.getElementById("btn-finish");
var btn_take_photo_again = document.getElementById("btn-take-photo-again");
var btn_take_photo = document.getElementById("btn-take-photo");
var real_btn = document.getElementById("real-btn");
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d'),
    dressImage = new Image(),
    uploadPhoto;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 50;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
// add event handler
var addEvent = (function () {
    if (document.addEventListener) {
        return function (el, type, fn) {
            if (el && el.nodeName || el === window) {
                el.addEventListener(type, fn, false);
            } else if (el && el.length) {
                for (var i = 0; i < el.length; i++) {
                    addEvent(el[i], type, fn);
                }
            }
        };
    } else {
        return function (el, type, fn) {
            if (el && el.nodeName || el === window) {
                el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
            } else if (el && el.length) {
                for (var i = 0; i < el.length; i++) {
                    addEvent(el[i], type, fn);
                }
            }
        };
    }
})();
load();

btn_take_photo_again.onclick = function() {
    btn_finish.style.display = 'none';
    btn_take_photo_again.style.display = 'none';
    btn_take_photo.style.display = 'block';
    real_btn.style.display = 'block';
    load();
};

btn_finish.onclick = function() {
    var data = canvas.toDataURL("image/png");
    console.info(data);
}

var loadUpLoadImage = function loadImage() {
    var file = real_btn.files[0];
    var fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = function(fe){
        var result = this.result;
        uploadPhoto = new Image();
        uploadPhoto.onload = function() {
            drawUpLoadPhoto();
            drawBeauty(dressImage);
        };
        uploadPhoto.src = result;
        btn_finish.style.display = 'block';
        btn_take_photo_again.style.display = 'block';
        btn_take_photo.style.display = 'none';
        real_btn.style.display = 'none';
    };
}


function drawBeauty(dressImage){
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.scale(canvasWidth / dressImage.height , canvasHeight / dressImage.height);
    ctx.drawImage(dressImage, 0, 0);
    ctx.restore();
}

function load(){
    //dressImage.crossOrigin = "anonymous";
    dressImage.src = "20140220030734-2078101866.png";
    if(dressImage.complete){
        drawBeauty(dressImage);
    }else{
        dressImage.onload = function(){
            drawBeauty(dressImage);
        };
        dressImage.onerror = function(){
            window.alert('加载失败，请重试');
        };
    };
}//load

function getTouchDist(e){
    var x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0,
        x3 = 0,
        y3 = 0,
        result = {};
    x1 = e.touches[0].pageX;
    x2 = e.touches[1].pageX;
    y1 = e.touches[0].pageY - document.body.scrollTop;
    y2 = e.touches[1].pageY - document.body.scrollTop;
    if(!x1 || !x2) return;
    if(x1<=x2){
        x3 = (x2-x1)/2+x1;
    }else{
        x3 = (x1-x2)/2+x2;
    }
    if(y1<=y2){
        y3 = (y2-y1)/2+y1;
    }else{
        y3 = (y1-y2)/2+y2;
    }
    result = {
        dist: Math.round(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))),
        x: Math.round(x3),
        y: Math.round(y3)
    };
    return result;
}

function drawUpLoadPhoto() {
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.scale(ratio, ratio);
    ctx.translate(uploadPhotoX / ratio + uploadPhoto.width / 2, uploadPhotoY / ratio + uploadPhoto.height / 2);
    ctx.rotate( (Math.PI / 180) * rotateDegree);
    ctx.translate(-(uploadPhotoX / ratio + uploadPhoto.width / 2), -(uploadPhotoY / ratio + uploadPhoto.height / 2));
    ctx.drawImage(uploadPhoto, uploadPhotoX / ratio, uploadPhotoY / ratio);
    //console.info(touch);
    ctx.restore();
}

function move(touch) {
    uploadPhotoX = touch.pageX - uploadPhoto.width * ratio / 2;
    uploadPhotoY = touch.pageY - uploadPhoto.height * ratio / 2;
    drawUpLoadPhoto();
    drawBeauty(dressImage);
}

function zoomAndRotate(e) {
    var nowFingerDist = getTouchDist(e).dist;
    ratio = lastRatio * nowFingerDist / startFingerDist; //计算缩放比
    rotateDegree = lastRotateDegree + e.rotation;
    drawUpLoadPhoto();
    drawBeauty(dressImage);
}


function upLoadImageToServer(url, name) {
    var data = canvas.toDataURL();
    var  base64Data = data.substr(22);
    $.post(url, {data: base64Data, name:name}, function(data) {
        console.info(data);
    })
}

function onclickBtn_take_photo_again() {
    btn_finish.style.display = 'none';
    btn_take_photo_again.style.display = 'none';
    btn_take_photo.style.display = 'block';
    real_btn.style.display = 'block';
    load();
}

addEvent(document, 'touchmove', function(e) {
    // Two finger gesture
    e.preventDefault();
    var touches = e.changedTouches;
    if(touches && touches.length == 2 && finger){
        requestAnimFrame(function(){
            //rotate(e);
            zoomAndRotate(e);
            return;
        });
    }else if(touches && touches.length == 1 && !finger) {
        requestAnimFrame(function() {
            move(touches[0]);
        });
    }
});


addEvent(document, 'touchstart', function(e) {
    //e.preventDefault();
    var touchTarget = e.targetTouches.length;
    if(touchTarget == 2){
        startFingerDist = getTouchDist(e).dist;
        startFingerX    = getTouchDist(e).x;
        startFingerY    = getTouchDist(e).y;
        finger = true;
    } else if (touchTarget == 1) {
        finger = false;
    }
});

addEvent(document, 'touchend', function(e) {
    lastRatio = ratio;
    lastRotateDegree = rotateDegree;
});