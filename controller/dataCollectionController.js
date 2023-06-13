const DataCollection = require('../models/dataCollection');

// Mendapatkan semua data dari tabel
exports.getAllData = async (req, res) => {
  try {
    const data = await DataCollection.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Memasukkan data baru ke tabel
exports.createData = async (req, res) => {
  try {
    const { N, P, K, PH, Longitude, Latitude, Image, Description } = req.body;
    const newData = await DataCollection.create({
      N,
      P,
      K,
      PH,
      Longitude,
      Latitude,
      Image,
      Description
    });
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};