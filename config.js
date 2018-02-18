module.exports = {
  port: process.env.PORT || 3000,
  mongoURL: process.env.MONGODB || "mongodb://localhost/",
  db: process.env.DB || "nodepop",
  collectionName: process.env.COLLECTION_NAME || "anuncios",
  fileData: process.env.FILE_TEST_DATA || "./test_data/testData.json"
};
