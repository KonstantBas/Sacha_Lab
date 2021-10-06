$(function() {
    $("#for_gen_canvas").after('<div><canvas id="canvas" style="background-color: darkgrey; border:1px solid black;" width="500" height="500"></canvas></div>');

    canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    let val_r = 1;

    drawGraphik(val_r);
    function windowToCanvas(canvas, x, y) {
        let bbox = canvas.getBoundingClientRect();
        return { x: x - bbox.left * (canvas.width / bbox.width),
            y: y - bbox.top * (canvas.height / bbox.height)
        };
    }
    setInterval(reDrawR,20)
    function reDrawR(){
        let pop = document.getElementById("form:corR").value;
        drawGraphik(pop);
    }
    changeR = document.getElementById("form:corR");
    changeR.onchange = function (e) {
        let pop = document.getElementById("form:corR").value;
        drawGraphik(pop);
    }

    canvas.onmousedown = function (e) {
        let corArr = windowToCanvas(canvas, e.clientX, e.clientY);
        let x_real = 3 * ((corArr.x - 254)/175);
        let y_real = (-1) * 3 * ((corArr.y - 254)/175);
        let out = document.getElementById("form:corX");
        out.value = x_real.toFixed(3);
        out = document.getElementById("form:corY");
        out.value = y_real.toFixed(3);
        /* пока что коменчу что бы отладить правильный тык */
        out = document.getElementById("form:but");
        out.click();
    }

    function drawPoint(x, y, r, result) {
        ctx.beginPath();
        if (result == "Есть пробитие") {
            ctx.fillStyle = "rgba(0, 255, 0, 1)";
        }else {
            ctx.fillStyle = "rgba(255, 0, 0, 1)";
        }
        ctx.arc(254 + 175 * x * 10 / (r*10), 254 - 175 * y*10 / (r*10), 3, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
    function checkTableAndDraw(){
        let cells = Array.prototype.slice.call(document.getElementById("table_data").getElementsByTagName("td"));
        let n = cells.length;
        if(Number(cells[2].innerHTML) !== 0){
            for(let i = 0; i < n; i=i+4){
                drawPoint(Number(cells[i].innerHTML),
                    Number(cells[i+1].innerHTML),
                    3,cells[i+3].innerText);
            }
        }
    }
    function drawGraphik(flag) {
        flag = flag/2
        ctx.fillStyle = '#000000';
        // set_r_value(flag);
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath(); // начало отрисовки
        // 480
        ctx.moveTo(25, 250);
        ctx.lineTo(480, 250);
        ctx.lineTo(475, 245);
        ctx.lineTo(475, 255);
        ctx.lineTo(480, 250);
        ctx.fillText("X", 485, 254);
        ctx.moveTo(250, 480);
        ctx.lineTo(250, 25);
        ctx.lineTo(245, 30);
        ctx.lineTo(255, 30);
        ctx.lineTo(250, 25);
        ctx.fillText("Y", 247, 15);
        ctx.moveTo(280, 245);
        ctx.lineTo(280, 255);
        ctx.fillText("1", 275, 265);
        ctx.moveTo(310, 245);
        ctx.lineTo(310, 255);
        ctx.fillText("2", 307, 265);
        ctx.moveTo(340, 245);
        ctx.lineTo(340, 255);
        ctx.fillText("3", 335, 265);
        ctx.moveTo(370, 245);
        ctx.lineTo(370, 255);
        ctx.fillText("4", 367, 265);
        ctx.moveTo(400, 245);
        ctx.lineTo(400, 255);
        ctx.fillText("5", 395, 265);
        ctx.moveTo(430, 245);
        ctx.lineTo(430, 255);
        ctx.fillText("6", 427, 265);
        ctx.moveTo(220, 245);
        ctx.lineTo(220, 255);
        ctx.fillText("-1", 210, 265);
        ctx.moveTo(190, 245);
        ctx.lineTo(190, 255);
        ctx.fillText("-2", 186, 265);
        ctx.moveTo(160, 245);
        ctx.lineTo(160, 255);
        ctx.fillText("-3", 150, 265);
        ctx.moveTo(130, 245);
        ctx.lineTo(130, 255);
        ctx.fillText("-4", 126, 265);
        ctx.moveTo(100, 245);
        ctx.lineTo(100, 255);
        ctx.fillText("-5", 90, 265);
        ctx.moveTo(70, 245);
        ctx.lineTo(70, 255);
        ctx.fillText("-6", 66, 265);
        ctx.moveTo(245, 220);
        ctx.lineTo(255, 220);
        ctx.fillText("1", 260, 223);
        ctx.moveTo(245, 190);
        ctx.lineTo(255, 190);
        ctx.fillText("2", 260, 193);
        ctx.moveTo(245, 160);
        ctx.lineTo(255, 160);
        ctx.fillText("3", 260, 163);
        ctx.moveTo(245, 130);
        ctx.lineTo(255, 130);
        ctx.fillText("4", 260, 133);
        ctx.moveTo(245, 100);
        ctx.lineTo(255, 100);
        ctx.fillText("5", 260, 103);
        ctx.moveTo(245, 70);
        ctx.lineTo(255, 70);
        ctx.fillText("6", 260, 73);
        ctx.moveTo(245, 280);
        ctx.lineTo(255, 280);
        ctx.fillText("-1", 260, 283);
        ctx.moveTo(245, 310);
        ctx.lineTo(255, 310);
        ctx.fillText("-2", 260, 313);
        ctx.moveTo(245, 340);
        ctx.lineTo(255, 340);
        ctx.fillText("-3", 260, 343);
        ctx.moveTo(245, 370);
        ctx.lineTo(255, 370);
        ctx.fillText("-4", 260, 373);
        ctx.moveTo(245, 400);
        ctx.lineTo(255, 400);
        ctx.fillText("-5", 260, 403);
        ctx.moveTo(245, 430);
        ctx.lineTo(255, 430);
        ctx.fillText("-6", 260, 433);

        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 30 * flag, -Math.PI / 2, 0, false);
        ctx.moveTo(250, 250 + (60 * flag));
        ctx.lineTo(250 - (60 * flag), 250);
        ctx.lineTo(250 - (60 * flag), 250 - (60 * flag));
        ctx.lineTo(250, 250 - (60 * flag));
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.stroke();

        checkTableAndDraw();
    }
});
