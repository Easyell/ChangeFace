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
load();

uploadButton.onclick = function loadImage() {
    var file = document.getElementById("fileDemo").files[0];
                    var fr = new FileReader();
                    fr.readAsDataURL(file);

                    fr.onload = function(fe){
                        var result = this.result;
                        uploadPhoto = new Image();
                        var exif;
                        uploadPhoto.onload = function() {
                            var orientation = exif ? exif.Orientation : 1;
                            // 判断拍照设备持有方向调整照片角度
                            switch(orientation) {
                                case 3:
                                    imgRotation = 180;
                                    break;
                                case 6:
                                    imgRotation = 90;
                                    break;
                                case 8:
                    imgRotation = 270;
                    break;
            }
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
    
    drawSquare(0, 0, 100, 100);
    ctx.restore();
}

function drawSquare(x, y, w, h){
    ctx.fillStyle = "orange";  
    ctx.fillRect(x, y, w, h);   
}

// Add listeners
document.addEventListener('touchmove', function(e){
    e.preventDefault();
    var touches = e.changedTouches;
    if(touches && touches.length == 1) {
        requestAnimFrame(function() {
            move(touches[0]);
        });
    }

    // Two finger gesture
    if(event.touches && event.touches.length === 2){
        requestAnimFrame(function(){
            rotate(e);
        });
    }
}, false);
// Init 
drawSquare(centerX - imgCenterX, centerY - imgCenterY, 100, 100);