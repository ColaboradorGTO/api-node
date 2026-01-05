import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";

import 'dotenv/config';
const url = process.env.API_URL;
import { MaloteClient } from "../Malotes/client/index.js";
import { MaloteService } from "../Malotes/services/index.js";

const maloteClient = new MaloteClient(process.env.API_URL);
const maloteService = new MaloteService(maloteClient);
import maloteSchema from "../Malotes/schema/index.js";
class FinanceiroControllers {

  async getListasHistoricosMalotes(req, res) {
    let { idEmpresa, idMalote, idHistoricoMalote, dataPesquisaInicio, dataPesquisaFim, dataConferenciaInicio, dataConferenciaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    idHistoricoMalote = idHistoricoMalote ? idHistoricoMalote : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    dataConferenciaInicio = dataFormatada(dataConferenciaInicio) ? dataFormatada(dataConferenciaInicio) : '';
    dataConferenciaFim = dataFormatada(dataConferenciaFim) ? dataFormatada(dataConferenciaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      // const response = await getHistoricosMalotes(idEmpresa, idMalote, idHistoricoMalote, dataPesquisaInicio, dataPesquisaFim, page, pageSize)
      const apiUrl = `${url}/api/financeiro/historicos-malotes.xsjs?idEmpresa=${idEmpresa}&idMalote=${idMalote}&idHistoricoMalote=${idHistoricoMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListasHistoricosMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }
  }

  async getListasMalotesLojas(req, res) {
    let { idEmpresa, idMarca, idMalote, statusMalote, pendenciaMalote, dataPesquisaInicio, dataPesquisaFim, dataConferenciaInicio, dataConferenciaFim, page, pageSize } = req.query;


    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    statusMalote = statusMalote ? statusMalote : '';
    pendenciaMalote = pendenciaMalote ? pendenciaMalote : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idMarca = idMarca ? idMarca : '';
    dataConferenciaInicio = dataFormatada(dataConferenciaInicio) ? dataFormatada(dataConferenciaInicio) : '';
    dataConferenciaFim = dataFormatada(dataConferenciaFim) ? dataFormatada(dataConferenciaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/malotes-por-loja.xsjs?idGrupoEmpresarial=${idMarca}&idEmpresa=${idEmpresa}&statusMalote=${statusMalote}&idMalote=${idMalote}&idPendenciaMalote=${pendenciaMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataConferenciaInicio=${dataConferenciaInicio}&dataConferenciaFim=${dataConferenciaFim}&page=${page}&pageSize=${pageSize}`
      // const apiUrl = `http://164.152.245.77:8000/quality/concentrador/api/financeiro/malotes-por-loja.xsjs?idGrupoEmpresarial=${idMarca}&idEmpresa=${idEmpresa}&statusMalote=${statusMalote}&idMalote=${idMalote}&idPendenciaMalote=${pendenciaMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataConferenciaInicio=${dataConferenciaInicio}&dataConferenciaFim=${dataConferenciaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
      // const response = await getMalortesPorLoja(idEmpresa, idMarca, idMalote, statusMalote, pendenciaMalote, dataPesquisaInicio, dataPesquisaFim, page, pageSize)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListasMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }
  }

  async getListaPendenciasMalotes(req, res) {
    let { idEmpresa, idMalote, statusMalote, pendenciaMalote, page, pageSize } = req.query;


    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    statusMalote = statusMalote ? statusMalote : '';
    pendenciaMalote = pendenciaMalote ? pendenciaMalote : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/pendencias-malotes.xsjs?idEmpresa=${idEmpresa}&idMalote=${idMalote}&statusMalote=${statusMalote}&pendenciaMalote=${pendenciaMalote}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
      // const response = await getPendenciasMalotes(idEmpresa, idMalote, statusMalote, pendenciaMalote, page, pageSize)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListaPendenciasMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }

  }

  async getListaExtratoDaLojaPeriodoFinan(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;


    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    // ajaxGet('api/dashboard/extrato-loja-periodo.xsjs?pageSize=500&page=1&idEmpresa=' + idemp + '&dataPesquisaInicio=' + datapesq + '&dataPesquisaFim=' + datapesq)
    try {
      const apiUrl = `${url}/api/financeiro/extrato-loja-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      // const apiUrl = `http://164.152.245.77:8000/quality/concentrador/api/financeiro/extrato-loja-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)
      // const response = await getExtratoLojaPeriodo(idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListaExtratoDaLojaPeriodoFinan verifique se os parâmetros estão sendo preenchidos:", error);
      return res.status(500).json({ error: "Erro ao buscar extrato da loja por período." });

    }

  }

  async getListaVendasMarca(req, res) {
    let { idMarcaPesqVenda, pageNumber, dataPesqInicio, dataPesqFim } = req.query;


    idMarcaPesqVenda = idMarcaPesqVenda ? idMarcaPesqVenda : '';
    const pageSize = 100;
    const offset = (pageNumber - 1) * pageSize;
    dataPesqInicio = dataFormatada(dataPesqInicio) ? dataFormatada(dataPesqInicio) : '';
    dataPesqFim = dataFormatada(dataPesqFim) ? dataFormatada(dataPesqFim) : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-marca-periodo.xsjs?pageSize=1000&idMarca=${idMarcaPesqVenda}&dataPesquisaInicio=${dataPesqInicio}&dataPesquisaFim=${dataPesqFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasMarcaFinanceiro(req, res) {
    let { idMarca, idLoja, idLojaPesquisa, pageNumber, dataPesquisaInicio, dataPesquisaFim } = req.query;


    idMarca = Number(idMarca);
    const pageSize = 100;
    const offset = (pageNumber - 1) * pageSize;
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idLoja = idLoja ? idLoja : '';
    idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-marca-periodo.xsjs?pageSize=500&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojaPesquisa=${idLojaPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasResumidaMarca(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim } = req.query;
    const pageSize = 100;
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-digital-marca.xsjs?pageSize=500&page=1&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }


  async getListaVendasResumidaFinanceiro(req, res) {
    let { dataPesquisa } = req.query;
    const pageSize = 100;
    dataPesquisa = dataFormatada(dataPesquisa)

    try {
      const apiUrl = `${url}/api/financeiro/venda-total.xsjs?dataPesquisa=${dataPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }


  async getListaVendasTransacoesEmpresa(req, res) {
    let { dataPesquisa } = req.query;
    const pageSize = 100;
    dataPesquisa = dataFormatada(dataPesquisa)

    try {
      const apiUrl = `${url}/api/financeiro/venda-pagamentos.xsjs?dataPesquisa=${dataPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasEmpresa(req, res) {
    let { dataPesquisa } = req.query;
    const pageSize = 100;
    dataPesquisa = dataFormatada(dataPesquisa)

    try {
      const apiUrl = `${url}/api/financeiro/venda-total-empresa.xsjs?dataPesquisa=${dataPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaDetalheFechamento(req, res) {
    let { idEmpresa, dataPesquisa, page, pageSize } = req.query;
    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/detalhe-fechamento.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
      const response = await axios.get(apiUrl)
      // const response = await getDetalheFechamento(idEmpresa, dataPesquisa);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }
  async getListaVendasLojaPeriodo(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim } = req.query;
    const pageSize = 1000;
    const page = 1;
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idEmpresa = idEmpresa ? idEmpresa : '';

    try {
      // ajaxGet('api/financeiro/venda-loja-periodo.xsjs?pageSize=500&page='+numPage+'&idEmpresa=' + IDEmpresaPesqVenda + '&dataPesquisaInicio=' + datapesqinicio + '&dataPesquisaFim=' + datapesqfim)

      const apiUrl = `${url}/api/financeiro/venda-loja-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  // INICIO CONSUMINDO BANCO DO RECAT

  // FIM CONSUMINDO BANCO DO RECAT

  async getListaCaixasMovmentoFinanceiro(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, idLoja, idLojasPesquisa } = req.query;
    const pageSize = 1000;
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idMarca = idMarca ? idMarca : '';
    idLoja = idLoja ? idLoja : '';
    idLojasPesquisa = idLojasPesquisa ? idLojasPesquisa : '';

    try {
      // ajaxGet('api/financeiro/lista-caixas-movimento.xsjs?pageSize=1000&idMarca=' + IDMarcaPesqVenda + '&dataPesquisaInicio=' + datapesqinicio + '&dataPesquisaFim=' + datapesqfim + '&idLoja=' + IDLojaPesqVenda + '&idLojasPesq=' + IDLojasPesq)
      const apiUrl = `${url}/api/financeiro/lista-caixas-movimento.xsjs?pageSize=1000&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojasPesq=${idLojasPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasMarcaROB(req, res) {
    let { idMarca, pageNumber, dataPesquisaInicio, dataPesquisaFim } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      const pageSize = 100;
      const offset = (pageNumber - 1) * pageSize;
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';

      try {

        const apiUrl = `${url}/api/financeiro/venda-marca-rob.xsjs?pageSize=500&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaVendasMarcaMarckup(req, res) {
    let { idMarca, pageNumber, dataPesquisaInicio, dataPesquisaFim, idLoja, idLojaPesquisa } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      const pageSize = 100;
      const offset = (pageNumber - 1) * pageSize;
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';
      try {
        // ajaxGet('api/financeiro/venda-marca-marckup.xsjs?pageSize=500&idMarca=' + IDMarcaPesqVenda + '&dataPesquisaInicio=' + datapesqinicio + '&dataPesquisaFim=' + datapesqfim + '&idLoja=' + IDLojaPesqVenda + '&idLojasPesq=' + IDLojasPesq)
        const apiUrl = `${url}/api/financeiro/venda-marca-marckup.xsjs?pageSize=500&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojasPesq=${idLojaPesquisa}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaVendasDigital(req, res) {
    let { idEmpresa, pageNumber, dataPesquisaInicio, dataPesquisaFim } = req.query;

    if (!isNaN(idEmpresa)) {
      idEmpresa = Number(idEmpresa);
      const pageSize = 100;
      const offset = (pageNumber - 1) * pageSize;
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';

      try {

        const apiUrl = `${url}/api/financeiro/venda-digital.xsjs?pageSize=1000&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaDespesasLoja(req, res) {
    let { idEmpresa, idCategoria, dataPesquisaInicio, dataPesquisaFim } = req.query;

    idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
    idCategoria = idCategoria ? idCategoria : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';

    try {

      const apiUrl = `${url}/api/financeiro/despesa-loja.xsjs?idCategoria=${idCategoria}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)
      // const response = await getDespesaLoja(idEmpresa, idCategoria, dataPesquisaInicio, dataPesquisaFim)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasPixPeriodo(req, res) {
    let { idMarca, pageSize, page, dataPesquisaInicio, dataPesquisaFim, idLoja, listaEmpresas } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      listaEmpresas = listaEmpresas ? listaEmpresas : '';
      try {
        // ajaxGet('api/financeiro/venda-pix-periodo.xsjs?pageSize=1000&page=' + numPage + '&idMarca=' + IDPesqVendaPix + '&dataPesquisaInicio=' + datapesqinicio + '&dataPesquisaFim=' + datapesqfim + '&lojas=' + IDLojaPesqVenda + '&empresasList=' + listEmpresas)

        const apiUrl = `${url}/api/financeiro/venda-pix-periodo.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresasList=${listaEmpresas}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaVendasPixConsolidadoLojas(req, res) {
    let { idMarca, pageSize, page, dataPesquisaInicio, dataPesquisaFim, idLoja, listaEmpresas } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      listaEmpresas = listaEmpresas ? listaEmpresas : '';
      try {

        const apiUrl = `${url}/api/financeiro/venda-pix-consolidado-loja.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresasList=${listaEmpresas}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaVendasPixConsolidado(req, res) {
    let { idMarca, pageSize, page, dataPesquisaInicio, dataPesquisaFim, idLoja, listaEmpresas } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      listaEmpresas = listaEmpresas ? listaEmpresas : '';

      try {
        // ajaxGet('api/financeiro/venda-pix-consolidado.xsjs?pageSize=1000&page=' + numPage + '&idMarca=' + IDPesqVendaPixConsolid + '&dataPesquisaInicio=' + datapesqinicioConsolid + '&dataPesquisaFim=' + datapesqfimConsolid)
        const apiUrl = `${url}/api/financeiro/venda-pix-consolidado.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresasList=${listaEmpresas}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaFaturasPixConsolidado(req, res) {
    let { idMarca, page, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
      dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';
      try {

        const apiUrl = `${url}/api/financeiro/fatura-pix-periodo-consolidado.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaFaturaPixConsolidadoLoja(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, idLoja, empresa, page, pageSize } = req.query;

    idMarca = Number(idMarca) ? Number(idMarca) : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idLoja = idLoja ? idLoja : '';
    empresa = empresa ? empresa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/fatura-pix-consolidado-loja.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresa=${empresa}`
      const response = await axios.get(apiUrl)
      // const response = await getFaturaPixConsolidadoLoja(idMarca, dataPesquisaInicio, dataPesquisaFim, idLoja, empresaLista, page, pageSize)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasConciliar(req, res) {
    let { idGrupo, idLoja, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;


    idGrupo = Number(idGrupo) ? Number(idGrupo) : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idLoja = idLoja ? idLoja : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/venda-conciliacao.xsjs?idGrupo=${idGrupo}&idLoja=${idLoja}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaConciliarBancoConsolidado(req, res) {
    let { idConta, pageSize, page, dataPesquisaInicio, dataPesquisaFim, dataCompensacaoInicio, dataCompensacaoFim, dataMovimentoInicio, dataMovimentoFim } = req.query;

    pageSize = pageSize ? pageSize : '';
    page = page ? page : '';
    idConta = idConta ? idConta : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    dataCompensacaoInicio = dataCompensacaoInicio ? dataCompensacaoInicio : '';
    dataCompensacaoFim = dataCompensacaoFim ? dataCompensacaoFim : '';
    dataMovimentoInicio = dataMovimentoInicio ? dataMovimentoInicio : '';
    dataMovimentoFim = dataMovimentoFim ? dataMovimentoFim : '';

    try {
      const apiUrl = `${url}/api/financeiro/deposito-loja-consolidado.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataCompInicio=${dataCompensacaoInicio}&dataCompFim=${dataCompensacaoFim}&datamovinicio=${dataMovimentoInicio}&datamovfim=${dataMovimentoFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaDetalheRecebimentosEletronico(req, res) {
    let { idEmpresa, page, pageSize, dataPesquisaInicio, dataPesquisaFim, nomeTef, nomeAutorizador, numeroParcelas } = req.query;


    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    nomeTef = nomeTef ? nomeTef : '';
    nomeAutorizador = nomeAutorizador ? nomeAutorizador : '';
    numeroParcelas = numeroParcelas ? numeroParcelas : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      // ajaxGet('api/financeiro/venda-detalhe-recebimento-eletronico.xsjs?idEmpresa=' + IDEmpresaPesqVenda + '&dataPesquisaInicio=' + datapesqinicio +'&dataPesquisaFim=' + datapesqfim +'&nomeTef=' + nomeTef +'&nomeAutorizador=' + nomeAutorizador +'&numeroParcelas=' + numeroParcelas)
      const apiUrl = `${url}/api/financeiro/venda-detalhe-recebimento-eletronico.xsjs?page=${page}&pageSize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&nomeTef=${nomeTef}&nomeAutorizador=${nomeAutorizador}&numeroParcelas=${numeroParcelas}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaSaldoExtratoLoja(req, res) {
    let { dataPesquisaInicio, idMarca } = req.query;
   
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    idMarca = idMarca ? idMarca : '';
    try {
      const apiUrl = `${url}/api/financeiro/saldo-loja-por-grupo.xsjs?&idGrupoEmpresarial=${idMarca}&dataPesquisa=${dataPesquisaInicio}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaBanco(req, res) {
    let { } = req.query;

    try {
      const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/banco.xsjs`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Error no FinanceiroControllers.getListaBanco:", error);
      throw error;
    }
  }

  async getListaContaBanco(req, res) {
    let { idContaBanco, idBanco, idEmpresa, dsConta, page, pageSize } = req.query;
    idContaBanco = idContaBanco ? idContaBanco : '';
    idBanco = idBanco ? idBanco : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    dsConta = dsConta ? dsConta : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/financeiro/conta-banco.xsjs?id=${idContaBanco}&idBanco=${idBanco}&idEmpresa=${idEmpresa}&dsConta=${dsConta}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Error no FinanceiroControllers.getListaContaBanco:", error);
      throw error;
    }
  }

  async putFaturaFinanceiro(req, res) {
    let { IDDETALHEFATURA, NUCODAUTORIZACAO, VRRECEBIDO, NUAUTORIZACAO, STPIX, STCANCELADO } = req.body;

    if (!IDDETALHEFATURA) {
      console.error("Erro no FinanceiroControllers.putFaturaFinanceiro: Faltando Parametos obrigatórios");
      return res.status(400).json({ error: "Faltando Parametos obrigatórios" });
    }

    try {
      const apiUrl = `${url}/api/financeiro/atualizar-fatura.xsjs`
      const response = await axios.put(apiUrl, {
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        STCANCELADO,
        STPIX,
        NUAUTORIZACAO,
        IDDETALHEFATURA,
      })

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.putFaturaFinanceiro:", error);
      throw error;
    }
  }

  async putFaturaConferencia(req, res) {
    let { IDS_FATURAS, STCONFERIDO, IDFUNCIONARIO } = req.body;

    if (!IDS_FATURAS) {
      console.error("Erro no FinanceiroControllers.putFaturaConferencia: Faltando Parametos obrigatórios");
      return res.status(400).json({ error: "Faltando Parametos obrigatórios" });
    }

    try {
      const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/financeiro/fatura-atualizacao-conferencia.xsjs`
      const response = await axios.put(apiUrl, {
        IDS_FATURAS,
        STCONFERIDO,
        IDFUNCIONARIO,
      })

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.putFaturaConferencia:", error);
      throw error;
    }
  }


  async updateAdiantamentoStatus(req, res) {
    let { IDADIANTAMENTOSALARIO, STATIVO } = req.body;

    try {
      const apiUrl = `${url}/api/financeiro/atualizacao-adiantamento-status.xsjs`
      const response = await axios.put(apiUrl, {
        IDADIANTAMENTOSALARIO,
        STATIVO
      })

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async putContaBanco(req, res) {
    let {
      IDCONTABANCO,
      IDBANCO,
      DSCONTABANCO,
      NUAGENCIA,
      NUDIGITOAGENCIA,
      NUCONTA,
      NUDIGITOCONTA,
      TPPESSOA,
      STPADRAO,
      STATIVO,
      NUCONTASAP,
      TPCONTA
    } = req.body;

    try {


      if (!IDCONTABANCO) {
        throw new Error("IDCONTABANCO é obrigatório");
      }

      const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/financeiro/conta-banco.xsjs`
      const response = await axios.put(apiUrl, {
        IDCONTABANCO,
        IDBANCO,
        DSCONTABANCO,
        NUAGENCIA,
        NUDIGITOAGENCIA,
        NUCONTA,
        NUDIGITOCONTA,
        TPPESSOA,
        STPADRAO,
        STATIVO,
        NUCONTASAP,
        TPCONTA
      })

      return res.json(response.data);
    } catch (error) {
      console.error("error no FinanceiroControllers.putContaBanco:", error);
      throw error;
    }
  }

  async createMotivoDevolucao(req, res) {
    let { IDUSUARIO, DSMOTIVO } = req.body;

    try {
      const apiUrl = `${url}/api/financeiro/motivo-devolucao.xsjs`
      const response = await axios.post(apiUrl, {
        IDUSUARIO,
        DSMOTIVO,

      })

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async postContaBanco(req, res) {
    let {
      IDCONTABANCO,
      IDBANCO,
      DSCONTABANCO,
      NUAGENCIA,
      NUDIGITOAGENCIA,
      NUCONTA,
      NUDIGITOCONTA,
      TPPESSOA,
      NUCONTASAP
    } = req.body;

    try {
      if (!IDBANCO) {
        throw new Error("IDBANCO é obrigatório");
      }

      const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/financeiro/conta-banco.xsjs`
      const response = await axios.post(apiUrl, {
        IDCONTABANCO,
        IDBANCO,
        DSCONTABANCO,
        NUAGENCIA,
        NUDIGITOAGENCIA,
        NUCONTA,
        NUDIGITOCONTA,
        TPPESSOA,
        NUCONTASAP
      })

      return res.json(response.data);
    } catch (error) {
      console.error("error no FinanceiroControllers.postContaBanco:", error);
      throw error;
    }
  }

  async putMalotesLoja(req, res) {

    try {
      const { error, value } = maloteSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
          }))
        });
      }

      const response = await maloteService.updateMalote(
        value.IDMALOTE,
        value.STATUS,
        value.OBSERVACAOADMINISTRATIVO,
        value.PENDENCIAS,
        value.IDUSERULTIMAALTERACAO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.putMalotes:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }
}


export default new FinanceiroControllers();