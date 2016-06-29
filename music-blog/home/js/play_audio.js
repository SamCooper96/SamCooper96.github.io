// JavaScript Document
/*点击图片播放音乐（但不知道如何点击不同图片播放不同的音乐）*/
/*点击图片超链接播放音乐*/

var initAudio = function(){
	//audio =  document.createElement("audio")
	//audio.src='Never Say Good Bye.ogg'
	audio = document.getElementById('audio');
}


function playOrPaused(id,obj){
	if(audio.paused){
		audio.play();
		//obj.innerHTML='暂停';
		return;
	}
	audio.pause();
	//obj.innerHTML='播放';
}
