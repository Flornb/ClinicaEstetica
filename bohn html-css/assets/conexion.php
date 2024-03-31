<?php 
class Conexion{	  
    public static function Conectar() {         
         define('servidor','mysql.castroingenieria.cl');
         define('nombre_bd','db_test_flo');
         define('usuario','castro_user1');
         define('password','castro_pass1#');       				        
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');			
        try{
            $conexion = new PDO("mysql:host=".servidor."; dbname=".nombre_bd, usuario, password, $opciones);			
            return $conexion;
        }catch (Exception $e){
            die("El error de Conexión es: ". $e->getMessage());
        }
    }
}