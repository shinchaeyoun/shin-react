$(function () {
    $('.wrap').load('index.html', function () {
        complete();
    });
    $(window).load(function () {
        complete();
    });

});

let loadCheck = 0,
    info, type,
    nowUrl,
    pagePrev, pageNext,
    totalPage,
    canvas,
    div,
    ctx,
    dragObj,
    dropObj,
    drawble = false,
    isRevert = true,
    $save,
    $url,
    $picture,
    $delete,
    $color,
    $colorPicker,
    $range,
    $dashLine,
    chColor,
    inputColor,
    saveColor,
    backup,
    sy, sx, ex, ey,
    dragCon,
    defaultX,
    defaultY,
    startX,
    startY,
    endX, endY,
    stIdx,
    originX,
    originY,
    lineArr,
    dropX, dropY,
    otherObj,
    mode;

nowUrl = location.href;
// urlNum = Number(nowUrl.split('/')[5].split('.')[0].split('canvas')[1]);
// urlNum = Number(nowUrl.slice(-1));
urlNum = Number(nowUrl.slice(-6,-5));

console.log(typeof(urlNum),'urlNum',);

function complete() {
    ++loadCheck;

    if (loadCheck == 2) {
        info = new pageInfoFn();

        pagePrev = $('.page_controls .prev');
        pageNext = $('.page_controls .next');

        totalPage = info.canvasType.length;

        canvas = $("#canvas");
        div = $(".canvas_container");
        ctx = canvas[0].getContext("2d");
        dragBox = $('.start .dot');
        dragObj = $('.start .dragObj');
        dropObj = $('.end .dot');
        $save = $('.save_container');
        $url = $('.url_container');
        $picture = $('.picture_container');
        $delete = $('.delete_container');
        $color = $('.color');
        $colorPicker = $('.colorIp');
        $brush = $('#brush');
        $erase = $('#erase');
        $range = $('#lineRange');
        $dashLine = $('.dash_line');
        dragCon = $('.dot_container');
        startX = new Array();
        startY = new Array();
        originX = [];
        originY = [];
        lineArr = [];
        otherObj = [];
        mode = 'brush';

        init();
        canvasResize();
        reset();
        // saveImg();
        buttonEvent();
        page();
        pageControls();
        cusorFn();
    };
};

function page() {
    nowType = info.canvasType[urlNum - 1];
    canvasTypeFn(nowType);
};

function pageControls() {
    pagePrev.on('click', function () {
        urlNum--;
        if (urlNum < 1) {
            urlNum = 1;
            alert('First page');
        };
        pageMove(urlNum)
    });

    pageNext.on('click', function () {
        urlNum++;
        console.log(urlNum);
        if (urlNum > totalPage) {
            urlNum = totalPage;
            alert('Last page');
        };
        pageMove(urlNum);
    });
};

function pageMove($pageNum) {
    changeUrl = nowUrl.replace(nowUrl.slice(-6),$pageNum);
    location.href = changeUrl+'.html';
};

function itostr($num) {
    return $num < 10 ? '0' + $num : $num;
};




function cusorFn() {
    //cursor strat
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
    const lineEq = (y2, y1, x2, x1, currentVal) => {
        let m = (y2 - y1) / (x2 - x1);
        let b = y1 - m * x1;
        return m * currentVal + b;
    };
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const body = document.body;
    const bodyColor = getComputedStyle(body).getPropertyValue('--color-bg').trim() || 'white';
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy }
    }
  
    // Window sizes.
    let winsize;
    const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight };
    calcWinsize();
    // Recalculate window sizes on resize.
    window.addEventListener('resize', calcWinsize);
  
    // Custom mouse cursor.
    class CursorFx {
        constructor(el) {
            this.DOM = { el: el };
            this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
            this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
            this.bounds = { dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect() };
            this.scale = 1;
            this.opacity = 1;
            this.mousePos = { x: 0, y: 0 };
            this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
            this.lastScale = 1;
            this.lastOpacity = 1;
  
            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
        }
        render() {
            this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1);
            this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1);
            this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15);
            this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15);
            this.lastScale = lerp(this.lastScale, this.scale, 0.15);
            this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
            this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
            this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
            this.DOM.circle.style.opacity = this.lastOpacity
            requestAnimationFrame(() => this.render());
        }
        enter() {
            cursor.scale = 3.5;
            this.DOM.circle.style = "border:none; background-color:rgba(255,255,255,1);mix-blend-mode:difference";
        }
        enter2() {
            this.DOM.dot.style = "opacity:0;"
            cursor.scale = 0;
            this.DOM.circle.style = "";
        }
  
        leave() {
            cursor.scale = 1;
            this.DOM.dot.style = "background-color:#000";
            this.DOM.circle.style = "border:1px solid#000; background-color:none;";
        }
        click() {
            this.lastScale = 1;
            this.lastOpacity = 0;
        }
    }
  
    const cursor = new CursorFx(document.querySelector('.cursor'));
  
    // Custom cursor chnages state when hovering on elements with 'data-hover'.
    [...document.querySelectorAll('[data-hover]')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
        link.addEventListener('click', () => cursor.click());
    });
  
    [...document.querySelectorAll('[data-hover2]')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter2());
        link.addEventListener('mouseleave', () => cursor.leave());
        link.addEventListener('click', () => cursor.click());
    });
  
  
  
    const white_cursor = document.querySelectorAll(".white_cursor");
    const inner_circle = document.querySelector(".cursor__inner--circle");
    const inner_dot = document.querySelector(".cursor__inner--dot");
  
    for (i = 0; i < white_cursor.length; i++) {
        white_cursor[i].addEventListener('mouseover', function () {
            inner_circle.style = "border:1px solid#fff;";
            inner_dot.style = "background-color:#fff;";
        })
        white_cursor[i].addEventListener('mouseleave', function () {
            inner_circle.style = "border:1px solid#000;";
            inner_dot.style = "background-color:#000;";
        });
    };
    //cusor end
  };