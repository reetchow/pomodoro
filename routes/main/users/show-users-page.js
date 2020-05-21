module.exports = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      id: 13,
      first_name: 'Reet',
      last_name: 'Chowdhary',
      email: 'reet@voiceops.com',
    },
    {
      id: 14,
      first_name: 'Atmika',
      last_name: 'Sharma',
      email: 'atmika95@gmail.com',
    }
  ]); // send response=  
}