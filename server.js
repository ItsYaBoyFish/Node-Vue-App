const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/test', (req, res) => {
  res.send({
    Message: "Succesffuly",
    Data: {Blah: true}
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});