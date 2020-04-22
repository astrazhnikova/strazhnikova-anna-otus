const axios = require('axios');

const url = 'http://127.0.0.1:3000';

async function request(n, type) {
  for (let i = 0; i < n; i++) {
    if (type === 'sync') {
	  console.log(`запрос ${i} отправлен`);
      let res = await axios.get(`${url}/${i}`);
      console.log(type, i, `code: ${res.status}`);
    }
    else {
	  console.log(`запрос ${i} отправлен`);
      axios.get(`${url}/${i}`).then((res) => {
        console.log(type, i, `code: ${res.status}`);
      });
    }
  }
}

if (process.argv[2] && (process.argv[3] === 'async' || process.argv[3] === 'sync')) {
	request(Number(process.argv[2]), process.argv[3]);
} else {
	console.log('Укажите количество запросов и тип запросов - параллельный или последовательный (async/sync)');
}