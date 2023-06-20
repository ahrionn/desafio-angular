import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  nome: string = '';
  sobrenome: string = '';
  idade: number | null = null;
  sexo: string = 'N';
  dataNascimento: string = '';

  constructor() {}

  salvarDados() {
    const dados = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      idade: this.idade,
      sexo: this.sexo,
      dataNascimento: this.dataNascimento
    };

    console.log('Dados preenchidos:', dados);

    this.limparCampos();
  }

  limparCampos() {
    this.nome = '';
    this.sobrenome = '';
    this.idade = null;
    this.sexo = 'N';
    this.dataNascimento = '';
  }
}
