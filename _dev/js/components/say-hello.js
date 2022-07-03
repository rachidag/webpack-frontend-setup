import $ from 'jquery';

export default class SayHello {
    init() {
        this.SayHello();
    }
  
    getName(firstName, lastName) {
      let fullName = `${firstName} ${lastName}`;
      return fullName;
    }
  
    SayHello() {
        let fullName = this.getName("Rachid", "Aguourrame");
        $('body').append(`<div class="container"><h4>Hello, my name is ${fullName}</h4></div>`);
    }
}
