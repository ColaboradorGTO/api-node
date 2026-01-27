import { Router } from 'express';

import FinanceiroVendasControllers from './Financeiro/Vendas/controllers/vendas.js'


const routes = new Router();
// routes.use(authMiddleware)

routes.get('/', (req, res) => {
    res.send('API Quality is running ');
});


routes.get('/vendas-total-mes', FinanceiroVendasControllers.getListaVendasTotalMes)
routes.get('/vendas-total-mes-ano-passado', FinanceiroVendasControllers.getListaVendasTotalMes)
routes.get('/vendas-total-loja-hora', FinanceiroVendasControllers.getListaVendasTotalLojaHora)
routes.get('/vendas-total-loja-hora-ano-passado', FinanceiroVendasControllers.getListaVendasTotalLojaHoraAnoPassado)
routes.get('/vendas-total-to', FinanceiroVendasControllers.getListaVendasTotalTO)
routes.get('/vendas-total-freecenter', FinanceiroVendasControllers.getListaVendasTotalFreecenter)
routes.get('/vendas-total-magazine', FinanceiroVendasControllers.getListaVendasTotalMagazine)

export default routes;

