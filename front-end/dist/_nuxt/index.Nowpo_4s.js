import{_ as r,c as a,a as e,b as s,w as l,h as n,o as i,d as c}from"./entry.ed6yJGaN.js";const d={name:"HomePage",methods:{reloadPage(){this.$router.push({path:"/recyclePlaces",query:{current:"recyclePlaces"}}),setTimeout(()=>{window.location.reload()},100)}}},h={class:"flex justify-center mt-32 items-center h-max"},u={class:"max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg overflow-y-auto h-max"},x=e("h1",{class:"text-4xl font-bold text-center text-gray-800 mb-4"},"Recycle Now",-1),_=e("p",{class:"text-lg text-center text-gray-600 mb-8"},"Your eco-friendly companion for recycling needs.",-1),m={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},p={class:"flex flex-col justify-center items-center bg-blue-500 text-white p-6 rounded-lg shadow-md"},f=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 mb-4",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M2 3a1 1 0 011-1h14a1 1 0 011 1v7h2a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1h2V3zm2 1v5h12V4H4zm0 7v7h12v-7H4z","clip-rule":"evenodd"})],-1),g=e("h2",{class:"text-xl font-semibold mb-2"},"Find Recycling Centers",-1),v=e("p",{class:"text-center"},"Locate nearby recycling centers and drop-off points.",-1),w={class:"flex flex-col justify-center items-center bg-green-500 text-white p-6 rounded-lg shadow-md"},y=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 mb-4",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M13.87 2.455a1 1 0 01.266.779v1.6l-1.685 1.685a4.5 4.5 0 10-1.414 1.414l1.684-1.684h1.602a1 1 0 01.79 1.614l-4.327 4.327a1 1 0 01-.55.256l-1.3.216a.5.5 0 01-.498-.41l-.216-1.3a1 1 0 01.255-.55l4.327-4.326a1 1 0 111.614.79v1.602l1.684-1.684a4.5 4.5 0 10-1.414-1.414l-1.684 1.684v-1.685a1 1 0 01-.87-.998l-.185-1.11a.5.5 0 01.127-.422l1.11-1.11a1 1 0 01.998-.27h1.685l1.684-1.684a1 1 0 01.272-.121z","clip-rule":"evenodd"})],-1),b=e("h2",{class:"text-xl font-semibold mb-2"},"Recycling Tips",-1),k=e("p",{class:"text-center"},"Learn useful tips and tricks for effective recycling.",-1);function C(P,B,V,z,H,t){const o=n("router-link");return i(),a("div",h,[e("div",u,[x,_,e("div",m,[e("div",p,[f,g,v,s(o,{to:{path:"/recyclePlaces",query:{current:"recyclePlaces"}},onClick:t.reloadPage,class:"mt-4 bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300"},{default:l(()=>[c("Explore")]),_:1},8,["onClick"])]),e("div",w,[y,b,k,s(o,{to:{path:"/posts",query:{current:"posts"}},onClick:t.reloadPage,class:"mt-4 bg-white text-green-500 font-semibold py-2 px-4 rounded-full hover:bg-green-100 transition duration-300"},{default:l(()=>[c("Discover")]),_:1},8,["onClick"])])])])])}const j=r(d,[["render",C]]);export{j as default};
