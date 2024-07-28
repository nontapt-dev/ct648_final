import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ShowResearch = () => {
  const checkToken = localStorage.getItem('token');
  if (!checkToken) {
    window.location.href = '/login';
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            หัวข้องานวิจัย : การตรวจจับความเร็วรถยนต์ด้วย yoloV8
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ความคืบหน้างานวิจัย : ดำเนินการสอบเรียบร้อย
          </Typography>
          <Typography variant="body2" color="text.secondary">
            รายละเอียดงานวิจัย : <br/>
            การวิจัยนี้ได้ทำการศึกษาเกี่ยวกับการตรวจจับความเร็วโดยใช้ opencv และ yolov8 โดยงานวิจัยได้มีการวัดค่าความเร็วโดยเปรียบเทียบระหว่างค่าความเร็วที่วัดได้จริงจาก Gps เปรียบเทียบกับที่โปรแกรมแสดงออก</Typography>
       </CardContent>
        <a href="/">Home</a>
      </Card>
    </div>
  );
};

export default ShowResearch;
