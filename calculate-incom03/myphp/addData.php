<?php
    // 添加计算结果文件

    include_once "config.php";
    // // 计算过程
    // $process = $_POST['process'];
    // // 计算结果
    // $result = $_POST['result'];

    // 获取到原始数据信息
    $data = file_get_contents('php://input');
    echo $data;
    // 解析json子串为数组
    $arr = json_decode($data, true);
    // 获取计算过程
    $process = $arr['process'];
    // 获取计算结果
    $result = $arr['result'];
    
    // echo  $process, $result;
    // var_dump($process);
    // var_dump($result);
    
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    
    $sql = "INSERT INTO calculateinfo (process, result)
    VALUES (" . "'$process'" . ", " . "$result" . ")";

    echo $sql;

    if ($conn->query($sql) === TRUE) {
        echo "新记录插入成功";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();

?>
