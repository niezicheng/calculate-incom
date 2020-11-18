<?php
    // 获取计算次数文件

    include_once "config.php";

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    // 查询结果按照降序排列
    $sql = "SELECT * FROM countinfo";

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
