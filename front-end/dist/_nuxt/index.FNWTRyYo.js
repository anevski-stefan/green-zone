import{_ as a,o as i,c as n,a as e,t as r,b as p}from"./entry.PUSjL8Le.js";const h=""+globalThis.__publicAssetsURL("images/posts/profile_picture.png"),m={data(){return{user:null,loading:!0}},beforeRouteEnter(s,c,t){this.getCookie("user")?t():t({path:"/login"})},mounted(){const s=this.getCookie("user");s&&(this.user=JSON.parse(s),this.loading=!1)},methods:{getCookie(s){const t=`; ${document.cookie}`.split(`; ${s}=`);if(t.length===2)return t.pop().split(";").shift()},async logout(){try{document.cookie="accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",this.$router.push("/login"),window.location.reload()}catch(s){console.error("Logout failed:",s)}}}},f={key:0,class:"absolute inset-0 flex justify-center items-center"},g=e("p",{class:"text-xl font-semibold"},"Loading...",-1),x=[g],k={key:1,class:"bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"},v={class:"p-8"},y={class:"flex items-center"},b=e("img",{src:h,alt:"profile-picture",class:"w-24 h-24 rounded-full mr-6"},null,-1),$={class:"text-lg font-semibold"},w={class:"text-sm text-gray-600"},C={class:"text-sm text-gray-600"},T={key:2,class:"flex justify-center items-center mt-[-50vh]"},L=e("p",{class:"text-xl font-semibold"},"Loading...",-1),N=[L];function P(s,c,t,l,o,d){return i(),n("div",null,[o.loading||!o.user?(i(),n("div",f,x)):o.user?(i(),n("div",k,[e("div",v,[e("div",y,[b,e("div",null,[e("p",$,"Name: "+r(o.user.name),1),e("p",w,"Email: "+r(o.user.email),1),e("p",C,"Points: "+r(o.user.points),1)])])])])):(i(),n("div",T,N))])}const _=a(m,[["render",P]]),B={components:{Profile:_}},E={class:"min-h-screen mt-10"},J=e("h1",{class:"text-4xl text-center mb-8 text-gray-900 uppercase tracking-wider"},"Profile",-1);function U(s,c,t,l,o,d){const u=_;return i(),n("div",E,[J,p(u)])}const R=a(B,[["render",U]]);export{R as default};
