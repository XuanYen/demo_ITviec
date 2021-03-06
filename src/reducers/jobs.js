import * as types from "../constants/ActionTypes";
var jobs = [
  {
    id: "0",
    title: "PHP Team Leader",
    field: ["Team Leader", "NodeJS", "PHP"],
    logo:
      "https://cdn.itviec.com/employers/gvn-technology/logo/w170/25VyeSKAWCYpEwRwMUhj8HB6/gvn-logo.png",
    company: "CÔNG TY CỔ PHẦN CÔNG NGHỆ GVN",
    people: "1-50",
    country: "VietNam",
    day: "Monday - Friday",
    OT: "Extra days off for OT",
    address: "24 Hoàng Quốc Việt, Cau Giay, Ha Noi ",
    reason: [
      "Cơ hội làm Product, dự án lớn với KH Nhật Bản",
      "Phúc lợi tốt, có thưởng dự án",
      "Cơ hội onsite Nhật Bản"
    ],
    description: [
      "Tham gia vào rất nhiều dự án với khách hàng Nhật bản, chủ yếu là các hệ thống Web",
      "Tham gia vào tất cả các giai đoạn của một dự án như: lập kế hoạch, phân tích, thiết kế, thực thi, kiểm thử và triển khai cũng như bảo trì",
      "Nghiên cứu các công nghệ mới và áp dụng vào các dự án của công ty",
      "Làm việc, phối hợp công việc theo nhóm dưới sự phân công của quản lý dự án"
    ],
    skill: [
      "Có từ 3 năm kinh nghiệm PHP triển khai các dự án (Laravel || CI || Zend...)",
      "Có từ 3 năm trở lên kinh nghiệm quản lý team từ 3 thành viên trở lên.",
      "Đã có kinh nghiệm làm việc các thư viện/framework Frontend (React || Vue || Angular || NodeJS...)",
      "Có kỹ năng về training, các kỹ năng mềm, các kỹ năng quản lý dự án, quản lý chất lượng"
    ],
    why: [
      "Môi trường Việt – Nhật kết hợp giữa 2 nền văn hóa",
      "Không gian mở, thoải mái",
      "Có chế độ OT",
      "Review lương 2 lần/năm",
      "Được hỗ trợ kinh phí tham gia vào các Seminar nâng cao kỹ năng"
    ]
  },
  {
    id: "1",
    title: "10+ Java Developer (1-5 year experience)",
    field: ["Javascript", "SQL", "Java"],
    logo:
      "https://cdn.itviec.com/employers/cyberlogitec-vietnam-co-ltd/logo/w170/bk4RzRcCWDcqoxv3kzLBgbFc/Logo%20CyberLogitec%20VN.png",
    company: "CyberLogitec Vietnam",
    people: "301-500",
    country: "Republic of Korea",
    day: "Monday - Friday",
    OT: "Extra days off for OT",
    address: "Scetpa Building, 19A Cong Hoa, Ward 12, Tan Binh, Ho Chi Minh ",
    reason: [
      "Strong Management Team and Talents",
      "Attractive salary and benefits",
      "Full social insurance and PVI Healthcare Insurance The description"
    ],
    description: [
      "Will be trained and work on Oracle, Java Spring, Action Script, HTML5, AngularJs.",
      "Join one of 2 teams: Product/ Maintenance",
      "Product: new development projects",
      "Maintenance: the developed projects which related to the import and export process.The system has been operating in the US, Japan, Korea and some European countries, etc.",
      "After being clear about the purpose and meaning of the description, everyone will use the internal management system to manage and complete the work."
    ],
    skill: [
      "From 1 to 5 years experience working with a good Java programming.",
      "Able to analyze well.",
      "Good attitude and responsibility.",
      "Have good programming and programming skills.",
      " Reading and writing skill in English is good. Fluent speaking, listening is an advantage."
    ],
    why: [
      "Team building once a month.",
      "Company trip once a year.",
      "PVI healthcare insurance.",
      "Full social benefits in accordance with the company and the law of Vietnam."
    ]
  },
  {
    id: "2",
    title: "Lập trình viên C#/ C++/ SQL",
    field: ["C++", "SQL", "C#"],
    logo:
      "https://cdn.itviec.com/employers/lotte-data-communicaton-co-ltd-vietnam/logo/w170/QTY7FStyWVK9PeZk1WCijaGM/cong-ty-tnhh-truy-n-s-li-u-lotte-vi-t-nam-logo.png",
    company: "LOTTE Data Communications Company",
    people: "51-150",
    country: "Republic of Korea",
    day: "Monday - Friday",
    OT: "Extra days off for OT",
    address: "54 Lieu Giai, Ba Dinh, Ha Noi ",
    reason: [
      "Contributing your talent to develop top class",
      "Working with the latest technology stacks",
      "Full social insurance and PVI Healthcare Insurance The description"
    ],
    description: [
      "We are operating a CoreBanking system for one of Top Vietnam Bank.",
      "The developer will cooperate with managers, leaders and customers to develop, maintain and improve the CoreBanking product",
      "The developer will have chances to learn & understand banking business and CoreBanking architecture as well"
    ],
    skill: [
      "Graduate from IT University or similar",
      "Have experience in C, C++",
      "Welcome over 6 months experience candidates.",
      "Have enthusiastic attitude to work closely with team"
    ],
    why: [
      "13th month salary.",
      "Flexible and rewarding review policy for outstanding contributions.",
      "Dedicated budget for staff training: technical, soft skills, English, Korean classes."
    ]
  },
  {
    id: "3",
    title: "Senior Ruby on Rails Developer",
    field: ["CSS", "Python", "Ruby on Rails"],
    logo:
      "https://cdn.itviec.com/employers/itviec/logo/w170/9nw8pdWXYKK1D4bv2FNAcf9h/itviec-logo.jpg",
    company: "ITviec",
    people: "1-50",
    country: "United States",
    day: "Monday - Friday",
    OT: "No OT",
    address: "105 Lang Ha, Dong Da, Ha Noi  ",
    reason: ["No OT - ever!", "iMac", "Small team"],
    description: [
      "As Senior Developer Ruby on Rails you will help build and scale the coolest and best description website in Vietnam. In doing so you will help IT people in Vietnam grow their careers, build great things and maybe even change the world.",
      "The developer will cooperate with managers, leaders and customers to develop, maintain and improve the CoreBanking product"
    ],
    skill: [
      "Minimum 2 years experience coding web applications in Ruby on Rails",
      "Scrum and sprint experience",
      "Demonstrated experience solving coding problems. Tell us a story about a problem you solved."
    ],
    why: [
      " We have a fun, Silicon Valley style startup culture that values openness, fun, and awesomeness. We call our employees VIPs because each of our people is a Very Important Person."
    ]
  },
  {
    id: "4",
    title: "Android Developer (Java)",
    field: ["Java", "Android"],
    logo:
      "https://cdn.itviec.com/employers/vnpay/logo/w170/Geh2eFrtLTL1xk7t7edjUKVS/vnpay-logo.jpg",
    company: "VNPAY",
    people: "501-1000",
    country: "VietNam",
    day: "Monday - Friday",
    OT: "Extra salary for OT",
    address: " 22 Láng Hạ, Dong Da, Ha Noi   ",
    reason: [
      "Chế độ đãi ngộ, phúc lợi hấp dẫn",
      "Cơ hội thăng tiến, phát triển trong công việc",
      "Môi trường thân thiện, trẻ trung, sáng tạo"
    ],
    description: [
      "Xây dựng các ứng dụng liên quan đến các mảng tài chính",
      "Nghiên cứu, tìm kiếm giải pháp về việc áp dụng các tính năng của thiết bị di động vào mảng tài chính",
      "Duy trì, hỗ trợ, nâng cấp các ứng dụng dịch vụ đã phát triển của công ty"
    ],
    skill: [
      "Tốt nghiệp Đại học, cao đẳng chuyên ngành Công nghệ thông tin, Công nghệ phần mềm",
      "Kiến thức cơ bản và tư duy về Java, lập trình Android, lập trình hướng đối tượng",
      "Có hiểu biết về kiến trúc công nghệ, ứng dụng và mô hình phát triển cho nền tảng hệ điều hành Android",
      "Có khả năng nghiên cứu, làm việc độc lập và phối hợp làm việc nhóm (khả năng tương tác và kỹ năng trao đổi trong nhóm)."
    ],
    why: [
      "Làm việc tại top 50 doanh nghiệp CNTT lớn nhất tại Việt Nam, top 10 doanh nghiệp có năng lực công nghệ 4.0 tiêu biểu. Một trong số ít công ty được kết nạp vào Hiệp hội ngân hàng Việt Nam. Công ty đạt doanh thu cao và không ngừng tăng trưởng hàng năm với các dịch vụ tiên phong trong lĩnh vực thanh toán điện tử tại Việt Nam.",
      "Mức lương và chế độ phúc lợi hấp dẫn thiết thực. Nhiều khoản thưởng dịp Lễ Tết, thưởng theo dự án hấp dẫn + lương tháng 13."
    ]
  },
  {
    id: "5",
    title: "ReactJS Developer (JavaScript, CSS)",
    field: ["CSS", "Javascript", "ReactJS"],
    logo:
      "https://cdn.itviec.com/employers/mobix/logo/w170/iZXNpGKf5RyvmzKLx5duQVdo/mobix-logo-2.pnghttps://cdn.itviec.com/employers/mobix/logo/w170/iZXNpGKf5RyvmzKLx5duQVdo/mobix-logo-2.png",
    company: "Mobix",
    people: "1-50",
    country: "VietNam",
    day: "Monday - Friday",
    OT: "No OT",
    address: " Tầng 3 tòa nhà Tây Hà - 19 Tố Hữu, Nam Tu Liem, Ha Noi  ",
    reason: [
      "Chế độ đãi ngộ, phúc lợi hấp dẫn",
      "Cơ hội thăng tiến, phát triển trong công việc",
      "Môi trường thân thiện, trẻ trung, sáng tạo"
    ],
    description: [
      "Phát triển các sản phẩm đa nền tảng: Web, Mobile, Desktop...",
      "Tham gia phát triển phần mềm theo quy trình Agile/ Scrum",
      "Nghiên cứu và áp dụng các công nghệ mới nhằm tối ưu cho sản phẩm."
    ],
    skill: [
      "Tốt nghiệp chuyên ngành Công nghệ thông tin, Khoa học máy tính… hoặc có kinh nghiệm thực tiễn tương đương",
      "Có tối thiểu 1 năm kinh nghiệm làm việc với React JS",
      "Có kinh nghiệm làm việc với Java Script, React",
      "Sử dụng tốt HTML, CSS",
      "Có tinh thần học hỏi và nâng cao trình độ bản thân",
      "Có khả năng phối hợp nhóm tốt."
    ],
    why: [
      "Mức lương khởi điểm có thể lên đến $2000, có thể nhận thêm doanh thu hiệu quả từ các sản phẩm mang lại.",
      "Review lương ít nhất 01 lần mỗi năm",
      "Lương tháng 13",
      "Được hưởng Bảo hiểm xã hội, Bảo hiểm y tế, Bảo hiểm thất nghiệp theo chế độ nhà nước ban hành."
    ]
  },
  {
    id: "6",
    title: "ReactJS Developer (JavaScript, CSS)",
    field: ["CSS", "Javascript", "ReactJS"],
    logo:
      "https://cdn.itviec.com/employers/mobix/logo/w170/iZXNpGKf5RyvmzKLx5duQVdo/mobix-logo-2.pnghttps://cdn.itviec.com/employers/mobix/logo/w170/iZXNpGKf5RyvmzKLx5duQVdo/mobix-logo-2.png",
    company: "Mobix",
    people: "1-50",
    country: "VietNam",
    day: "Monday - Friday",
    OT: "No OT",
    address: " Tầng 3 tòa nhà Tây Hà - 19 Tố Hữu, Nam Tu Liem, Ha Noi  ",
    reason: [
      "Chế độ đãi ngộ, phúc lợi hấp dẫn",
      "Cơ hội thăng tiến, phát triển trong công việc",
      "Môi trường thân thiện, trẻ trung, sáng tạo"
    ],
    description: [
      "Phát triển các sản phẩm đa nền tảng: Web, Mobile, Desktop...",
      "Tham gia phát triển phần mềm theo quy trình Agile/ Scrum",
      "Nghiên cứu và áp dụng các công nghệ mới nhằm tối ưu cho sản phẩm."
    ],
    skill: [
      "Tốt nghiệp chuyên ngành Công nghệ thông tin, Khoa học máy tính… hoặc có kinh nghiệm thực tiễn tương đương",
      "Có tối thiểu 1 năm kinh nghiệm làm việc với React JS",
      "Có kinh nghiệm làm việc với Java Script, React",
      "Sử dụng tốt HTML, CSS",
      "Có tinh thần học hỏi và nâng cao trình độ bản thân",
      "Có khả năng phối hợp nhóm tốt."
    ],
    why: [
      "Mức lương khởi điểm có thể lên đến $2000, có thể nhận thêm doanh thu hiệu quả từ các sản phẩm mang lại.",
      "Review lương ít nhất 01 lần mỗi năm",
      "Lương tháng 13",
      "Được hưởng Bảo hiểm xã hội, Bảo hiểm y tế, Bảo hiểm thất nghiệp theo chế độ nhà nước ban hành."
    ]
  },
  {
    id: "7",
    title: "10+ Java Developer (1-5 year experience)",
    field: ["Javascript", "SQL", "Java"],
    logo:
      "https://cdn.itviec.com/employers/cyberlogitec-vietnam-co-ltd/logo/w170/bk4RzRcCWDcqoxv3kzLBgbFc/Logo%20CyberLogitec%20VN.png",
    company: "CyberLogitec Vietnam",
    people: "301-500",
    country: "Republic of Korea",
    day: "Monday - Friday",
    OT: "Extra days off for OT",
    address: "Scetpa Building, 19A Cong Hoa, Ward 12, Tan Binh, Ho Chi Minh ",
    reason: [
      "Strong Management Team and Talents",
      "Attractive salary and benefits",
      "Full social insurance and PVI Healthcare Insurance The description"
    ],
    description: [
      "Will be trained and work on Oracle, Java Spring, Action Script, HTML5, AngularJs.",
      "Join one of 2 teams: Product/ Maintenance",
      "Product: new development projects",
      "Maintenance: the developed projects which related to the import and export process.The system has been operating in the US, Japan, Korea and some European countries, etc.",
      "After being clear about the purpose and meaning of the description, everyone will use the internal management system to manage and complete the work."
    ],
    skill: [
      "From 1 to 5 years experience working with a good Java programming.",
      "Able to analyze well.",
      "Good attitude and responsibility.",
      "Have good programming and programming skills.",
      " Reading and writing skill in English is good. Fluent speaking, listening is an advantage."
    ],
    why: [
      "Team building once a month.",
      "Company trip once a year.",
      "PVI healthcare insurance.",
      "Full social benefits in accordance with the company and the law of Vietnam."
    ]
  },
  {
    id: "8",
    title: "Lập trình viên C#/ C++/ SQL",
    field: ["C++", "SQL", "C#"],
    logo:
      "https://cdn.itviec.com/employers/lotte-data-communicaton-co-ltd-vietnam/logo/w170/QTY7FStyWVK9PeZk1WCijaGM/cong-ty-tnhh-truy-n-s-li-u-lotte-vi-t-nam-logo.png",
    company: "LOTTE Data Communications Company",
    people: "51-150",
    country: "Republic of Korea",
    day: "Monday - Friday",
    OT: "Extra days off for OT",
    address: "54 Lieu Giai, Ba Dinh, Ha Noi ",
    reason: [
      "Contributing your talent to develop top class",
      "Working with the latest technology stacks",
      "Full social insurance and PVI Healthcare Insurance The description"
    ],
    description: [
      "We are operating a CoreBanking system for one of Top Vietnam Bank.",
      "The developer will cooperate with managers, leaders and customers to develop, maintain and improve the CoreBanking product",
      "The developer will have chances to learn & understand banking business and CoreBanking architecture as well"
    ],
    skill: [
      "Graduate from IT University or similar",
      "Have experience in C, C++",
      "Welcome over 6 months experience candidates.",
      "Have enthusiastic attitude to work closely with team"
    ],
    why: [
      "13th month salary.",
      "Flexible and rewarding review policy for outstanding contributions.",
      "Dedicated budget for staff training: technical, soft skills, English, Korean classes."
    ]
  },
  {
    id: "9",
    title: "Senior Ruby on Rails Developer",
    field: ["CSS", "Python", "Ruby on Rails"],
    logo:
      "https://cdn.itviec.com/employers/itviec/logo/w170/9nw8pdWXYKK1D4bv2FNAcf9h/itviec-logo.jpg",
    company: "ITviec",
    people: "1-50",
    country: "United States",
    day: "Monday - Friday",
    OT: "No OT",
    address: "105 Lang Ha, Dong Da, Ha Noi  ",
    reason: ["No OT - ever!", "iMac", "Small team"],
    description: [
      "As Senior Developer Ruby on Rails you will help build and scale the coolest and best description website in Vietnam. In doing so you will help IT people in Vietnam grow their careers, build great things and maybe even change the world.",
      "The developer will cooperate with managers, leaders and customers to develop, maintain and improve the CoreBanking product"
    ],
    skill: [
      "Minimum 2 years experience coding web applications in Ruby on Rails",
      "Scrum and sprint experience",
      "Demonstrated experience solving coding problems. Tell us a story about a problem you solved."
    ],
    why: [
      " We have a fun, Silicon Valley style startup culture that values openness, fun, and awesomeness. We call our employees VIPs because each of our people is a Very Important Person."
    ]
  },
  {
    id: "10",
    title: "Android Developer (Java)",
    field: ["Java", "Android"],
    logo:
      "https://cdn.itviec.com/employers/vnpay/logo/w170/Geh2eFrtLTL1xk7t7edjUKVS/vnpay-logo.jpg",
    company: "VNPAY",
    people: "501-1000",
    country: "VietNam",
    day: "Monday - Friday",
    OT: "Extra salary for OT",
    address: " 22 Láng Hạ, Dong Da, Ha Noi   ",
    reason: [
      "Chế độ đãi ngộ, phúc lợi hấp dẫn",
      "Cơ hội thăng tiến, phát triển trong công việc",
      "Môi trường thân thiện, trẻ trung, sáng tạo"
    ],
    description: [
      "Xây dựng các ứng dụng liên quan đến các mảng tài chính",
      "Nghiên cứu, tìm kiếm giải pháp về việc áp dụng các tính năng của thiết bị di động vào mảng tài chính",
      "Duy trì, hỗ trợ, nâng cấp các ứng dụng dịch vụ đã phát triển của công ty"
    ],
    skill: [
      "Tốt nghiệp Đại học, cao đẳng chuyên ngành Công nghệ thông tin, Công nghệ phần mềm",
      "Kiến thức cơ bản và tư duy về Java, lập trình Android, lập trình hướng đối tượng",
      "Có hiểu biết về kiến trúc công nghệ, ứng dụng và mô hình phát triển cho nền tảng hệ điều hành Android",
      "Có khả năng nghiên cứu, làm việc độc lập và phối hợp làm việc nhóm (khả năng tương tác và kỹ năng trao đổi trong nhóm)."
    ],
    why: [
      "Làm việc tại top 50 doanh nghiệp CNTT lớn nhất tại Việt Nam, top 10 doanh nghiệp có năng lực công nghệ 4.0 tiêu biểu. Một trong số ít công ty được kết nạp vào Hiệp hội ngân hàng Việt Nam. Công ty đạt doanh thu cao và không ngừng tăng trưởng hàng năm với các dịch vụ tiên phong trong lĩnh vực thanh toán điện tử tại Việt Nam.",
      "Mức lương và chế độ phúc lợi hấp dẫn thiết thực. Nhiều khoản thưởng dịp Lễ Tết, thưởng theo dự án hấp dẫn + lương tháng 13."
    ]
  }
];
var rootReducer = (state = jobs, action) => {
  switch (action.type) {
    case types.SHOW_JOB:
      return state;
    case types.ADD_JOB:
      var id = state.length.toString();
      var newjob = {
        id: id,
        title: action.job.title,
        field: action.job.field.split(","),
        company: action.job.company,
        logo: action.job.logo,
        description: action.job.description.split(",")
      };
      state.unshift(newjob);
      return state;
    case types.JOB_DETAIL:
      var newstate = [];
      newstate = state.filter(ele => ele.id == action.id);
      state = newstate;
      return state;
    case types.FILTER_COUNTRY:
      var newstate = [];
      newstate = state.filter(ele => ele.country == action.country);
      [...state] = newstate;
      return [...state];
    case types.FILTER_FIELD:
      var newstate = [];
      newstate = state.filter(ele => ele.field.indexOf(action.field) != -1);
      [...state] = newstate;
      return [...state];
    default:
      return state;
  }
};
export default rootReducer;
