<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {


    public function index()
    {
        $this->load->view('index');
    }

    public function index2()
    {
        $this->load->view('index2.html');
    }

    public function register()
    {
        $this->load->view('register');
    }

    public function success()
    {
        $this->load->view('success');//跳转
    }

    public function save_user()
    {
        //1. 接数据
        $username = $this -> input -> post('username');//=$_POST['username']
        $pwd = $this -> input -> post('pwd');
        $realname = $this -> input -> post('realname');
        $tel = $this -> input -> post('tel');

        //2. 验证

        //3. 连接数据库
        $this -> load -> model('user_model');
        $row = $this -> user_model -> save($username, $pwd, $realname, $tel);

        //4. 跳转页面
        if($row > 0){
            redirect('welcome/success');
        }else{
            echo 'fail';
        }
    }

    public function login()
    {
        $this->load->view('login');//跳转
    }

    public function check_login()
    {
        $username = $this -> input -> post('username');
        $pwd = $this -> input -> post('pwd');


        $this -> load -> model('user_model');
        $user = $this -> user_model -> find_by_name($username, $pwd);
        if($user){//有值
            $this -> session -> set_userdata('login_name', $username);
            redirect('welcome/index');
        }else{
            echo '不存在此用户!';
        }
    }

    public function list_user(){
        $this -> load -> model('user_model');
        $result = $this -> user_model -> find_all();
        if($result){

            $this->load->view('list_user', array(
                'users' => $result
            ));
        }
    }

    public function delete_user($user_id){
        //$user_id = $this -> input -> get('user_id');
        $this -> load -> model('user_model');
        $row = $this -> user_model -> delete_user($user_id);
        if($row > 0){
//            $this -> list_user();
            redirect('welcome/list_user');
        }else{
            echo '删除失败';
        }
    }
}
