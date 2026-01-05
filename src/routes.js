import { Router } from 'express';

import FuncionariosControllers from "./Funcionarios/controllers/index.js";
import EmpresaControllers from "./Empresas/controllers/Empresas.js"
import ApiPing from './controllers/ApiPing.js';
import AuthentiCationController from './Auth/controllers/Auth.js';
import AdministrativoControllers from './Administrativo/controllers/Administrativo.js';
import FinanceiroControllers from './Financeiro/controllers/Financeiro.js';
// import InformaticaControllers from './Informatica/controllers/Informatica.js';

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



// Início Financeiro

routes.get('/listaExtratoDaLojaPeriodo', FinanceiroControllers.getListaExtratoDaLojaPeriodoFinan)
routes.get('/historicos-malotes', FinanceiroControllers.getListasHistoricosMalotes)
routes.get('/malotes-loja', FinanceiroControllers.getListasMalotesLojas)
routes.get('/pendencias-malotes', FinanceiroControllers.getListaPendenciasMalotes)

routes.put('/malotes-loja/:id', FinanceiroControllers.putMalotesLoja)

// routes.get('/listaVendasMarca', FinanceiroControllers.getListaVendasMarca)
routes.get('/resumoVendaFinanceiro', FinanceiroControllers.getListaVendasResumidaFinanceiro)

routes.get('/vendaPagamento', FinanceiroControllers.getListaVendasTransacoesEmpresa)
routes.get('/vendaTotalEmpresa', FinanceiroControllers.getListaVendasEmpresa)
routes.get('/detalheFechamento', FinanceiroControllers.getListaDetalheFechamento)
routes.get('/listaCaixasMovimentoFinanceiro', FinanceiroControllers.getListaCaixasMovmentoFinanceiro)
routes.get('/vendaMarcaPeriodoFinanceiro', FinanceiroControllers.getListaVendasMarcaFinanceiro)
routes.get('/vendaMarcaRob', FinanceiroControllers.getListaVendasMarcaROB)
routes.get('/vendaMarcaMarckup', FinanceiroControllers.getListaVendasMarcaMarckup)
routes.get('/vendaDigitalFinanceiro', FinanceiroControllers.getListaVendasDigital)
routes.get('/vendaPixPeriodo', FinanceiroControllers.getListaVendasPixPeriodo)
routes.get('/vendaPixConsolidadoLoja', FinanceiroControllers.getListaVendasPixConsolidadoLojas)
routes.get('/vendaPixConsolidado', FinanceiroControllers.getListaVendasPixConsolidado)

// routes.get('/faturaPixPeriodoConsolidado', FinanceiroControllers.getListaFaturasPixConsolidado)
routes.get('/faturaPixConsolidadoLoja', FinanceiroControllers.getListaFaturaPixConsolidadoLoja)
// routes.get('/vendaConciliar', FinanceiroControllers.getListaVendasConciliar)
routes.get('/venda-detalhe-recebimento-eletronico', FinanceiroControllers.getListaDetalheRecebimentosEletronico)
// routes.get('/vendaDetalheRecebimentoEletronico', FinanceiroControllers.getListaDetalheRecebimentosEletronico)
// routes.get('/deposito-loja', FinanceiroControllers.getListaConciliarBanco)
routes.get('/deposito-loja-consolidado', FinanceiroControllers.getListaConciliarBancoConsolidado)
// routes.get('/saldoLojaPorGrupo', FinanceiroControllers.getListaSaldoExtratoLoja)
routes.post('/motivoDevolucao', FinanceiroControllers.createMotivoDevolucao)
// routes.get('/detalheFaturaFinanceiro', FinanceiroControllers.getListaDetalheFaturaFinanceiro)
routes.get('/banco', FinanceiroControllers.getListaBanco)
routes.get('/conta-banco', FinanceiroControllers.getListaContaBanco)
routes.put('/conta-banco/:id', FinanceiroControllers.putContaBanco)
routes.post('/cadastrar-conta-banco', FinanceiroControllers.postContaBanco)

// routes.get('/lista-extrato', ExtratosControllers.getListaExtratoDaLojaPeriodoFinanceiro)
// routes.put('/ajuste-extrato/:id', ExtratosControllers.putListaAjusteExtrato)
// routes.post('/ajuste-extrato', ExtratosControllers.postListaAjusteExtrato)

// routes.get('/resumo-voucher', VoucherControllers.getListaResumoVoucherFinanceiro)
// routes.put('/atualizacaoAdiantamentoStatus', FinanceiroControllers.updateAdiantamentoStatus)
routes.put('/atualizarFatura/:id', FinanceiroControllers.putFaturaFinanceiro)
routes.put('/conferencia-fatura/:id', FinanceiroControllers.putFaturaConferencia)


// Início Vendas 
routes.get('/vendaLojaPeriodo', FinanceiroControllers.getListaVendasLojaPeriodo)
export default routes;

