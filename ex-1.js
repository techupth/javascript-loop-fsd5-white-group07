// Exercise #1: Decrease the Student Scores

let scores = [89, 70, 60, 50, 100, 71];
let result = [];

/*
วันหนึ่งครูได้ออกมาประกาศว่า มีโจทย์ 1 ข้อที่ครูตรวจพลาดไป ข้อนี้ทุกคนทำผิดแต่ครูดันตรวจเป็นถูก โจทย์ข้อนี้มีคะแนน 10 คะแนน

ดังนั้นครูจะต้องหักคะแนนของทุกคนออก 10 คะแนน

ให้เขียนโปรแกรมด้วย For Loop เพื่อทำการหักคะแนนจากนักเรียนทุกคนใน Array scores คนละ 10 คะแนน

[79, 60, 50, 40, 90, 61]   
*/

// Start coding here

for (let i = 0; i < scores.length; i++) {
  result.push(scores[i] - 10);
}

console.log(result);
