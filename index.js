const http = require("http");

const port = 3000; //puerto de ingreso

//objeto req = request // espa;ol:solicitud //url, metodo, data
// objeto res = response // espa;ol :respuesta // http con una serie de funcionalidades que le entrega
// ruta : es la direccion al recurso al que quiero acceder

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url === "/user") {
    console.log("peticion get");
  } else if (req.method == "POST" && req.url === "/user") {
  }
});

server.listen(port, () => {
  console.log("Servidor corriendo");
});
