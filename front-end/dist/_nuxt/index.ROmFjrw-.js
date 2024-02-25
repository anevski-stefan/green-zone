import{_ as h,o as e,c as t,a as o,F as u,r as p,t as l,g as m,b as g,h as _}from"./entry.ed6yJGaN.js";const f={data(){return{questionsAndAnswers:[{question:"What materials can be recycled?",answer:"Commonly recycled materials include paper, cardboard, plastic, glass, and metal. Check with your local recycling center for specifics."},{question:"How can I recycle paper?",answer:"Make sure paper is clean and dry. Recycle newspapers, magazines, office paper, and cardboard. Avoid paper contaminated with food or grease."},{question:"What should I do with old electronics?",answer:"Recycle old electronics properly to prevent harmful substances from polluting the environment. Many electronics stores offer recycling programs."},{question:"Can plastic bags be recycled?",answer:"Plastic bags can often be recycled at grocery stores, but check with your local recycling center. Avoid putting them in curbside recycling bins."},{question:"What happens to recycled materials?",answer:"Recycled materials are sorted, cleaned, and processed into new products. For example, plastic bottles can be recycled into polyester clothing."},{question:"What is the most sustainable way to recycle plastic containers?",answer:"The most common approach is to melt the plastic and extrude it into new shapes. This process is effective for medium to large business applications."},{question:"Where can I recycle?",answer:"Recycling centers vary by location. Here are some places you can recycle: In Skopje: Recycle Eko Start, Recycling Glass, ЕКОПРОЕКТ-КО, DS Smith AD Skopje Recycling, Vardarishte Recycling Center. In Gevgelija: Progres Group Kompani. In Strumica: Југосуровина. In Shtip: Криплас. In Negotino: Zoka Trade."}],messages:[{type:"bot",content:"Hello! How can I help you with recycling?"}],answered:!1,typing:!1,currentAnswer:""}},methods:{askQuestion(r){const{question:c,answer:i}=this.questionsAndAnswers[r];c&&(this.messages.push({type:"user",content:c,image:"/images/posts/profile_picture.png"}),this.answered=!0,this.typing=!0,setTimeout(()=>{this.typing=!1,this.currentAnswer=i,this.messages.push({type:"bot",content:this.currentAnswer}),this.questionsAndAnswers.splice(r,1),this.answered=!1},1500))}}},b={class:"container mx-auto my-8 px-4"},w={class:"flex flex-col md:max-w-4xl mx-auto rounded-lg overflow-hidden bg-gray-100"},v={class:"flex-grow p-4 overflow-y-auto bg-gray-200"},k={key:0,class:"text-right flex justify-end items-center"},x={class:"inline-block bg-blue-500 text-white rounded-lg p-2 max-w-md text-left"},A=["src"],q={key:1,class:"text-left"},C=["innerHTML"],I={class:"bg-gray-200 p-4"},R={key:0},S=["onClick"],H={key:1},T={key:0,class:"animate-typing mb-2 h-4 w-20 bg-gray-300 rounded-full"},$={key:1,class:"mb-2 text-gray-700"};function W(r,c,i,y,n,d){return e(),t("div",b,[o("div",w,[o("div",v,[(e(!0),t(u,null,p(n.messages,(s,a)=>(e(),t("div",{key:a,class:"mb-4"},[s.type==="user"?(e(),t("div",k,[o("div",x,l(s.content),1),s.image?(e(),t("img",{key:0,src:s.image,alt:"profile-picture",class:"rounded-full w-8 h-8 inline-block ml-2"},null,8,A)):m("",!0)])):(e(),t("div",q,[o("div",{class:"inline-block bg-gray-300 rounded-lg p-2 max-w-md",innerHTML:s.content},null,8,C)]))]))),128))]),o("div",I,[n.answered?(e(),t("div",H,[n.typing?(e(),t("div",T)):(e(),t("div",$,l(n.currentAnswer),1))])):(e(),t("div",R,[(e(!0),t(u,null,p(n.questionsAndAnswers,(s,a)=>(e(),t("button",{key:a,onClick:B=>d.askQuestion(a),class:"w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-blue-500 hover:bg-gray-100"},l(s.question),9,S))),128))]))])])])}const j=h(f,[["render",W],["__scopeId","data-v-f522c69d"]]),M={components:{Chatbot:j}},N=o("h1",{class:"text-4xl text-center mb-8 text-gray-900 uppercase tracking-wider mt-5"},"Eco Chat",-1);function V(r,c,i,y,n,d){const s=_("Chatbot");return e(),t("div",null,[N,g(s)])}const E=h(M,[["render",V]]);export{E as default};