import React from "react";
import Footer from "../Footer";
import { Box } from "@material-ui/core";
class Footers extends React.Component {
  state = {
    footers: [
      {
        skills: ["Java", "PHP", ".NET", "JS", "Android", "iOS"],
        levels: [
          "Lập trình viên Backend",
          "Lập trình viên PHP",
          "Lập trình viên NodeJS",
          "Lập trình viên iOS",
          "Lập trình viên Android",
          "Lập trình viên Ruby on Rails",
          "Lập trình viên Java"
        ],
        companies: [
          "Deliveree On-Demand Logistics",
          "Fossil Vietnam",
          "Vietnam International Bank (VIB)",
          "Floware",
          "ARIS Vietnam",
          "Saigon Technology Solutions"
        ],
        cities: ["Ho Chi Minh", "Ha Noi", "Da nang", "Others"],
        pages: [
          "Trang Chủ",
          "Việc Làm IT",
          "Về ITviec.com",
          "Liên Hệ",
          "Thông cáo báo chí"
        ],
        rules: [
          "Quy định bảo mật",
          "Thoả thuận sử dụng",
          "Chính sách giải quyết khiếu nại",
          "Quy chế hoạt động",
          "Câu hỏi thường gặp"
        ],
        contact: [
          "Copyright © IT VIEC JSC",
          "MST: 0312192258",
          "Điện thoại: 028.66811397",
          "Địa chỉ: 60 Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, Tp.HCM"
        ],
        post:
          "Liên hệ để đăng tin tuyển dụng tại Hồ Chí Minh: (+84) 977 460 519 - Hà Nội: (+84) 964 618 859 - Email: love@itviec.com"
      }
    ]
  };
  render() {
    return (
      <Box>
        {this.state.footers.map(footer => {
          return (
            <Footer
              skills={footer.skills}
              levels={footer.levels}
              companies={footer.companies}
              cities={footer.cities}
              pages={footer.pages}
              rules={footer.rules}
              contact={footer.contact}
              post={footer.post}
            ></Footer>
          );
        })}
      </Box>
    );
  }
}
export default Footers;
