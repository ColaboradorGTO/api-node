import { Router } from 'express';

import FuncionariosControllers from "./Funcionarios/controllers/index.js";
import EmpresaControllers from "./Empresas/controllers/Empresas.js"
import ApiPing from './controllers/ApiPing.js';
import AuthentiCationController from './Auth/controllers/Auth.js';
import AdministrativoControllers from './Administrativo/controllers/Administrativo.js';
import FinanceiroControllers from './Financeiro/controllers/Financeiro.js';
import InformaticaControllers from './Informatica/controllers/Informatica.js';
import ExpedicaoControllers from './Expedicao/controllers/index.js';
import DashBoardControllers from './DashBoard/controllers/DashBoard.js';
import VendasControllers from './Vendas/controllers/Vendas.js';
import ResumoVoucherControllers from './ResumoVoucher/controllers/index.js';
import ComercialControllers from './Comercial/controllers/Comercial.js';

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



// Início Informática GET
routes.get('/marcasLista', InformaticaControllers.getListaMarcas)
routes.get('/listaGrupoEmpresas', InformaticaControllers.getListaGrupoEmpresas)
routes.get('/listaEmpresasControleTransferencia', InformaticaControllers.getListaEmpresas);
routes.get('/listaEmpresasIformatica', InformaticaControllers.getListaEmpresasInformatica);
routes.get('/listaProdutoPreco', InformaticaControllers.getListaProdutoPreco)
routes.get('/lista-caixas', InformaticaControllers.getListaCaixas)
// routes.get('/listaCaixasID', InformaticaControllers.getListaCaixasID)
routes.get('/atualiza-empresa-diario', InformaticaControllers.getListaAtualizaEmpresaDiario)
routes.get('/vendas-loja-informatica', InformaticaControllers.getListaVendasLojaInformatica)
routes.get('/funcionarios-loja', InformaticaControllers.getListaFuncionariosLoja)
routes.get('/funcionarios-loja-ativos', InformaticaControllers.getListaFuncionariosLoja)
routes.get('/atualizarFuncionario', InformaticaControllers.getListaAtualizarFuncionario)
// routes.get('/pagamento-tef-informatica', InformaticaControllers.getListaPagamentoTEFInformatica)
// routes.get('/pagamento-pos-informatica', InformaticaControllers.getListaPagamentoPOSInformatica)

routes.get('/vendas-alloc', InformaticaControllers.getListaVendasAlloc)
routes.get('/vendas-contigencia', InformaticaControllers.getListaVendasContigenciaIformatica)
routes.get('/lista-cliente', InformaticaControllers.getListaClienteIformatica)
// routes.get('/listaClienteID', InformaticaControllers.getListaCliente)
routes.get('/linkRelatorioBI', InformaticaControllers.getListaLinkRelatorioBI)
routes.get('/relatorioInformaticaBI', InformaticaControllers.getListaRelatorioBI)
routes.get('/lista-cliente-credsystem', InformaticaControllers.getListaCadastroClienteCredSystem)
routes.get('/lista-meio-pagamento-credsystem', InformaticaControllers.getListaMeioPagamentoCredSystem)
routes.get('/lista-parceria-credsystem', InformaticaControllers.getListaParceriaCredSystem)

// Expedição
routes.get('/listaProdutos', ExpedicaoControllers.getListaProdutosExpedicao)
routes.get('/resumoOrdemTransferenciaExpedicao', ExpedicaoControllers.getListaOrdemTransferenciaExpedicao)
routes.get('/detalhe-ordem-transferencia', ExpedicaoControllers.getListaDetalheOT)

routes.get('/statusDivergencia', ExpedicaoControllers.getListaSD)
routes.get('/statusOrdemTransferencia', ExpedicaoControllers.getListaStatusOT)
routes.get('/faturasOT', ExpedicaoControllers.getListaFaturasOT)
routes.get('/rotinaMovimentacao', ExpedicaoControllers.getListaRotinaMovimentacao)
routes.get('/otTransferencia', ExpedicaoControllers.getListaOTDepLoja)
routes.get('/impressao-etiqueta-ot', ExpedicaoControllers.getListaImpressaoEtiquetaOT)
routes.get('/consulta-nfe-saida-tranferencia', ExpedicaoControllers.getListaNFESaidaTransferencia)
routes.put('/updateOrdemTransferencia', ExpedicaoControllers.updateOrdemTransferencia)
routes.put('/updateStatusDivergencia', ExpedicaoControllers.updateAlterarSD)

routes.put('/inserirSD', ExpedicaoControllers.storeInserirSD)

routes.get('/resumo-ordem-transferencia', ExpedicaoControllers.getListaOrdemTransferencia)
routes.put('/resumo-ordem-transferencia/:id', ExpedicaoControllers.putResumoOrdemTransferencia)
routes.post('/criar-resumo-ordem-transferencia', ExpedicaoControllers.postResumoOrdemTransferencia)

routes.get('/movimentacaoSaldo', VendasControllers.getListaVendasSaldo)
routes.get('/rotatividadeVendas', VendasControllers.getListaRotatividade)
routes.get('/listaDetalheVendaCliente', VendasControllers.getListaDetalheVendaCliente)
routes.get('/venda-xml', VendasControllers.getListaVendaXML)
routes.get('/venda-cliente', VendasControllers.getListaVendaClienteGerencia)

// Dashboard

