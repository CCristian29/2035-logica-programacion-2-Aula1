# Encriptador de Texto

Este proyecto es una aplicación web simple que encripta y desencripta mensajes de texto, diseñada con HTML, CSS y JavaScript. Está diseñada para convertir ciertas letras en combinaciones de caracteres específicas y luego revertir el proceso, permitiendo la encriptación y desencriptación del texto de manera fácil y rápida.

## Funcionalidades

- **Encriptar Texto:** Convierte el texto ingresado reemplazando las vocales por combinaciones de caracteres específicos.
- **Desencriptar Texto:** Restaura el texto encriptado a su forma original.
- **Copiar al Portapapeles:** Permite copiar el texto encriptado o desencriptado directamente al portapapeles.

### Reglas de Encriptación:

| Letra | Encriptación |
|-------|--------------|
| e     | enter        |
| i     | imes         |
| a     | ai           |
| o     | ober         |
| u     | ufat         |

### Reglas de Desencriptación:
La desencriptación invierte el proceso de encriptación, reemplazando las combinaciones de caracteres por las vocales correspondientes.

## Uso

1. **Ingresar Texto:** Escriba el texto que desea encriptar o desencriptar en el área de texto proporcionada.
2. **Encriptar/Desencriptar:** Haga clic en el botón correspondiente ("Encriptar" o "Desencriptar").
3. **Copiar al Portapapeles:** Si lo desea, puede copiar el texto resultante usando el botón "Copiar".

## Ejemplo de Uso

### Encriptar:
- **Entrada:** `"hola mundo"`
- **Salida:** `"hoberlai munderfat"`

### Desencriptar:
- **Entrada:** `"hoberlai munderfat"`
- **Salida:** `"hola mundo"`

## Tecnologías Utilizadas

- **HTML5:** Estructura del contenido.
- **CSS3:** Estilos y diseño responsivo.
- **JavaScript:** Lógica para la encriptación y desencriptación de texto.

## Instalación

No se requiere instalación. Simplemente clone el repositorio y abra el archivo `index.html` en su navegador favorito.

```bash
git clone https://github.com/tu-usuario/encriptador-texto.git
cd encriptador-texto
