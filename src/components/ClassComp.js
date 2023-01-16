// Tạo Class Component
import React from "react";
import { Component } from "react";
class ClassComp extends Component {
    //Sử dụng hàm render để trả ra 1 element
    render() {
        return (
            //trả ra element được bao bởi wrapper tag
            <>
                <h2>Rikkei Academy chào đón các bạn lớp Java-11</h2>
                <p>Chúc các bạn có trải nghiệm tuyệt vời tại Rikkei</p>
            </>
        );
    }
}
export default ClassComp;