// JavaScript Document
window.onload = function() {
	//获取图片和按钮对象
	var opicli = document.getElementById("pic").getElementsByTagName("li");
	var obtnli = document.getElementById("btn").getElementsByTagName("li");
    var timer = null;
    for (var i = 0; i < obtnli.length; i++) {
        obtnli[i].index = i;
        obtnli[i].onmouseover = function() {
            clearInterval(int);
			show(this.index);
        }
		obtnli[i].onmouseout =function() {
            int=setInterval(showpic,3000)
			j=this.index+1;
        }
    }
    var int=setInterval(showpic,2000)
	var j=1;
	function showpic()
	{
		if(j==obtnli.length)j=0;
		show(j)
		j++;
	}
    function show(a) {
        index = a;
        var alpha = 0;
        for (var j = 0; j < obtnli.length; j++) {
            obtnli[j].className = "";
            opicli[j].className = "";
            opicli[j].style.opacity = 0;
            opicli[j].style.filter = "alpha(opacity=0)";
        }
        obtnli[index].className = "btncur";
        clearInterval(timer);
        timer = setInterval(function() {
            alpha += 1;
            alpha > 100 && (alpha = 100);
            opicli[index].style.opacity = alpha / 100;
            opicli[index].style.filter = "alpha(opacity=" + alpha + ")";
            alpha == 100 && clearInterval(timer);
        },
        5)
    }
}
