<template>
  <div class="main">
    <h1>Привет!</h1>
    <div>
      Добро пожаловать на {{day}} тренировочный день.
      <br>
      Ваш последний результат - решено {{trueAnswers}} из {{maxAnswers}}.
      <br>
      Общая точность {{precision}}%.
      <h4>Настройки</h4>

      <b-form @submit.prevent="$emit('btnPress')">
        <br>
        <b-form-input type="range" v-model="settings.duration" min="1" max="15"></b-form-input>
        <div>Длительность {{settings.duration}} минут</div>

        <br>

        <b-form-input type="range" v-model="settings.difficulty" min="1" max="10"></b-form-input>
        <div>Сложность: {{settings.difficulty}}</div>
        <br>
        <b-form-checkbox-group
          v-model="settings.selectedTypes"
          :options="settings.types"
          class="mb-3"
          value-field="value"
          text-field="text"
          disabled-field="notEnabled"
          stacked>
        </b-form-checkbox-group>
        <b-button
         @click="$router.push('game')"
          class="startButton"
          type="submit"
          variant="primary form-send"
          :disabled="settings.selectedTypes.length < 1">
          Начать!
          </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      day: 25,
      trueAnswers: 10,
      maxAnswers: 25,
      precision: 80,
      settings: {
        duration: 1,
        difficulty: 1,
        types: [
          {
            text: "Суммирование",
            value: "+"
          },
          {
            text: "Разность",
            value: "-"
          },
          {
            text: "Умножение",
            value: "*"
          },
          {
            text: "Деление",
            value: "/"
          },
          {
            text: "Возведение в степень",
            value: "^"
          }
        ],
        selectedTypes: []
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 10px 0;
}

.main {
  text-align: left;
}

.startButton {
  margin-left: auto;
  margin-right: 5px;
  display: block;
}
</style>
