/* 
// César y Raúl
let Usuario = function (nombre) {
    this.nombre = nombre;

    this.decir = function () {
        log.agregar(`Usuario: ${this.nombre}`);
    };
}

//Crear un decorador
//Usando los mismos métodos con otra funcionalidad
let UsuarioDecorado = function (usuario,calle,ciudad) {
    this.usuario = usuario;
    this.nombre = usuario.nombre;
    this.calle = calle;
    this.ciudad = ciudad;

    this.decir = function () {
        log.agregar(`Usuario decorado: ${this.nombre}, ${this.calle}, ${this.ciudad}`);
    };
}

//Logging helper

let log = (function () {
    let log = "";

    return {
        agregar: function (msg) {
            log += msg + "\n";
        },

        mostrar: function () {
            console.log(log); log = "";
        }
    }
})();

function run() {
    
    let usuario = new Usuario("Diana");
    usuario.decir();
    log.mostrar();

    let usuarioDecorado = new UsuarioDecorado(usuario,"Broadway","NY");
    usuarioDecorado.decir();
    log.mostrar();

}

run();
*/

//FACADE -> INCLUYE DETRAS LAS FUNCIONES IMPORTANTES
// :D -> Aisla CÓDIGO
// :( -> Objetos robustos

//Clases de clases de un framework de conversión de video de un tercero
// No controlamos el código por lo que se simplifica

/*
class VideoFile{
    
}

class OggCompressiinCodec{
    
}

class MPEG4CompressionCodec{
    
}

class CodecFactory{
    
}

class BitrateReader{
    
}

class AudioMixer{
    
}


//Se crea una clase fachada para esconder esta complejidad, en una
//interfaz simple, es solución de equilibrio entre funcionalidad y simplicidad

class VideoConverter {
    // Método de conversión
    convert(filename, format) {
      file = new VideoFile(filename);
      sourceCodec = new CodecFactory.extract(file);
      if (format == "mp4") {
        destinationCodec = new MPEG4CompressionCodec();
      }     
      else {
        destinationCodec = new OggCompressionCodec();
      }
      buffer = BitrateReader.read(filename, sourceCodec);
      result = BitrateReader.convert(buffer, destinationCodec);
      result = new AudioMixer().fix(result);
      return new File(result);
    }
  }
      
  // En este punto al ejecutar el método convert, no dependen de un millón de clases
  // proporcionadas por el cosmplejo framework.
  convertor = new VideoConverter()
  mp4 = convertor.convert("video_prueba.ogg", "mp4");
  mp4.save()

*/

//Flyweight
//Permite mantener más objetos dentro de la cantidad disponible de RAM.
//Minimiza el uso de recursos

// :( - > Código de complica por confusión de modificación

//Proxy -> Proporciona un sustituto o marcado de posición para otro objeto
// :D -> Control el objeto de servicio sin que sepan, funciona si el objeto no esta listo o no disponible
// :( -> Código complicado al crear más clases, respuesta retrasada
