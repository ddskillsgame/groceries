<?php
    //open connection to mysql db
    $connection = mysqli_connect("73.229.5.101","herouser","DH2viGZGCxHNPofo","Heroes") or die("Error " . mysqli_error($connection));

    //fetch table rows from mysql db
    $sql = "SELECT * 
            FROM `tbl_Heroes`";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $heroarray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $heroarray[] = $row;
    }
    echo json_encode($heroarray);

    //close the db connection
    mysqli_close($connection);
?>
