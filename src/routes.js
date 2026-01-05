import { Router } from 'express';

import FuncionariosControllers from "./Funcionarios/controllers/index.js";
import EmpresaControllers from "./Empresas/controllers/Empresas.js"
import ApiPing from './controllers/ApiPing.js';
import AuthentiCationController from './Auth/controllers/Auth.js';
import AdministrativoControllers from './Administrativo/controllers/Administrativo.js';



const routes = new Router();
// routes.use(authMiddleware)

routes.get('/', (req, res) => {
    res.send('Hello World! Myltiane');
});


routes.get('/ping', ApiPing.index);

routes.post('/login', AuthentiCationController.login);
routes.post('/login2', AuthentiCationController.login);

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

//Início Administrativo
routes.get('/listaCaixasMovimento', AdministrativoControllers.retornoListaCaixasMovimento);

routes.get('/listaCaixasFechados', AdministrativoControllers.retornoListaCaixasFechados);
routes.get('/vendaVendedor', AdministrativoControllers.getVendaVendedor);
routes.get('/vendaAtivaAction', AdministrativoControllers.getVendaAtivaAction);
routes.get('/vendaAtivaResumo', AdministrativoControllers.getVendaAtivaResumo)
routes.get('/vendaCancelada', AdministrativoControllers.getVendaCancelada);
routes.get('/vendaCanceladaResumo', AdministrativoControllers.getVendaCanceladaResumo);
routes.get('/resumoVenda', AdministrativoControllers.getResumoVenda);
routes.get('/detalheFatura', AdministrativoControllers.getDetalheFatura);
routes.get('/detalheDespesas', AdministrativoControllers.getDetalheDespesas);
routes.get('/resumoVendaConvenio', AdministrativoControllers.getResumoVendaConvenio)
routes.get('/resumoVendaConveniodesconto', AdministrativoControllers.getResumoVendaConvenioDesconto)
routes.get('/detalheVoucher', AdministrativoControllers.getDetalheVoucher)
routes.get('/detalhe-voucher-dados-adm', AdministrativoControllers.getListaDetalheVoucherDados)
routes.get('/extratoDaLojaDia', AdministrativoControllers.getListaExtratoDaLojaDia)
routes.get('/listaDetalheVenda', AdministrativoControllers.getListaVendasDetalheAlterar)
routes.get('/detalheProdutoVoucher', AdministrativoControllers.getDetalheProdutoVoucher)
routes.get('/pagamentoTef', AdministrativoControllers.getRetornoListaPagamentoTEFSelect)
routes.get('/pagamentoPos', AdministrativoControllers.getRetornoListaPagamentoPOSSelect)
// routes.get('/vendaTotalFormaPagamento', AdministrativoControllers.getRetornoListaRecebimentosFormaPagamento)
routes.get('/listaAlteracaoPreco', AdministrativoControllers.getListaAlteracaoPreco)
routes.get('/vendaAtivaCliente', AdministrativoControllers.getListaClientesVendas)
routes.get('/prestacaoContasBalanco', AdministrativoControllers.getListaPrestacaoDeContas)
routes.get('/novo-previa-balanco', AdministrativoControllers.getListaPreviaBalanco)
routes.get('/vendaCanceladaEmpresa', AdministrativoControllers.getVendaCancelada30Minutos)
routes.get('/vendaCanceladaWeb', AdministrativoControllers.getVendaCanceladaWeb)
routes.get('/vendaCanceladaEmitidaPDV', AdministrativoControllers.getVendaCanceladaEmitidaPDV)
// routes.get('/vendaContigencia', AdministrativoControllers.getListaVendasContigenciaPorEmpresa)
routes.get('/formaPagamentos', AdministrativoControllers.getListaFormaPagamento)
// routes.get('/vendaTotalRecebidoPeriodoADM', AdministrativoControllers.getListaVendaTotalRecebido)
// routes.get('/ultimaPosicaoEstoque', AdministrativoControllers.getListaEstoqueUltimaPosicao)

// routes.get('/pesqBalanco', AdministrativoControllers.getPesqBalanco)
// routes.get('/coletorBalanco', AdministrativoControllers.getListaColetorBalanco)
// routes.get('/detalheBalancoAvulso', AdministrativoControllers.getDetalheBalancoAvulso)

export default routes;

