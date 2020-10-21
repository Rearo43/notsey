'use strict';

const minimist = require('minimist');

class Input {

  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
  }

  parse(args) {

    let argsMap = {
      a: 'add',
      add: 'add',
      d: 'delete',
      delete: 'delete',
      l: 'list',
      list: 'list',
    };

    const theKeySwitch = Object.keys(args).find(key => argsMap[key]);
    
    const action = argsMap[theKeySwitch];

    const payload = typeof args[theKeySwitch] === 'string' ? args[theKeySwitch] : undefined;
    const category = args.c || args.category;
    return {
      action,
      payload,
      category,
    };

  }

  valid() {
    

    if (!this.command.action) { return false; }

    if (this.command.action == 'add' || this.command == 'a') {
      if (!this.command.payload) {
        return false;
      }
    }

    if (this.command.action == 'delete' || this.command== 'd') {

      if (!this.command.payload) {
        return false;

      }
    }

    if(this.command.action == 'list' || this.command == 'l'){
      if(this.command.payload){
        return false;
      }
    }
    return true;
  }
}

module.exports = Input;
