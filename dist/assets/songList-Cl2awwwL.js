import{_ as d,a as _,r as p,o as a,c,e as m,w as u,F as h,d as x,b as s,t as n}from"./index-DdujhLSS.js";const b={data(){return{musicList:[]}},methods:{play(e){this.$emit("play",e)}},mounted(){_.get("https://www.tbt-blog.cn/tbt/music/get").then(e=>{this.musicList=e.data.data})}},f={class:"musicList"},g=s("div",{class:"top-title"},[s("span",{class:"music-title"},"序号"),s("span",{class:"music-title"},"歌名"),s("span",{class:"music-title"},"歌手")],-1),k=["onDblclick"],v={class:"music-example"},y={class:"music-example"},L={class:"music-example"},w=["onClick"];function C(e,$,B,D,i,o){const l=p("el-scrollbar");return a(),c("div",f,[m(l,{height:"500px"},{default:u(()=>[g,(a(!0),c(h,null,x(i.musicList,t=>(a(),c("div",{onDblclick:r=>o.play(t),class:"music",key:t.id},[s("span",v,n(t.id),1),s("span",y,n(t.name),1),s("span",L,n(t.user),1),s("i",{onClick:r=>o.play(t),class:"iconfont icon-add"},null,8,w)],40,k))),128))]),_:1})])}const N=d(b,[["render",C]]);export{N as default};
