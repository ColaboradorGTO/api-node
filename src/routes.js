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
import ComprasControllers from './Compras/controllers/Compras.js';
import CadastroControllers from './Cadastro/controllers/Cadastro.js';
import ProdutoControllers from './Produtos/controllers/Produtos.js';
import DepositosLojaControllers from './DepositoLoja/controllers/DepositosLoja.js';
import ContaBancoControllers from './ContaBanco/controllers/ContaBanco.js';
import DespesasLojaControllers from './Despesas/controllers/DespesasLoja.js';
import CategoriaReceitaDespesasControllers from './CategoriaReceita/controllers/CategoriaReceitaDespesa.js';
import MovimentoCaixaControllers from './Gerencia/MovimentoCaixa/controllers/MovimentoCaixa.js';
import DetalheFaturasControllers from './DetalheFaturas/controllers/Detalhes.js';
import MarketingControllers from './Marketing/controllers/Marketing.js';


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


// Compras
routes.get('/lista-pedidos', ComprasControllers.getListaPedidos)
routes.get('/ultimo-pedido', ComprasControllers.getListaUltimoPedido)
routes.get('/lista-detalhe-pedidos', ComprasControllers.getListaDetalhePedidos)
routes.get('/lista-detalhe-pedidos-grade', ComprasControllers.getListaDetalhePedidoGrade)
routes.get('/listaTodosPedidos', ComprasControllers.getListaTodosPedidos)
routes.get('/fornecedores', ComprasControllers.getListaFornecedores)
routes.get('/fabricantes', ComprasControllers.getListaFabricantes)
routes.get('/compradores', ComprasControllers.getListaCompradores)
routes.get('/listaPromocoes', ComprasControllers.getListaPromocoes)
routes.get('/listaEmpresaPromocoes', ComprasControllers.getListaEmpresaPromocoes)
routes.get('/listaProdutosOrigemPromocoes', ComprasControllers.getListaProdutoOrigemPromocoes)
routes.get('/listaProdutoDestinoPromocoes', ComprasControllers.getListaProdutoDestinoPromocoes)
routes.get('/fornecedorFabricante', ComprasControllers.getListaFornecedorFabricante)
routes.get('/vincularFabricanteFornecedor', ComprasControllers.getListaVinculoFornecedorFabricante)
routes.get('/condicaoPagamento', ComprasControllers.getListaCondicoesPagamento)
routes.get('/transportadoras', ComprasControllers.getListaTransportadora)
routes.get('/listaPedidosDetalhado', ComprasControllers.getListaPedidosDetalhado)
routes.get('/fabricante-fornecedor', ComprasControllers.getListaFabricanteCadastro)
routes.get('/subGrupoEstrutura', ComprasControllers.getListaEstruturaMercadoria)
routes.get('/imagemProdutos', ComprasControllers.getListaImagemProduto)
routes.get('/listaProdutosImagem', ComprasControllers.getListaDetalheImagemProduto)
routes.get('/produtos-imagens', ComprasControllers.getListaProdutosImagens)
routes.get('/listaTransportador', ComprasControllers.getListaTransportador)
routes.get('/transportadorID', ComprasControllers.getListaByIdTransportador)
routes.get('/tipoDocumento', ComprasControllers.getListaTPDocumento)
routes.get('/grupoEstrutura', ComprasControllers.getListaGrupoEstrutura)
routes.get('/listaCores', ComprasControllers.getListaCores)
routes.get('/grupoCores', ComprasControllers.getListaGrupoCores)
routes.get('/listaEstilos', ComprasControllers.getListaEstilos)
routes.get('/tipoTecidos', ComprasControllers.getListaTipoTecidos)
routes.get('/tipo-tecido', ComprasControllers.getListaTipoTecidoSelect)
routes.get('/categoriaPedidos', ComprasControllers.getListaCategoriaPedidos)
routes.get('/categoria-pedido', ComprasControllers.getListaCategoriaPedido)
routes.get('/tamanhosPedidos', ComprasControllers.getListaTamanhosPedidos)
routes.get('/vinculo-tamanho-categoria', ComprasControllers.getListaTamanhosCategoriaPedidos)
routes.get('/fornecedor-produto', ComprasControllers.getListaFornecedorProduto)
routes.get('/produtos-pedido', ComprasControllers.getListaProdutoPedido)
routes.get('/listaDetalhePedidos', ComprasControllers.getListaDetalhePedidosGrade)
routes.get('/unidadeMedida', ComprasControllers.getListaUnidadeMedida)
routes.get('/unidades-de-Medidas', ComprasControllers.getListaUnidadesMedidas)

