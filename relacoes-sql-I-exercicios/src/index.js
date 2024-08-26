const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/labecommerce.db');

const query = `
    SELECT
        p.id AS purchase_id,
        p.buyer AS user_id,
        u.name AS user_name,
        u.email AS user_email,
        p.total_price,
        p.created_at AS purchase_date
    FROM
        purchases p
    JOIN
        users u
    ON
        p.buyer = u.id
    WHERE
        p.id = ?;  -- Substitua pelo ID da compra desejada
`;

db.get(query, ['p001'], (err, row) => {
    if (err) {
        console.error('Erro na consulta:', err.message);
    } else {
        console.log('Detalhes da compra:', row);
    }
    db.close();
});
