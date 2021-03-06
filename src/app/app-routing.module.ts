import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'aviso', loadChildren: './RegistroGeral/aviso/aviso.module#AvisoPageModule' },
  { path: 'registro-data-hora', loadChildren: './RegistroGeral/registro-data-hora/registro-data-hora.module#RegistroDataHoraPageModule' },
  { path: 'registro-local', loadChildren: './RegistroGeral/registro-local/registro-local.module#RegistroLocalPageModule' },
  { path: 'registro-paciente', loadChildren: './RegistroGeral/registro-paciente/registro-paciente.module#RegistroPacientePageModule' },
  { path: 'erros-ocorridos', loadChildren: './erros-ocorridos/erros-ocorridos.module#ErrosOcorridosPageModule' },
  { path: 'validado', loadChildren: './validado/validado.module#ValidadoPageModule' },
  { path: 'registros', loadChildren: './Firestore/registros/registros.module#RegistrosPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
