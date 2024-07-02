# Ejemplo Nginx

Similar a los ejemplos de python pero utilizando un servidor de aplicaciones Nginx.

Creamos una nueva imagen desde (FROM) la imagen base de Nginx con nuestro código y archivo de configuración personalizado.

## Variante reload

Permite establecer un volumen bind mount que enlaza nuestra carpeta src con la carpeta en el remoto, pudiendo ver los cambios en tiempo real.

