<?php 
defined('BASEPATH') OR exit('No direct script acess allowed');
class Message_model extends CI_Model{
    public function fix_profile($username,$signnature,$user_id){
        $this->db->insert('t_user',array(
            'username'=>$username,
            'signnature'=>$signnature,
            'user_id'=>$user_id
        ));
        return $this -> db -> affected_rows();
    }
}