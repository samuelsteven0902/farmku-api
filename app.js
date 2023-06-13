const express = require('express');
const dataController = require('./controller/dataCollectionController');
const { sequelize } = require('./config/dbConfig.js')

const app = express();
app.use(express.json());

// Mengambil semua data
app.get('/data-collection', dataController.getAllData);

// Menambahkan data baru
app.post('/data-collection', dataController.createData);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Koneksi ke database berhasil');
//     // Lanjutkan menjalankan server Express di port yang diinginkan
//     app.listen(8000, () => {
//       console.log('Server berjalan di port 8000');
//     });
//   })
//   .catch((error) => {
//     console.error('Koneksi ke database gagal:', error);
//   });

// Menjalankan server
app.listen(8000, () => {
  console.log('Server berjalan di port 8000');
});

