# Challenge_CRUD_Node.js_Mysql English

## Execution of the program:

    1- Create a file with the name .env and add the following structure:
        a_ PORT (port 7020 was used for this project so it can be used too).
        b_ HOST (localhost was used for this project so it can be used as well) would be for the database.
        c_ USER (the root user was used for the database but you must enter the one you want to use).
        d_ PASSWORD (the password was used to enter the database).
        e_ DATABASE (name of the database with which you want to work)
        f_ EMAIL_TO_SEND (mail to be able to send mail to its recipients).
        g_ PASS_OF_EMAIL_TO_SEND (password for the use of mail sending).
        h_ SERVICE (messaging service for example "gmail").
        i_ Each filling of the previous fields will have to be accompanied by double or single quotes in cases where there is a string, for example:
            SERVICE="gmail".

    2- Open the terminal and make sure you are in the file path where if you type 'ls' in the terminal and hit enter you should find the files
    (server.js among others).

    3- Read the package.json where you will be able to find some scripts:
        a_ npm run demon = raises the program for execution.
        b_ npm run test = the tests that would be possible scenarios will be run.
        b_ npm run test-watch = the tests that would be possible scenarios will be run but the terminal will remain up
        (it is useful when testing the program not to be running the 'npm run test' every time a new test is implemented or a test is corrected).

    4- Write npm i to be able to install all the dependencies and devDependecias.

    5- Run the program with the command npm run demon where it will appear `
    [nodemon] 2.0.18
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node server.js`
    listening to port: 7020`
    which would imply that the program is running, it will be
    you can try with applications like postman which was the one
    was used to check the
    operation of the same

## Program operation:
    1- model/class/Model.js: A class will be found, you can
     say that it will be the parent class that will be the one that has the methods required to be able to do the tasks.
    2- model/database/Mysql.js file to be able to do the
    mysql database connection.
    3- model/email/sendMail.js class that takes care of the
    sending of emails.
    4- node_modules folder containing all files
    that are required for the operation of the program.
    5- src/models place where all the models thought are
    for the program for example User and Company.
    6- src/routes/index.js routes connection for use
    7- src/routes/company or user or mail/index.js connection
    to the routes so that they can be executed and how it would have
    to be called for operation eg:
        localhost:7020/api/"user"/"get" in the user case and how it would be to call the method.
    8- src/routes/company or user or mail/src where it is
    find the methods of the program, you could find methods
    like sendMail.js, update.js, create.js among others.
    9- src/structures folder where you can find functions that
    it serves so that when a method is called, it has
    take into account some things such as that a name cannot
    be a boolean but a string and whether it is required or not.
    10- test folder where all the tests are to test the
    different scenarios of the program and see what happens at the time
    that a wrong req.body is sent among other things.
    11- package.json file where the scripts will be found,
    dependencies, repository, author data and devDependencies of the program
    12- server.js it can be said that it would be the main of the program
    where the connections are made among other things.
    13- eslint files are used when arranging things and
    Follow a design structure.

# Challenge_CRUD_Node.js_Mysql Esapñol

## Ejecución del progrma:

    1- Crear un archivo con el nombre .env y agregar la siguiente estructura:
        a_ PORT (se uso el puerto 7020 para este proyecto asi que puede ser usado tambien).
        b_ HOST (se uso el host localhost para este proyecto asi que puede ser usado tambien) seria para la base de datos.
        c_ USER (se uso el usuario root para la base de datos pero se debe ingresar el que se quiera usar).
        d_ PASSWORD (se utilizo la contraseña para poder ingresar a la base de datos).
        e_ DATABASE (nombre de la base de datos con la que se decee trabajar)
        f_ EMAIL_TO_SEND (correo para poder hacer los envios de mail así sus destinatarios).
        g_ PASS_OF_EMAIL_TO_SEND (contraseña para el uso de los envios de mail).
        h_ SERVICE (servicio de mensajeria por ejemplo "gmail").
        i_ Cada rellenaddo de los anteriores campos seran que ser acompañandos de comillas dobles o simple en los casos donde haiga string por ejemplo:
            SERVICE="gmail".

    2- Abrir la terminal y asegurarse que esta en la ruta del achivo donde si escribe 'ls' en la terminal y le da enter deberia de encontrar los archivos
    (server.js entre otros).

    3- Leer el package.json donde se van a poder encontrar algunos scripts:
        a_ npm run demon = levata el programa para su ejecucion.
        b_ npm run test = se correran los test que serian posibles ecenarios.
        b_ npm run test-watch = se correran los test que serian posibles ecenarios pero quedara la terminal levantada
        (sirve para la hora de hacer los test del programa no estar corriendo el 'npm run test' cada vez que se implementa un test nuevo o se corrigue un test).

    4- Escribir npm i para poder instalar todas las dependencias y devDependecias.

    5- Ejecutar el programa con el comando npm run demon donde aprecera `
    [nodemon] 2.0.18
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node server.js`
    listening to port: 7020`
    que implicaria que el programa se esta ejecutando, se lo
    puede probar con aplicaciones como postman que fue el que
    se estuvo utilizando para comprobar el
    funcionamiento del mismo

## Funcionamiento del programa:
    1- model/class/Model.js: Se encontrara una clase, se puede
     decir que sera la  clase padre que va ser la que posee los metodos requeridos para poder hacer las tareas.
    2- model/database/Mysql.js archivo para poder hacer la
    conexion a la base de datos de mysql.
    3- model/email/sendMail.js clase que se encarga para el
    envio de los mail.
    4- node_modules carpeta que contiene todos los archivos
    que son requeridos para el funcionamiento del programa.
    5- src/models lugar donde se todos los modelos pensados
    para el programa por ejemplo Usuario y Empresa.
    6- src/routes/index.js conexion de las rutas para su uso
    7- src/routes/empresa o usuario o mail/index.js conexion
    a las rutas para que puedan ser ejecutadas y como tendria
    que ser llamado para el funcionamiento por ejemplo:
        localhost:7020/api/"usuario"/"get" en el caso de usuario y como seria para llamar al metodo.
    8- src/routes/empresa o usuario o mail/src lugar donde se
    encuentran los metodos del programa, podra encontrar metodos
    como sendMail.js, update.js, create.js entre otros.
    9- src/structures carpeta donde se encuentra funciones que
    sirve para que a la hora de ser llamado un metodo se tenga
    en cuenta algunas cosas como por ejemplo que un name no puede
    ser un boolean sino un string y si es requerido o no.
    10- test carpeta donde estan todos los test para probar los
    distintos escenarios del programa y ver que sucede a la hora
    de que se manda un req.body mal echo entre otras cosas.
    11- package.json archivo donde se encontrara los script,
    dependencias, repositorio, datos del author y devDependencias del prorgrama
    12- server.js se puede decir que seria el main del programa
    donde se hace las conexiones entre otras cosas.
    13- archivos eslint sirven para la hora de acomodar las cosas y
    que se siga una estructura de diseño.