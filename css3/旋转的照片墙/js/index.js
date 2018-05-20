/**
 * Created by sunweixin on 2018/3/31.
 */
const row=4,
    col=6,
    num=row*col,
    big_width=750,
    big_height=500,
    thumb_width=125,
    thumb_height=125;
let count=0;
let ocontainer=document.getElementById('container');
let aImg=null;
let nowindex=0;
let oprev=document.getElementById('prev');
let onext=document.getElementById("next");
for(let i=0;i<num;i++) {
    let othumbsimg = new Image();
    othumbsimg.onload = function () {
        count++;
        if (count == num * 2) {
            loadsuccess();
        }
    };
    othumbsimg.src = 'img/thumbs/' + (i + 1) + '.jpg';
    let obigimg = new Image();
    obigimg.onload = function () {
        count++;
        if (count == num * 2) {
            loadsuccess();
        }
    };
    obigimg.src = 'img/' + (i + 1) + '.jpg';
}
function loadsuccess() {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let odiv = document.createElement('div');
            odiv.style.background = 'url(img/thumbs/' + (i * col + j + 1) + '.jpg) no-repeat';
            odiv.className = 'img';
            odiv.pos = {
                x: j,
                y: i
            };
            odiv.index = i * col + j + 1;
            odiv.innerHTML = '<span></span>';
            ocontainer.appendChild(odiv);
        }
    }
    aImg = ocontainer.getElementsByTagName('div');
    colGap = (ocontainer.offsetWidth - aImg[0].offsetWidth * col) / (col + 1);
    rowGap = (ocontainer.offsetHeight - aImg[0].offsetHeight * row) / (row + 1);
    for (let i = 0; i < num; i++) {
        aImg[i].style.transform = 'rotate(' + Math.floor(Math.random() * 40 - 20) + 'deg)';
        aImg[i].style.transitionDelay = (num - i) * 100 + 'ms';// 设置延迟时间
        aImg[i].style.top = (rowGap + aImg[0].offsetHeight) * aImg[i].pos.y + rowGap + 'px';
        aImg[i].style.left = (colGap + aImg[0].offsetWidth) * aImg[i].pos.x + colGap + 'px';
    }
}
let bigColGap = (ocontainer.offsetWidth - big_width) / 2,
    bigRowGap = (ocontainer.offsetHeight - big_height) / 2;
let bFlag = true;
ocontainer.onclick = function (e) {

    if (e.currentTarget != e.target) {
        if (bFlag) {
            for (let i = 0; i < num; i++) {
                aImg[i].style.transitionDelay = '0ms';
                aImg[i].style.borderWidth = '1px';
                aImg[i].style.top = bigRowGap + thumb_height * aImg[i].pos.y + 'px';
                aImg[i].style.left = bigColGap + thumb_width * aImg[i].pos.x + 'px';
                aImg[i].style.transform = 'rotate(0deg)';

                let oSpan = aImg[i].getElementsByTagName('span')[0];
                oSpan.style.opacity = 1;
                let imgUrl;
                if (e.target.tagName == 'DIV') {
                    imgUrl = e.target.index;
                } else { // span
                    imgUrl = e.target.parentNode.index;
                }
                oSpan.style.backgroundImage = 'url(img/' + imgUrl + '.jpg)';
                oSpan.style.backgroundPosition = -thumb_width* aImg[i].pos.x + 'px ' + (-thumb_height * aImg[i].pos.y) + 'px';
            }
            oprev.style.display=onext.style.display='block';
        }
        else {
            for(let i=0;i<num;i++){
                aImg[i].style.transform = 'rotate(' + Math.floor(Math.random() * 40 - 20) + 'deg)';
                aImg[i].style.transitionDelay = '0ms';// 设置延迟时间
                aImg[i].style.top = (rowGap + aImg[0].offsetHeight) * aImg[i].pos.y + rowGap + 'px';
                aImg[i].style.left = (colGap + aImg[0].offsetWidth) * aImg[i].pos.x + colGap + 'px';
                let ospan=aImg[i].getElementsByTagName('span')[0];
                ospan.style.opacity=0;
                ospan.style.transitionDelay='0ms';
            }
            oprev.style.display=onext.style.display='none';
        }
        bFlag=!bFlag;
    }
};
oprev.onclick = onext.onclick = function () {
    if (this === oprev) {
        nowindex--;
        if (nowindex < 1) {
            nowindex = num;
        }
    } else {
        nowindex++;
        if (nowindex > num) {
            nowindex = 1;
        }
    }
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i);
    }
    arr.sort(function () {
        return Math.random() - 0.5;
    });
    for (let i = 0; i < arr.length; i++) {
        let oSpan = aImg[arr[i]].getElementsByTagName('span')[0];
        oSpan.style.transitionDelay = i * 50 + 'ms';
        oSpan.style.backgroundImage = 'url(img/' + nowindex + '.jpg)';
    }
};
