(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-725b4eb7"],{e3b7:function(e,t,r){"use strict";r.r(t);var a=r("7a23");const c={class:"container-fluid bg-info min-vh-100"},d={class:"row min-vh-100"},l={class:"col-sm-3 px-3 border-dark border-end"},n={class:"col-sm-9"},s={class:"mt-3"},i={key:0,class:"inputList"},b={class:"list-group"},o=["onClick"],m=["disabled"],u=Object(a["g"])("hr",null,null,-1);function j(e,t,r,j,O,y){const A=Object(a["y"])("Navbar"),p=Object(a["y"])("CustomSetting"),w=Object(a["y"])("AwardsCountdown"),g=Object(a["y"])("Awards"),f=Object(a["y"])("Cards");return Object(a["r"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(A),Object(a["g"])("div",c,[Object(a["g"])("div",d,[Object(a["g"])("div",l,[O.isConfirmed?(Object(a["r"])(),Object(a["d"])(w,{key:1,"award-array":O.awardArray,"total-number":y.totalNumber,onFinish:y.clearCards},null,8,["award-array","total-number","onFinish"])):(Object(a["r"])(),Object(a["d"])(p,{key:0,onEmitAward:y.updateAwards},null,8,["onEmitAward"]))]),Object(a["g"])("div",n,[O.isConfirmed?Object(a["e"])("",!0):(Object(a["r"])(),Object(a["f"])(a["a"],{key:0},[Object(a["g"])("div",s,[Object(a["g"])("h4",null,"已輸入獎項： 共 "+Object(a["A"])(y.totalNumber)+" 張",1),O.awardArray.length>0?(Object(a["r"])(),Object(a["f"])("div",i,[Object(a["g"])("ul",b,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(O.awardArray,(e,t)=>(Object(a["r"])(),Object(a["f"])("li",{class:"list-group-item position-relative",key:t},[Object(a["g"])("span",null,Object(a["A"])(e.title)+"，"+Object(a["A"])(e.number)+"張",1),O.isConfirmed?Object(a["e"])("",!0):(Object(a["r"])(),Object(a["f"])("button",{key:0,type:"button",class:"btn btn-sm position-absolute end-0 lh-1",onClick:t=>y.deleteAward(e)}," X ",8,o))]))),128))]),Object(a["g"])("button",{type:"button",class:"btn btn-primary mt-2",onClick:t[0]||(t[0]=(...e)=>y.getCardArray&&y.getCardArray(...e)),disabled:O.isConfirmed}," 輸出籤紙 ",8,m)])):Object(a["e"])("",!0)]),u],64)),O.isConfirmed?(Object(a["r"])(),Object(a["d"])(f,{key:2,"card-array":O.cardArray,onReduceAward:y.getRemainAwards},null,8,["card-array","onReduceAward"])):(Object(a["r"])(),Object(a["d"])(g,{key:1,awards:O.awardArray},null,8,["awards"]))])])])],64)}const O=Object(a["g"])("h3",{class:"my-2"},"設定獎項及張數：",-1),y={class:"mb-2"},A=Object(a["g"])("label",{for:"title",class:"form-label"},"輸入獎項",-1),p={class:"mb-2"},w=Object(a["g"])("label",{for:"number",class:"form-label"},"輸入張數",-1),g={class:"mb-2"},f=Object(a["g"])("label",{for:"imageUrl",class:"form-label"},"圖片連結",-1),h={class:"mb-2"},C=Object(a["g"])("label",{for:"content",class:"form-label"},"獎項描述",-1);function v(e,t,r,c,d,l){return Object(a["r"])(),Object(a["f"])("form",null,[O,Object(a["g"])("div",y,[A,Object(a["F"])(Object(a["g"])("input",{type:"text",class:"form-control",id:"title","aria-describedby":"example","onUpdate:modelValue":t[0]||(t[0]=e=>d.tempAward.title=e)},null,512),[[a["C"],d.tempAward.title]])]),Object(a["g"])("div",p,[w,Object(a["F"])(Object(a["g"])("input",{type:"number",class:"form-control",id:"number","aria-describedby":"example",min:"1",max:"80","onUpdate:modelValue":t[1]||(t[1]=e=>d.tempAward.number=e)},null,512),[[a["C"],d.tempAward.number]])]),Object(a["g"])("div",g,[f,Object(a["F"])(Object(a["g"])("input",{type:"text",class:"form-control",id:"imageUrl","aria-describedby":"example","onUpdate:modelValue":t[2]||(t[2]=e=>d.tempAward.imageUrl=e)},null,512),[[a["C"],d.tempAward.imageUrl]])]),Object(a["g"])("div",h,[C,Object(a["F"])(Object(a["g"])("input",{type:"text",class:"form-control",id:"content","aria-describedby":"example","onUpdate:modelValue":t[3]||(t[3]=e=>d.tempAward.content=e)},null,512),[[a["C"],d.tempAward.content]])]),Object(a["g"])("button",{type:"submit",class:"btn btn-primary",onClick:t[4]||(t[4]=Object(a["G"])((...e)=>l.addItem&&l.addItem(...e),["prevent"]))}," 新增 ")])}var k=r("f018"),x=r.n(k),U={data(){return{tempAward:{title:"",number:0,imageUrl:"",content:""}}},methods:{addItem(){if(this.tempAward.title)if(0===this.tempAward.number)alert("請輸入大於 0 的張數");else{const e={...this.tempAward};e.imageUrl||(e.imageUrl=x.a),this.$emit("emit-award",e),this.tempAward={}}else alert("請輸入獎項名稱")}}},F=r("6b0d"),N=r.n(F);const R=N()(U,[["render",v]]);var E=R,V=r("1274"),I=r("6210"),J=r("93fb"),S=r("d178"),G=r("b346"),L={components:{Navbar:S["a"],CustomSetting:E,Cards:I["a"],Awards:V["a"],AwardsCountdown:J["a"]},data(){return{awardArray:[],cardArray:[],getArray:[],isConfirmed:!1}},methods:{updateAwards(e){this.awardArray.push(e)},deleteAward(e){this.awardArray=this.awardArray.filter(t=>e.title!==t.title)},getCardArray(){this.isConfirmed=!0,this.awardArray.forEach(e=>{const t=Array(e.number).fill(e);this.cardArray=this.cardArray.concat(t)}),this.cardArray=this.getRandomCardsArray(this.cardArray)},clearCards(){this.awardArray=[],this.cardArray=[],this.isConfirmed=!1,this.getArray=[]},getRandomCardsArray:G["a"],getTotalNumber:G["c"],getRemainAwards:G["b"]},computed:{totalNumber(){let e=0;return this.awardArray.forEach(t=>{e+=t.number}),e}}};const P=N()(L,[["render",j]]);t["default"]=P},f018:function(e,t,r){e.exports=r.p+"img/imgPlaceholder.cee3c009.jpg"}}]);
//# sourceMappingURL=chunk-725b4eb7.e90dcb68.js.map