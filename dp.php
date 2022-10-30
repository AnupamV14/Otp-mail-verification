<?php
$conn= newmysql("localhost:3306", 'root','otp_login');
if($conn->connect_errno)
echo json_encode(['status'=> $conn->connect_error]);
exit();
}