// import request from 'request';
import chalk from 'chalk';
import MyModel from '../models/myModal.js';

const colorLog = (msg1, msg2) => console.log(`${chalk.green.bold(msg1)}: ${chalk.yellow(msg2)}`);
const badLog = (msg1) => console.log(chalk.red.bold(msg1));

export default {
  storeLogin: (req, res) => {
    colorLog('req.body.inputFields.Username',req.body.inputFields.Username)
    MyModel.addstuff(req.body.inputFields.Username, (err, env) => {
      if (err === 'failed') {
        badLog('failed');
        res.status(500).send('Internal Server Error');
      } else if (err === 'exists') {
        badLog('???');
        res.status(400).send('Already Exists');
      } else {
        badLog('yay');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(env));
      }
    });
  }
}
