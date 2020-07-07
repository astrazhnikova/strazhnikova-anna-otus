<template>
  <b-container class="game">
    <b-row align-h="center">
      <b-col md="8">
        <div class="game-top">
          <b-button @click.prevent="$emit('btnPress')">X Отмена</b-button>
          <div class="game-timer">{{timer | timeView}}</div>
        </div>
        <div class="game-body">
          <div class="game-exercise">
            <span class="num-1">12</span>
            <div>*</div>
            <b-form-input></b-form-input>
            <div>*</div>
            <b-form-input></b-form-input>
          </div>
          <div class="game-result">= 36</div>
        </div>
        <div class="game-buttons">
          <div class="game-numbers">
            <button class="game-btn">1</button>
            <button class="game-btn">2</button>
            <button class="game-btn">3</button>
            <button class="game-btn">4</button>
            <button class="game-btn">5</button>
            <button class="game-btn">6</button>
            <button class="game-btn">7</button>
            <button class="game-btn">8</button>
            <button class="game-btn">9</button>
            <button class="game-btn">0</button>
          </div>
          <div class="game-nav">
            <button class="game-btn-sign"><</button>
            <button class="game-btn-sign">></button>
            <button class="game-btn-sign">?</button>
            <button class="game-btn-sign">=</button>
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
      timer: 250
    };
  },
  mounted: function() {
    this.timerDown();
  },
  methods: {
    timerDown: function() {
      setInterval(() => {
        this.timer == 0 ? this.$emit("btnPress") : this.timer--;
      }, 1000);
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
</style>