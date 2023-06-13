const { Sequelize } = require('sequelize');

// Konfigurasi koneksi ke MySQL
const sequelize = new Sequelize('farmku_collection', 'farmku', '@g|}T,rB?$){H)jX', {
  host: '34.101.213.242',
  port: 3306,
  dialect: 'mysql'
});

// const sequelize = new Sequelize('etiket_museum', 'root', '', {
//   host: 'localhost',
//   port: 3306,
//   dialect: 'mysql'
// });

// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: '34.134.108.41',
//     database: 'farmku_collection',
//     username: 'farmku',
//     password: '@g|}T,rB?$){H)jX',
//   });

// Fungsi untuk menguji koneksi ke database
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Koneksi ke database berhasil.');
  } catch (error) {
    console.error('Koneksi ke database gagal:', error);
  }
};

// Ekspor objek sequelize dan fungsi testConnection
module.exports = { sequelize, testConnection };