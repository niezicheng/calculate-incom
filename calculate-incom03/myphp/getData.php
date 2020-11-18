<?php
    // 按需获取计算结果信息文件 

    include_once "config.php";

    // header("Access-Control-Allow-Origin:*");
    // header("Access-Control-Allow-Origin: http://localhost:9000");

    // 获取到原始数据信息
    $jsonStr = file_get_contents('php://input');

    parse_str($jsonStr);
    // 解析json子串为数组
    $arr = json_decode($jsonStr, true);
    // // 获取前台需求的数据顺序标识
    $myOrder = $arr['myOrder'];
    // echo $myOrder;

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    if ($myOrder == '升序') {
        // 查询结果按照升序排列
        $sql = "SELECT * FROM calculateinfo ORDER BY result ASC";
    } else {
        // 查询结果按照降序排列
        $sql = "SELECT * FROM calculateinfo ORDER BY result DESC";
        
    }

    $result = $conn->query($sql);

    // $css=$result->fetch_all();
    $data = [];
    if ($result->num_rows > 0) {
        // 将查询结果单行去除并放置保存到$data数组中
        while($row = mysqli_fetch_array($result, MYSQL_ASSOC)) {
            array_push($data, $row);
        }
        // 输出返回相应json数据给前台
        echo json_encode($data);
    } else {
        echo "0 结果";
    }
    $conn->close();


?>
