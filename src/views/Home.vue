<template>
  <seciton>
    <div class="time-wrapper">
      {{ nowString }}
    </div>
    기준시간 : <input type="text" v-model="initTime">
    <button @click="audio">소리재생</button>


  </seciton>
</template>

<script>
import moment from "moment";
// import { ipcRenderer } from "electron";

export default {
  name: 'Home',
  data(){
    return{
      nowString: "로딩중 입니다!",
      isAlarm: false,
      initTime: "1:00:00 PM"
    }
  },
  mounted() {
    setInterval(() => { this.nowString = moment().format('LTS') }, 1000)
  },
  watch: {
    nowString(nowString) {
      if(nowString === this.initTime){
        this.audio();
      }else{
        this.isAlarm = false
      }
    }
  },
  methods: {
    setting() {
      this.initTime = prompt("시간을 설정해주세요. (ex: 4:30:15 PM)");
    },
    audio() {
      const audio = new Audio(`./beef-1.mp3`);
      audio.play();
    }
  }
}
</script>

<style lang="scss">
  .time-wrapper {
    font-size: 30px;
  }
</style>
