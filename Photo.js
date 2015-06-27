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

window.ontouchmove = function(){
    _e.preventDefault();
    _e.stopPropagation();
};

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d'),
    canvasWidth = canvas.width,
    canvasHeight = canvas.height,
    dressImage = new Image(),
    uploadButton = document.getElementById("btnGetFile"),
    uploadPhoto;
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

uploadButton.onclick = function loadImage() {
    var file = document.getElementById("fileDemo").files[0];
                    var fr = new FileReader();
                    fr.readAsDataURL(file);
                    fr.onload = function(fe){
                        var result = this.result;
                        uploadPhoto = new Image();
                        uploadPhoto.onload = function() {
                            addEvent(document, 'touchmove', function(e){
                                // Two finger gesture
                                e.preventDefault();
                                    var touches = e.changedTouches;
                                    if(touches && touches.length == 1) {
                                            requestAnimFrame(function() {
                                                    move(touches[0]);
                                            });
                                    }
                            });
                            ctx.save();
                            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                            ctx.drawImage(uploadPhoto, 0, 0);
                            ctx.globalAlpha = 0.8;
                            ctx.drawImage(dressImage, 0, 0);
                            ctx.restore();
                    };

                    // 转换二进制数据
                    var base64 = result.replace(/^.*?,/,'');
                    uploadPhoto.src = result;
    };
}


function drawBeauty(dressImage){
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.drawImage(dressImage, 0, 0);
    ctx.restore();
}

function load(){
    dressImage.src = "http://pic.baike.soso.com/p/20140220/20140220030734-2078101866.jpg";
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

var centerX = canvasWidth / 2,
    centerY = canvasHeight / 2;

var imgCenterX = 50,
    imgCenterY = 50;

function move(touch) {
    //ctx.save();
    //ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //ctx.drawImage(uploadPhoto, 50, 50);
    console.info(touch);
    //ctx.restore();
    //drawBeauty(dressImage);

}

function rotate(e){
    
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // Rotate center context
    ctx.translate(centerX, centerY);
    ctx.rotate( (Math.PI / 180) * e.rotation);  //rotate .. degrees.
    ctx.translate(-imgCenterX, -imgCenterY);
    //drawSquare(0, 0, 100, 100);
    ctx.drawImage(uploadPhoto, 0, 0);
    ctx.restore();
}

function drawSquare(x, y, w, h){
    ctx.fillStyle = "orange";  
    ctx.fillRect(x, y, w, h);   
}

addEvent(document, 'touchmove', function(e) {
    // Two finger gesture
    if(event.touches && event.touches.length === 2){
        requestAnimFrame(function(){
            rotate(e);
        });
    }
});
// Init 
drawSquare(centerX - imgCenterX, centerY - imgCenterY, 100, 100);
