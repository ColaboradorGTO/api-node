import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL;

class ContabilidadeControllers {
  async getListaVendasContigencia(req, res) {
    let { idMarca, idEmpresa, idVenda, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    idMarca = idMarca ? idMarca : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    idVenda = idVenda ? idVenda : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/contabilidade/lista-venda-contingencia.xsjs?idGrupoEmpresarial=${idGrupo}&idEmpresa=${idEmpresa}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)
     
      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
        
  }

  async getListaDetalheVendasContigencia(req, res) {
    let { idVenda, idVendaDetalhe,  page, pageSize  } = req.query;

    idVenda = idVenda ? idVenda : '';
    idVendaDetalhe = idVendaDetalhe ? idVendaDetalhe : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/contabilidade/venda-detalhe.xsjs?idVenda=${idVenda}`
      const response = await axios.get(apiUrl)
      

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
        
  }

  async getListaPagamentoVendasContigencia(req, res) {
    let { idVenda,  page, pageSize  } = req.query;

    idVenda = idVenda ? idVenda : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/contabilidade/venda-pagamento.xsjs?idVenda=${idVenda}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
        
  }
  
  async getListaVendasEstoqueComercial(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, produtoPesquisado, idFornecedor, idGrupoGrade, idGrade  } = req.query;

    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
    idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
    produtoPesquisado = produtoPesquisado ? produtoPesquisado : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    idGrupoGrade = idGrupoGrade ? idGrupoGrade : '';
    idGrade = idGrade ? idGrade : '';
    
    try {        

      const apiUrl = `${url}/api/contabilidade/venda-estoque-produto.xsjs?dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&descricaoProduto=${produtoPesquisado}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
        
  }

  async getListaVendasPeriodo(req, res) {
    let { idMarca, idEmpresa, uf, idFornecedor, descProduto, idGrupoGrade, idGrade, dataPesquisaInicio, dataPesquisaFim, page, pageSize  } = req.query;

    idMarca = idMarca ? idMarca : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    descProduto = descProduto ? descProduto : '';
    idGrupoGrade = idGrupoGrade ? idGrupoGrade : '';
    idGrade = idGrade ? idGrade : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {        
 
      const apiUrl = `${url}/api/contabilidade/venda-produto.xsjs?dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${produtoPesquisado}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
        
  }

  async getListaVendasPeriodoConsolidado(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, produtoPesquisado, ufPesquisa, idFornecedor, idGrupoGrade, idGrade, page, pageSize  } = req.query;

    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
    idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
    produtoPesquisado = produtoPesquisado ? produtoPesquisado : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    idGrupoGrade = idGrupoGrade ? idGrupoGrade : '';
    idGrade = idGrade ? idGrade : '';
    

    try {        

     
      const apiUrl = `${url}/api/contabilidade/venda-produto-consolidado.xsjs?page=${page}&pageSize=${pageSize}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${produtoPesquisado}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
        
  }
  
}

export default new ContabilidadeControllers();