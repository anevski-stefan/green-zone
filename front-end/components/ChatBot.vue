<template>
  <div class="container mx-auto my-8 px-4">
    <div class="flex flex-col md:max-w-4xl mx-auto rounded-lg overflow-hidden bg-gray-100">
      <div class="flex-grow p-4 overflow-y-auto bg-gray-200">
        <div v-for="(message, index) in messages" :key="index" class="mb-4">
          <div v-if="message.type === 'user'" class="text-right flex justify-end items-center">
            <div class="inline-block bg-blue-500 text-white rounded-lg p-2 max-w-md text-left">{{
                message.content
              }}
            </div>
            <img v-if="message.image" :src="message.image" alt="profile-picture"
                 class="rounded-full w-8 h-8 inline-block ml-2">
          </div>
          <div v-else class="text-left">
            <div class="inline-block bg-gray-300 rounded-lg p-2 max-w-md" v-html="message.content"></div>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 p-4">
        <div v-if="!answered">
          <button v-for="(qa, index) in questionsAndAnswers" :key="index" @click="askQuestion(index)"
                  class="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-blue-500 hover:bg-gray-100">
            {{ qa.question }}
          </button>
        </div>
        <div v-else>
          <div v-if="typing" class="animate-typing mb-2 h-4 w-20 bg-gray-300 rounded-full"></div>
          <div v-else class="mb-2 text-gray-700">{{ currentAnswer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionsAndAnswers: [
        {
          question: "What materials can be recycled?",
          answer: "Commonly recycled materials include paper, cardboard, plastic, glass, and metal. Check with your local recycling center for specifics."
        },
        {
          question: "How can I recycle paper?",
          answer: "Make sure paper is clean and dry. Recycle newspapers, magazines, office paper, and cardboard. Avoid paper contaminated with food or grease."
        },
        {
          question: "What should I do with old electronics?",
          answer: "Recycle old electronics properly to prevent harmful substances from polluting the environment. Many electronics stores offer recycling programs."
        },
        {
          question: "Can plastic bags be recycled?",
          answer: "Plastic bags can often be recycled at grocery stores, but check with your local recycling center. Avoid putting them in curbside recycling bins."
        },
        {
          question: "What happens to recycled materials?",
          answer: "Recycled materials are sorted, cleaned, and processed into new products. For example, plastic bottles can be recycled into polyester clothing."
        },
        {
          question: "What is the most sustainable way to recycle plastic containers?",
          answer: "The most common approach is to melt the plastic and extrude it into new shapes. This process is effective for medium to large business applications."
        },
        {
          question: "Where can I recycle?",
          answer: "Recycling centers vary by location. Here are some places you can recycle: In Skopje: Recycle Eko Start, Recycling Glass, ЕКОПРОЕКТ-КО, DS Smith AD Skopje Recycling, Vardarishte Recycling Center. In Gevgelija: Progres Group Kompani. In Strumica: Југосуровина. In Shtip: Криплас. In Negotino: Zoka Trade."
        }
      ],
      messages: [
        {type: 'bot', content: 'Hello! How can I help you with recycling?'}
      ],
      answered: false,
      typing: false,
      currentAnswer: ''
    };
  },
  methods: {
    askQuestion(index) {
      const {question, answer} = this.questionsAndAnswers[index];
      if (question) {
        this.messages.push({type: 'user', content: question, image: '/images/posts/profile_picture.png'});
        this.answered = true;
        this.typing = true;
        setTimeout(() => {
          this.typing = false;
          this.currentAnswer = answer;
          this.messages.push({type: 'bot', content: this.currentAnswer});
          this.questionsAndAnswers.splice(index, 1);
          this.answered = false;
        }, 1500);
      }
    }
  }
};
</script>

<style scoped>
.container {
  font-family: 'Roboto', sans-serif;
}

.animate-typing {
  animation: typing 1s infinite;
}

@keyframes typing {
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
</style>
