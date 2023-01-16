import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FuncComp';

class App extends Component {
  getAcademyName() {
    return "Hệ thống đạo tạo CNTT chất lượng nhật bản";
  }

  render() {
    const java_11 = "Java - 11";
    const ra = "Rikkei Academy";
    const element = <h3>{this.getAcademyName()}</h3>
    const objStudent = { studentId: "SV001", studentName: "Nguyễn Văn A" };
    return (
      <div>
        <h2>{ra} xin chào các bạn lớp {java_11}</h2>
        {element}
        {objStudent.studentId}
        <ClassComp></ClassComp>
        <ClassComp></ClassComp>
        <FunctionComp />
      </div>
    );
  }
}

export default App;
