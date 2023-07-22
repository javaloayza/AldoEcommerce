---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---
<!-- title: "{{ replace .Name "-" " " | title }}": Esta línea define el título de la página. Utiliza una función de plantilla para reemplazar guiones "-" en el nombre del archivo (.Name) con espacios " " y luego convierte la primera letra de cada palabra en mayúscula utilizando title. Por ejemplo, si el nombre del archivo es "mi-pagina.md", el título resultante sería "Mi Pagina".

date: {{ .Date }}: Esta línea establece la fecha de la página como la fecha de creación del archivo .md. Hugo utiliza el valor de la fecha para ordenar y clasificar las páginas, especialmente útil para blogs o listas de publicaciones ordenadas por fecha.

draft: true: Esta línea indica que el contenido de la página es un borrador y no debe ser publicado en el sitio web. Si esta variable está configurada como true, Hugo ignorará el procesamiento de esta página cuando se genere el sitio en modo de producción. -->
