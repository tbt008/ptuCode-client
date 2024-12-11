import{_ as b,B as A,a as B,r as m,o as g,c as h,b as e,F as p,d as x,e as u,n as _,h as N,t as f,w as y,l as L,p as T,i as w}from"./index-DdujhLSS.js";import{_ as U}from"./music-1-C8V4Y2OJ.js";const j="/assets/logo-CnKAYTOt.png",C="/assets/ion-DHlxQweE.jpg",z={data(){return{controls:!1,loop:!0,volume:1,index:0,value:100,iszanting:!1,isbofang:!0,user:"王大毛",name:"去年夏天",src:new URL("https://tbt-blog.oss-cn-beijing.aliyuncs.com/%E5%8E%BB%E5%B9%B4%E5%A4%8F%E5%A4%A9-%E7%8E%8B%E5%A4%A7%E6%AF%9B.mp3",import.meta.url).href,imgUrl:"https://cdn.pixabay.com/photo/2021/01/04/14/00/balloons-5887644_640.jpg",musicList:[],routerList:[{name:"个性推荐",url:"/music/discover"},{name:"歌词",url:"/music/exclusive"},{name:"歌单",url:"/music/songList"},{name:"排行榜",url:"/music/topList"},{name:"歌手",url:"/music/singer"},{name:"最新音乐",url:"/music/newest"}]}},methods:{on_off(){const s=document.getElementById("ado");s.paused?(s.play(),this.iszanting=!0,this.isbofang=!1):(s.pause(),this.isbofang=!0,this.iszanting=!1)},play(s){this.iszanting=!0,this.isbofang=!1;const t=document.getElementById("ado");t.src=s.src,this.name=s.name,this.user=s.user,this.imgUrl=s.img,localStorage.setItem("songWord",s.songWord),localStorage.setItem("user",this.user),localStorage.setItem("name",this.name),localStorage.setItem("img",this.imgUrl),localStorage.setItem("src",t.src),t.play()},prev(){if(this.iszanting=!0,this.isbofang=!1,this.index>0){this.index=this.index-1;const s=this.musicList[this.index],t=document.getElementById("ado");t.src=s.src,this.name=s.name,this.user=s.user,this.imgUrl=s.img,localStorage.setItem("user",this.user),localStorage.setItem("name",this.name),localStorage.setItem("img",this.imgUrl),localStorage.setItem("src",t.src),localStorage.setItem("songWord",s.songWord)}audio.play()},next(){this.iszanting=!0,this.isbofang=!1;const s=document.getElementById("ado");if(this.index<this.musicList.length){this.index=this.index+1;const t=this.musicList[this.index];s.src=t.src,this.name=t.name,this.user=t.user,this.imgUrl=t.img,localStorage.setItem("user",this.user),localStorage.setItem("name",this.name),localStorage.setItem("img",this.imgUrl),localStorage.setItem("src",s.src),localStorage.setItem("songWord",t.songWord)}s.play()},changeMusic(s){this.iszanting=!0,this.isbofang=!1,this.index=s;const t=document.getElementById("ado");s==0?(t.src="https://tbt-blog.oss-cn-beijing.aliyuncs.com/%E5%8E%BB%E5%B9%B4%E5%A4%8F%E5%A4%A9-%E7%8E%8B%E5%A4%A7%E6%AF%9B.mp3",this.name="去年夏天",this.user="王大毛",this.imgUrl="https://cdn.pixabay.com/photo/2021/01/04/14/00/balloons-5887644_640.jpg",localStorage.setItem("user",this.user),localStorage.setItem("name",this.name),localStorage.setItem("img",this.imgUrl),localStorage.setItem("src",t.src),localStorage.setItem("songWord",`[00:00.0]去年夏天 - 王大毛
[00:02.31]词：家家
[00:04.63]曲：家家
[00:06.94]编曲：杨栋梁
[00:09.26]后期：杨栋梁
[00:11.58]伴唱：林施
[00:13.89]制作公司：Hikoon Music
[00:16.21]出品公司：Top Music
[00:18.53]还有什么等待
[00:20.23]还有什么悲哀
[00:22.22]这故事中的人不太精彩
[00:26.11]夏去了又回来
[00:27.9]而人却已不在
[00:29.83]它重复着我汹涌的忍耐
[00:33.66]今年兰花又开
[00:35.77]开了它也会败
[00:37.62]我想要一个人活得精彩
[00:41.57]有些人总会来
[00:43.46]有些人在我心中在徘徊
[00:49.37]我拿了总会还
[00:51.28]你拿了就逃开
[00:53.07]在失去中我慢慢的变呆
[00:57.05]是不同步的未来
[01:00.82]却把书包中的日记更改
[01:04.63]把虚伪的尘埃
[01:06.69]也全部都掩盖
[01:08.55]把每次心痛都当成活该
[01:12.55]把心慢慢的释怀
[01:16.32]我相信总有一天你会明白
[01:20.16]我给你的爱
[01:22.2]我给你的爱
[01:24.0]我给你的爱
[01:25.96]我给你的爱
[01:36.68]疼不疼痛不痛
[01:38.770004]这样一直被动
[01:40.67]幻想中我的梦
[01:42.53]总会过分要命的囧
[01:44.84]在过去每个时候
[01:46.47]我都会想象的念头
[01:51.69]别怕你就算我是你的
[01:53.759995]小小狗也总会被打痛
[01:56.33]意念中想不痛
[01:58.09]却总是被一次掏空
[02:00.29]在去年夏天跟你说了
[02:02.43]一个小小要求
[02:04.08]答应了不放手
[02:05.86]而如今也再不回头
[02:07.53]还有什么等待
[02:08.38]还有什么悲哀
[02:10.53]这故事中的人不太精彩
[02:14.42]夏去了又回来
[02:16.24]而人却已不在
[02:18.16]它重复着我汹涌的忍耐
[02:22.09]我拿了总会还
[02:24.09]你拿了就逃开
[02:25.94]在失去中我慢慢的变呆
[02:29.98]是不同步的未来
[02:33.75]却把书包中的日记更改
[02:37.54001]把虚伪的尘埃
[02:39.56]也全部都掩盖
[02:41.45]把每次心痛都当成活该
[02:45.42]把心慢慢的释怀
[02:49.24]我相信总有一天你会明白
[02:53.15]我拿了总会还
[02:55.06]你拿了就逃开
[02:56.95999]在失去中我慢慢的变呆
[03:01.03]是不同步的未来
[03:04.71]却把书包中的日记更改
[03:08.54]把虚伪的尘埃
[03:10.54]也全部都掩盖
[03:12.37]把每次心痛都当成活该
[03:16.4]把心慢慢的释怀
[03:20.18]我相信总有一天你会明白
[03:24.04001]我给你的爱
[03:25.20999]啦啦啦啦啦`)):s==1?(t.src="https://tbt-blog.oss-cn-beijing.aliyuncs.com/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3",this.name="童话镇",this.user="陈一发儿",this.imgUrl="https://cdn.pixabay.com/photo/2021/01/04/14/00/balloons-5887644_640.jpg",localStorage.setItem("user",this.user),localStorage.setItem("name",this.name),localStorage.setItem("img",this.imgUrl),localStorage.setItem("src",t.src),localStorage.setItem("songWord","懒得下载歌词")):s==2?(t.src="https://tbt-blog.oss-cn-beijing.aliyuncs.com/%E5%B0%81%E8%8C%97%E5%9B%A7%E8%8F%8C%20-%20%E4%B8%9C%E4%BA%AC%E4%B8%8D%E5%A4%AA%E7%83%AD.mp3",this.name="东京不太热",this.user="封茗囧菌",this.imgUrl="https://cdn.pixabay.com/photo/2021/01/04/14/00/balloons-5887644_640.jpg",localStorage.setItem("user",this.user),localStorage.setItem("name",this.name),localStorage.setItem("img",this.imgUrl),localStorage.setItem("src",t.src),localStorage.setItem("songWord",`[00:02.06]东京不太热 - 封茗囧菌
[00:07.97]翻唱：囧菌
[00:14.1]原唱：洛天依
[00:20.44]收藏夹的照片看了又删
[00:24.38]去年夏天后就没聊过天
[00:28.1]一盏一盏街灯烘焙了夜
[00:31.92]只有手中烟在寂寞地渲染
[00:35.53]人太多 大部分是漫无目的的走
[00:39.36]听着歌想念一个人心痛也不说
[00:43.19]悄悄看外边的情侣暧昧牵着手
[00:46.8]你也牵过手
[00:48.66]是左手牵右手
[00:51.07]叮当当 Q响起会是谁呢NaYo
[00:54.34]会是他嘛 NaYo
[00:56.32]什么事呢 Ayo
[00:58.28]假装正经帮他把问题都摆平 NaYo
[01:02.12]不多聊了 NaYo
[01:03.97]去吃饭了 Ayo
[01:06.27]明明心里很喜欢却保持着距离
[01:09.770004]oh 怕被伤害就伪装出高冷的表情
[01:13.49]以为这样总有一天他会接近你
[01:17.43]直到有天看见 他和别人在一起
[01:22.020004]一盏一盏街灯烘焙了夜
[01:25.64]只有手中烟在寂寞渲染
[01:29.57]收藏夹的照片看了又删
[01:33.18]去年夏天后就 再没聊过天
[01:37.009995]人太多大 部分是漫无目的的走
[01:40.729996]听着歌想 念一个人心痛也不说
[01:44.66]悄悄看 外边的情侣暧昧牵着手
[01:48.270004]你也牵过手
[01:49.91]是左手牵右手
[01:51.66]叮当当 Q响起会是谁呢 NaYo
[01:55.729996]会是他吗 NaYo
[01:57.15]什么事呢 Ayo
[01:59.66]假装正经把问题都帮他摆平 NaYo
[02:03.27]不多聊了 NaYo
[02:04.59]去吃饭了 Ayo
[02:07.32]明明心里很喜欢却保持着距离
[02:11.16]oh 怕被伤害就伪装出高冷的表情
[02:15.09]以为这样总有一天他会接近你
[02:18.92]直到有天看见 他和别人在一起
[02:22.42]优雅的转身
[02:25.26]熟悉的音乐
[02:27.23]是我们曾经那 一段
[02:30.94]你已经淡出
[02:32.8]在我的时间轴
[02:34.77]只留下那天的回忆单曲循环
[02:38.27]叮当当 Q响起会是谁呢 NaYo
[02:41.77]会是他吗 NaYo
[02:43.2]什么事呢 Ayo
[02:44.73]假装正经把问题都帮他摆平 NaYo
[02:49.54001]不多聊了 NaYo
[02:51.4]去吃饭了 Ayo
[02:53.48]明明心里很喜欢却保持着距离
[02:57.3]oh 怕被伤害就伪装出高冷的表情
[03:01.35]以为这样总有一天他会接近你
[03:04.63]直到有天看见 他和别人在一起
[03:09.01]叮当当 Q响起会是谁呢 NaYo
[03:12.62]会是他吗 NaYo
[03:14.37]什么事呢 Ayo
[03:16.45]假装正经把问题都帮他摆平 NaYo
[03:20.16]不多聊了 NaYo
[03:22.13]去吃饭了 Ayo
[03:24.32]明明心里很喜欢却保持着距离
[03:28.05]oh 怕被伤害就伪装出高冷的表情
[03:31.87]以为这样总有一天他会接近你
[03:35.69]直到有天看见 他和别人在一起
[03:39.74]叮当当 Q响起会是谁呢 NaYo`)):s==3&&(t.src=new URL("/assets/PLANET-dmtahsB_.mp3",import.meta.url).href,this.name="PLANET",this.user="ラムジ",this.imgUrl="https://tbt-blog.oss-cn-beijing.aliyuncs.com/PLANET.jpg",localStorage.setItem("user",this.user),localStorage.setItem("name",this.name),localStorage.setItem("img",this.imgUrl),localStorage.setItem("src",t.src),localStorage.setItem("songWord",`[00:01.0]PLANET - ラムジ
[00:03.41]
[00:03.41]词：ラムジ
[00:06.08]
[00:06.08]曲：ラムジ
[00:10.28]
[00:10.28]どうやってこうやって
[00:13.93]要怎么做？就这么做
[00:13.93]またほら君と話そうか
[00:19.36]现在还能和你说话吧
[00:19.36]あれだってこれだって
[00:22.93]那样也好，这样也好
[00:22.93]今すぐ気付いてくれ
[00:28.42]真希望现在你能快点觉察到我
[00:28.42]僕は君の惑星
[00:32.99]我是一颗不停地围绕你
[00:32.99]回り続けて
[00:37.51]转动的行星
[00:37.51]いつも君のそばで
[00:41.98]我本会一直在你的身边
[00:41.98]黒点数えてたけれど
[00:47.15]即使只是细数你的小缺点
[00:47.15]サヨナラなんてないよ
[00:51.66]不要说再见
[00:51.66]今日から軌道を外れんだ
[00:56.13]今天我要开始偏离你的轨道
[00:56.13]最後まで見送ってよ
[01:00.71]目送你，直到最后
[01:00.71]永遠に離れてくんだ
[01:05.17]因为我将要永远与你分离
[01:05.17]ラララ ララララララ
[01:09.75]lalala
[01:09.75]ラララ ラララララ
[01:14.21]lalala
[01:14.21]ラララ ララララララ
[01:18.71]lalala
[01:18.71]ラララ ラララララ
[01:32.96]lalala
[01:32.96]どうなってこうなって
[01:36.6]为什么会变成这样
[01:36.6]結局独り佇んで
[01:42.009995]最终仍旧是我独自一人伫立在这
[01:42.009995]失って勘づいて
[01:45.66]失去之后才意识到
[01:45.66]今さら戻れやしない
[01:51.020004]事到如今再也回不去了
[01:51.020004]君のいない場所で
[01:55.6]在没有你的场所
[01:55.6]途方に暮れて
[02:00.07]我完全不知所措
[02:00.07]もう一度引力を
[02:04.71]你对我的吸引力
[02:04.71]感じたかったんだけれど
[02:08.65]到现在都还想感受一下
[02:08.65]神様なんていないよ
[02:13.18]这世上并没有什么神明
[02:13.18]いつまで待っても巡回中
[02:17.73]无论期盼到何时都只能在自己的轨道中巡回
[02:17.73]選ばれない悲しみを
[02:22.15]没有被选择的悲伤
[02:22.15]何度でも噛みしめるんだ
[02:32.03]究竟还要再尝多少次
[02:32.03]ああ ああ
[02:44.51]
[02:44.51]君は僕の太陽
[02:48.78]你就是我的太阳
[02:48.78]全てを燃やしたけれど
[02:53.88]已将我的精力全部燃尽
[02:53.88]サヨナラなんてないよ
[02:58.33]不要说再见
[02:58.33]今日から軌道を外れんだ
[03:02.95]今天我要开始偏离你的轨道
[03:02.95]最後まで見送ってよ
[03:07.36]目送你，直到最后
[03:07.36]永遠に離れてくんだ
[03:12.0]因为我将要永远与你分离
[03:12.0]ラララ ララララララ
[03:16.42]lalala
[03:16.42]ラララ ラララララ
[03:20.97]lalala
[03:20.97]ラララ ララララララ
[03:25.47]lalala
[03:25.47]ラララ ラララララ
[03:30.14]lalala
[03:30.14]ラララ ララララララ
[03:34.64]lalala
[03:34.64]ラララ ラララララ
[03:39.15]lalala
[03:39.15]ラララ ララララララ
[03:43.53]lalala
[03:43.53]ラララ ラララララ
[03:48.05301]lalala
`)),t.play()},timeUpdate(){const s=document.getElementById("ado"),t=document.querySelector(".slide"),i=document.querySelector(".fill");console.log(s.currentTime);let o=s.currentTime/s.duration*100;t.style.left=o+"%",i.style.width=o+"%",s.currentTime==0&&(t.style.left="0%");const l=document.querySelector(".currentTime");l.innerHTML=I(parseInt(s.currentTime));const a=document.querySelector(".duraTime");a.innerHTML=I(s.duration)},mousedown(s){const t=document.querySelector(".progress"),i=document.querySelector(".slide"),o=document.getElementById("ado");let l=s.clientX-i.offsetLeft;document.onmousemove=function(a){let r=(a.clientX-l)/t.clientWidth*100;r<=100&&r>=0&&(i.style.left=r+"%");const d=r/100*o.duration;o.currentTime=d},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}},mouseClick(s){const t=document.querySelector(".progress"),i=document.querySelector(".slide"),o=document.getElementById("ado");let a=(s.clientX-t.getBoundingClientRect().left)/t.clientWidth*100;a<=100&&a>=0&&(i.style.left=a+"%");const r=a/100*o.duration;o.currentTime=r},setActive(s){const t=document.querySelectorAll(".navigation li");t.forEach(i=>{i.classList.remove("active")}),t[s].classList.add("active"),this.$router.push(this.routerList[s].url)}},watch:{value:function(s,t){const i=document.getElementById("ado");i.volume=this.value/100;const o=document.querySelector("._voice");i.volume>0?(o.classList.remove("icon-yinliangguanbi"),o.classList.add("icon-yinliangkai")):(o.classList.remove("icon-yinliangkai"),o.classList.add("icon-yinliangguanbi"))}},components:{BlogFooter:A},mounted(){B.get("https://www.tbt-blog.cn/tbt/music/get").then(r=>{this.musicList=r.data.data}),document.querySelectorAll(".navigation li")[0].classList.add("active"),this.$router.push("/music/discover");const t=localStorage.getItem("user"),i=localStorage.getItem("name"),o=localStorage.getItem("img"),l=localStorage.getItem("src"),a=document.getElementById("ado");t!=null&&i!=null&&o!=null&&l!=null&&(this.user=t,this.name=i,this.imgUrl=o),a.paused?(this.iszanting=!1,this.isbofang=!0,l!=null&&(a.src=l)):(this.iszanting=!0,this.isbofang=!1)}};function I(s){let t=parseInt(s),i=parseInt(t/60),o=t%60+"",l=":";return i==0?i="00":i<10&&(i="0"+i),o.length==1&&(o="0"+o),i+l+o}const c=s=>(T("data-v-6a3a7792"),s=s(),w(),s),Y={class:"container"},k=L('<div class="header" data-v-6a3a7792><div class="logo" data-v-6a3a7792><img src="'+j+'" alt="" data-v-6a3a7792><span data-v-6a3a7792></span></div><div class="middle" data-v-6a3a7792><i class="iconfont icon-jiantou-xiangzuo" data-v-6a3a7792></i><i class="iconfont icon-jiantou-xiangyou" data-v-6a3a7792></i><div class="search" data-v-6a3a7792><i class="iconfont icon-sousuo" data-v-6a3a7792></i><input type="text" placeholder="搜索" data-v-6a3a7792></div><i class="iconfont icon-mic-on" data-v-6a3a7792></i></div><div class="other" data-v-6a3a7792><div class="userInfo" data-v-6a3a7792><img src="'+C+'" alt="a" data-v-6a3a7792><span data-v-6a3a7792>金屋藏小猪</span></div><ul data-v-6a3a7792><li data-v-6a3a7792><i class="iconfont icon-zhuti" data-v-6a3a7792></i></li><li data-v-6a3a7792><i class="iconfont icon-shezhi" data-v-6a3a7792></i></li><li data-v-6a3a7792><i class="iconfont icon-xinfeng" data-v-6a3a7792></i></li><li class="vertical_bar" data-v-6a3a7792></li><li data-v-6a3a7792><i class="iconfont icon-MINIMIZE" data-v-6a3a7792></i></li><li data-v-6a3a7792><i class="iconfont icon-zuixiaohua" data-v-6a3a7792></i></li><li data-v-6a3a7792><i class="iconfont icon-zuidahua" data-v-6a3a7792></i></li><li data-v-6a3a7792><i class="iconfont icon-guanbi" data-v-6a3a7792></i></li></ul></div></div><div class="line" data-v-6a3a7792></div>',2),M={class:"main"},F=c(()=>e("div",{class:"left-box"},[e("img",{src:U,style:{width:"100%",height:"100%","object-fit":"cover","object-position":"center"}})],-1)),q={class:"right-box"},W={class:"navigation"},V=["onClick"],P={class:"main-router"},Q={class:"footer"},D={class:"ft_left"},H=["src"],R={class:"songNameAndSinger"},X={class:"songName"},K=c(()=>e("i",{class:"iconfont icon-aixin"},null,-1)),O={class:"singer"},Z={class:"ft_main"},G={class:"tool_list"},J=c(()=>e("li",null,[e("i",{class:"iconfont icon-lajitong"})],-1)),$=c(()=>e("li",null,[e("i",{class:"iconfont icon-geciweidianji"})],-1)),tt=c(()=>e("div",{class:"fill"},null,-1)),st=c(()=>e("span",{class:"currentTime time"},"00:00",-1)),et={ref:"duraTime",class:"duraTime time"},at={class:"ft_right"},it=c(()=>e("li",{class:"jigao"},"极高",-1)),ot=c(()=>e("li",{class:"iconfont icon-yinxiao"},null,-1)),lt={style:{display:"flex","align-items":"center"}},nt=c(()=>e("li",{class:"iconfont icon-yinliangkai _voice"},null,-1)),ct=c(()=>e("li",{class:"iconfont icon-yiqipindan"},null,-1)),rt=c(()=>e("li",{class:"iconfont icon-24gl-playlistMusic"},null,-1));function mt(s,t,i,o,l,a){const r=m("router-view"),d=m("el-slider"),S=m("el-popover"),E=m("BlogFooter");return g(),h(p,null,[e("div",Y,[k,e("div",M,[F,e("div",q,[e("ul",W,[(g(!0),h(p,null,x(l.routerList,(n,v)=>(g(),h("li",{onClick:ut=>a.setActive(v),key:v},[e("span",null,f(n.name),1)],8,V))),128))]),e("div",P,[u(r,{ref:"child",onPlay:a.play,onChangeMusic:a.changeMusic},null,8,["onPlay","onChangeMusic"])])])]),e("div",Q,[e("div",D,[e("img",{class:_(["_img",{imgSpin:l.iszanting==!0}]),src:this.imgUrl,alt:""},null,10,H),e("div",R,[e("span",X,[N(f(this.name),1),K]),e("span",O,f(this.user),1)])]),e("div",Z,[e("ul",G,[J,e("li",null,[e("i",{onClick:t[0]||(t[0]=n=>a.prev()),class:"iconfont icon-shangyishoushangyige"})]),e("li",{onClick:t[1]||(t[1]=(...n)=>a.on_off&&a.on_off(...n))},[e("i",{class:_([{"icon-bofang":l.isbofang,"icon-zanting":l.iszanting},"iconfont _audio"])},null,2)]),e("li",null,[e("i",{onClick:t[2]||(t[2]=n=>a.next()),class:"iconfont icon-xiayigexiayishou"})]),$]),e("div",{class:"progress",onClick:t[5]||(t[5]=(...n)=>a.mouseClick&&a.mouseClick(...n))},[e("div",{onTouchstart:t[3]||(t[3]=(...n)=>s.touchstart&&s.touchstart(...n)),onMousedown:t[4]||(t[4]=(...n)=>a.mousedown&&a.mousedown(...n)),class:"slide"},null,32),tt,st,e("span",et,"00:00",512)])]),e("ul",at,[it,ot,e("div",lt,[u(S,{placement:"right",width:5,"hide-after":100,trigger:"click"},{reference:y(()=>[nt]),default:y(()=>[u(d,{modelValue:l.value,"onUpdate:modelValue":t[6]||(t[6]=n=>l.value=n),vertical:"",height:"100px"},null,8,["modelValue"])]),_:1})]),ct,rt])])]),u(E)],64)}const ht=b(z,[["render",mt],["__scopeId","data-v-6a3a7792"]]);export{ht as default};
