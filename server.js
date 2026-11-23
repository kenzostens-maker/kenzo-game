const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');

const token = 'ВАШ_ТОКЕН_ИЗ_BOTFATHER'; 
const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running'));
