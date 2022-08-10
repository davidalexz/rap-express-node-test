const express = require('express');

const app = express();
const PORT = 8000;

const rappers = {
  '21 savage': {
    age: 21,
    birthName: 'Gigi Ion',
    birthLocation: 'Lupeni, HD',
  },
  'chance the rapper': {
    age: 43,
    birthName: 'Gigi Vasi',
    birthLocation: 'Vulcan, HD',
  },
  default: {
    age: 99,
    birthName: 'Default',
    birthLocation: 'Uricani, HD',
  },
};

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.get('/api/:rapperName', (req, res) => {
  // eslint-disable-next-line max-len
  const rappersName = req.params.rapperName.toLowerCase(); // the parameter passed in the URL, exammple rappers[21 Savage]
  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers.default);
  }
});

app.listen(process.env.PORT || PORT, () => {
  // eslint-disable-next-line no-console
  console.log('SERVER IS UP');
});
