import express from 'express';
import path from 'path';
import cors from 'cors';
import eventoRoutes from '../routes/eventoRoutes';
import chatbotRoutes from '../routes/chatbotRoutes';
import produtoRoutes from '../routes/produtoRoutes';
import clienteRoutes from '../routes/clienteRoutes';
import carrinhoRoutes from '../routes/carrinhoRoutes';


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../templates/login.html')
    );
});

app.get('/cadastro', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../templates/cadastro.html')
    );
});

app.get('/loja', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../templates/index.html')
    );
});

app.use('/api/eventos', eventoRoutes);
app.use('/api', chatbotRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/carrinho', carrinhoRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});