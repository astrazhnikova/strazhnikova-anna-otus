<template>
  <b-container class="game">
    <b-row align-h="center">
      <b-col md="8">
        <div class="game-top">
          <b-button @click="$router.push('/')">X Отмена</b-button>
          <div class="game-timer">{{timer | timeView}}</div>
        </div>
        <div class="game-body">
          <div class="game-exercise">
            <span class="num-1">{{first_num}}</span>
            <div>*</div>
            <b-form-input
              v-model.number="input1"
              @focus="focus_flag = 1"
              v-bind:class="{ 'focus_input_class': focus_flag==1}"
              :disabled="focus_flag==0"
            ></b-form-input>
            <div>*</div>
            <b-form-input
              v-model.number="input2"
              @focus="focus_flag = 2"
              v-bind:class="{ 'focus_input_class': focus_flag==2}"
              :disabled="focus_flag==0"
            ></b-form-input>
          </div>
          <div class="game-result">= {{result}}?</div>
        </div>
        <div class="game-buttons">
          <div class="game-numbers">
            <button
              class="game-btn"
              v-for="(number, index) in [1,2,3,4,5,6,7,8,9,0]"
              :key="index"
              @click="changeValue(number)"
            >{{number}}</button>
          </div>
          <div class="game-nav">
            <button class="game-btn-sign">&lt;</button>
            <button class="game-btn-sign">&gt;</button>
            <button class="game-btn-sign">?</button>
            <button class="game-btn-sign" @click="newNumbers()">=</button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      timer: 15,
      result: 84340,
      first_num: 13,
      input1: "",
      input2: "",
      focus_flag: 0
    };
  },
  mounted: function() {
    this.timerDown();
    this.newNumbers();
  },
  methods: {
    timerDown: function() {
      setInterval(() => {
        this.timer === 0 ? this.blockAll() : this.timer--;
      }, 1000);
    },
    blockAll: function() {
      this.focus_flag = 0;
    },
    changeValue: function(num) {
      if (this.focus_flag === 1) {
        this.input1 = this.input1 + num;
      } else if (this.focus_flag === 2) {
        this.input2 = this.input2 + num;
      }
    },
    newNumbers: function(num) {
      this.timer = 15;
      this.focus_flag = 1;
      this.input1 = "";
      this.input2 = "";
      this.result = Math.round(Math.random() * 100);
      this.first_num = Math.round(Math.random() * 100);
    }
  },
  filters: {
    timeView: function(value) {
      let minutes = Math.floor(value / 60)
        .toString()
        .padStart(2, 0);
      let seconds = (value % 60).toString().padStart(2, 0);
      return `${minutes}:${seconds}`;
    }
  }
};
</script>

<style>
.game {
  margin-top: 20px;
}
.game-top {
  display: flex;
  justify-content: space-between;
}
.game-timer {
  padding: 2px 0px;
  border-radius: 10px;
  width: 94px;
  background: #bee5eb;
  text-align: center;
  font-size: 25px;
}
.game-body {
  margin-top: 50px;
  max-width: 80vw;
}
.game-exercise {
  display: flex;
  align-items: center;
  justify-content: center;
}
.game-exercise > * {
  margin: 0 10px;
}
.game-numbers {
  display: flex;
  justify-content: center;
  width: 85%;
  max-width: 240px;
  margin: 0 0 0 auto;
  flex-wrap: wrap;
}
.game-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0 0;
}
.game-btn,
.game-btn-sign {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  margin-right: 15%;
}

.game-btn {
  background-color: rgb(255, 69, 0, 0.7);
}

.game-btn-sign {
  background-color: lightgrey;
}

.game-buttons {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.focus_input_class {
  background-color: rgb(255, 255, 0, 0.7);
}
</style>