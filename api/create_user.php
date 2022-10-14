<?php
// required headers
header("Access-Control-Allow-Origin: http://localhost/medpharm/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// files needed to connect to database
include_once 'config/database.php';
include_once 'objects/user.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// instantiate product object
$user = new User($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set product property values
$user->firstname = $data->firstname;
$user->lastname = $data->lastname;
$user->email = $data->email;
$user->role = $data->role;
$user->license = $data->license;
$user->password = $data->password;

// create the user
if(empty($user->role)){
    // set response code
    http_response_code(400);
    // display message: user was created
    echo json_encode(array("message" => "Invalid Role"));

}else{
    if(
        !empty($user->firstname) &&
        !empty($user->lastname) &&
        !empty($user->email) &&
        in_array($user->role, array('user','consultant')) &&
        !empty($user->password) &&
        !empty($user->role) &&
        $user->create()
    ){
        // set response code
        http_response_code(200);
        // display message: user was created
        echo json_encode(array("message" => "New $user->role was created."));
    }
    else{
     
        // set response code
        http_response_code(400);
     
        // display message: unable to create user
        echo json_encode(array("message" => "Unable to create user."));
    }
}