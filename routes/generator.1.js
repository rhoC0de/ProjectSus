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

  const index = [];
  // creating an iterator
  for(let i=0; i<num; i++){
    index = index.push(i);
  }

    let unique = await gen(amount)
      .then(result=>{
        const newCard = {
          amount,
          num,
          unique,
          issue,
          expire
        }

        card.push(newCard);
      })

    

  res.send(card);
  });

module.exports = router;
