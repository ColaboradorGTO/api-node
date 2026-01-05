import axios from "axios";

class ADMCaixasControllers {
    async getListaCaixasMovimento(req, res) {
        let { idEmpresa, dataFechamento, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        dataFechamento = dataFechamento ? dataFechamento : '';
        
        try {
            const apiUrl = `${url}/api/administrativo/quebra-caixa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataFechamento}`
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
        
    }
}

export default new ADMCaixasControllers();