import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erros-ocorridos',
  templateUrl: './erros-ocorridos.page.html',
  styleUrls: ['./erros-ocorridos.page.scss'],
})
export class ErrosOcorridosPage implements OnInit {

  public prescricao = [   
        { val: 'Instrução de administração errada', isChecked: false },
        { val: 'Medicamento errado', isChecked: false },
        { val: 'Contraindicação', isChecked: false }
  ];
 
  public dispensacao = [   
        { val: 'Forma farmacêutica incorreta', isChecked: false },
        { val: 'Medicamento incorreto', isChecked: false },
        { val: 'Armazenamento incorreto', isChecked: false },
        { val: 'Medicamento fora da validade', isChecked: false },
        { val: 'Quantidade errada', isChecked: false }
];

  public preparo = [
        { val: 'Diluição incorreta', isChecked: false },
        { val: 'Doente incorreto', isChecked: false },
        { val: 'Dose incorreta', isChecked: false },
        { val: 'Dose ou medicamento omitido', isChecked: false },
        { val: 'Frequência de administração errada', isChecked: false },
        { val: 'Medicamento incorreto', isChecked: false },
        { val: 'Via incorreta', isChecked: false }
  ];
    Marcados = [];
  constructor() {
    this.Marcados = [];
  } 

  ngOnInit() {
  }

  Escolhido(Prescricoes){
    if (Prescricoes.isChecked){
      this.Marcados.push(Prescricoes);
      console.log(this.Marcados);
    }
  }

}
