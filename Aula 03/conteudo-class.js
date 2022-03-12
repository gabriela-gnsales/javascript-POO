class Quadrado{
    constructor(base, altura){
      if(isNaN(base) || isNaN(altura)) throw 'base e altura precisam ser números';
      this.base = base;
      this.altura = altura;
      this.cor = undefined;
    }
    calcularArea() {
      return this.base * this.altura;
    }
    duplicarParaDireita(){
      this.base = this.base * 2;
    }
    duplicarParaBaixo(){
      this.altura = this.altura * 2;
    }
    imprimir(){
      return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`;
    }
  }
  
  const quadrado = new Quadrado(3, 4);
  console.log(quadrado); // Quadrado { base: 3, altura: 4, cor: undefined }
  console.log(quadrado.calcularArea()); //12
  quadrado.duplicarParaBaixo();
  console.log(quadrado); // Quadrado { base: 3, altura: 8, cor: undefined }
  quadrado.duplicarParaDireita();
  console.log(quadrado); // Quadrado { base: 6, altura: 8, cor: undefined }
  console.log(quadrado.imprimir()); // <div style='width:6px;height:8px;background-color:blue'></div>
  
  //experimente esse no navegador:
  const quadrado2 = new Quadrado(200, 200);
  document.write(quadrado2.imprimir());