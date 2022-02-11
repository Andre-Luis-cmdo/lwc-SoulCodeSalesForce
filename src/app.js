import { LightningElement } from "lwc";

export default class App extends LightningElement {
  //variavel primeira DIV
  name   = 'André Luis';
  tel    = '12345678';
  cpf    = '789.456.123-00';
  old    = 22; 
  //variavel segunda DIV
  email     = 'test@salesforce.com';
  insta     = 'fulaninho_123';
  linkedin  = "https://www.linkedin.com/in/andr%C3%A9-luis-a4848a206/";
  //imagem
  soulCode  = "https://media-exp1.licdn.com/dms/image/C4D16AQGYGZHbraCx_g/profile-displaybackgroundimage-shrink_200_800/0/1626485033587?e=1648684800&v=beta&t=DFbAyW1q-iurRYGk-a4gvqtGumN3by7NcxjMsCX3Zj4"
  //variavel para mostrar ou não as divs
  mostrar   = true;


  altFicha(){
    //alterar valor da variavel mostrar.
    this.mostrar = !this.mostrar;
    
  }

  alterarValor(){

  this.name         = 'Zezinho';
  this.tel          = '457812';
  this.cpf          = '656.756.984-11';
  this.old          = 30;
  this.email        = 'testandometodo@test' ;
  this.insta        = 'zezinho123';
  this.linkedin     = 'zezinho Bravo'; 
  

  }
}
