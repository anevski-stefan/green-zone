import{_ as e,c as n,a as t,o}from"./entry.7bgofHqV.js";const s=window.setInterval,c={data(){return{countdownSeconds:2}},mounted(){this.countdown()},methods:{countdown(){s(()=>{this.countdownSeconds>0?(this.countdownSeconds--,this.$refs.countdown.innerText=`Redirecting in ${this.countdownSeconds} second${this.countdownSeconds!==1?"s":""}...`):(clearInterval(this.countdownInterval),window.location.href="/")},1e3)}}},d={class:"flex justify-center items-center mt-10"},i={class:"text-center"},r=t("h1",{class:"text-3xl font-bold mb-4"},"Registration Successful!",-1),a=t("p",{class:"text-gray-700"},"Thank you for registering.",-1),l={class:"text-gray-700",ref:"countdown"};function u(_,h,f,w,x,p){return o(),n("div",d,[t("div",i,[r,a,t("p",l,"Redirecting in 2 seconds...",512)])])}const g=e(c,[["render",u]]);export{g as default};