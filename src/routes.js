import { Router } from 'express';

import FuncionariosControllers from "./Funcionarios/controllers/index.js";
import EmpresaControllers from "./Empresas/controllers/Empresas.js"

const routes = new Router();
// routes.use(authMiddleware)

routes.get('/', (req, res) => {
    res.send('Hello World! Myltiane');
});

//  Funcionarios 

routes.get('/autorizarVoucher', FuncionariosControllers.getAutorizacaoVoucherFuncionarios)
// routes.get('/listaFuncionariosEmpresa', FuncionariosControllers.getListaFuncionariosEmpresa)
routes.get('/funcionario-ativo-por-empresa', FuncionariosControllers.getListaFuncionariosAtivos)
routes.get('/todos-funcionario', FuncionariosControllers.getListaTodosFuncionarios)

routes.get('/empresas', EmpresaControllers.getAllEmpresas);
routes.get('/grupoEmpresarial', EmpresaControllers.getAllGrupoEmpresarial);
routes.get('/subGrupoEmpresarial', EmpresaControllers.getSelectLojaVouchers);
routes.get('/listaEmpresas', EmpresaControllers.getListaEmpresas)
routes.put('/empresas/:id', EmpresaControllers.putListaEmpresas)

export default routes;

