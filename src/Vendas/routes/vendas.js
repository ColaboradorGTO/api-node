import { Router } from 'express';
import VendasControllers from '../controllers/Vendas.js';


const routes = new Router();

routes.get('/movimentacaoSaldo', VendasControllers.getListaVendasSaldo)
routes.get('/rotatividadeVendas', VendasControllers.getListaRotatividade)
routes.get('/listaDetalheVendaCliente', VendasControllers.getListaDetalheVendaCliente)
routes.get('/venda-xml', VendasControllers.getListaVendaXML)
routes.get('/venda-cliente', VendasControllers.getListaVendaClienteGerencia)

export default routes;