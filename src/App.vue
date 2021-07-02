<template>
  <div id="myapp" class="min-h-screen bg-white">
    <!-- first section -->
    <div id="first-section" class="h-screen flex justify-center items-center">
      <transition name="myname" appear>
        <div class="flex flex-col space-y-4 text-center">
          <h1 class="text-9xl font-yellowtail tracking-wider">Arie Azhari</h1>
          <p class="text-5xl">Front-end Developer</p>
        </div>
      </transition>
    </div>
    <!-- second section -->
    <div class="relative h-screen overflow-x-hidden">
      <div
        id="About"
        class="about absolute tracking-wider z-0"
        style="font-size: 250px; color: #eeeeee"
      >
        ABOUT ME
      </div>
      <div
        class="
          text-4xl
          font-light
          absolute
          z-10
          top-32
          w-2/3
          leading-normal
          right-28
          tracking-wide
        "
      >
        A courteous and enthusiastic software engineer, graduating as a nursing
        diploma, yet interested in web programming and developing apps.
      </div>
    </div>

    <!-- third section -->
    <div class="min-h-screen h-full flex flex-col space-y-20">
      <div
        class="w-full flex h-full"
        v-for="(item, index) in myExperience"
        :key="index"
      >
        <div class="w-1/2 p-8 h-screen sticky top-0">
          <div class="h-full relative">
            <div class="flex flex-col space-y-28">
              <p class="text-3xl">{{ item.id }}</p>
              <div class="pl-16 flex flex-col space-y-3">
                <p class="text-5xl font-semibold mb-5 tracking-wide">
                  {{ item.title }}
                </p>
                <p class="text-3xl font-medium tracking-wide">
                  {{ item.jobdesc }}
                </p>
                <p class="text-3xl tracking-wide">{{ item.desc }}</p>
              </div>
            </div>
            <p class="absolute bottom-0 text-3xl">{{ item.type }}</p>
          </div>
        </div>
        <div class="w-1/2 pr-10">
          <div
            :class="
              !item.isMobile
                ? 'flex  flex-col space-y-[-70px] w-full'
                : 'flex flex-row flex-wrap'
            "
          >
            <img
              v-show="!item.isMobile"
              class="ring-8 ring-gray-700 rounded-lg"
              :style="`z-index:${10 - idx}; transform: scale(${1 - idx / 20});`"
              v-for="(it, idx) in item.images"
              :class="(idx + 1) % 2 ? 'self-start w-4/5' : 'self-end w-4/5'"
              :src="getSrc(it)"
              :key="idx"
            />
            <div
              v-show="item.isMobile"
              v-for="(it, idx) in item.images"
              :key="idx"
              class="w-1/2"
              :class="(idx + 1) % 2 ? 'mt-0' : 'mt-28'"
            >
              <img
                class="border-8 rounded-lg border-gray-600"
                :src="getSrc(it)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- skills section -->
    <div
      id="SkillParent"
      class="relative h-screen overflow-x-hidden flex items-center"
    >
      <div
        id="Skill"
        class="about absolute tracking-wider z-0"
        style="font-size: 250px; color: #eeeeee"
      >
        SKILLS
      </div>
      <div
        class="
          flex
          space-y-20
          flex-col
          z-10
          w-full
          container
          mx-auto
          text-4xl
          font-light
          tracking-wide
        "
      >
        <div class="flex space-x-10">
          <div class="w-1/2">
            <ul class="space-y-2">
              <li>React</li>
              <li>React Native</li>
              <li>Vue</li>
              <li>Electron</li>
              <li>Typescript</li>
              <li>NodeJs</li>
            </ul>
          </div>
          <div class="w-1/2">
            <ul class="space-y-2">
              <li>Responsive Design</li>
              <li>Testing & Debugging</li>
              <li>Clean Architecture</li>
            </ul>
          </div>
        </div>
        <div class="flex space-x-10">
          <div class="w-1/2">
            <ul class="space-y-2">
              <li>Rapid Prototyping</li>
              <li>Functional Programming</li>
              <li>Interaction Development</li>
            </ul>
          </div>
          <div class="w-1/2">
            <ul class="space-y-2">
              <li>VS Code</li>
              <li>Github Cli</li>
              <li>Figma</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      widht: window.innerWidth,
      height: window.innerHeight,
      aboutScrollX: "0px",
    });
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });
    const onScroll = () => {
      const screenHeight = window.top.scrollY;
      const addTransform = document.getElementById("About");
      const skill = document.getElementById("Skill");
      const skillParent = document.getElementById("SkillParent");
      const secondPageHeigth = state.height * 2;
      const percentageSecondPage = (screenHeight / secondPageHeigth) * 100;
      const secondPageWidhPercentage =
        (percentageSecondPage / 100) * state.widht;

      addTransform!.style.transform = `translateX(${Math.round(
        secondPageWidhPercentage / 2 - 200
      )}px)`;

      const height = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const skillPageheight = skillParent!.offsetHeight;
      const skillScrollYPosition =
        screenHeight - (screenHeight - skillPageheight);
      const currentSkill = scrollPosition - (height - skillPageheight)

      skill!.style.transform = `translateX(${Math.round(
        -currentSkill
      )}px)`;
    };
    const myExperience = [
      {
        id: "01",
        title: "Mitsubishi Sales Force ID",
        jobdesc: "Front-end Developer",
        desc: "CMS web app for sales management",
        type: "Web App",
        images: ["Bsi01", "Bsi02", "Bsi03"],
      },
      // {
      //   id: "02",
      //   title: "Qasir",
      //   jobdesc: "Front-end Developer",
      //   desc: "Cashier app for merchants",
      //   type: "Desktop App",
      //   images: ["Suite01", "Suite02", "Suite03", "Suite04"],
      // },
      {
        id: "02",
        title: "E-Procurement PINDAD",
        jobdesc: "Front-end Developer",
        desc: "Auction app for vendor",
        type: "Web App",
        images: ["Eproc01", "Eproc02", "Eproc03"],
      },
      {
        id: "03",
        title: "KPI PINDAD",
        jobdesc: "Front-end Developer",
        desc: "App for count Key Performance Indicator to all employees",
        type: "Web App",
        images: ["Kpi01", "Kpi02", "Kpi03"],
      },
      {
        id: "04",
        title: "Lion Parcel",
        jobdesc: "Fullstack Developer",
        desc: "Delivery and merchant app",
        type: "Web App",
        images: ["Lp01", "Lp02", "Lp03"],
        isMobile: true,
      },
      {
        id: "05",
        title: "Refactory Suite",
        jobdesc: "Front-end Developer",
        desc: "Users and Tasks management app for company usage",
        type: "Desktop App",
        images: ["Suite01", "Suite02", "Suite03", "Suite04"],
      },
      {
        id: "06",
        title: "Epitome Global",
        jobdesc: "Front-end Developer",
        desc: "Digital learning app managed by Epitome based on Singapore",
        type: "Web App",
        images: ["Epitome01", "Epitome02", "Epitome04"],
      },
    ];

    const getSrc = (name: string) => {
      const path = `./assets/png/${name}.png`;
      const modules = import.meta.globEager("./assets/png/*.png");
      return modules[path].default;
    };

    return {
      myExperience,
      getSrc,
      state,
    };
  },
});
</script>
<style scoped>
.myname-enter-from,
.myname-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.myname-enter-active,
.myname-leave-active {
  transition: all 1s ease;
}
.myname-enter-to,
.myname-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.about {
  transition: transform 0.5s ease-out 0s;
}
</style>