routes.get('/localExposicao', ComprasControllers.getListaLocalExposicao)
routes.get('/distribuicaoComprasHistorico', ComprasControllers.getListaDistribuicaoHistorico)
routes.get('/detalheDistribuicaoCompras', ComprasControllers.getListaDetalheDistribuicao)
routes.get('/distribuicaoSugestoesHistorico', ComprasControllers.getListaDistribuicaoSugestoesHistorico)
routes.get('/produtos-entre-filiais', ComprasControllers.getListaProdutosEntreFiliais)
routes.get('/produtos-por-pedido', ComprasControllers.getListaProdutosPorPedido)
routes.get('/consulta-fornecedor-sap', ComprasControllers.getListaFornecedorSap)



// UPDATE'
routes.put('/condicaoPagamento/:id', ComprasControllers.putCondicaoPagamento)
routes.put('/transportador/:id', ComprasControllers.putCadastroTransportador)
routes.put('/atualizarProdutoImagem', ComprasControllers.updateProdutoImagem)
routes.put('/sub-grupo-estrutura/:id', ComprasControllers.updateSubGrupoEstrutura)
routes.put('/grupo-estrutura/:id', ComprasControllers.putGrupoEstrutura)
routes.put('/unidadeMedida/:id', ComprasControllers.updateUnidadeMedida)
routes.put('/cores/:id', ComprasControllers.updateCores)
// routes.put('/atualizarEstilos', ComprasControllers.updateEstilos)
routes.put('/listaEstilos/:id', ComprasControllers.putEstilos)
routes.put('/tipo-tecido/:id', ComprasControllers.updateTipoTecidos)
routes.put('/categoriaPedidos/:id', ComprasControllers.putCategoriaPedidos)
routes.put('/fabricante/:id', ComprasControllers.putFabricante)
routes.put('/fabricante-fornecedor/:id', ComprasControllers.putFabricanteFornecedor)
routes.put('/fornecedor-fabricante/:id', ComprasControllers.putFornecedorFabricante)
routes.put('/excluir-vinculo-fornecedor', ComprasControllers.putExcluirVinculoFornecedorFabricante)

routes.put('/deletar-vinculo-tamanho-categoria', ComprasControllers.updateVinculoTamanhoCategoria)
routes.put('/fornecedor/:id', ComprasControllers.putFornecedor)
routes.put('/finalizar-pedido/:id', ComprasControllers.putFinalizarPedido)
routes.put('/atualizar-pedido/:id', ComprasControllers.putPedido)

// POST
routes.post('/cadastrarCondicaoPagamento', ComprasControllers.postCondicaoPagamento)
routes.post('/cadastro-sub-grupo-estrutura', ComprasControllers.createSubGrupoEstrutura)
routes.post('/cadastrarUnidadeMedida', ComprasControllers.createUnidadeMedida)
routes.post('/cadastrar-cores', ComprasControllers.createCores)
routes.post('/criarlistaEstilos', ComprasControllers.postEstilos)
routes.post('/cadastrar-tipo-tecido', ComprasControllers.createTipoTecidos)
routes.post('/criar-categoria-pedidos', ComprasControllers.createCategoriaPedidos)
routes.post('/cadastro-grupoEstrutura', ComprasControllers.postGrupoEstrutura)
routes.post('/cadastro-vinculo-tamanho-categoria', ComprasControllers.postVinculoCategoriaPedido)
routes.post('/cadastrar-transportador', ComprasControllers.postCadastroTransportador)
routes.post('/cadastrar-fabricante', ComprasControllers.postFabricante)
routes.post('/cadastrar-fabricante-fornecedor', ComprasControllers.postFabricanteFornecedor)
routes.post('/migrar-fabricante', ComprasControllers.postMigrarFabricanteSap)
routes.post('/cadastrar-fornecedor', ComprasControllers.postFornecedor)
routes.post('/cadastrar-imagem-produto', ComprasControllers.postImagemProduto)
routes.post('/finalizar-pedido', ComprasControllers.postFinalizarPedido)
routes.post('/pedido', ComprasControllers.postPedido)


// Cadastro
routes.get('/listaProdutoCriadoPedidoCompra', CadastroControllers.getListaProdutoCriadoPedidoCompra)
routes.get('/categoriasProdutos', CadastroControllers.getListaCategoriasProduto)
routes.get('/tipoProduto', CadastroControllers.getListaTipoProdutos)
routes.get('/tipoFiscalProduto', CadastroControllers.getListaTipoFiscalProdutos)
routes.get('/consultaProdutos', CadastroControllers.getConsultaProdutos)
routes.get('/nfPedido', CadastroControllers.getListaNFPedido)


routes.get('/produtoAvulso', CadastroControllers.getListaProdutosAvulso)
routes.put('/produtoAvulso/:id', CadastroControllers.getListaTipoFiscalProdutos)
// routes.post('/produtoAvulso', CadastroControllers.postDetalheProdutoPedido)

