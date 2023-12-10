/*USER*/
ALTER TABLE `teacher_app`.`user` AUTO_INCREMENT = 1;

/*Administrator*/
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `role`, `status`, `city`) VALUES ('edgar', '67890', 'edgar@yahoo.com', 'Edgar Poe', '89065', 'España', 'administrador', 'activo', 'Valencia');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `role`, `status`, `city`) VALUES ('otto', '34567', 'otto@yahoo.com', 'Otto Voz', '78945', 'España', 'administrador', 'inactivo', 'Valladolid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `role`, `status`, `city`) VALUES ('bianca', '76545', 'bianca@mail.com', 'Bianca MOri', '87902', 'España', 'administrador', 'activo', 'Valladolid');


/*Estudiante*/
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('edgar', '34567', 'cristina@gmail.com', 'Cristina Wocintent', '34567', 'España', '+34 123456789', 'estudiante', 'activo', 'Valencia');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('sam', '61717', 'sam@gmail.com', 'Sam Bigotes', '67895', 'España', '+34 123456906', 'estudiante', 'activo', 'Torre Molinos');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('ronal', '81999', 'ronal@gmail.com', 'Ronald Yo', '67543', 'España', '+34 123457654', 'estudiante', 'activo', 'Barcelona');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('tomas', '19998', 'thomas@gmail.com', 'Thomas Hoe', '67565', 'España', '+34 123457876', 'estudiante', 'activo', 'Valladolid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('ramon', '98998', 'ramon@gmail.com', 'Ramon Lopez', '67785', 'España', '+34 123457876', 'estudiante', 'inactivo', 'Madrid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('sammy', '19987', 'sammy@yahoo.com', 'Sammy Grant', '79565', 'España', '+34 123457876', 'estudiante', 'activo', 'Valencia');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('tito', '99879', 'tito@yahoo.com', 'Tito Chong', '93565', 'España', '+34 123457876', 'estudiante', 'activo', 'Madrid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('rick', '88879', 'rick@yahoo.com', 'Rick Mortis', '93589', 'España', '+34 123457876', 'estudiante', 'inactivo', 'Madrid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `phone`, `role`,  `status`, `city`) VALUES ('eva', '88879', 'eva@yahoo.com', 'Eva Peralta', '93554', 'España', '+34 123457876', 'estudiante', 'registrado', 'Sevilla');



/*Profesor*/
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('yogrendra', '6272727272', 'yogendra123@gmail.com', 'Yogendra Singh', '82899', 'España',  '9', '50', 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+4143456789', 'profesor', 'Excelente con jovenes', 'activo', 'Madrid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('oscar', '63737', 'oscar@gmail.com', 'Oscar Manuel López', '33448', 'España', '3', '50', 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+414345678', 'profesor', 'Dedicado y muy comprometido', 'activo', 'Madrid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('ricardo', '62728', 'ricardo@gmail.com', 'Ricardo Alegria', '34556', 'España', '2', '40', 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+414345678', 'profesor', 'Conocimiento avanzado en el area''', 'activo', 'Nerja');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('anna', '629899', 'anna@gmail.com', 'Anna Balderas', '34980', 'España', '12', '60', 'https://images.unsplash.com/photo-1590649880765-91b1956b8276?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+416545678', 'profesor', 'Nivel experto y con gran experiencia', 'activo', 'Nerja');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('ramiro', '629^ywy', 'ramiro@gmail.com', 'Ramiro Perez', '34987', 'España', '8', '50', 'https://images.pexels.com/photos/2422289/pexels-photo-2422289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '+416548765', 'profesor', 'Pasión por dar clases', 'activo', 'Valencia');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('cesar', '78865', 'cesar@gmail.com', 'Cesar Xo', '47559', 'España', '10', '35.00', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+34 1234589070', 'profesor', 'Interactivo y con aptitudes de comunicación', 'activo', 'Torre Molinos');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('sara', '96545', 'sara@gmail.com', 'Sara Cuevas', '47598', 'España',  '6', '45.00', 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+34 1234589070', 'profesor', 'Comprometido y responsable', 'registrado', 'Tenerife');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('juanca', '5050', 'juanca@gmail.com', 'Juan Carlos Moya', '90067', 'España', '16', '125.00', 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+34 1234589070', 'profesor', 'Talentoso y trabajador', 'registrado', 'Madrid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('erika', '78289', 'erika22@gmail.com', 'Ericka Palacios', '90986', 'España', '10', '80.00', 'https://plus.unsplash.com/premium_photo-1698527694200-0947229cb46e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+34 6564589070', 'profesor', 'Excelente con estudiantes jovenes', 'activo', 'Madrid');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('simon', '828292', 'simonfle@gmail.com', 'Simon Fleury', '90098', 'España', '12', '115.00', 'https://images.pexels.com/photos/760118/pexels-photo-760118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '+34 1234588978', 'profesor', 'Entusiasta', 'activo', 'Mallorca');
INSERT INTO `teacher_app`.`user` (`username`, `password`, `email`, `name`, `postal_code`, `country`, `experience`, `hourly_rate`, `imageUrl`, `phone`, `role`, `description`, `status`, `city`) VALUES ('sandra', '78289', 'sandy2200@gmail.com', 'Sandra Almenares', '90909', 'España', '5', '50.00', 'https://plus.unsplash.com/premium_photo-1672691612619-29301d9aafac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '+34 6564765456', 'profesor', 'Buen lider, y carismatica', 'activo', 'Malaga');


/*KNOWLEDGE AREAS*/
ALTER TABLE `teacher_app`.`knowledge_area` AUTO_INCREMENT = 1;

INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Artes Marciales', 'Artes Marciales', 'Avanzado', '13', 'Aikido', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Artes Marciales', 'Artes Marciales', 'Avanzado', '13', 'Kung Fu', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Artes Marciales', 'Artes Marciales', 'Avanzado', '13', 'Karate Do', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Ciencias', 'Matemáticas', 'Avanzado', '14', 'Calculo', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Ciencias', 'Matemáticas', 'Avanzado', '14', 'Algebra', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Ciencias', 'Matemáticas', 'Intermedio', '14', 'Probabilidad', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'FrontEnd', 'Avanzado', '15', 'Angular', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'FrontEnd', 'Avanzado', '15', 'React', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'FrontEnd', 'Intermedio', '15', 'Vue', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'FrontEnd', 'Avanzado', '16', 'CSS', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'FrontEnd', 'Intermedio', '16', 'Angular', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'BackEnd', 'Avanzado', '16', 'NodeJS', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'BackEnd', 'Avanzado', '16', 'Express', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'Database', 'Avanzado', '17', 'MySQL', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'Database', 'Avanzado', '17', 'Progress', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Programación', 'Database', 'Avanzado', '17', 'MongoDB', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Historia', 'Historia', 'Intermedio', '18', 'Historia de España', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Historia', 'Historia', 'Intermedio', '18', 'Historia Universal', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Fitness', 'Cardio', 'Intermedio', '19', 'Cardio Kickboxing', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Fitness', 'Cardio', 'Intermedio', '19', 'Pilates', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Fitness', 'Cardio', 'Intermedio', '19', 'Zumba', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Música', 'Música', 'Intermedio', '20', 'Piano', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Música', 'Música', 'Intermedio', '20', 'Violin', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Música', 'Música', 'Intermedio', '20', 'Guitarra', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Música', 'Música', 'Avanzado', '21', 'Saxophone', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Música', 'Música', 'Intermedio', '21', 'Trumpeta', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Música', 'Música', 'Intermedio', '21', 'Oboe', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Literatura', 'Literatura', 'Intermedio', '21', 'Letras Clásicas', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Ciencias Ocultas', 'Ciencias Ocultas', 'Intermedio', '22', 'Adivinador', '1');
INSERT INTO `teacher_app`.`knowledge_area` (`category`, `description`, `level`, `teacher_id`, `area`, `active`) VALUES ('Labores de Oficina', 'Labores de Oficina', 'Intermedio', '23', 'Office Suite', '1');


/*Enrollment*/
ALTER TABLE `teacher_app`.`student_enrollment` AUTO_INCREMENT = 1;

INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('5', 'Super Cool', '8', '13', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('5', 'Okay course', '5', '13', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('5', 'Super Cool', '4', '14', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('3', 'Okay course', '4', '14', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('2', 'No tan bueno', '5', '14', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('5', 'Fabuloso', '15', '5', '15');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('5', 'Extraordinario Curso', '6', '15', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('4', 'Pasadero', '7', '15', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('1', 'No lo recomiendo', '8', '16', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('1', 'Que puedo decir, no me gusto', '8', '17', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('2', 'Muy por debajo de lo esperado', '9', '18', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('1', 'Realmente decepcionante', '10', '18', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('5', 'Supremo, lo recomiendo', '11', '18', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('4', 'Muy bueno, solo le cambiaria ...', '12', '19', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('3', 'Creo que puede mejorar', '12', '20', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('4', 'Nada mal lo recomiendo', '13', '21', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('4', 'Me parece muy bueno', '13', '21', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('5', 'Sobresaliente y estoy contento', '5', '17', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('3', 'No tan buena inversion', '6', '18', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('3', 'No fue muy bueno', '9', '20', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('1', 'No me gusto', '10', '12', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('4', 'Estuvo okay', '11', '15', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('1', 'No me gusto', '6', '22', '1');
INSERT INTO `teacher_app`.`student_enrollment` (`rating`, `review`, `student_id`, `teacher_id`, `active`) VALUES ('5', 'Super good', '8', '23', '1');