routes.get('/lista-quebra-caixa', DashBoardControllers.getListaQuebraCaixa)
routes.get('/listaDeQuebraDeCaixaPositiva', DashBoardControllers.getListaQuebraCaixaPositiva)
routes.get('/listaDeQuebraDeCaixaNegativa', DashBoardControllers.getListaQuebraCaixaNegativa)
routes.get('/quebra-caixa', DashBoardControllers.getRetornoTableImprimeQuebra)
routes.get('/resumoVendaConvenioDesc', DashBoardControllers.getRetornoListaVendasConvenioDesconto)
routes.get('/resumoVendaGerencia', DashBoardControllers.getResumoVendaGerencia)
// routes.get('/listaCaixaMovimentoGerencia', DashBoardControllers.retornoListaCaixasMovimentoGerencia)
routes.get('/vendedor', DashBoardControllers.getListaVendasVendedorGerencia)
// routes.get('/vendasAtivasResumoGerencia', DashBoardControllers.getListaResumoVendasAtivaGerencia)
routes.get('/vendasCanceladasResumoGerencia', DashBoardControllers.getListaResumoVendasCanceladasGerencia)
routes.get('/adiantamentoSalarialFuncionarios', DashBoardControllers.getListAdiantamentoLoja)
routes.get('/adiantamento-salarial-gerencia', DashBoardControllers.getAdiantamentoSalarialFuncionario)
// routes.get('/vendasResumoLojaGerencia', DashBoardControllers.getListaVendasLojaResumidoGerencia)
// routes.get('/vendasVendedorPeriodoLojaGerencia', DashBoardControllers.getListaVendasVendedorPeriodoGerencia)
routes.get('/extrato-loja-periodo', DashBoardControllers.getListaExtratoDaLojaPeriodo)
routes.get('/relatorioBI', DashBoardControllers.getListaRelatorioBIGerencia)
// routes.get('/listaVendasGerencia', DashBoardControllers.getListaVendasGerencia)
// routes.get('/extratoLojaPeriodo', DashBoardControllers.getListaExtratoDaLojaPeriodo)
routes.get('/adiantamentoSalarialData', DashBoardControllers.getListAdiantamentoSalarialData)


// Vouchers
routes.get('/detalheVoucherDados', ResumoVoucherControllers.getListaDetalheVoucherDados)
routes.get('/voucher-completo', ResumoVoucherControllers.getListaVoucherCompleto)
routes.get('/detalheNumeroVoucherDados', ResumoVoucherControllers.getDetalheNumeroVoucherDados)
routes.get('/detalhesVouchersId', ResumoVoucherControllers.getDetalheIDVoucherDadosModal)
routes.get('/detalheIDVoucherDados', ResumoVoucherControllers.getDetalheIDVoucherDados)
routes.get('/resumoDetalheVoucher', ResumoVoucherControllers.getResumoDetalheVoucher)
routes.get('/detalhe-voucher', ResumoVoucherControllers.getListaVoucherGerencia)
routes.get('/empresasVoucher', ResumoVoucherControllers.getListaEmpresasVoucher)
routes.get('/cliente-todos', ResumoVoucherControllers.getListaTodosClientes)
routes.put('/todos-web/:id', ResumoVoucherControllers.putResumoVoucher)
routes.post('/todos-web', ResumoVoucherControllers.postResumoVoucher)

routes.put('/todos-cliente/:id', ResumoVoucherControllers.putCliente)
routes.post('/criar-cliente', ResumoVoucherControllers.postCliente)

routes.post('/auth-funcionario-status', ResumoVoucherControllers.autorizacaoEditarStatusVoucher)
routes.post('/auth-funcionario-create-voucher', ResumoVoucherControllers.postAuthFuncionarioCreateVoucher)
routes.post('/auth-funcionario-print-voucher', ResumoVoucherControllers.postAuthFuncionarioPrintVoucher)
routes.post('/auth-funcionario-update-voucher', ResumoVoucherControllers.postAuthFuncionarioUpdateVoucher)

// Comercial
routes.get('/listaProdutoSap', ComercialControllers.getListaProdutoSap)
routes.get('/listaEmpresaComercial', ComercialControllers.getListaEmpresaComercial)
// routes.get('/listaVendasPorProduto', ComercialControllers.getListaVendasEstruturaProdutos)
routes.get('/vendaMarcaPeriodoFinanceiro', ComercialControllers.getListaVendasMarcaPorPeriodoComercial)
routes.get('/vendasEstoqueGrupoSubGrupo', ComercialControllers.getListaVendasEstoqueGrupoSubGrupoComercial)
routes.get('/produtosPrecosEstoquesLojas', ComercialControllers.getListaProdutosEstoquePrecoLoja)
routes.get('/vendasEstoqueProduto', ComercialControllers.getListaVendasPosicionamentoEstoquePeriodos)
routes.get('/funcionarioRelatorio', ComercialControllers.getListaColaboradorRelatorio)
routes.get('/custoPorLoja', ComercialControllers.getListaVendasCustoLojas)
routes.get('/vendasPosicionamentoEstoque', ComercialControllers.getListaVendasPosicionamentoEstoque)
routes.get('/colaboradorProdutosVendidos', ComercialControllers.getListaColaboradorProdutosVendidos)
routes.get('/listaMetaVendas', ComercialControllers.getListaMetasGrupo)
routes.get('/listaPremiacoes', ComercialControllers.getListaPremiacoesPeriodo)


export default routes;

