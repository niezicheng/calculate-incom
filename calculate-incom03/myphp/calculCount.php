<?php
    //添加计算统计进入数据库

    include_once "config.php";

    // 获取到原始数据信息
    $data = file_get_contents('php://input');
    // echo $data;
    // 解析json子串为数组
    $arr = json_decode($data, true);
    // 获取计算过程
    $addee = $arr['addee'];
    // 获取计算结果
    $minus = $arr['minus'];
    $multi = $arr['multi'];
    $divi = $arr['divi'];
    
    // echo  $add, $minus;
    // var_dump($minus);
    // var_dump($result);
    
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    
    $sql = "INSERT INTO countinfo (addee, minus, multi, divi)
    VALUES (" . "$addee" . ", " . "$minus" . ", " . "$multi" . ", " . "$divi" . ")";

    // echo $sql;

    if ($conn->query($sql) === TRUE) {
        echo "新记录插入成功";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();

?>
