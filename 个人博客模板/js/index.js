const ROW = 4,
    COL = 6,
    NUM = ROW * COL,
    BIG_WIDTH = 375,
    BIG_HEIGHT = 250,
    THUMB_WIDTH = 62,
    THUMB_HEIGHT = 62;
let oContainer = document.getElementById('container');
let oPrev = document.getElementById('prev');
let oNext = document.getElementById('next');
let oPersons = document.getElementById('persons');
let oPerson1 = document.getElementById('person1');
let oPerson2 = document.getElementById('person2');
let oPerson3 = document.getElementById('person3');
let num=true;
let count = 0; // 计数器，表示加载成功的图片的数量
let aImg = null;
let colGap, rowGap;
let nowIndex = 0; // 表示当前显示的大图的名称，取值1~24

for (let i = 0; i < NUM; i++) {
    /* let oImg = document.createElement('img');
     oImg.src = 'img/thumbs/'+ (i + 1) +'.jpg';
     oContainer.appendChild(oImg);

     oContainer.innerHTML = '<img src=xx.jpg>'; */

    // 图片预加载
    let oThumbsImg = new Image();
    oThumbsImg.onload = function () {
        count++;
        if (count == NUM * 2) {
            loadSuccess();
        }
    };
    oThumbsImg.src = 'images/photo_window/thumbs/' + (i + 1) + '.jpg';

    let oBigImg = new Image();
    oBigImg.onload = function () {
        count++;
        if (count == NUM * 2) {
            loadSuccess();
        }
    };
    oBigImg.src = 'images/photo_window/' + (i + 1) + '.jpg';
}

function loadSuccess() {
    // 图片放到容器里
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            let oDiv = document.createElement('div');
            oDiv.style.background = 'url(images/photo_window/thumbs/' + (i * COL + j + 1) + '.jpg) no-repeat';
            oDiv.className = 'img';
            oDiv.pos = {
                x: j,
                y: i
            };
            // 定义index属性， 保存对应的图片名称
            oDiv.index = i * COL + j + 1;
            oDiv.innerHTML = '<span></span>';
            oContainer.appendChild(oDiv);
        }
    }

    // 计算图片间隙
    aImg = oContainer.getElementsByTagName('div'); // 24个
    colGap = (oContainer.offsetWidth - aImg[0].offsetWidth * COL) / (COL + 1);
    rowGap = (oContainer.offsetHeight - aImg[0].offsetHeight * ROW) / (ROW + 1);

    // 计算每个小图片的位置
    for (let i = 0; i < NUM; i++) {
        aImg[i].style.transform = 'rotate(' + Math.floor(Math.random() * 40 - 20) + 'deg)';
        aImg[i].style.transitionDelay = (NUM - i) * 100 + 'ms'; // 设置延迟时间
        aImg[i].style.top = (rowGap + aImg[0].offsetHeight) * aImg[i].pos.y + rowGap + 'px';
        aImg[i].style.left = (colGap + aImg[0].offsetWidth) * aImg[i].pos.x + colGap + 'px';
    }
}

// 计算大图片的间隙
let bigColGap = (oContainer.offsetWidth - BIG_WIDTH) / 2,
    bigRowGap = (oContainer.offsetHeight - BIG_HEIGHT) / 2;

// 标志位，true表示散开要合并，false表示合并要散开
let bFlag = true;
// 利用事件委托， 给24个div绑定事件
oContainer.onclick = function (e) {
    // e.target => oContainer/div/span
    if (e.currentTarget != e.target) {
        if (bFlag) {
            for (let i = 0; i < NUM; i++) {
                aImg[i].style.transitionDelay = '0ms';
                aImg[i].style.borderWidth = '1px';
                aImg[i].style.top = bigRowGap + THUMB_HEIGHT * aImg[i].pos.y + 'px';
                aImg[i].style.left = bigColGap + THUMB_WIDTH * aImg[i].pos.x + 'px';
                aImg[i].style.transform = 'rotate(0deg)';

                let oSpan = aImg[i].getElementsByTagName('span')[0];
                oSpan.style.opacity = 1;
                let imgUrl;
                if (e.target.tagName == 'DIV') {
                    imgUrl = e.target.index;
                } else { // span
                    imgUrl = e.target.parentNode.index;
                }
                oSpan.style.backgroundImage = 'url(images/photo_window/' + imgUrl + '.jpg)';
                oSpan.style.backgroundPosition = -THUMB_WIDTH * aImg[i].pos.x + 'px ' + (-THUMB_HEIGHT *
                    aImg[i].pos.y) + 'px';
                nowIndex = imgUrl;
            }
            oPrev.style.display = oNext.style.display = 'block';
        } else {
            for (let i = 0; i < NUM; i++) {
                aImg[i].style.transform = 'rotate(' + Math.floor(Math.random() * 40 - 20) + 'deg)';
                aImg[i].style.transitionDelay = '0ms'; // 设置延迟时间
                aImg[i].style.top = (rowGap + aImg[0].offsetHeight) * aImg[i].pos.y + rowGap + 'px';
                aImg[i].style.left = (colGap + aImg[0].offsetWidth) * aImg[i].pos.x + colGap + 'px';
                let oSpan = aImg[i].getElementsByTagName('span')[0];
                oSpan.style.opacity = 0;
                oSpan.style.transitionDelay = '0ms';
            }
            oPrev.style.display = oNext.style.display = 'none';
        }
        bFlag = !bFlag;
    }
};

oPrev.onclick = oNext.onclick = function () {
    if (this === oPrev) {
        nowIndex--;
        if (nowIndex < 1) {
            nowIndex = NUM;
        }
    } else {
        nowIndex++;
        if (nowIndex > NUM) {
            nowIndex = 1;
        }
    }
    let arr = []; // 0~23
    for (let i = 0; i < NUM; i++) {
        arr.push(i);
    }
    arr.sort(function () {
        return Math.random() - 0.5;
    });
    for (let i = 0; i < arr.length; i++) {
        let oSpan = aImg[arr[i]].getElementsByTagName('span')[0];
        oSpan.style.transitionDelay = i * 50 + 'ms';
        oSpan.style.backgroundImage = 'url(images/photo_window/' + nowIndex + '.jpg)';
    }
};

    oPersons.onclick=function(e){
            if(num){
                oPerson1.style.display='none';
                oPerson2.style.display='none';
                oPerson3.style.display='none';
                oPersons.style.backgroundImage='url(images/kobe/kobe5.jpg)';
                oPersons.style.backgroundColor='#ffa500';
                console.log(this);
            }else {
                oPerson1.style.display = 'block';
                oPerson2.style.display = 'block';
                oPerson3.style.display = 'block';
                oPersons.style.backgroundImage = 'none';
                oPersons.style.backgroundColor = '#fff';
            }
            num=!num;
    };
num=!num;

