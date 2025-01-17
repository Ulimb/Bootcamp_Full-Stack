#Creacion de base de datos
CREATE SCHEMA `miesquemagrandioso` ;

CREATE TABLE Tareas (
  id_tarea INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(250),
  fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  fecha_limite DATETIME,
  estado ENUM('Pendiente', 'Proceso', 'Finalizado')  NOT NULL DEFAULT 'Pendiente',
  PRIMARY KEY (id_tarea)
);

CREATE TABLE Usuarios (
  id_usuario INT AUTO_INCREMENT,
  correo VARCHAR(250) NOT NULL UNIQUE,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_usuario)
);

CREATE TABLE Usuarios_Tareas (
  id_relacion INT AUTO_INCREMENT,
  id_usuario INT,
  id_tarea INT,
  PRIMARY KEY (id_relacion),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario) ON DELETE CASCADE,
  FOREIGN KEY (id_tarea) REFERENCES Tareas(id_tarea) ON DELETE CASCADE
);
#Modificar tabla 
ALTER TABLE Usuarios 
MODIFY nombre VARCHAR(150) ;

ALTER TABLE Tareas 
ADD prioridad ENUM('Baja', 'Media', 'Alta') DEFAULT 'Media';

# Insertar datos a la base base de datos
INSERT INTO Usuarios (correo, nombre, apellido) VALUES 
('usuario1@example.com', 'Juan', 'Pérez'),
('usuario2@example.com', 'Ana', 'López'),
('usuario3@example.com', 'Luis', 'García');


INSERT INTO Tareas (nombre, descripcion, fecha_limite, estado) VALUES 
('Tarea 1', 'Descripción de la Tarea 1', '2024-12-31', 'Pendiente'),
('Tarea 2', 'Descripción de la Tarea 2', '2024-11-30', 'Proceso'),
('Tarea 3', 'Descripción de la Tarea 3', '2024-10-31', 'Finalizado');


INSERT INTO Usuarios_Tareas (id_usuario, id_tarea) VALUES 
(1, 1),  #Juan tiene Tarea 1
(1, 2),  #Juan tiene Tarea 2
(2, 2),  #Ana tiene Tarea 2
(2, 3),  #Ana tiene Tarea 3
(3, 1);  #Luis tiene Tarea 1

UPDATE Tareas 
SET estado = 'Proceso' 
WHERE id_tarea = 1;

UPDATE Usuarios 
SET correo = 'nuevo_correo@example.com' 
WHERE id_usuario = 1;

DELETE FROM Tareas 
WHERE id_tarea = 2;


# Consultas 
SELECT u.nombre, u.apellido, COUNT(ut.id_tarea) AS total_tareas
FROM Usuarios u
INNER JOIN Usuarios_Tareas ut ON u.id_usuario = ut.id_usuario
WHERE u.id_usuario < 10
GROUP BY u.id_usuario
HAVING total_tareas > 1;


SELECT t.nombre, COUNT(ut.id_usuario) AS total_usuarios
FROM Tareas t
INNER JOIN Usuarios_Tareas ut ON t.id_tarea = ut.id_tarea
GROUP BY t.id_tarea;

