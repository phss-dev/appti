import db from '../database/db.js';

// Função para buscar todos os usuários
export const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM login')
    return rows;
};