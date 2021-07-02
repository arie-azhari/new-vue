<template>
  <div id="myapp" class="min-h-screen bg-white lg:p-0">
    <!-- first section -->
    <div id="first-section" class="h-screen flex justify-center items-center">
      <transition name="myname" appear>
        <div class="flex flex-col space-y-2 lg:space-y-4 text-center">
          <h1 class="text-6xl lg:text-9xl font-yellowtail tracking-wider">
            Arie Azhari
          </h1>
          <p class="text-2xl lg:text-5xl">Front-end Developer</p>
        </div>
      </transition>
    </div>
    <!-- second section -->
    <div class="relative mb-44 lg:h-screen lg:mb-0 overflow-x-hidden px-8">
      <div
        id="About"
        class="about hidden lg:block absolute tracking-wider z-0"
        style="font-size: 250px; color: #eeeeee"
      >
        ABOUT ME
      </div>

      <div
        class="
          lg:text-4xl
          font-light
          lg:absolute
          z-10
          lg:top-32
          w-2/3
          leading-normal
          right-28
          tracking-wide
        "
      >
        <div class="lg:hidden font-medium">ABOUT ME</div>
        A courteous and enthusiastic software engineer, graduating as a nursing
        diploma, yet interested in web programming and developing apps.
      </div>
    </div>

    <!-- third section -->
    <div class="min-h-screen h-full flex flex-col lg:space-y-20">
      <div
        class="w-full flex lg:flex-row flex-col h-full"
        v-for="(item, index) in myExperience"
        :key="index"
      >
        <div class="lg:w-1/2 p-8 lg:h-screen z-10 sticky top-0 bg-white">
          <div class="h-full relative">
            <div class="flex flex-col lg:space-y-28">
              <p class="lg:text-3xl">{{ item.id }}</p>
              <div class="lg:pl-16 flex flex-col space-y-3">
                <p class="lg:text-5xl font-semibold mb-5 tracking-wide">
                  {{ item.title }}
                </p>
                <p class="lg:text-3xl font-medium tracking-wide">
                  {{ item.jobdesc }}
                </p>
                <p class="lg:text-3xl tracking-wide">{{ item.desc }}</p>
              </div>
            </div>
            <p class="lg:absolute lg:bottom-0 lg:text-3xl">{{ item.type }}</p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 lg:pr-10 z-0 px-8">
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
      class="relative h-screen overflow-x-hidden flex items-center px-8 lg:px-0"
    >
      <div
        id="Skill"
        class="about absolute tracking-wider z-0 hidden lg:block"
        style="font-size: 250px; color: #eeeeee"
      >
        SKILLS
      </div>
      <div
        class="
          flex
          lg:space-y-20
          flex-col
          z-10
          w-full
          container
          mx-auto
          lg:text-4xl
          font-light
          tracking-wide
        "
      >
        <div class="lg:hidden font-medium mb-4">SKILLS</div>
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

    <!-- contact section -->
    <div
      id="ContactContainer"
      class="
        relative
        lg:h-screen
        overflow-x-hidden
        flex
        items-center
        px-8
        lg:px-0
        mb-28
        lg:mb-0
      "
    >
      <div
        id="Contact"
        class="
          about
          lg:absolute
          text-center
          w-full
          tracking-wider
          z-0
          hidden
          lg:block
        "
        style="font-size: 250px; color: #eeeeee"
      >
        CONTACT
      </div>
      <div
        class="
          w-full
          container
          mx-auto
          flex
          lg:flex-row
          flex-col
          z-10
          justify-evenly
          lg:text-4xl
          tracking-wide
          font-light
        "
      >
        <div class="lg:hidden font-medium mb-4">CONTACT</div>
        <a
          class="hover:text-gray-500 transition duration-500"
          target="_blank"
          href="https://github.com/sluxz3r"
          >Github</a
        >
        <a
          class="hover:text-gray-500 transition duration-500"
          target="_blank"
          href="mailto:iniarieazhari@gmail.com"
          >Email</a
        >
        <a
          class="hover:text-gray-500 transition duration-500"
          target="_blank"
          href="https://www.linkedin.com/in/arie-azhari-b15311147/"
          >Linkedin</a
        >
        <a
          class="hover:text-gray-500 transition duration-500"
          target="_blank"
          href="https://arieahzari.site"
          >Portfolio</a
        >
        <a
          class="hover:text-gray-500 transition duration-500"
          target="_blank"
          href="https://instagram.com/topglobaluranus"
          >Instagram</a
        >
        <a
          class="hover:text-gray-500 transition duration-500"
          target="_blank"
          href="https://wa.me/6281313134207"
          >Whatsapp</a
        >
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
      const contact = document.getElementById("Contact");
      const contactContainer = document.getElementById("ContactContainer");
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
      const currentSkill = scrollPosition - (height - skillPageheight);

      const contactPageheight = contactContainer!.offsetHeight;
      const currentContact =
        Math.round(scrollPosition + contactPageheight) -
        (height - contactPageheight);

      skill!.style.transform = `translateX(${Math.round(-currentSkill)}px)`;
      const percentSkill = (currentContact / contactPageheight) * 100;
      contact!.style.transform = `scale(${0.5 + percentSkill / 100})`;
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