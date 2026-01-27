import axios from "axios";

import 'dotenv/config';
const url = process.env.API_URL;

class FinanceiroVendasControllers {

  async getListaVendasTotalMes(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, horaFinal, page, pageSize } = req.query;

    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    horaFinal = horaFinal ? horaFinal : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
 
      const apiUrl = `${url}/api/financeiro/venda-total-mes.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisa=${dataPesquisaFim}&horaFinal=${horaFinal}` 
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por mes: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasTotalLojaHora(req, res) {
    let { dataPesquisa, horaFinal, page, pageSize } = req.query;

    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    horaFinal = horaFinal ? horaFinal : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/dashboard/venda-total-loja-hora.xsjs?dataPesquisa=${dataPesquisa}&horaFinal=${horaFinal}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasTotalLojaHoraAnoPassado(req, res) {
    let { dataPesquisa, horaFinal, page, pageSize } = req.query;

    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    horaFinal = horaFinal ? horaFinal : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/dashboard/venda-total-loja-hora.xsjs?dataPesquisa=${dataPesquisa}&horaFinal=${horaFinal}`
  
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasTotalTO(req, res) {
    let { dataPesquisa, idGrupo, page, pageSize } = req.query;

    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    idGrupo = idGrupo ? idGrupo : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/venda-total-to.xsjs?dataPesquisa=${dataPesquisa}&idgrupo=1`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasTotalFreecenter(req, res) {
    let { dataPesquisaFreecenter, idGrupo, page, pageSize } = req.query;

    dataPesquisaFreecenter = dataPesquisaFreecenter ? dataPesquisaFreecenter : '';
    idGrupo = idGrupo ? idGrupo : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/venda-total-to.xsjs?dataPesquisa=${dataPesquisaFreecenter}&idgrupo=4`

      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasTotalMagazine(req, res) {
    let { dataPesquisaMagazine, idGrupo, page, pageSize } = req.query;

    dataPesquisaMagazine = dataPesquisaMagazine ? dataPesquisaMagazine : '';
    idGrupo = idGrupo ? idGrupo : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      
      const apiUrl = `${url}/api/financeiro/venda-total-to.xsjs?dataPesquisa=${dataPesquisaMagazine}&idgrupo=2` 
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

}

export default new FinanceiroVendasControllers();