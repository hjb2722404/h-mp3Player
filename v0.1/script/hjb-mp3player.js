/**
 * Created by jianbohe on 16/5/25.
 */
/*
*  h-mp3Player 简单版,使用原生javascript 编写
*  熟悉基本的音频操作接口:播放/暂停 | 获取时间.
* */
(function (){

    var audio = document.getElementById('h-mplayer').getElementsByTagName('audio')[0];
    if(audio.addEventListener){
        audio.addEventListener('loadedmetadata',function(){
            document.getElementById('totalTime').innerHTML = parseInt(audio.duration);
            var playBtn = document.getElementById('playBtn');
            playBtn.addEventListener('click',function(){
                if(audio.paused) {
                    audio.play();
                    playBtn.innerHTML = '暂停';
                    return;
                }
                audio.pause();
                playBtn.innerHTML = '播放';
            });
        });

    }else{
        audio.attachEvent('onloadedmetadata',function(){
            document.getElementById('totalTime').innerHTML = parseInt(audio.duration);
            var playBtn = document.getElementById('playBtn');
            playBtn.attachEvent('onclick',function(){
                if(audio.paused) {
                    audio.play();
                    playBtn.innerHTML = '暂停';
                    return;
                }
                audio.pause();
                playBtn.innerHTML = '播放';
            });

        });
    }

}());