Ya tenía una cuenta en GitHub y un repositorio configurado con las carpetas correspondientes a las semanas 1, 2 y 3 del Curso Fullstack Developer CILSA 2024, donde se encuentran los trabajos prácticos realizados junto con sus respectivos enunciados.

Al avanzar con la tarea opcional de la semana 3 mediante Vercel, noté que no tenía un menú principal adecuado para darle hosting y mostrar de forma organizada los trabajos prácticos realizados. Por ello, decidí implementar un menú principal realizando los siguientes pasos:

A través de Visual Studio Code:
    1- Cree una nueva rama para trabajar en el menú principal: 
        git checkout -b menuprincipal
    2- Implementé el menú principal: 
        git add .
        git commit -m "Creación de un menú principal de trabajos prácticos"
    3- Subí los cambios a GitHub: 
        git push --set-upstream origin menuprincipal

Pull Request en GitHub:
    4- En GitHub, creé un pull request, complete su descripción, en el campo "Assignees" me elegí y seleccione en "Labels" la opción "enhancement".
    5- Finalmente, realicé el merge de la rama "menuprincipal" con "main"

Luego a través de Visual Studio Code:
    6-Creé una nueva rama para trabajar en la semana 4:
        git checkout -b semana-4
    7-Me aseguré de que mi rama principal (main) estuviera actualizada:
        git checkout main
        git pull
        git checkout semana-4
    8- Añadí la carpeta semana-4 al proyecto y dentro de esa carpeta, añadí dos archivos:
        Enunciado.md: Contiene el enunciado de la actividad de la semana 4.
        TP-Git.md: Correspondiente a este trabajo práctico.
    9- Realicé el commit y subí los cambios:
        git add .
        git commit -m "Agrego el TP resuelto correspondiente a la semana 4"
        git push --set-upstream origin semana-4

Pull Request en GitHub:
    10- Finalmente, en GitHub, creé un nuevo pull request para la rama "semana-4" y realicé el merge a "main".