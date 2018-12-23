const express = require('express');
const router = express.Router();

const gen = require('../api/fomula');

const card = [];

router.get('/view',(req,res)=>{
  res.send(card);
})

router.post('/', (req, res)=>{

  const date = new Date;
  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();
  const exyyyy = yyyy + 2;

  const issue = `${dd}/${mm}/${yyyy}`;
  const expire = `${dd}/${mm}/${exyyyy}`;
  const amount = parseInt(req.body.amount);
  const num = parseInt(req.body.num);

  async function numIterator (amount,num,issue,expire) {
    let randomTime = Math.floor(Math.random()*10);
    let timer = 0;

    const randomGen = (amount,num,issue,expire) => {
      let unique = gen(amount);

      let newCard = {
        amount,
        unique,
        issue,
        expire
      }
    
      card.push(newCard);
      randomTime = Math.floor(Math.random()*10);

      // console.log(newCard)
      timer++;
      if(timer == num) clearInterval(generatorTimer);
    }

    const generatorTimer = setInterval(()=>{randomGen(amount,num,issue,expire)}, randomTime);

  }
  numIterator(amount,num,issue,expire);
  res.send('Successful');
  });

module.exports = router;