// Produtos 
routes.get('/produtoQuality', ProdutoControllers.getListaProdutosLojaQuality)
routes.get('/produtoSap', ProdutoControllers.getListaProdutosLojaSap)
routes.get('/produto-preco', ProdutoControllers.getListaProdutosPrecoInformatica)
routes.get('/grupoProdutoSap', ProdutoControllers.getListaGrupoProdutoSap)
routes.get('/produtoInformatica', ProdutoControllers.getListaProdutosInformaticaQuality)
routes.get('/lista-produtos', ProdutoControllers.getListaProdutos)
routes.get('/listaGrade', ProdutoControllers.getListaGrade)
routes.get('/listas-de-precos-sap', ProdutoControllers.ListaProdutosEtiqueta)
routes.get('/responsaveisAlteracaoPrecos', ProdutoControllers.getListaResponsavelAlteracaoPreco)
routes.get('/lista-produtos-etiqueta-sap', ProdutoControllers.ListaProdutosEtiquetagem)
routes.get('/alteracoes-de-precos-resumo', ProdutoControllers.getListaAlteracaoPrecoResumo)
routes.get('/alteracoes-de-precos-detalhes', ProdutoControllers.getListaAlteracaoPrecoDetalhe)

//  Depositos Loja
routes.get('/depositosLoja', DepositosLojaControllers.getListaDepositosLojaEmpresa)
routes.get('/deposito-loja-empresa', DepositosLojaControllers.getListaDepositosLojaEmpresa)

routes.post('/cadastrar-deposito-loja', DepositosLojaControllers.postDepositoLoja)
routes.put('/deposito-loja/:id', DepositosLojaControllers.putListaDepositosLoja)
routes.put('/atualizacao-status-conferido/:id', DepositosLojaControllers.putAtualizarStatusConferido)
routes.put('/deposito-loja-atualizacao-status/:id', DepositosLojaControllers.putAtualizarStatusDepositoLoja)

// Conta Banco
routes.get('/contaBanco', ContaBancoControllers.getListaContaBanco)

// Despesas Loja
routes.get('/despesas-loja-empresa', DespesasLojaControllers.getListaDespesasLojaEmpresa)
routes.get('/despesa-Loja-todos', DespesasLojaControllers.getListaTodasDespesasLojas)
routes.get('/despesa-lojas-dash', DespesasLojaControllers.getListaDespesasLojaDashBoard)
routes.get('/despesasEmpresas', DespesasLojaControllers.getListaDespesasEmpresaGerencia)

routes.post('/cadastrar-despesa-loja', DespesasLojaControllers.postCadastrarDespesasLoja)

//  Categoria Despesas
routes.get('/categoria-receita-despesa', CategoriaReceitaDespesasControllers.getListaCategoriaDespesas)
routes.get('/categoriaReceitaDespesaFinanceira', CategoriaReceitaDespesasControllers.getListaCategoriaDespesasFinanceira)

// Movimento Caixa

routes.get('/ajusteFisicoDinheiro', MovimentoCaixaControllers.listaCaixasMovimentojuste)
routes.get('/movimento-caixa-gerencia', MovimentoCaixaControllers.listaCaixasMovimentoGerencia)
routes.get('/fechamento-caixa', MovimentoCaixaControllers.getListaFechamentoCaixa)
routes.get('/ajusteMovimento', MovimentoCaixaControllers.listaAjusteMovimentoCaixa)
routes.put('/atualizacao-status', MovimentoCaixaControllers.putListaAtualizacaoStatus)

routes.put('/ajuste-recebimento', MovimentoCaixaControllers.putListaAjusteRecebimento)

// Detalhes 
routes.get('/detalheFaturaGerencia', DetalheFaturasControllers.getDetalheFatura)

routes.get('/detalhe-Fatura-id', DetalheFaturasControllers.getDetalheFaturaById)
routes.put('/atualizar-fatura', DetalheFaturasControllers.updateFatura)

routes.put('/atualizar-detalhe-fatura-loja', DetalheFaturasControllers.putDetalheFaturaLoja)
routes.post('/criar-detalhe-fatura', DetalheFaturasControllers.postDetalheFaturaLoja)



// Marketing
routes.get('/produto-promocao', MarketingControllers.getListaProdutosPromocao)
routes.get('/listaPromocao', MarketingControllers.getListaPromocao)
routes.get('/campanha', MarketingControllers.getListaCampanha)
routes.get('/campanha-cliente', MarketingControllers.getListaCampanhaCliente)


routes.put('/campanha/:id', MarketingControllers.putCampanhaEmpresa)
routes.put('/campanha-cliente/:id', MarketingControllers.putCampanhaCliente)
routes.put('/produto-promocao/:id', MarketingControllers.putProdutoPromocao)

routes.post('/cadastrar-campanha-cliente', MarketingControllers.postCampanhaCliente)
routes.post('/cadastra-campanha', MarketingControllers.postCampanhaEmpresa)
routes.post('/cadastrar-produto-promocao', MarketingControllers.postProdutoPromocao)


export default routes;

