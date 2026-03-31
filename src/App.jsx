import { useMemo, useState } from "react";

const epnImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAAQAElEQVR4Aey9B5Ak13nn+dKWN93VXe29996OxcAQIClpddjbXe1taPdi9zbuLuI2YiN0cdTq0d3dVXVnTqYfAecjIyMrLvp3+1Vv7wJ7n5+I5yK0eO/7w9v9z8v9r8rVb7m2vP3j8w5f9x+4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly48P8g0v3m0k+XgN3mY5x8m6v7v6dPnz5//vy5f/78+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz9f9e8AAAD//6r3lP0AAABJRU5ErkJggg==";
const epjImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAAQAElEQVR4Aey9B5Ak13nn+dKWN93VXe29996OxcAQIClpddjbXe1taPdi9zbuLuI2YiN0cdTq0d3dVXVnTqYfAecjIyMrLvp3+1Vv7wJ7n5+I5yK0eO/7w9v9z8v9r8rVb7m2vP3j8w5f9x+4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly4cOHChQsXLly48P8g0v3m0k+XgN3mY5x8m6v7v6dPnz5//vy5f/78+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz///PPPP//8+fPnzz9f9e8AAAD//6r3lP0AAABJRU5ErkJggg==";
const swfImage = "/swf.png";

const company = {
  name: "Công ty TNHH Linh kiện và Giải pháp khuôn mẫu ONC",
  english: "ONC Components & Mold Solution",
  email: "onc.components@gmail.com",
  phones: ["0387356896", "0343632506"],
  address: "101/55/46 Lạch Chay, Lê Chân, Hải Phòng",
};

const services = [
  {
    title: "Ejector Pin EPN",
    desc: "Cung cấp ejector pin mã EPN với nhiều quy cách P-L, đáp ứng nhu cầu thay thế và vận hành ổn định trong khuôn mẫu.",
    icon: "⚙️",
  },
  {
    title: "Ejector Pin EPJ",
    desc: "Cung cấp ejector pin mã EPJ với nhiều quy cách P-L, phù hợp cho nhu cầu thay thế, đồng bộ và vận hành trong khuôn mẫu.",
    icon: "🛠️",
  },
  {
    title: "Spring SWF",
    desc: "Bổ sung dòng lò xo khuôn mẫu SWF với thiết kế chuyên dụng cho nhu cầu đàn hồi, hỗ trợ vận hành ổn định trong khuôn.",
    icon: "🌀",
  },
];

const strengths = [
  { value: "Chính xác", label: "Linh kiện đáp ứng yêu cầu kỹ thuật" },
  { value: "Ổn định", label: "Hỗ trợ sản xuất bền vững" },
  { value: "Nhanh chóng", label: "Tư vấn và phản hồi kịp thời" },
  { value: "Tin cậy", label: "Đồng hành cùng khách hàng doanh nghiệp" },
];

const applications = [
  {
    name: "Linh kiện tiêu chuẩn cho khuôn mẫu",
    type: "Cung cấp sản phẩm",
    desc: "Phù hợp cho các nhà máy, xưởng cơ khí và doanh nghiệp cần nguồn linh kiện ổn định, chất lượng cao.",
  },
  {
    name: "Giải pháp thay thế và đồng bộ",
    type: "Tư vấn kỹ thuật",
    desc: "Hỗ trợ lựa chọn linh kiện thay thế tương thích, giúp tối ưu chi phí và hạn chế gián đoạn sản xuất.",
  },
  {
    name: "Hỗ trợ cho hệ thống sản xuất",
    type: "Đồng hành vận hành",
    desc: "Tư vấn giải pháp phù hợp với yêu cầu thực tế, nâng cao hiệu quả sử dụng trong môi trường công nghiệp.",
  },
];

const epnRows = [{"catalogNo":"EPN1.0-100","p":1.0,"l":100},{"catalogNo":"EPN1.0-150","p":1.0,"l":150},{"catalogNo":"EPN1.1-100","p":1.1,"l":100},{"catalogNo":"EPN1.1-150","p":1.1,"l":150},{"catalogNo":"EPN1.2-100","p":1.2,"l":100},{"catalogNo":"EPN1.2-150","p":1.2,"l":150},{"catalogNo":"EPN1.3-100","p":1.3,"l":100},{"catalogNo":"EPN1.3-150","p":1.3,"l":150},{"catalogNo":"EPN1.4-100","p":1.4,"l":100},{"catalogNo":"EPN1.4-150","p":1.4,"l":150},{"catalogNo":"EPN1.5-100","p":1.5,"l":100},{"catalogNo":"EPN1.5-150","p":1.5,"l":150},{"catalogNo":"EPN1.5-200","p":1.5,"l":200},{"catalogNo":"EPN1.6-100","p":1.6,"l":100},{"catalogNo":"EPN1.6-150","p":1.6,"l":150},{"catalogNo":"EPN1.6-200","p":1.6,"l":200},{"catalogNo":"EPN1.7-100","p":1.7,"l":100},{"catalogNo":"EPN1.7-150","p":1.7,"l":150},{"catalogNo":"EPN1.7-200","p":1.7,"l":200},{"catalogNo":"EPN1.8-100","p":1.8,"l":100},{"catalogNo":"EPN1.8-150","p":1.8,"l":150},{"catalogNo":"EPN1.8-200","p":1.8,"l":200},{"catalogNo":"EPN1.9-100","p":1.9,"l":100},{"catalogNo":"EPN1.9-150","p":1.9,"l":150},{"catalogNo":"EPN1.9-200","p":1.9,"l":200},{"catalogNo":"EPN2.0-100","p":2.0,"l":100},{"catalogNo":"EPN2.0-150","p":2.0,"l":150},{"catalogNo":"EPN2.0-200","p":2.0,"l":200},{"catalogNo":"EPN2.0-250","p":2.0,"l":250},{"catalogNo":"EPN2.0-300","p":2.0,"l":300},{"catalogNo":"EPN2.0-350","p":2.0,"l":350},{"catalogNo":"EPN2.0-400","p":2.0,"l":400},{"catalogNo":"EPN2.1-100","p":2.1,"l":100},{"catalogNo":"EPN2.1-150","p":2.1,"l":150},{"catalogNo":"EPN2.1-200","p":2.1,"l":200},{"catalogNo":"EPN2.1-250","p":2.1,"l":250},{"catalogNo":"EPN2.1-300","p":2.1,"l":300},{"catalogNo":"EPN2.2-100","p":2.2,"l":100},{"catalogNo":"EPN2.2-150","p":2.2,"l":150},{"catalogNo":"EPN2.2-200","p":2.2,"l":200},{"catalogNo":"EPN2.2-250","p":2.2,"l":250},{"catalogNo":"EPN2.2-300","p":2.2,"l":300},{"catalogNo":"EPN2.3-100","p":2.3,"l":100},{"catalogNo":"EPN2.3-150","p":2.3,"l":150},{"catalogNo":"EPN2.3-200","p":2.3,"l":200},{"catalogNo":"EPN2.3-250","p":2.3,"l":250},{"catalogNo":"EPN2.3-300","p":2.3,"l":300},{"catalogNo":"EPN2.4-100","p":2.4,"l":100},{"catalogNo":"EPN2.4-150","p":2.4,"l":150},{"catalogNo":"EPN2.4-200","p":2.4,"l":200},{"catalogNo":"EPN2.4-250","p":2.4,"l":250},{"catalogNo":"EPN2.4-300","p":2.4,"l":300},{"catalogNo":"EPN2.5-100","p":2.5,"l":100},{"catalogNo":"EPN2.5-150","p":2.5,"l":150},{"catalogNo":"EPN2.5-200","p":2.5,"l":200},{"catalogNo":"EPN2.5-250","p":2.5,"l":250},{"catalogNo":"EPN2.5-300","p":2.5,"l":300},{"catalogNo":"EPN2.5-350","p":2.5,"l":350},{"catalogNo":"EPN2.5-400","p":2.5,"l":400},{"catalogNo":"EPN2.6-100","p":2.6,"l":100},{"catalogNo":"EPN2.6-150","p":2.6,"l":150},{"catalogNo":"EPN2.6-200","p":2.6,"l":200},{"catalogNo":"EPN2.6-250","p":2.6,"l":250},{"catalogNo":"EPN2.6-300","p":2.6,"l":300},{"catalogNo":"EPN2.7-100","p":2.7,"l":100},{"catalogNo":"EPN2.7-150","p":2.7,"l":150},{"catalogNo":"EPN2.7-200","p":2.7,"l":200},{"catalogNo":"EPN2.7-250","p":2.7,"l":250},{"catalogNo":"EPN2.7-300","p":2.7,"l":300},{"catalogNo":"EPN2.8-100","p":2.8,"l":100},{"catalogNo":"EPN2.8-150","p":2.8,"l":150},{"catalogNo":"EPN2.8-200","p":2.8,"l":200},{"catalogNo":"EPN2.8-250","p":2.8,"l":250},{"catalogNo":"EPN2.8-300","p":2.8,"l":300},{"catalogNo":"EPN2.9-100","p":2.9,"l":100},{"catalogNo":"EPN2.9-150","p":2.9,"l":150},{"catalogNo":"EPN2.9-200","p":2.9,"l":200},{"catalogNo":"EPN2.9-250","p":2.9,"l":250},{"catalogNo":"EPN2.9-300","p":2.9,"l":300},{"catalogNo":"EPN3.0-100","p":3.0,"l":100},{"catalogNo":"EPN3.0-150","p":3.0,"l":150},{"catalogNo":"EPN3.0-200","p":3.0,"l":200},{"catalogNo":"EPN3.0-250","p":3.0,"l":250},{"catalogNo":"EPN3.0-300","p":3.0,"l":300},{"catalogNo":"EPN3.0-350","p":3.0,"l":350},{"catalogNo":"EPN3.0-400","p":3.0,"l":400},{"catalogNo":"EPN3.0-450","p":3.0,"l":450},{"catalogNo":"EPN3.0-500","p":3.0,"l":500},{"catalogNo":"EPN3.1-100","p":3.1,"l":100},{"catalogNo":"EPN3.1-150","p":3.1,"l":150},{"catalogNo":"EPN3.1-200","p":3.1,"l":200},{"catalogNo":"EPN3.1-250","p":3.1,"l":250},{"catalogNo":"EPN3.1-300","p":3.1,"l":300},{"catalogNo":"EPN3.1-350","p":3.1,"l":350},{"catalogNo":"EPN3.1-400","p":3.1,"l":400},{"catalogNo":"EPN3.2-100","p":3.2,"l":100},{"catalogNo":"EPN3.2-150","p":3.2,"l":150},{"catalogNo":"EPN3.2-200","p":3.2,"l":200},{"catalogNo":"EPN3.2-250","p":3.2,"l":250},{"catalogNo":"EPN3.2-300","p":3.2,"l":300},{"catalogNo":"EPN3.2-350","p":3.2,"l":350},{"catalogNo":"EPN3.2-400","p":3.2,"l":400},{"catalogNo":"EPN3.3-100","p":3.3,"l":100},{"catalogNo":"EPN3.3-150","p":3.3,"l":150},{"catalogNo":"EPN3.3-200","p":3.3,"l":200},{"catalogNo":"EPN3.3-250","p":3.3,"l":250},{"catalogNo":"EPN3.3-300","p":3.3,"l":300},{"catalogNo":"EPN3.3-350","p":3.3,"l":350},{"catalogNo":"EPN3.3-400","p":3.3,"l":400},{"catalogNo":"EPN3.4-100","p":3.4,"l":100},{"catalogNo":"EPN3.4-150","p":3.4,"l":150},{"catalogNo":"EPN3.4-200","p":3.4,"l":200},{"catalogNo":"EPN3.4-250","p":3.4,"l":250},{"catalogNo":"EPN3.4-300","p":3.4,"l":300},{"catalogNo":"EPN3.4-350","p":3.4,"l":350},{"catalogNo":"EPN3.4-400","p":3.4,"l":400},{"catalogNo":"EPN3.5-100","p":3.5,"l":100},{"catalogNo":"EPN3.5-150","p":3.5,"l":150},{"catalogNo":"EPN3.5-200","p":3.5,"l":200},{"catalogNo":"EPN3.5-250","p":3.5,"l":250},{"catalogNo":"EPN3.5-300","p":3.5,"l":300},{"catalogNo":"EPN3.5-350","p":3.5,"l":350},{"catalogNo":"EPN3.5-400","p":3.5,"l":400},{"catalogNo":"EPN3.5-450","p":3.5,"l":450},{"catalogNo":"EPN3.5-500","p":3.5,"l":500},{"catalogNo":"EPN3.6-100","p":3.6,"l":100},{"catalogNo":"EPN3.6-150","p":3.6,"l":150},{"catalogNo":"EPN3.6-200","p":3.6,"l":200},{"catalogNo":"EPN3.6-250","p":3.6,"l":250},{"catalogNo":"EPN3.6-300","p":3.6,"l":300},{"catalogNo":"EPN3.6-350","p":3.6,"l":350},{"catalogNo":"EPN3.6-400","p":3.6,"l":400},{"catalogNo":"EPN3.7-100","p":3.7,"l":100},{"catalogNo":"EPN3.7-150","p":3.7,"l":150},{"catalogNo":"EPN3.7-200","p":3.7,"l":200},{"catalogNo":"EPN3.7-250","p":3.7,"l":250},{"catalogNo":"EPN3.7-300","p":3.7,"l":300},{"catalogNo":"EPN3.7-350","p":3.7,"l":350},{"catalogNo":"EPN3.7-400","p":3.7,"l":400},{"catalogNo":"EPN3.8-100","p":3.8,"l":100},{"catalogNo":"EPN3.8-150","p":3.8,"l":150},{"catalogNo":"EPN3.8-200","p":3.8,"l":200},{"catalogNo":"EPN3.8-250","p":3.8,"l":250},{"catalogNo":"EPN3.8-300","p":3.8,"l":300},{"catalogNo":"EPN3.8-350","p":3.8,"l":350},{"catalogNo":"EPN3.8-400","p":3.8,"l":400},{"catalogNo":"EPN3.9-100","p":3.9,"l":100},{"catalogNo":"EPN3.9-150","p":3.9,"l":150},{"catalogNo":"EPN3.9-200","p":3.9,"l":200},{"catalogNo":"EPN3.9-250","p":3.9,"l":250},{"catalogNo":"EPN3.9-300","p":3.9,"l":300},{"catalogNo":"EPN3.9-350","p":3.9,"l":350},{"catalogNo":"EPN3.9-400","p":3.9,"l":400},{"catalogNo":"EPN4.0-100","p":4.0,"l":100},{"catalogNo":"EPN4.0-150","p":4.0,"l":150},{"catalogNo":"EPN4.0-200","p":4.0,"l":200},{"catalogNo":"EPN4.0-250","p":4.0,"l":250},{"catalogNo":"EPN4.0-300","p":4.0,"l":300},{"catalogNo":"EPN4.0-350","p":4.0,"l":350},{"catalogNo":"EPN4.0-400","p":4.0,"l":400},{"catalogNo":"EPN4.1-200","p":4.1,"l":200},{"catalogNo":"EPN4.1-300","p":4.1,"l":300},{"catalogNo":"EPN4.1-400","p":4.1,"l":400},{"catalogNo":"EPN4.2-200","p":4.2,"l":200},{"catalogNo":"EPN4.2-300","p":4.2,"l":300},{"catalogNo":"EPN4.2-400","p":4.2,"l":400},{"catalogNo":"EPN4.3-200","p":4.3,"l":200},{"catalogNo":"EPN4.3-300","p":4.3,"l":300},{"catalogNo":"EPN4.3-400","p":4.3,"l":400},{"catalogNo":"EPN4.4-200","p":4.4,"l":200},{"catalogNo":"EPN4.4-300","p":4.4,"l":300},{"catalogNo":"EPN4.4-400","p":4.4,"l":400},{"catalogNo":"EPN4.5-100","p":4.5,"l":100},{"catalogNo":"EPN4.5-150","p":4.5,"l":150},{"catalogNo":"EPN4.5-200","p":4.5,"l":200},{"catalogNo":"EPN4.5-250","p":4.5,"l":250},{"catalogNo":"EPN4.5-300","p":4.5,"l":300},{"catalogNo":"EPN4.5-350","p":4.5,"l":350},{"catalogNo":"EPN4.5-400","p":4.5,"l":400},{"catalogNo":"EPN4.6-200","p":4.6,"l":200},{"catalogNo":"EPN4.6-300","p":4.6,"l":300},{"catalogNo":"EPN4.6-400","p":4.6,"l":400},{"catalogNo":"EPN4.7-200","p":4.7,"l":200},{"catalogNo":"EPN4.7-300","p":4.7,"l":300},{"catalogNo":"EPN4.7-400","p":4.7,"l":400},{"catalogNo":"EPN4.8-200","p":4.8,"l":200},{"catalogNo":"EPN4.8-300","p":4.8,"l":300},{"catalogNo":"EPN4.8-400","p":4.8,"l":400},{"catalogNo":"EPN4.9-200","p":4.9,"l":200},{"catalogNo":"EPN4.9-300","p":4.9,"l":300},{"catalogNo":"EPN4.9-400","p":4.9,"l":400},{"catalogNo":"EPN5.0-100","p":5.0,"l":100},{"catalogNo":"EPN5.0-150","p":5.0,"l":150},{"catalogNo":"EPN5.0-200","p":5.0,"l":200},{"catalogNo":"EPN5.0-250","p":5.0,"l":250},{"catalogNo":"EPN5.0-300","p":5.0,"l":300},{"catalogNo":"EPN5.0-350","p":5.0,"l":350},{"catalogNo":"EPN5.0-400","p":5.0,"l":400},{"catalogNo":"EPN5.0-500","p":5.0,"l":500},{"catalogNo":"EPN5.1-200","p":5.1,"l":200},{"catalogNo":"EPN5.1-300","p":5.1,"l":300},{"catalogNo":"EPN5.1-400","p":5.1,"l":400},{"catalogNo":"EPN5.2-200","p":5.2,"l":200},{"catalogNo":"EPN5.2-300","p":5.2,"l":300},{"catalogNo":"EPN5.2-400","p":5.2,"l":400},{"catalogNo":"EPN5.3-200","p":5.3,"l":200},{"catalogNo":"EPN5.3-300","p":5.3,"l":300},{"catalogNo":"EPN5.3-400","p":5.3,"l":400},{"catalogNo":"EPN5.4-200","p":5.4,"l":200},{"catalogNo":"EPN5.4-300","p":5.4,"l":300},{"catalogNo":"EPN5.4-400","p":5.4,"l":400},{"catalogNo":"EPN5.5-100","p":5.5,"l":100},{"catalogNo":"EPN5.5-150","p":5.5,"l":150},{"catalogNo":"EPN5.5-200","p":5.5,"l":200},{"catalogNo":"EPN5.5-250","p":5.5,"l":250},{"catalogNo":"EPN5.5-300","p":5.5,"l":300},{"catalogNo":"EPN5.5-350","p":5.5,"l":350},{"catalogNo":"EPN5.5-400","p":5.5,"l":400},{"catalogNo":"EPN5.5-500","p":5.5,"l":500},{"catalogNo":"EPN5.6-200","p":5.6,"l":200},{"catalogNo":"EPN5.6-300","p":5.6,"l":300},{"catalogNo":"EPN5.6-400","p":5.6,"l":400},{"catalogNo":"EPN5.7-200","p":5.7,"l":200},{"catalogNo":"EPN5.7-300","p":5.7,"l":300},{"catalogNo":"EPN5.7-400","p":5.7,"l":400},{"catalogNo":"EPN5.8-200","p":5.8,"l":200},{"catalogNo":"EPN5.8-300","p":5.8,"l":300},{"catalogNo":"EPN5.8-400","p":5.8,"l":400},{"catalogNo":"EPN5.9-200","p":5.9,"l":200},{"catalogNo":"EPN5.9-300","p":5.9,"l":300},{"catalogNo":"EPN5.9-400","p":5.9,"l":400},{"catalogNo":"EPN13.0-100","p":13.0,"l":100},{"catalogNo":"EPN13.0-150","p":13.0,"l":150},{"catalogNo":"EPN13.0-200","p":13.0,"l":200},{"catalogNo":"EPN13.0-250","p":13.0,"l":250},{"catalogNo":"EPN13.0-300","p":13.0,"l":300},{"catalogNo":"EPN13.0-350","p":13.0,"l":350},{"catalogNo":"EPN13.0-400","p":13.0,"l":400},{"catalogNo":"EPN13.0-500","p":13.0,"l":500}];
const epjRows = [{"catalogNo":"EPJ4-100","p":4.0,"l":100},{"catalogNo":"EPJ4-150","p":4.0,"l":150},{"catalogNo":"EPJ4-200","p":4.0,"l":200},{"catalogNo":"EPJ4-250","p":4.0,"l":250},{"catalogNo":"EPJ4-300","p":4.0,"l":300},{"catalogNo":"EPJ5-100","p":5.0,"l":100},{"catalogNo":"EPJ5-150","p":5.0,"l":150},{"catalogNo":"EPJ5-200","p":5.0,"l":200},{"catalogNo":"EPJ5-250","p":5.0,"l":250},{"catalogNo":"EPJ5-300","p":5.0,"l":300},{"catalogNo":"EPJ5-350","p":5.0,"l":350},{"catalogNo":"EPJ6-100","p":6.0,"l":100},{"catalogNo":"EPJ6-150","p":6.0,"l":150},{"catalogNo":"EPJ6-200","p":6.0,"l":200},{"catalogNo":"EPJ6-250","p":6.0,"l":250},{"catalogNo":"EPJ6-300","p":6.0,"l":300},{"catalogNo":"EPJ6-350","p":6.0,"l":350},{"catalogNo":"EPJ6-400","p":6.0,"l":400},{"catalogNo":"EPJ6-500","p":6.0,"l":500},{"catalogNo":"EPJ6-600","p":6.0,"l":600},{"catalogNo":"EPJ6-700","p":6.0,"l":700},{"catalogNo":"EPJ6-800","p":6.0,"l":800},{"catalogNo":"EPJ6.5-100","p":6.5,"l":100},{"catalogNo":"EPJ6.5-150","p":6.5,"l":150},{"catalogNo":"EPJ6.5-200","p":6.5,"l":200},{"catalogNo":"EPJ6.5-250","p":6.5,"l":250},{"catalogNo":"EPJ6.5-300","p":6.5,"l":300},{"catalogNo":"EPJ6.5-350","p":6.5,"l":350},{"catalogNo":"EPJ6.5-400","p":6.5,"l":400},{"catalogNo":"EPJ6.5-500","p":6.5,"l":500},{"catalogNo":"EPJ6.5-600","p":6.5,"l":600},{"catalogNo":"EPJ6.5-700","p":6.5,"l":700},{"catalogNo":"EPJ7-100","p":7.0,"l":100},{"catalogNo":"EPJ7-150","p":7.0,"l":150},{"catalogNo":"EPJ7-200","p":7.0,"l":200},{"catalogNo":"EPJ7-250","p":7.0,"l":250},{"catalogNo":"EPJ7-300","p":7.0,"l":300},{"catalogNo":"EPJ7-350","p":7.0,"l":350},{"catalogNo":"EPJ7-400","p":7.0,"l":400},{"catalogNo":"EPJ7-500","p":7.0,"l":500},{"catalogNo":"EPJ7-600","p":7.0,"l":600},{"catalogNo":"EPJ7-700","p":7.0,"l":700},{"catalogNo":"EPJ7-800","p":7.0,"l":800},{"catalogNo":"EPJ7-900","p":7.0,"l":900},{"catalogNo":"EPJ7-1000","p":7.0,"l":1000},{"catalogNo":"EPJ8-100","p":8.0,"l":100},{"catalogNo":"EPJ8-150","p":8.0,"l":150},{"catalogNo":"EPJ8-200","p":8.0,"l":200},{"catalogNo":"EPJ8-250","p":8.0,"l":250},{"catalogNo":"EPJ8-300","p":8.0,"l":300},{"catalogNo":"EPJ8-350","p":8.0,"l":350},{"catalogNo":"EPJ8-400","p":8.0,"l":400},{"catalogNo":"EPJ8-450","p":8.0,"l":450},{"catalogNo":"EPJ8-500","p":8.0,"l":500},{"catalogNo":"EPJ8-600","p":8.0,"l":600},{"catalogNo":"EPJ8-700","p":8.0,"l":700},{"catalogNo":"EPJ8-800","p":8.0,"l":800},{"catalogNo":"EPJ8-900","p":8.0,"l":900},{"catalogNo":"EPJ8-1000","p":8.0,"l":1000},{"catalogNo":"EPJ10-100","p":10.0,"l":100},{"catalogNo":"EPJ10-150","p":10.0,"l":150},{"catalogNo":"EPJ10-200","p":10.0,"l":200},{"catalogNo":"EPJ10-250","p":10.0,"l":250},{"catalogNo":"EPJ10-300","p":10.0,"l":300},{"catalogNo":"EPJ10-350","p":10.0,"l":350},{"catalogNo":"EPJ10-400","p":10.0,"l":400},{"catalogNo":"EPJ10-450","p":10.0,"l":450},{"catalogNo":"EPJ10-500","p":10.0,"l":500},{"catalogNo":"EPJ10-600","p":10.0,"l":600},{"catalogNo":"EPJ10-700","p":10.0,"l":700},{"catalogNo":"EPJ10-800","p":10.0,"l":800},{"catalogNo":"EPJ10-900","p":10.0,"l":900},{"catalogNo":"EPJ10-1000","p":10.0,"l":1000},{"catalogNo":"EPJ12-100","p":12.0,"l":100},{"catalogNo":"EPJ12-150","p":12.0,"l":150},{"catalogNo":"EPJ12-200","p":12.0,"l":200},{"catalogNo":"EPJ12-250","p":12.0,"l":250},{"catalogNo":"EPJ12-300","p":12.0,"l":300},{"catalogNo":"EPJ12-350","p":12.0,"l":350},{"catalogNo":"EPJ12-400","p":12.0,"l":400},{"catalogNo":"EPJ12-450","p":12.0,"l":450},{"catalogNo":"EPJ12-500","p":12.0,"l":500},{"catalogNo":"EPJ12-600","p":12.0,"l":600},{"catalogNo":"EPJ12-700","p":12.0,"l":700},{"catalogNo":"EPJ12-800","p":12.0,"l":800},{"catalogNo":"EPJ12-900","p":12.0,"l":900},{"catalogNo":"EPJ12-1000","p":12.0,"l":1000},{"catalogNo":"EPJ15-100","p":15.0,"l":100},{"catalogNo":"EPJ15-150","p":15.0,"l":150},{"catalogNo":"EPJ15-200","p":15.0,"l":200},{"catalogNo":"EPJ15-250","p":15.0,"l":250},{"catalogNo":"EPJ15-300","p":15.0,"l":300},{"catalogNo":"EPJ15-350","p":15.0,"l":350},{"catalogNo":"EPJ15-400","p":15.0,"l":400},{"catalogNo":"EPJ15-450","p":15.0,"l":450},{"catalogNo":"EPJ15-500","p":15.0,"l":500},{"catalogNo":"EPJ15-600","p":15.0,"l":600},{"catalogNo":"EPJ15-700","p":15.0,"l":700},{"catalogNo":"EPJ15-800","p":15.0,"l":800},{"catalogNo":"EPJ15-900","p":15.0,"l":900},{"catalogNo":"EPJ15-1000","p":15.0,"l":1000},{"catalogNo":"EPJ16-100","p":16.0,"l":100},{"catalogNo":"EPJ16-150","p":16.0,"l":150},{"catalogNo":"EPJ16-200","p":16.0,"l":200},{"catalogNo":"EPJ16-250","p":16.0,"l":250},{"catalogNo":"EPJ16-300","p":16.0,"l":300},{"catalogNo":"EPJ16-350","p":16.0,"l":350},{"catalogNo":"EPJ16-400","p":16.0,"l":400},{"catalogNo":"EPJ16-500","p":16.0,"l":500},{"catalogNo":"EPJ16-600","p":16.0,"l":600},{"catalogNo":"EPJ16-700","p":16.0,"l":700},{"catalogNo":"EPJ16-800","p":16.0,"l":800},{"catalogNo":"EPJ16-900","p":16.0,"l":900},{"catalogNo":"EPJ16-1000","p":16.0,"l":1000},{"catalogNo":"EPJ20-150","p":20.0,"l":150},{"catalogNo":"EPJ20-200","p":20.0,"l":200},{"catalogNo":"EPJ20-250","p":20.0,"l":250},{"catalogNo":"EPJ20-300","p":20.0,"l":300},{"catalogNo":"EPJ20-400","p":20.0,"l":400},{"catalogNo":"EPJ20-500","p":20.0,"l":500},{"catalogNo":"EPJ20-600","p":20.0,"l":600},{"catalogNo":"EPJ20-700","p":20.0,"l":700},{"catalogNo":"EPJ20-800","p":20.0,"l":800},{"catalogNo":"EPJ20-900","p":20.0,"l":900},{"catalogNo":"EPJ20-1000","p":20.0,"l":1000},{"catalogNo":"EPJ25-200","p":25.0,"l":200},{"catalogNo":"EPJ25-300","p":25.0,"l":300},{"catalogNo":"EPJ25-400","p":25.0,"l":400},{"catalogNo":"EPJ25-500","p":25.0,"l":500},{"catalogNo":"EPJ25-600","p":25.0,"l":600},{"catalogNo":"EPJ25-700","p":25.0,"l":700},{"catalogNo":"EPJ25-800","p":25.0,"l":800},{"catalogNo":"EPJ25-900","p":25.0,"l":900},{"catalogNo":"EPJ25-1000","p":25.0,"l":1000}];
const swfRows = [{"catalogNo":"SWF6-15","D":6,"d2":3.0,"l":15,"kN":7.8,"kKgf":0.8,"f40":6.0,"load40N":47,"load40Kgf":4.8,"f45":6.8,"load45N":53,"load45Kgf":5.4,"f50":7.5,"load50N":59,"load50Kgf":6.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF6-20","D":6,"d2":3.0,"l":20,"kN":5.9,"kKgf":0.6,"f40":8.0,"load40N":47,"load40Kgf":4.8,"f45":9.0,"load45N":53,"load45Kgf":5.4,"f50":10.0,"load50N":59,"load50Kgf":6.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF6-25","D":6,"d2":3.0,"l":25,"kN":4.7,"kKgf":0.48,"f40":10.0,"load40N":47,"load40Kgf":4.8,"f45":11.3,"load45N":53,"load45Kgf":5.4,"f50":12.5,"load50N":59,"load50Kgf":6.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF6-30","D":6,"d2":3.0,"l":30,"kN":3.9,"kKgf":0.4,"f40":12.0,"load40N":47,"load40Kgf":4.8,"f45":13.5,"load45N":53,"load45Kgf":5.4,"f50":15.0,"load50N":59,"load50Kgf":6.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF6-35","D":6,"d2":3.0,"l":35,"kN":3.4,"kKgf":0.35,"f40":14.0,"load40N":48,"load40Kgf":4.9,"f45":15.8,"load45N":54,"load45Kgf":5.5,"f50":17.5,"load50N":60,"load50Kgf":6.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF6-40","D":6,"d2":3.0,"l":40,"kN":2.9,"kKgf":0.3,"f40":16.0,"load40N":46,"load40Kgf":4.7,"f45":18.0,"load45N":52,"load45Kgf":5.3,"f50":20.0,"load50N":58,"load50Kgf":5.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-10","D":8,"d2":4.0,"l":10,"kN":15.7,"kKgf":1.6,"f40":4.0,"load40N":63,"load40Kgf":6.4,"f45":4.5,"load45N":71,"load45Kgf":7.2,"f50":5.0,"load50N":79,"load50Kgf":8.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-15","D":8,"d2":4.0,"l":15,"kN":10.5,"kKgf":1.07,"f40":6.0,"load40N":63,"load40Kgf":6.4,"f45":6.8,"load45N":71,"load45Kgf":7.2,"f50":7.5,"load50N":79,"load50Kgf":8.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-20","D":8,"d2":4.0,"l":20,"kN":7.8,"kKgf":0.8,"f40":8.0,"load40N":62,"load40Kgf":6.3,"f45":9.0,"load45N":70,"load45Kgf":7.1,"f50":10.0,"load50N":78,"load50Kgf":8.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-25","D":8,"d2":4.0,"l":25,"kN":6.3,"kKgf":0.64,"f40":10.0,"load40N":63,"load40Kgf":6.4,"f45":11.3,"load45N":71,"load45Kgf":7.2,"f50":12.5,"load50N":79,"load50Kgf":8.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-30","D":8,"d2":4.0,"l":30,"kN":5.2,"kKgf":0.53,"f40":12.0,"load40N":62,"load40Kgf":6.3,"f45":13.5,"load45N":70,"load45Kgf":7.1,"f50":15.0,"load50N":78,"load50Kgf":8.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-35","D":8,"d2":4.0,"l":35,"kN":4.5,"kKgf":0.46,"f40":14.0,"load40N":63,"load40Kgf":6.4,"f45":15.8,"load45N":71,"load45Kgf":7.2,"f50":17.5,"load50N":79,"load50Kgf":8.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-40","D":8,"d2":4.0,"l":40,"kN":3.9,"kKgf":0.4,"f40":16.0,"load40N":62,"load40Kgf":6.3,"f45":18.0,"load45N":70,"load45Kgf":7.1,"f50":20.0,"load50N":78,"load50Kgf":8.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-45","D":8,"d2":4.0,"l":45,"kN":3.5,"kKgf":0.36,"f40":18.0,"load40N":63,"load40Kgf":6.4,"f45":20.3,"load45N":71,"load45Kgf":7.2,"f50":22.5,"load50N":79,"load50Kgf":8.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-50","D":8,"d2":4.0,"l":50,"kN":3.1,"kKgf":0.32,"f40":20.0,"load40N":62,"load40Kgf":6.3,"f45":22.5,"load45N":70,"load45Kgf":7.1,"f50":25.0,"load50N":78,"load50Kgf":8.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-55","D":8,"d2":4.0,"l":55,"kN":2.9,"kKgf":0.3,"f40":22.0,"load40N":64,"load40Kgf":6.5,"f45":24.8,"load45N":72,"load45Kgf":7.3,"f50":27.5,"load50N":80,"load50Kgf":8.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-60","D":8,"d2":4.0,"l":60,"kN":2.6,"kKgf":0.27,"f40":24.0,"load40N":62,"load40Kgf":6.3,"f45":27.0,"load45N":70,"load45Kgf":7.1,"f50":30.0,"load50N":78,"load50Kgf":8.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-65","D":8,"d2":4.0,"l":65,"kN":2.4,"kKgf":0.24,"f40":26.0,"load40N":62,"load40Kgf":6.3,"f45":29.3,"load45N":70,"load45Kgf":7.1,"f50":32.5,"load50N":78,"load50Kgf":8.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-70","D":8,"d2":4.0,"l":70,"kN":2.2,"kKgf":0.22,"f40":28.0,"load40N":62,"load40Kgf":6.3,"f45":31.5,"load45N":69,"load45Kgf":7.0,"f50":35.0,"load50N":77,"load50Kgf":7.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-75","D":8,"d2":4.0,"l":75,"kN":2.1,"kKgf":0.21,"f40":30.0,"load40N":63,"load40Kgf":6.4,"f45":33.8,"load45N":71,"load45Kgf":7.2,"f50":37.5,"load50N":79,"load50Kgf":8.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF8-80","D":8,"d2":4.0,"l":80,"kN":2.0,"kKgf":0.2,"f40":32.0,"load40N":64,"load40Kgf":6.5,"f45":36.0,"load45N":72,"load45Kgf":7.3,"f50":40.0,"load50N":80,"load50Kgf":8.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-10","D":10,"d2":5.0,"l":10,"kN":19.6,"kKgf":2.0,"f40":4.0,"load40N":78,"load40Kgf":8.0,"f45":4.5,"load45N":88,"load45Kgf":9.0,"f50":5.0,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-15","D":10,"d2":5.0,"l":15,"kN":13.1,"kKgf":1.34,"f40":6.0,"load40N":79,"load40Kgf":8.1,"f45":6.8,"load45N":89,"load45Kgf":9.1,"f50":7.5,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-20","D":10,"d2":5.0,"l":20,"kN":9.8,"kKgf":1.0,"f40":8.0,"load40N":78,"load40Kgf":8.0,"f45":9.0,"load45N":88,"load45Kgf":9.0,"f50":10.0,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-25","D":10,"d2":5.0,"l":25,"kN":7.8,"kKgf":0.8,"f40":10.0,"load40N":78,"load40Kgf":8.0,"f45":11.3,"load45N":88,"load45Kgf":9.0,"f50":12.5,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-30","D":10,"d2":5.0,"l":30,"kN":6.5,"kKgf":0.66,"f40":12.0,"load40N":78,"load40Kgf":8.0,"f45":13.5,"load45N":88,"load45Kgf":9.0,"f50":15.0,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-35","D":10,"d2":5.0,"l":35,"kN":5.9,"kKgf":0.6,"f40":14.0,"load40N":83,"load40Kgf":8.5,"f45":15.8,"load45N":93,"load45Kgf":9.5,"f50":17.5,"load50N":103,"load50Kgf":10.5,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-40","D":10,"d2":5.0,"l":40,"kN":4.9,"kKgf":0.5,"f40":16.0,"load40N":78,"load40Kgf":8.0,"f45":18.0,"load45N":88,"load45Kgf":9.0,"f50":20.0,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-45","D":10,"d2":5.0,"l":45,"kN":4.4,"kKgf":0.45,"f40":18.0,"load40N":79,"load40Kgf":8.1,"f45":20.3,"load45N":89,"load45Kgf":9.1,"f50":22.5,"load50N":99,"load50Kgf":10.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-50","D":10,"d2":5.0,"l":50,"kN":3.9,"kKgf":0.4,"f40":20.0,"load40N":78,"load40Kgf":8.0,"f45":22.5,"load45N":88,"load45Kgf":9.0,"f50":25.0,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-55","D":10,"d2":5.0,"l":55,"kN":3.6,"kKgf":0.37,"f40":22.0,"load40N":79,"load40Kgf":8.1,"f45":24.8,"load45N":89,"load45Kgf":9.1,"f50":27.5,"load50N":99,"load50Kgf":10.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-60","D":10,"d2":5.0,"l":60,"kN":3.3,"kKgf":0.34,"f40":24.0,"load40N":79,"load40Kgf":8.1,"f45":27.0,"load45N":89,"load45Kgf":9.1,"f50":30.0,"load50N":99,"load50Kgf":10.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-65","D":10,"d2":5.0,"l":65,"kN":3.0,"kKgf":0.31,"f40":26.0,"load40N":78,"load40Kgf":8.0,"f45":29.3,"load45N":88,"load45Kgf":9.0,"f50":32.5,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-70","D":10,"d2":5.0,"l":70,"kN":2.8,"kKgf":0.29,"f40":28.0,"load40N":78,"load40Kgf":8.0,"f45":31.5,"load45N":88,"load45Kgf":9.0,"f50":35.0,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-75","D":10,"d2":5.0,"l":75,"kN":2.6,"kKgf":0.27,"f40":30.0,"load40N":78,"load40Kgf":8.0,"f45":33.8,"load45N":88,"load45Kgf":9.0,"f50":37.5,"load50N":98,"load50Kgf":10.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-80","D":10,"d2":5.0,"l":80,"kN":2.5,"kKgf":0.25,"f40":32.0,"load40N":80,"load40Kgf":8.2,"f45":36.0,"load45N":90,"load45Kgf":9.2,"f50":40.0,"load50N":100,"load50Kgf":10.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF10-90","D":10,"d2":5.0,"l":90,"kN":2.2,"kKgf":0.22,"f40":36.0,"load40N":79,"load40Kgf":8.1,"f45":40.5,"load45N":89,"load45Kgf":9.1,"f50":45.0,"load50N":99,"load50Kgf":10.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-15","D":12,"d2":6.0,"l":15,"kN":18.3,"kKgf":1.87,"f40":6.0,"load40N":110,"load40Kgf":11.2,"f45":6.8,"load45N":124,"load45Kgf":12.6,"f50":7.5,"load50N":137,"load50Kgf":14.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-20","D":12,"d2":6.0,"l":20,"kN":13.7,"kKgf":1.4,"f40":8.0,"load40N":110,"load40Kgf":11.2,"f45":9.0,"load45N":123,"load45Kgf":12.5,"f50":10.0,"load50N":137,"load50Kgf":14.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-25","D":12,"d2":6.0,"l":25,"kN":11.0,"kKgf":1.12,"f40":10.0,"load40N":110,"load40Kgf":11.2,"f45":11.3,"load45N":124,"load45Kgf":12.6,"f50":12.5,"load50N":138,"load50Kgf":14.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-30","D":12,"d2":6.0,"l":30,"kN":9.2,"kKgf":0.94,"f40":12.0,"load40N":110,"load40Kgf":11.2,"f45":13.5,"load45N":124,"load45Kgf":12.6,"f50":15.0,"load50N":138,"load50Kgf":14.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-35","D":12,"d2":6.0,"l":35,"kN":7.8,"kKgf":0.8,"f40":14.0,"load40N":109,"load40Kgf":11.1,"f45":15.8,"load45N":123,"load45Kgf":12.5,"f50":17.5,"load50N":137,"load50Kgf":14.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-40","D":12,"d2":6.0,"l":40,"kN":6.9,"kKgf":0.7,"f40":16.0,"load40N":110,"load40Kgf":11.2,"f45":18.0,"load45N":124,"load45Kgf":12.6,"f50":20.0,"load50N":138,"load50Kgf":14.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-45","D":12,"d2":6.0,"l":45,"kN":6.1,"kKgf":0.62,"f40":18.0,"load40N":110,"load40Kgf":11.2,"f45":20.3,"load45N":124,"load45Kgf":12.6,"f50":22.5,"load50N":137,"load50Kgf":14.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-50","D":12,"d2":6.0,"l":50,"kN":5.5,"kKgf":0.56,"f40":20.0,"load40N":110,"load40Kgf":11.2,"f45":22.5,"load45N":124,"load45Kgf":12.6,"f50":25.0,"load50N":138,"load50Kgf":14.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-55","D":12,"d2":6.0,"l":55,"kN":5.0,"kKgf":0.51,"f40":22.0,"load40N":110,"load40Kgf":11.2,"f45":24.8,"load45N":124,"load45Kgf":12.6,"f50":27.5,"load50N":138,"load50Kgf":14.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-60","D":12,"d2":6.0,"l":60,"kN":4.6,"kKgf":0.47,"f40":24.0,"load40N":110,"load40Kgf":11.2,"f45":27.0,"load45N":124,"load45Kgf":12.6,"f50":30.0,"load50N":138,"load50Kgf":14.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-65","D":12,"d2":6.0,"l":65,"kN":4.2,"kKgf":0.43,"f40":26.0,"load40N":109,"load40Kgf":11.1,"f45":29.3,"load45N":123,"load45Kgf":12.5,"f50":32.5,"load50N":137,"load50Kgf":14.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-70","D":12,"d2":6.0,"l":70,"kN":3.9,"kKgf":0.4,"f40":28.0,"load40N":109,"load40Kgf":11.1,"f45":31.5,"load45N":123,"load45Kgf":12.5,"f50":35.0,"load50N":137,"load50Kgf":14.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-75","D":12,"d2":6.0,"l":75,"kN":3.7,"kKgf":0.38,"f40":30.0,"load40N":111,"load40Kgf":11.3,"f45":33.8,"load45N":125,"load45Kgf":12.7,"f50":37.5,"load50N":139,"load50Kgf":14.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-80","D":12,"d2":6.0,"l":80,"kN":3.4,"kKgf":0.35,"f40":32.0,"load40N":109,"load40Kgf":11.1,"f45":36.0,"load45N":122,"load45Kgf":12.4,"f50":40.0,"load50N":136,"load50Kgf":13.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF12-90","D":12,"d2":6.0,"l":90,"kN":3.1,"kKgf":0.32,"f40":36.0,"load40N":112,"load40Kgf":11.4,"f45":40.5,"load45N":126,"load45Kgf":12.8,"f50":45.0,"load50N":140,"load50Kgf":14.3,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-20","D":14,"d2":7.0,"l":20,"kN":17.7,"kKgf":1.8,"f40":8.0,"load40N":142,"load40Kgf":14.5,"f45":9.0,"load45N":159,"load45Kgf":16.2,"f50":10.0,"load50N":177,"load50Kgf":18.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-25","D":14,"d2":7.0,"l":25,"kN":14.1,"kKgf":1.44,"f40":10.0,"load40N":141,"load40Kgf":14.4,"f45":11.3,"load45N":159,"load45Kgf":16.2,"f50":12.5,"load50N":176,"load50Kgf":17.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-30","D":14,"d2":7.0,"l":30,"kN":11.8,"kKgf":1.2,"f40":12.0,"load40N":142,"load40Kgf":14.5,"f45":13.5,"load45N":159,"load45Kgf":16.2,"f50":15.0,"load50N":177,"load50Kgf":18.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-35","D":14,"d2":7.0,"l":35,"kN":10.1,"kKgf":1.03,"f40":14.0,"load40N":141,"load40Kgf":14.4,"f45":15.8,"load45N":160,"load45Kgf":16.3,"f50":17.5,"load50N":177,"load50Kgf":18.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-40","D":14,"d2":7.0,"l":40,"kN":8.8,"kKgf":0.9,"f40":16.0,"load40N":141,"load40Kgf":14.4,"f45":18.0,"load45N":158,"load45Kgf":16.1,"f50":20.0,"load50N":176,"load50Kgf":17.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-45","D":14,"d2":7.0,"l":45,"kN":7.8,"kKgf":0.8,"f40":18.0,"load40N":140,"load40Kgf":14.3,"f45":20.3,"load45N":158,"load45Kgf":16.1,"f50":22.5,"load50N":176,"load50Kgf":17.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-50","D":14,"d2":7.0,"l":50,"kN":7.1,"kKgf":0.72,"f40":20.0,"load40N":142,"load40Kgf":14.5,"f45":22.5,"load45N":160,"load45Kgf":16.3,"f50":25.0,"load50N":178,"load50Kgf":18.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-55","D":14,"d2":7.0,"l":55,"kN":6.4,"kKgf":0.65,"f40":22.0,"load40N":141,"load40Kgf":14.4,"f45":24.8,"load45N":159,"load45Kgf":16.2,"f50":27.5,"load50N":176,"load50Kgf":17.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-60","D":14,"d2":7.0,"l":60,"kN":5.9,"kKgf":0.6,"f40":24.0,"load40N":142,"load40Kgf":14.5,"f45":27.0,"load45N":159,"load45Kgf":16.2,"f50":30.0,"load50N":177,"load50Kgf":18.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-65","D":14,"d2":7.0,"l":65,"kN":5.4,"kKgf":0.55,"f40":26.0,"load40N":140,"load40Kgf":14.3,"f45":29.3,"load45N":158,"load45Kgf":16.1,"f50":32.5,"load50N":176,"load50Kgf":17.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-70","D":14,"d2":7.0,"l":70,"kN":5.0,"kKgf":0.51,"f40":28.0,"load40N":140,"load40Kgf":14.3,"f45":31.5,"load45N":158,"load45Kgf":16.1,"f50":35.0,"load50N":175,"load50Kgf":17.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-75","D":14,"d2":7.0,"l":75,"kN":4.7,"kKgf":0.48,"f40":30.0,"load40N":141,"load40Kgf":14.4,"f45":33.8,"load45N":159,"load45Kgf":16.2,"f50":37.5,"load50N":176,"load50Kgf":17.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-80","D":14,"d2":7.0,"l":80,"kN":4.4,"kKgf":0.45,"f40":32.0,"load40N":141,"load40Kgf":14.4,"f45":36.0,"load45N":158,"load45Kgf":16.1,"f50":40.0,"load50N":176,"load50Kgf":17.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-90","D":14,"d2":7.0,"l":90,"kN":3.9,"kKgf":0.4,"f40":36.0,"load40N":140,"load40Kgf":14.3,"f45":40.5,"load45N":158,"load45Kgf":16.1,"f50":45.0,"load50N":176,"load50Kgf":17.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF14-100","D":14,"d2":7.0,"l":100,"kN":3.5,"kKgf":0.36,"f40":40.0,"load40N":140,"load40Kgf":14.3,"f45":45.0,"load45N":158,"load45Kgf":16.1,"f50":50.0,"load50N":175,"load50Kgf":17.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-20","D":16,"d2":8.0,"l":20,"kN":20.6,"kKgf":2.1,"f40":8.0,"load40N":165,"load40Kgf":16.8,"f45":9.0,"load45N":185,"load45Kgf":18.9,"f50":10.0,"load50N":206,"load50Kgf":21.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-25","D":16,"d2":8.0,"l":25,"kN":16.5,"kKgf":1.68,"f40":10.0,"load40N":165,"load40Kgf":16.8,"f45":11.3,"load45N":186,"load45Kgf":19.0,"f50":12.5,"load50N":206,"load50Kgf":21.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-30","D":16,"d2":8.0,"l":30,"kN":13.7,"kKgf":1.4,"f40":12.0,"load40N":164,"load40Kgf":16.7,"f45":13.5,"load45N":185,"load45Kgf":18.9,"f50":15.0,"load50N":206,"load50Kgf":21.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-35","D":16,"d2":8.0,"l":35,"kN":11.8,"kKgf":1.2,"f40":14.0,"load40N":165,"load40Kgf":16.8,"f45":15.8,"load45N":186,"load45Kgf":19.0,"f50":17.5,"load50N":207,"load50Kgf":21.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-40","D":16,"d2":8.0,"l":40,"kN":10.3,"kKgf":1.05,"f40":16.0,"load40N":165,"load40Kgf":16.8,"f45":18.0,"load45N":185,"load45Kgf":18.9,"f50":20.0,"load50N":206,"load50Kgf":21.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-45","D":16,"d2":8.0,"l":45,"kN":9.2,"kKgf":0.94,"f40":18.0,"load40N":166,"load40Kgf":16.9,"f45":20.3,"load45N":187,"load45Kgf":19.1,"f50":22.5,"load50N":207,"load50Kgf":21.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-50","D":16,"d2":8.0,"l":50,"kN":8.2,"kKgf":0.84,"f40":20.0,"load40N":164,"load40Kgf":16.7,"f45":22.5,"load45N":184,"load45Kgf":18.8,"f50":25.0,"load50N":205,"load50Kgf":20.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-55","D":16,"d2":8.0,"l":55,"kN":7.5,"kKgf":0.76,"f40":22.0,"load40N":165,"load40Kgf":16.8,"f45":24.8,"load45N":186,"load45Kgf":19.0,"f50":27.5,"load50N":206,"load50Kgf":21.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-60","D":16,"d2":8.0,"l":60,"kN":6.9,"kKgf":0.7,"f40":24.0,"load40N":166,"load40Kgf":16.9,"f45":27.0,"load45N":186,"load45Kgf":19.0,"f50":30.0,"load50N":207,"load50Kgf":21.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-65","D":16,"d2":8.0,"l":65,"kN":6.3,"kKgf":0.64,"f40":26.0,"load40N":164,"load40Kgf":16.7,"f45":29.3,"load45N":185,"load45Kgf":18.9,"f50":32.5,"load50N":205,"load50Kgf":20.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-70","D":16,"d2":8.0,"l":70,"kN":5.9,"kKgf":0.6,"f40":28.0,"load40N":165,"load40Kgf":16.8,"f45":31.5,"load45N":186,"load45Kgf":19.0,"f50":35.0,"load50N":207,"load50Kgf":21.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-75","D":16,"d2":8.0,"l":75,"kN":5.5,"kKgf":0.56,"f40":30.0,"load40N":165,"load40Kgf":16.8,"f45":33.8,"load45N":186,"load45Kgf":19.0,"f50":37.5,"load50N":206,"load50Kgf":21.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-80","D":16,"d2":8.0,"l":80,"kN":5.1,"kKgf":0.52,"f40":32.0,"load40N":163,"load40Kgf":16.6,"f45":36.0,"load45N":184,"load45Kgf":18.8,"f50":40.0,"load50N":204,"load50Kgf":20.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-90","D":16,"d2":8.0,"l":90,"kN":4.6,"kKgf":0.47,"f40":36.0,"load40N":166,"load40Kgf":16.9,"f45":40.5,"load45N":186,"load45Kgf":19.0,"f50":45.0,"load50N":207,"load50Kgf":21.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-100","D":16,"d2":8.0,"l":100,"kN":4.1,"kKgf":0.42,"f40":40.0,"load40N":164,"load40Kgf":16.7,"f45":45.0,"load45N":184,"load45Kgf":18.8,"f50":50.0,"load50N":205,"load50Kgf":20.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF16-125","D":16,"d2":8.0,"l":125,"kN":3.3,"kKgf":0.34,"f40":50.0,"load40N":165,"load40Kgf":16.8,"f45":56.3,"load45N":186,"load45Kgf":19.0,"f50":62.5,"load50N":206,"load50Kgf":21.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-20","D":18,"d2":9.0,"l":20,"kN":25.5,"kKgf":2.6,"f40":8.0,"load40N":204,"load40Kgf":20.8,"f45":9.0,"load45N":230,"load45Kgf":23.5,"f50":10.0,"load50N":255,"load50Kgf":26.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-25","D":18,"d2":9.0,"l":25,"kN":20.4,"kKgf":2.08,"f40":10.0,"load40N":204,"load40Kgf":20.8,"f45":11.3,"load45N":231,"load45Kgf":23.6,"f50":12.5,"load50N":255,"load50Kgf":26.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-30","D":18,"d2":9.0,"l":30,"kN":17.0,"kKgf":1.73,"f40":12.0,"load40N":204,"load40Kgf":20.8,"f45":13.5,"load45N":230,"load45Kgf":23.5,"f50":15.0,"load50N":255,"load50Kgf":26.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-35","D":18,"d2":9.0,"l":35,"kN":14.6,"kKgf":1.49,"f40":14.0,"load40N":204,"load40Kgf":20.8,"f45":15.8,"load45N":231,"load45Kgf":23.6,"f50":17.5,"load50N":256,"load50Kgf":26.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-40","D":18,"d2":9.0,"l":40,"kN":12.7,"kKgf":1.3,"f40":16.0,"load40N":203,"load40Kgf":20.7,"f45":18.0,"load45N":229,"load45Kgf":23.4,"f50":20.0,"load50N":254,"load50Kgf":25.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-45","D":18,"d2":9.0,"l":45,"kN":11.3,"kKgf":1.15,"f40":18.0,"load40N":203,"load40Kgf":20.7,"f45":20.3,"load45N":229,"load45Kgf":23.4,"f50":22.5,"load50N":254,"load50Kgf":25.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-50","D":18,"d2":9.0,"l":50,"kN":10.2,"kKgf":1.04,"f40":20.0,"load40N":204,"load40Kgf":20.8,"f45":22.5,"load45N":229,"load45Kgf":23.4,"f50":25.0,"load50N":255,"load50Kgf":26.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-55","D":18,"d2":9.0,"l":55,"kN":9.3,"kKgf":0.95,"f40":22.0,"load40N":205,"load40Kgf":20.9,"f45":24.8,"load45N":231,"load45Kgf":23.6,"f50":27.5,"load50N":256,"load50Kgf":26.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-60","D":18,"d2":9.0,"l":60,"kN":8.5,"kKgf":0.87,"f40":24.0,"load40N":204,"load40Kgf":20.8,"f45":27.0,"load45N":230,"load45Kgf":23.5,"f50":30.0,"load50N":255,"load50Kgf":26.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-65","D":18,"d2":9.0,"l":65,"kN":7.8,"kKgf":0.8,"f40":26.0,"load40N":203,"load40Kgf":20.7,"f45":29.3,"load45N":229,"load45Kgf":23.4,"f50":32.5,"load50N":254,"load50Kgf":25.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-70","D":18,"d2":9.0,"l":70,"kN":7.3,"kKgf":0.74,"f40":28.0,"load40N":204,"load40Kgf":20.8,"f45":31.5,"load45N":230,"load45Kgf":23.5,"f50":35.0,"load50N":256,"load50Kgf":26.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-75","D":18,"d2":9.0,"l":75,"kN":6.8,"kKgf":0.69,"f40":30.0,"load40N":204,"load40Kgf":20.8,"f45":33.8,"load45N":230,"load45Kgf":23.5,"f50":37.5,"load50N":255,"load50Kgf":26.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-80","D":18,"d2":9.0,"l":80,"kN":6.4,"kKgf":0.65,"f40":32.0,"load40N":205,"load40Kgf":20.9,"f45":36.0,"load45N":230,"load45Kgf":23.5,"f50":40.0,"load50N":256,"load50Kgf":26.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-90","D":18,"d2":9.0,"l":90,"kN":5.7,"kKgf":0.58,"f40":36.0,"load40N":205,"load40Kgf":20.9,"f45":40.5,"load45N":231,"load45Kgf":23.6,"f50":45.0,"load50N":257,"load50Kgf":26.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-100","D":18,"d2":9.0,"l":100,"kN":5.1,"kKgf":0.52,"f40":40.0,"load40N":204,"load40Kgf":20.8,"f45":45.0,"load45N":229,"load45Kgf":23.4,"f50":50.0,"load50N":255,"load50Kgf":26.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF18-125","D":18,"d2":9.0,"l":125,"kN":4.1,"kKgf":0.42,"f40":50.0,"load40N":205,"load40Kgf":20.9,"f45":56.3,"load45N":231,"load45Kgf":23.6,"f50":62.5,"load50N":256,"load50Kgf":26.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-20","D":20,"d2":11.0,"l":20,"kN":31.4,"kKgf":3.2,"f40":8.0,"load40N":251,"load40Kgf":25.6,"f45":9.0,"load45N":283,"load45Kgf":28.9,"f50":10.0,"load50N":314,"load50Kgf":32.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-25","D":20,"d2":11.0,"l":25,"kN":25.1,"kKgf":2.56,"f40":10.0,"load40N":251,"load40Kgf":25.6,"f45":11.3,"load45N":284,"load45Kgf":29.0,"f50":12.5,"load50N":314,"load50Kgf":32.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-30","D":20,"d2":11.0,"l":30,"kN":20.9,"kKgf":2.13,"f40":12.0,"load40N":251,"load40Kgf":25.6,"f45":13.5,"load45N":282,"load45Kgf":28.8,"f50":15.0,"load50N":314,"load50Kgf":32.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-35","D":20,"d2":11.0,"l":35,"kN":17.9,"kKgf":1.83,"f40":14.0,"load40N":251,"load40Kgf":25.6,"f45":15.8,"load45N":283,"load45Kgf":28.9,"f50":17.5,"load50N":313,"load50Kgf":31.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-40","D":20,"d2":11.0,"l":40,"kN":15.7,"kKgf":1.6,"f40":16.0,"load40N":251,"load40Kgf":25.6,"f45":18.0,"load45N":283,"load45Kgf":28.9,"f50":20.0,"load50N":314,"load50Kgf":32.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-45","D":20,"d2":11.0,"l":45,"kN":13.9,"kKgf":1.42,"f40":18.0,"load40N":250,"load40Kgf":25.5,"f45":20.3,"load45N":282,"load45Kgf":28.8,"f50":22.5,"load50N":313,"load50Kgf":31.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-50","D":20,"d2":11.0,"l":50,"kN":12.6,"kKgf":1.28,"f40":20.0,"load40N":252,"load40Kgf":25.7,"f45":22.5,"load45N":284,"load45Kgf":29.0,"f50":25.0,"load50N":315,"load50Kgf":32.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-55","D":20,"d2":11.0,"l":55,"kN":11.4,"kKgf":1.16,"f40":22.0,"load40N":251,"load40Kgf":25.6,"f45":24.8,"load45N":283,"load45Kgf":28.9,"f50":27.5,"load50N":314,"load50Kgf":32.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-60","D":20,"d2":11.0,"l":60,"kN":10.5,"kKgf":1.07,"f40":24.0,"load40N":252,"load40Kgf":25.7,"f45":27.0,"load45N":284,"load45Kgf":29.0,"f50":30.0,"load50N":315,"load50Kgf":32.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-65","D":20,"d2":11.0,"l":65,"kN":9.7,"kKgf":0.99,"f40":26.0,"load40N":252,"load40Kgf":25.7,"f45":29.3,"load45N":284,"load45Kgf":29.0,"f50":32.5,"load50N":315,"load50Kgf":32.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-70","D":20,"d2":11.0,"l":70,"kN":9.0,"kKgf":0.92,"f40":28.0,"load40N":252,"load40Kgf":25.7,"f45":31.5,"load45N":284,"load45Kgf":29.0,"f50":35.0,"load50N":315,"load50Kgf":32.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-75","D":20,"d2":11.0,"l":75,"kN":8.4,"kKgf":0.86,"f40":30.0,"load40N":252,"load40Kgf":25.7,"f45":33.8,"load45N":284,"load45Kgf":29.0,"f50":37.5,"load50N":315,"load50Kgf":32.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-80","D":20,"d2":11.0,"l":80,"kN":7.8,"kKgf":0.8,"f40":32.0,"load40N":250,"load40Kgf":25.5,"f45":36.0,"load45N":281,"load45Kgf":28.7,"f50":40.0,"load50N":312,"load50Kgf":31.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-90","D":20,"d2":11.0,"l":90,"kN":7.0,"kKgf":0.71,"f40":36.0,"load40N":252,"load40Kgf":25.7,"f45":40.5,"load45N":284,"load45Kgf":29.0,"f50":45.0,"load50N":315,"load50Kgf":32.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-100","D":20,"d2":11.0,"l":100,"kN":6.3,"kKgf":0.64,"f40":40.0,"load40N":252,"load40Kgf":25.7,"f45":45.0,"load45N":284,"load45Kgf":29.0,"f50":50.0,"load50N":315,"load50Kgf":32.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-125","D":20,"d2":11.0,"l":125,"kN":5.0,"kKgf":0.51,"f40":50.0,"load40N":250,"load40Kgf":25.5,"f45":56.3,"load45N":282,"load45Kgf":28.8,"f50":62.5,"load50N":313,"load50Kgf":31.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF20-150","D":20,"d2":11.0,"l":150,"kN":4.2,"kKgf":0.43,"f40":60.0,"load40N":252,"load40Kgf":25.7,"f45":67.5,"load45N":284,"load45Kgf":29.0,"f50":75.0,"load50N":315,"load50Kgf":32.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-25","D":22,"d2":11.0,"l":25,"kN":31.4,"kKgf":3.2,"f40":10.0,"load40N":314,"load40Kgf":32.0,"f45":11.3,"load45N":355,"load45Kgf":36.2,"f50":12.5,"load50N":393,"load50Kgf":40.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-30","D":22,"d2":11.0,"l":30,"kN":26.2,"kKgf":2.67,"f40":12.0,"load40N":314,"load40Kgf":32.0,"f45":13.5,"load45N":354,"load45Kgf":36.1,"f50":15.0,"load50N":393,"load50Kgf":40.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-35","D":22,"d2":11.0,"l":35,"kN":22.4,"kKgf":2.28,"f40":14.0,"load40N":314,"load40Kgf":32.0,"f45":15.8,"load45N":354,"load45Kgf":36.1,"f50":17.5,"load50N":392,"load50Kgf":40.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-40","D":22,"d2":11.0,"l":40,"kN":19.6,"kKgf":2.0,"f40":16.0,"load40N":314,"load40Kgf":32.0,"f45":18.0,"load45N":353,"load45Kgf":36.0,"f50":20.0,"load50N":392,"load50Kgf":40.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-45","D":22,"d2":11.0,"l":45,"kN":17.4,"kKgf":1.77,"f40":18.0,"load40N":313,"load40Kgf":31.9,"f45":20.3,"load45N":353,"load45Kgf":36.0,"f50":22.5,"load50N":391,"load50Kgf":39.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-50","D":22,"d2":11.0,"l":50,"kN":15.7,"kKgf":1.6,"f40":20.0,"load40N":314,"load40Kgf":32.0,"f45":22.5,"load45N":353,"load45Kgf":36.0,"f50":25.0,"load50N":393,"load50Kgf":40.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-55","D":22,"d2":11.0,"l":55,"kN":14.3,"kKgf":1.46,"f40":22.0,"load40N":315,"load40Kgf":32.1,"f45":24.8,"load45N":355,"load45Kgf":36.2,"f50":27.5,"load50N":393,"load50Kgf":40.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-60","D":22,"d2":11.0,"l":60,"kN":13.1,"kKgf":1.34,"f40":24.0,"load40N":314,"load40Kgf":32.0,"f45":27.0,"load45N":354,"load45Kgf":36.1,"f50":30.0,"load50N":393,"load50Kgf":40.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-65","D":22,"d2":11.0,"l":65,"kN":12.1,"kKgf":1.23,"f40":26.0,"load40N":315,"load40Kgf":32.1,"f45":29.3,"load45N":355,"load45Kgf":36.2,"f50":32.5,"load50N":393,"load50Kgf":40.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-70","D":22,"d2":11.0,"l":70,"kN":11.2,"kKgf":1.14,"f40":28.0,"load40N":314,"load40Kgf":32.0,"f45":31.5,"load45N":353,"load45Kgf":36.0,"f50":35.0,"load50N":392,"load50Kgf":40.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-75","D":22,"d2":11.0,"l":75,"kN":10.5,"kKgf":1.07,"f40":30.0,"load40N":315,"load40Kgf":32.1,"f45":33.8,"load45N":355,"load45Kgf":36.2,"f50":37.5,"load50N":394,"load50Kgf":40.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-80","D":22,"d2":11.0,"l":80,"kN":9.8,"kKgf":1.0,"f40":32.0,"load40N":314,"load40Kgf":32.0,"f45":36.0,"load45N":353,"load45Kgf":36.0,"f50":40.0,"load50N":392,"load50Kgf":40.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-90","D":22,"d2":11.0,"l":90,"kN":8.7,"kKgf":0.89,"f40":36.0,"load40N":313,"load40Kgf":31.9,"f45":40.5,"load45N":352,"load45Kgf":35.9,"f50":45.0,"load50N":391,"load50Kgf":39.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-100","D":22,"d2":11.0,"l":100,"kN":7.8,"kKgf":0.8,"f40":40.0,"load40N":312,"load40Kgf":31.8,"f45":45.0,"load45N":351,"load45Kgf":35.8,"f50":50.0,"load50N":390,"load50Kgf":39.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-125","D":22,"d2":11.0,"l":125,"kN":6.3,"kKgf":0.64,"f40":50.0,"load40N":315,"load40Kgf":32.1,"f45":56.3,"load45N":355,"load45Kgf":36.2,"f50":62.5,"load50N":394,"load50Kgf":40.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF22-150","D":22,"d2":11.0,"l":150,"kN":5.2,"kKgf":0.53,"f40":60.0,"load40N":312,"load40Kgf":31.8,"f45":67.5,"load45N":351,"load45Kgf":35.8,"f50":75.0,"load50N":390,"load50Kgf":39.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-25","D":25,"d2":13.5,"l":25,"kN":39.2,"kKgf":4.0,"f40":10.0,"load40N":392,"load40Kgf":40.0,"f45":11.3,"load45N":443,"load45Kgf":45.2,"f50":12.5,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-30","D":25,"d2":13.5,"l":30,"kN":32.7,"kKgf":3.33,"f40":12.0,"load40N":392,"load40Kgf":40.0,"f45":13.5,"load45N":441,"load45Kgf":45.0,"f50":15.0,"load50N":491,"load50Kgf":50.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-35","D":25,"d2":13.5,"l":35,"kN":28.0,"kKgf":2.86,"f40":14.0,"load40N":392,"load40Kgf":40.0,"f45":15.8,"load45N":442,"load45Kgf":45.1,"f50":17.5,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-40","D":25,"d2":13.5,"l":40,"kN":24.5,"kKgf":2.5,"f40":16.0,"load40N":392,"load40Kgf":40.0,"f45":18.0,"load45N":441,"load45Kgf":45.0,"f50":20.0,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-45","D":25,"d2":13.5,"l":45,"kN":21.8,"kKgf":2.22,"f40":18.0,"load40N":392,"load40Kgf":40.0,"f45":20.3,"load45N":443,"load45Kgf":45.2,"f50":22.5,"load50N":491,"load50Kgf":50.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-50","D":25,"d2":13.5,"l":50,"kN":19.6,"kKgf":2.0,"f40":20.0,"load40N":392,"load40Kgf":40.0,"f45":22.5,"load45N":441,"load45Kgf":45.0,"f50":25.0,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-55","D":25,"d2":13.5,"l":55,"kN":17.8,"kKgf":1.82,"f40":22.0,"load40N":392,"load40Kgf":40.0,"f45":24.8,"load45N":441,"load45Kgf":45.0,"f50":27.5,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-60","D":25,"d2":13.5,"l":60,"kN":16.3,"kKgf":1.66,"f40":24.0,"load40N":391,"load40Kgf":39.9,"f45":27.0,"load45N":440,"load45Kgf":44.9,"f50":30.0,"load50N":489,"load50Kgf":49.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-65","D":25,"d2":13.5,"l":65,"kN":15.1,"kKgf":1.54,"f40":26.0,"load40N":393,"load40Kgf":40.1,"f45":29.3,"load45N":442,"load45Kgf":45.1,"f50":32.5,"load50N":491,"load50Kgf":50.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-70","D":25,"d2":13.5,"l":70,"kN":14.0,"kKgf":1.43,"f40":28.0,"load40N":392,"load40Kgf":40.0,"f45":31.5,"load45N":441,"load45Kgf":45.0,"f50":35.0,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-75","D":25,"d2":13.5,"l":75,"kN":13.1,"kKgf":1.34,"f40":30.0,"load40N":393,"load40Kgf":40.1,"f45":33.8,"load45N":443,"load45Kgf":45.2,"f50":37.5,"load50N":491,"load50Kgf":50.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-80","D":25,"d2":13.5,"l":80,"kN":12.3,"kKgf":1.25,"f40":32.0,"load40N":394,"load40Kgf":40.2,"f45":36.0,"load45N":443,"load45Kgf":45.2,"f50":40.0,"load50N":492,"load50Kgf":50.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-90","D":25,"d2":13.5,"l":90,"kN":10.9,"kKgf":1.11,"f40":36.0,"load40N":392,"load40Kgf":40.0,"f45":40.5,"load45N":441,"load45Kgf":45.0,"f50":45.0,"load50N":491,"load50Kgf":50.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-100","D":25,"d2":13.5,"l":100,"kN":9.8,"kKgf":1.0,"f40":40.0,"load40N":392,"load40Kgf":40.0,"f45":45.0,"load45N":441,"load45Kgf":45.0,"f50":50.0,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-125","D":25,"d2":13.5,"l":125,"kN":7.8,"kKgf":0.8,"f40":50.0,"load40N":390,"load40Kgf":39.8,"f45":56.3,"load45N":439,"load45Kgf":44.8,"f50":62.5,"load50N":488,"load50Kgf":49.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-150","D":25,"d2":13.5,"l":150,"kN":6.5,"kKgf":0.66,"f40":60.0,"load40N":390,"load40Kgf":39.8,"f45":67.5,"load45N":439,"load45Kgf":44.8,"f50":75.0,"load50N":488,"load50Kgf":49.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-175","D":25,"d2":13.5,"l":175,"kN":5.6,"kKgf":0.57,"f40":70.0,"load40N":392,"load40Kgf":40.0,"f45":78.8,"load45N":441,"load45Kgf":45.0,"f50":87.5,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF25-200","D":25,"d2":13.5,"l":200,"kN":4.9,"kKgf":0.5,"f40":80.0,"load40N":392,"load40Kgf":40.0,"f45":90.0,"load45N":441,"load45Kgf":45.0,"f50":100.0,"load50N":490,"load50Kgf":50.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-25","D":27,"d2":13.5,"l":25,"kN":47.1,"kKgf":4.8,"f40":10.0,"load40N":471,"load40Kgf":48.0,"f45":11.3,"load45N":532,"load45Kgf":54.2,"f50":12.5,"load50N":589,"load50Kgf":60.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-30","D":27,"d2":13.5,"l":30,"kN":39.2,"kKgf":4.0,"f40":12.0,"load40N":470,"load40Kgf":47.9,"f45":13.5,"load45N":529,"load45Kgf":53.9,"f50":15.0,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-35","D":27,"d2":13.5,"l":35,"kN":33.6,"kKgf":3.43,"f40":14.0,"load40N":470,"load40Kgf":47.9,"f45":15.8,"load45N":531,"load45Kgf":54.1,"f50":17.5,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-40","D":27,"d2":13.5,"l":40,"kN":29.4,"kKgf":3.0,"f40":16.0,"load40N":470,"load40Kgf":47.9,"f45":18.0,"load45N":529,"load45Kgf":53.9,"f50":20.0,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-45","D":27,"d2":13.5,"l":45,"kN":26.2,"kKgf":2.67,"f40":18.0,"load40N":472,"load40Kgf":48.1,"f45":20.3,"load45N":532,"load45Kgf":54.2,"f50":22.5,"load50N":590,"load50Kgf":60.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-50","D":27,"d2":13.5,"l":50,"kN":23.5,"kKgf":2.4,"f40":20.0,"load40N":470,"load40Kgf":47.9,"f45":22.5,"load45N":529,"load45Kgf":53.9,"f50":25.0,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-55","D":27,"d2":13.5,"l":55,"kN":21.4,"kKgf":2.18,"f40":22.0,"load40N":471,"load40Kgf":48.0,"f45":24.8,"load45N":531,"load45Kgf":54.1,"f50":27.5,"load50N":589,"load50Kgf":60.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-60","D":27,"d2":13.5,"l":60,"kN":19.6,"kKgf":2.0,"f40":24.0,"load40N":470,"load40Kgf":47.9,"f45":27.0,"load45N":529,"load45Kgf":53.9,"f50":30.0,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-65","D":27,"d2":13.5,"l":65,"kN":18.1,"kKgf":1.85,"f40":26.0,"load40N":471,"load40Kgf":48.0,"f45":29.3,"load45N":530,"load45Kgf":54.0,"f50":32.5,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-70","D":27,"d2":13.5,"l":70,"kN":16.8,"kKgf":1.71,"f40":28.0,"load40N":470,"load40Kgf":47.9,"f45":31.5,"load45N":529,"load45Kgf":53.9,"f50":35.0,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-75","D":27,"d2":13.5,"l":75,"kN":15.7,"kKgf":1.6,"f40":30.0,"load40N":471,"load40Kgf":48.0,"f45":33.8,"load45N":531,"load45Kgf":54.1,"f50":37.5,"load50N":589,"load50Kgf":60.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-80","D":27,"d2":13.5,"l":80,"kN":14.7,"kKgf":1.5,"f40":32.0,"load40N":470,"load40Kgf":47.9,"f45":36.0,"load45N":529,"load45Kgf":53.9,"f50":40.0,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-90","D":27,"d2":13.5,"l":90,"kN":13.1,"kKgf":1.34,"f40":36.0,"load40N":472,"load40Kgf":48.1,"f45":40.5,"load45N":531,"load45Kgf":54.1,"f50":45.0,"load50N":590,"load50Kgf":60.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-100","D":27,"d2":13.5,"l":100,"kN":11.8,"kKgf":1.2,"f40":40.0,"load40N":472,"load40Kgf":48.1,"f45":45.0,"load45N":531,"load45Kgf":54.1,"f50":50.0,"load50N":590,"load50Kgf":60.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-125","D":27,"d2":13.5,"l":125,"kN":9.4,"kKgf":0.96,"f40":50.0,"load40N":470,"load40Kgf":47.9,"f45":56.3,"load45N":529,"load45Kgf":53.9,"f50":62.5,"load50N":588,"load50Kgf":60.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-150","D":27,"d2":13.5,"l":150,"kN":7.8,"kKgf":0.8,"f40":60.0,"load40N":468,"load40Kgf":47.7,"f45":67.5,"load45N":527,"load45Kgf":53.7,"f50":75.0,"load50N":585,"load50Kgf":59.7,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-175","D":27,"d2":13.5,"l":175,"kN":6.7,"kKgf":0.68,"f40":70.0,"load40N":469,"load40Kgf":47.8,"f45":78.8,"load45N":528,"load45Kgf":53.8,"f50":87.5,"load50N":586,"load50Kgf":59.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF27-200","D":27,"d2":13.5,"l":200,"kN":5.9,"kKgf":0.6,"f40":80.0,"load40N":472,"load40Kgf":48.1,"f45":90.0,"load45N":531,"load45Kgf":54.1,"f50":100.0,"load50N":590,"load50Kgf":60.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-25","D":30,"d2":16.0,"l":25,"kN":56.5,"kKgf":5.76,"f40":10.0,"load40N":565,"load40Kgf":57.6,"f45":11.3,"load45N":638,"load45Kgf":65.1,"f50":12.5,"load50N":706,"load50Kgf":72.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-30","D":30,"d2":16.0,"l":30,"kN":47.1,"kKgf":4.8,"f40":12.0,"load40N":565,"load40Kgf":57.6,"f45":13.5,"load45N":636,"load45Kgf":64.9,"f50":15.0,"load50N":707,"load50Kgf":72.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-35","D":30,"d2":16.0,"l":35,"kN":40.3,"kKgf":4.11,"f40":14.0,"load40N":564,"load40Kgf":57.5,"f45":15.8,"load45N":637,"load45Kgf":65.0,"f50":17.5,"load50N":705,"load50Kgf":71.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-40","D":30,"d2":16.0,"l":40,"kN":35.3,"kKgf":3.6,"f40":16.0,"load40N":565,"load40Kgf":57.6,"f45":18.0,"load45N":635,"load45Kgf":64.8,"f50":20.0,"load50N":706,"load50Kgf":72.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-45","D":30,"d2":16.0,"l":45,"kN":31.4,"kKgf":3.2,"f40":18.0,"load40N":565,"load40Kgf":57.6,"f45":20.3,"load45N":637,"load45Kgf":65.0,"f50":22.5,"load50N":707,"load50Kgf":72.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-50","D":30,"d2":16.0,"l":50,"kN":28.2,"kKgf":2.88,"f40":20.0,"load40N":564,"load40Kgf":57.5,"f45":22.5,"load45N":635,"load45Kgf":64.8,"f50":25.0,"load50N":705,"load50Kgf":71.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-55","D":30,"d2":16.0,"l":55,"kN":25.7,"kKgf":2.62,"f40":22.0,"load40N":565,"load40Kgf":57.6,"f45":24.8,"load45N":637,"load45Kgf":65.0,"f50":27.5,"load50N":707,"load50Kgf":72.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-60","D":30,"d2":16.0,"l":60,"kN":23.5,"kKgf":2.4,"f40":24.0,"load40N":564,"load40Kgf":57.5,"f45":27.0,"load45N":635,"load45Kgf":64.8,"f50":30.0,"load50N":705,"load50Kgf":71.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-65","D":30,"d2":16.0,"l":65,"kN":21.7,"kKgf":2.21,"f40":26.0,"load40N":564,"load40Kgf":57.5,"f45":29.3,"load45N":636,"load45Kgf":64.9,"f50":32.5,"load50N":705,"load50Kgf":71.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-70","D":30,"d2":16.0,"l":70,"kN":20.2,"kKgf":2.06,"f40":28.0,"load40N":566,"load40Kgf":57.7,"f45":31.5,"load45N":636,"load45Kgf":64.9,"f50":35.0,"load50N":707,"load50Kgf":72.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-75","D":30,"d2":16.0,"l":75,"kN":18.8,"kKgf":1.92,"f40":30.0,"load40N":564,"load40Kgf":57.5,"f45":33.8,"load45N":635,"load45Kgf":64.8,"f50":37.5,"load50N":705,"load50Kgf":71.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-80","D":30,"d2":16.0,"l":80,"kN":17.7,"kKgf":1.8,"f40":32.0,"load40N":566,"load40Kgf":57.7,"f45":36.0,"load45N":637,"load45Kgf":65.0,"f50":40.0,"load50N":708,"load50Kgf":72.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-90","D":30,"d2":16.0,"l":90,"kN":15.7,"kKgf":1.6,"f40":36.0,"load40N":565,"load40Kgf":57.6,"f45":40.5,"load45N":636,"load45Kgf":64.9,"f50":45.0,"load50N":707,"load50Kgf":72.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-100","D":30,"d2":16.0,"l":100,"kN":14.1,"kKgf":1.44,"f40":40.0,"load40N":564,"load40Kgf":57.5,"f45":45.0,"load45N":635,"load45Kgf":64.8,"f50":50.0,"load50N":705,"load50Kgf":71.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-125","D":30,"d2":16.0,"l":125,"kN":11.3,"kKgf":1.15,"f40":50.0,"load40N":565,"load40Kgf":57.6,"f45":56.3,"load45N":636,"load45Kgf":64.9,"f50":62.5,"load50N":706,"load50Kgf":72.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-150","D":30,"d2":16.0,"l":150,"kN":9.4,"kKgf":0.96,"f40":60.0,"load40N":564,"load40Kgf":57.5,"f45":67.5,"load45N":635,"load45Kgf":64.8,"f50":75.0,"load50N":705,"load50Kgf":71.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-175","D":30,"d2":16.0,"l":175,"kN":8.1,"kKgf":0.83,"f40":70.0,"load40N":567,"load40Kgf":57.8,"f45":78.8,"load45N":638,"load45Kgf":65.1,"f50":87.5,"load50N":709,"load50Kgf":72.3,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF30-200","D":30,"d2":16.0,"l":200,"kN":7.1,"kKgf":0.72,"f40":80.0,"load40N":568,"load40Kgf":57.9,"f45":90.0,"load45N":639,"load45Kgf":65.2,"f50":100.0,"load50N":710,"load50Kgf":72.4,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-40","D":35,"d2":19.0,"l":40,"kN":48.0,"kKgf":4.89,"f40":16.0,"load40N":768,"load40Kgf":78.3,"f45":18.0,"load45N":864,"load45Kgf":88.1,"f50":20.0,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-45","D":35,"d2":19.0,"l":45,"kN":42.7,"kKgf":4.35,"f40":18.0,"load40N":769,"load40Kgf":78.4,"f45":20.3,"load45N":867,"load45Kgf":88.4,"f50":22.5,"load50N":961,"load50Kgf":98.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-50","D":35,"d2":19.0,"l":50,"kN":38.4,"kKgf":3.92,"f40":20.0,"load40N":768,"load40Kgf":78.3,"f45":22.5,"load45N":864,"load45Kgf":88.1,"f50":25.0,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-55","D":35,"d2":19.0,"l":55,"kN":34.9,"kKgf":3.56,"f40":22.0,"load40N":768,"load40Kgf":78.3,"f45":24.8,"load45N":866,"load45Kgf":88.3,"f50":27.5,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-60","D":35,"d2":19.0,"l":60,"kN":32.0,"kKgf":3.26,"f40":24.0,"load40N":768,"load40Kgf":78.3,"f45":27.0,"load45N":864,"load45Kgf":88.1,"f50":30.0,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-65","D":35,"d2":19.0,"l":65,"kN":29.5,"kKgf":3.01,"f40":26.0,"load40N":767,"load40Kgf":78.2,"f45":29.3,"load45N":864,"load45Kgf":88.1,"f50":32.5,"load50N":959,"load50Kgf":97.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-70","D":35,"d2":19.0,"l":70,"kN":27.4,"kKgf":2.79,"f40":28.0,"load40N":767,"load40Kgf":78.2,"f45":31.5,"load45N":863,"load45Kgf":88.0,"f50":35.0,"load50N":959,"load50Kgf":97.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-75","D":35,"d2":19.0,"l":75,"kN":25.6,"kKgf":2.61,"f40":30.0,"load40N":768,"load40Kgf":78.3,"f45":33.8,"load45N":865,"load45Kgf":88.2,"f50":37.5,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-80","D":35,"d2":19.0,"l":80,"kN":24.0,"kKgf":2.45,"f40":32.0,"load40N":768,"load40Kgf":78.3,"f45":36.0,"load45N":864,"load45Kgf":88.1,"f50":40.0,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-90","D":35,"d2":19.0,"l":90,"kN":21.3,"kKgf":2.17,"f40":36.0,"load40N":767,"load40Kgf":78.2,"f45":40.5,"load45N":863,"load45Kgf":88.0,"f50":45.0,"load50N":959,"load50Kgf":97.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-100","D":35,"d2":19.0,"l":100,"kN":19.2,"kKgf":1.96,"f40":40.0,"load40N":768,"load40Kgf":78.3,"f45":45.0,"load45N":864,"load45Kgf":88.1,"f50":50.0,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-125","D":35,"d2":19.0,"l":125,"kN":15.4,"kKgf":1.57,"f40":50.0,"load40N":770,"load40Kgf":78.5,"f45":56.3,"load45N":867,"load45Kgf":88.4,"f50":62.5,"load50N":963,"load50Kgf":98.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-150","D":35,"d2":19.0,"l":150,"kN":12.8,"kKgf":1.31,"f40":60.0,"load40N":768,"load40Kgf":78.3,"f45":67.5,"load45N":864,"load45Kgf":88.1,"f50":75.0,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-175","D":35,"d2":19.0,"l":175,"kN":11.0,"kKgf":1.12,"f40":70.0,"load40N":770,"load40Kgf":78.5,"f45":78.8,"load45N":867,"load45Kgf":88.4,"f50":87.5,"load50N":963,"load50Kgf":98.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF35-200","D":35,"d2":19.0,"l":200,"kN":9.6,"kKgf":0.98,"f40":80.0,"load40N":768,"load40Kgf":78.3,"f45":90.0,"load45N":864,"load45Kgf":88.1,"f50":100.0,"load50N":960,"load50Kgf":97.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-40","D":40,"d2":22.0,"l":40,"kN":62.7,"kKgf":6.39,"f40":16.0,"load40N":1003,"load40Kgf":102.3,"f45":18.0,"load45N":1129,"load45Kgf":115.1,"f50":20.0,"load50N":1254,"load50Kgf":127.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-45","D":40,"d2":22.0,"l":45,"kN":55.7,"kKgf":5.68,"f40":18.0,"load40N":1003,"load40Kgf":102.3,"f45":20.3,"load45N":1131,"load45Kgf":115.3,"f50":22.5,"load50N":1253,"load50Kgf":127.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-50","D":40,"d2":22.0,"l":50,"kN":50.2,"kKgf":5.12,"f40":20.0,"load40N":1004,"load40Kgf":102.4,"f45":22.5,"load45N":1130,"load45Kgf":115.2,"f50":25.0,"load50N":1255,"load50Kgf":128.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-55","D":40,"d2":22.0,"l":55,"kN":45.6,"kKgf":4.65,"f40":22.0,"load40N":1003,"load40Kgf":102.3,"f45":24.8,"load45N":1131,"load45Kgf":115.3,"f50":27.5,"load50N":1254,"load50Kgf":127.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-60","D":40,"d2":22.0,"l":60,"kN":41.8,"kKgf":4.26,"f40":24.0,"load40N":1003,"load40Kgf":102.3,"f45":27.0,"load45N":1129,"load45Kgf":115.1,"f50":30.0,"load50N":1254,"load50Kgf":127.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-65","D":40,"d2":22.0,"l":65,"kN":38.6,"kKgf":3.94,"f40":26.0,"load40N":1004,"load40Kgf":102.4,"f45":29.3,"load45N":1131,"load45Kgf":115.3,"f50":32.5,"load50N":1255,"load50Kgf":128.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-70","D":40,"d2":22.0,"l":70,"kN":35.8,"kKgf":3.65,"f40":28.0,"load40N":1002,"load40Kgf":102.2,"f45":31.5,"load45N":1128,"load45Kgf":115.0,"f50":35.0,"load50N":1253,"load50Kgf":127.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-75","D":40,"d2":22.0,"l":75,"kN":33.4,"kKgf":3.41,"f40":30.0,"load40N":1002,"load40Kgf":102.2,"f45":33.8,"load45N":1129,"load45Kgf":115.1,"f50":37.5,"load50N":1253,"load50Kgf":127.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-80","D":40,"d2":22.0,"l":80,"kN":31.4,"kKgf":3.2,"f40":32.0,"load40N":1005,"load40Kgf":102.5,"f45":36.0,"load45N":1130,"load45Kgf":115.2,"f50":40.0,"load50N":1256,"load50Kgf":128.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-90","D":40,"d2":22.0,"l":90,"kN":27.9,"kKgf":2.85,"f40":36.0,"load40N":1004,"load40Kgf":102.4,"f45":40.5,"load45N":1130,"load45Kgf":115.2,"f50":45.0,"load50N":1256,"load50Kgf":128.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-100","D":40,"d2":22.0,"l":100,"kN":25.1,"kKgf":2.56,"f40":40.0,"load40N":1004,"load40Kgf":102.4,"f45":45.0,"load45N":1130,"load45Kgf":115.2,"f50":50.0,"load50N":1255,"load50Kgf":128.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-125","D":40,"d2":22.0,"l":125,"kN":20.1,"kKgf":2.05,"f40":50.0,"load40N":1005,"load40Kgf":102.5,"f45":56.3,"load45N":1132,"load45Kgf":115.4,"f50":62.5,"load50N":1256,"load50Kgf":128.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-150","D":40,"d2":22.0,"l":150,"kN":16.7,"kKgf":1.7,"f40":60.0,"load40N":1002,"load40Kgf":102.2,"f45":67.5,"load45N":1127,"load45Kgf":114.9,"f50":75.0,"load50N":1253,"load50Kgf":127.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-175","D":40,"d2":22.0,"l":175,"kN":14.3,"kKgf":1.46,"f40":70.0,"load40N":1001,"load40Kgf":102.1,"f45":78.8,"load45N":1127,"load45Kgf":114.9,"f50":87.5,"load50N":1251,"load50Kgf":127.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-200","D":40,"d2":22.0,"l":200,"kN":12.5,"kKgf":1.27,"f40":80.0,"load40N":1000,"load40Kgf":102.0,"f45":90.0,"load45N":1125,"load45Kgf":114.7,"f50":100.0,"load50N":1250,"load50Kgf":127.5,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-225","D":40,"d2":22.0,"l":225,"kN":11.1,"kKgf":1.13,"f40":90.0,"load40N":999,"load40Kgf":101.9,"f45":101.3,"load45N":1124,"load45Kgf":114.6,"f50":112.5,"load50N":1249,"load50Kgf":127.4,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-250","D":40,"d2":22.0,"l":250,"kN":10.0,"kKgf":1.02,"f40":100.0,"load40N":1000,"load40Kgf":102.0,"f45":112.5,"load45N":1125,"load45Kgf":114.7,"f50":125.0,"load50N":1250,"load50Kgf":127.5,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-275","D":40,"d2":22.0,"l":275,"kN":9.1,"kKgf":0.93,"f40":110.0,"load40N":1001,"load40Kgf":102.1,"f45":123.8,"load45N":1127,"load45Kgf":114.9,"f50":137.5,"load50N":1251,"load50Kgf":127.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF40-300","D":40,"d2":22.0,"l":300,"kN":8.4,"kKgf":0.86,"f40":120.0,"load40N":1008,"load40Kgf":102.8,"f45":135.0,"load45N":1134,"load45Kgf":115.6,"f50":150.0,"load50N":1260,"load50Kgf":128.5,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-50","D":50,"d2":27.5,"l":50,"kN":78.4,"kKgf":7.99,"f40":20.0,"load40N":1568,"load40Kgf":159.9,"f45":22.5,"load45N":1764,"load45Kgf":179.9,"f50":25.0,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-55","D":50,"d2":27.5,"l":55,"kN":71.3,"kKgf":7.27,"f40":22.0,"load40N":1569,"load40Kgf":160.0,"f45":24.8,"load45N":1768,"load45Kgf":180.3,"f50":27.5,"load50N":1961,"load50Kgf":200.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-60","D":50,"d2":27.5,"l":60,"kN":65.3,"kKgf":6.66,"f40":24.0,"load40N":1567,"load40Kgf":159.8,"f45":27.0,"load45N":1763,"load45Kgf":179.8,"f50":30.0,"load50N":1959,"load50Kgf":199.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-65","D":50,"d2":27.5,"l":65,"kN":60.3,"kKgf":6.15,"f40":26.0,"load40N":1568,"load40Kgf":159.9,"f45":29.3,"load45N":1767,"load45Kgf":180.2,"f50":32.5,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-70","D":50,"d2":27.5,"l":70,"kN":56.0,"kKgf":5.71,"f40":28.0,"load40N":1568,"load40Kgf":159.9,"f45":31.5,"load45N":1764,"load45Kgf":179.9,"f50":35.0,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-75","D":50,"d2":27.5,"l":75,"kN":52.3,"kKgf":5.33,"f40":30.0,"load40N":1569,"load40Kgf":160.0,"f45":33.8,"load45N":1768,"load45Kgf":180.3,"f50":37.5,"load50N":1961,"load50Kgf":200.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-80","D":50,"d2":27.5,"l":80,"kN":49.0,"kKgf":5.0,"f40":32.0,"load40N":1568,"load40Kgf":159.9,"f45":36.0,"load45N":1764,"load45Kgf":179.9,"f50":40.0,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-90","D":50,"d2":27.5,"l":90,"kN":43.6,"kKgf":4.45,"f40":36.0,"load40N":1570,"load40Kgf":160.1,"f45":40.5,"load45N":1766,"load45Kgf":180.1,"f50":45.0,"load50N":1962,"load50Kgf":200.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-100","D":50,"d2":27.5,"l":100,"kN":39.2,"kKgf":4.0,"f40":40.0,"load40N":1568,"load40Kgf":159.9,"f45":45.0,"load45N":1764,"load45Kgf":179.9,"f50":50.0,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-125","D":50,"d2":27.5,"l":125,"kN":31.4,"kKgf":3.2,"f40":50.0,"load40N":1570,"load40Kgf":160.1,"f45":56.3,"load45N":1768,"load45Kgf":180.3,"f50":62.5,"load50N":1963,"load50Kgf":200.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-150","D":50,"d2":27.5,"l":150,"kN":26.1,"kKgf":2.66,"f40":60.0,"load40N":1566,"load40Kgf":159.7,"f45":67.5,"load45N":1762,"load45Kgf":179.7,"f50":75.0,"load50N":1958,"load50Kgf":199.7,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-175","D":50,"d2":27.5,"l":175,"kN":22.4,"kKgf":2.28,"f40":70.0,"load40N":1568,"load40Kgf":159.9,"f45":78.8,"load45N":1765,"load45Kgf":180.0,"f50":87.5,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-200","D":50,"d2":27.5,"l":200,"kN":19.6,"kKgf":2.0,"f40":80.0,"load40N":1568,"load40Kgf":159.9,"f45":90.0,"load45N":1764,"load45Kgf":179.9,"f50":100.0,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-225","D":50,"d2":27.5,"l":225,"kN":17.4,"kKgf":1.77,"f40":90.0,"load40N":1566,"load40Kgf":159.7,"f45":101.3,"load45N":1763,"load45Kgf":179.8,"f50":112.5,"load50N":1957,"load50Kgf":199.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-250","D":50,"d2":27.5,"l":250,"kN":15.7,"kKgf":1.6,"f40":100.0,"load40N":1570,"load40Kgf":160.1,"f45":112.5,"load45N":1766,"load45Kgf":180.1,"f50":125.0,"load50N":1963,"load50Kgf":200.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-275","D":50,"d2":27.5,"l":275,"kN":14.3,"kKgf":1.46,"f40":110.0,"load40N":1573,"load40Kgf":160.4,"f45":123.8,"load45N":1770,"load45Kgf":180.5,"f50":137.5,"load50N":1966,"load50Kgf":200.5,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-300","D":50,"d2":27.5,"l":300,"kN":13.1,"kKgf":1.34,"f40":120.0,"load40N":1572,"load40Kgf":160.3,"f45":135.0,"load45N":1769,"load45Kgf":180.4,"f50":150.0,"load50N":1965,"load50Kgf":200.4,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-350","D":50,"d2":27.5,"l":350,"kN":11.2,"kKgf":1.14,"f40":140.0,"load40N":1568,"load40Kgf":159.9,"f45":157.5,"load45N":1764,"load45Kgf":179.9,"f50":175.0,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-400","D":50,"d2":27.5,"l":400,"kN":9.8,"kKgf":1.0,"f40":160.0,"load40N":1568,"load40Kgf":159.9,"f45":180.0,"load45N":1764,"load45Kgf":179.9,"f50":200.0,"load50N":1960,"load50Kgf":199.9,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-450","D":50,"d2":27.5,"l":450,"kN":8.7,"kKgf":0.89,"f40":180.0,"load40N":1566,"load40Kgf":159.7,"f45":202.5,"load45N":1762,"load45Kgf":179.7,"f50":225.0,"load50N":1957,"load50Kgf":199.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF50-500","D":50,"d2":27.5,"l":500,"kN":7.8,"kKgf":0.8,"f40":200.0,"load40N":1560,"load40Kgf":159.1,"f45":225.0,"load45N":1755,"load45Kgf":179.0,"f50":250.0,"load50N":1950,"load50Kgf":198.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-60","D":60,"d2":33.0,"l":60,"kN":94.0,"kKgf":9.59,"f40":24.0,"load40N":2256,"load40Kgf":230.0,"f45":27.0,"load45N":2538,"load45Kgf":258.8,"f50":30.0,"load50N":2820,"load50Kgf":287.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-70","D":60,"d2":33.0,"l":70,"kN":80.6,"kKgf":8.22,"f40":28.0,"load40N":2257,"load40Kgf":230.2,"f45":31.5,"load45N":2539,"load45Kgf":258.9,"f50":35.0,"load50N":2821,"load50Kgf":287.7,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-80","D":60,"d2":33.0,"l":80,"kN":70.5,"kKgf":7.19,"f40":32.0,"load40N":2256,"load40Kgf":230.0,"f45":36.0,"load45N":2538,"load45Kgf":258.8,"f50":40.0,"load50N":2820,"load50Kgf":287.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-90","D":60,"d2":33.0,"l":90,"kN":62.7,"kKgf":6.39,"f40":36.0,"load40N":2257,"load40Kgf":230.2,"f45":40.5,"load45N":2539,"load45Kgf":258.9,"f50":45.0,"load50N":2822,"load50Kgf":287.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-100","D":60,"d2":33.0,"l":100,"kN":56.4,"kKgf":5.75,"f40":40.0,"load40N":2256,"load40Kgf":230.0,"f45":45.0,"load45N":2538,"load45Kgf":258.8,"f50":50.0,"load50N":2820,"load50Kgf":287.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-125","D":60,"d2":33.0,"l":125,"kN":45.1,"kKgf":4.6,"f40":50.0,"load40N":2255,"load40Kgf":229.9,"f45":56.3,"load45N":2539,"load45Kgf":258.9,"f50":62.5,"load50N":2819,"load50Kgf":287.5,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-150","D":60,"d2":33.0,"l":150,"kN":37.6,"kKgf":3.83,"f40":60.0,"load40N":2256,"load40Kgf":230.0,"f45":67.5,"load45N":2538,"load45Kgf":258.8,"f50":75.0,"load50N":2820,"load50Kgf":287.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-175","D":60,"d2":33.0,"l":175,"kN":32.2,"kKgf":3.28,"f40":70.0,"load40N":2254,"load40Kgf":229.8,"f45":78.8,"load45N":2537,"load45Kgf":258.7,"f50":87.5,"load50N":2818,"load50Kgf":287.4,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-200","D":60,"d2":33.0,"l":200,"kN":28.2,"kKgf":2.88,"f40":80.0,"load40N":2256,"load40Kgf":230.0,"f45":90.0,"load45N":2538,"load45Kgf":258.8,"f50":100.0,"load50N":2820,"load50Kgf":287.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-225","D":60,"d2":33.0,"l":225,"kN":25.1,"kKgf":2.56,"f40":90.0,"load40N":2259,"load40Kgf":230.4,"f45":101.3,"load45N":2543,"load45Kgf":259.3,"f50":112.5,"load50N":2824,"load50Kgf":288.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-250","D":60,"d2":33.0,"l":250,"kN":22.6,"kKgf":2.3,"f40":100.0,"load40N":2260,"load40Kgf":230.5,"f45":112.5,"load45N":2543,"load45Kgf":259.3,"f50":125.0,"load50N":2825,"load50Kgf":288.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-275","D":60,"d2":33.0,"l":275,"kN":20.5,"kKgf":2.09,"f40":110.0,"load40N":2255,"load40Kgf":229.9,"f45":123.8,"load45N":2538,"load45Kgf":258.8,"f50":137.5,"load50N":2819,"load50Kgf":287.5,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-300","D":60,"d2":33.0,"l":300,"kN":18.8,"kKgf":1.92,"f40":120.0,"load40N":2256,"load40Kgf":230.0,"f45":135.0,"load45N":2538,"load45Kgf":258.8,"f50":150.0,"load50N":2820,"load50Kgf":287.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-350","D":60,"d2":33.0,"l":350,"kN":16.1,"kKgf":1.64,"f40":140.0,"load40N":2254,"load40Kgf":229.8,"f45":157.5,"load45N":2536,"load45Kgf":258.6,"f50":175.0,"load50N":2818,"load50Kgf":287.4,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-400","D":60,"d2":33.0,"l":400,"kN":14.1,"kKgf":1.44,"f40":160.0,"load40N":2256,"load40Kgf":230.0,"f45":180.0,"load45N":2538,"load45Kgf":258.8,"f50":200.0,"load50N":2820,"load50Kgf":287.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-450","D":60,"d2":33.0,"l":450,"kN":12.5,"kKgf":1.27,"f40":180.0,"load40N":2250,"load40Kgf":229.4,"f45":202.5,"load45N":2531,"load45Kgf":258.1,"f50":225.0,"load50N":2813,"load50Kgf":286.8,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF60-500","D":60,"d2":33.0,"l":500,"kN":11.3,"kKgf":1.15,"f40":200.0,"load40N":2260,"load40Kgf":230.5,"f45":225.0,"load45N":2543,"load45Kgf":259.3,"f50":250.0,"load50N":2825,"load50Kgf":288.1,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-70","D":70,"d2":38.5,"l":70,"kN":112.0,"kKgf":11.42,"f40":28.0,"load40N":3136,"load40Kgf":319.8,"f45":31.5,"load45N":3528,"load45Kgf":359.8,"f50":35.0,"load50N":3920,"load50Kgf":399.7,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-80","D":70,"d2":38.5,"l":80,"kN":98.0,"kKgf":9.99,"f40":32.0,"load40N":3136,"load40Kgf":319.8,"f45":36.0,"load45N":3528,"load45Kgf":359.8,"f50":40.0,"load50N":3920,"load50Kgf":399.7,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-90","D":70,"d2":38.5,"l":90,"kN":87.1,"kKgf":8.88,"f40":36.0,"load40N":3136,"load40Kgf":319.8,"f45":40.5,"load45N":3528,"load45Kgf":359.8,"f50":45.0,"load50N":3919,"load50Kgf":399.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-100","D":70,"d2":38.5,"l":100,"kN":78.4,"kKgf":7.99,"f40":40.0,"load40N":3136,"load40Kgf":319.8,"f45":45.0,"load45N":3528,"load45Kgf":359.8,"f50":50.0,"load50N":3920,"load50Kgf":399.7,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-125","D":70,"d2":38.5,"l":125,"kN":62.7,"kKgf":6.39,"f40":50.0,"load40N":3135,"load40Kgf":319.7,"f45":56.3,"load45N":3530,"load45Kgf":360.0,"f50":62.5,"load50N":3919,"load50Kgf":399.6,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-150","D":70,"d2":38.5,"l":150,"kN":52.3,"kKgf":5.33,"f40":60.0,"load40N":3138,"load40Kgf":320.0,"f45":67.5,"load45N":3530,"load45Kgf":360.0,"f50":75.0,"load50N":3923,"load50Kgf":400.0,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-175","D":70,"d2":38.5,"l":175,"kN":44.8,"kKgf":4.57,"f40":70.0,"load40N":3136,"load40Kgf":319.8,"f45":78.8,"load45N":3530,"load45Kgf":360.0,"f50":87.5,"load50N":3920,"load50Kgf":399.7,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-200","D":70,"d2":38.5,"l":200,"kN":39.2,"kKgf":4.0,"f40":80.0,"load40N":3136,"load40Kgf":319.8,"f45":90.0,"load45N":3528,"load45Kgf":359.8,"f50":100.0,"load50N":3920,"load50Kgf":399.7,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-250","D":70,"d2":38.5,"l":250,"kN":31.4,"kKgf":3.2,"f40":100.0,"load40N":3140,"load40Kgf":320.2,"f45":112.5,"load45N":3533,"load45Kgf":360.3,"f50":125.0,"load50N":3925,"load50Kgf":400.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-300","D":70,"d2":38.5,"l":300,"kN":26.1,"kKgf":2.66,"f40":120.0,"load40N":3132,"load40Kgf":319.4,"f45":135.0,"load45N":3524,"load45Kgf":359.3,"f50":150.0,"load50N":3915,"load50Kgf":399.2,"count40":1000000,"count45":500000,"count50":300000},{"catalogNo":"SWF70-350","D":70,"d2":38.5,"l":350,"kN":22.4,"kKgf":2.28,"f40":140.0,"load40N":3136,"load40Kgf":319.8,"f45":157.5,"load45N":3528,"load45Kgf":359.8,"f50":175.0,"load50N":3920,"load50Kgf":399.7,"count40":1000000,"count45":500000,"count50":300000}];

const products = [
  {
    id: "epn",
    code: "EPN",
    name: "Ejector Pin EPN",
    reading: "EPN P-L",
    example: "EPN 3-200 hoặc EPN 4.5-300",
    pRange: "1.0 – 13.0",
    lRange: "100 – 500",
    description:
      "Đây là sản phẩm bán hàng đầu tiên của ONC. Ejector Pin mã EPN được dùng phổ biến trong hệ thống khuôn mẫu, đáp ứng nhu cầu thay thế và đồng bộ trong sản xuất.",
    image: epnImage,
    rows: epnRows,
  },
  {
    id: "epj",
    code: "EPJ",
    name: "Ejector Pin EPJ",
    reading: "EPJ P-L",
    example: "EPJ 6-300 hoặc EPJ 10-1000",
    pRange: "4 – 25",
    lRange: "100 – 1000",
    description:
      "ONC tiếp tục bổ sung dòng Ejector Pin mã EPJ với dải quy cách lớn hơn, phù hợp cho nhiều nhu cầu sử dụng trong khuôn mẫu và sản xuất công nghiệp.",
    image: epjImage,
    rows: epjRows,
  },
  {
    id: "swf",
    code: "SWF",
    name: "Spring SWF",
    reading: "SWF D-L",
    example: "SWF25-50 hoặc SWF40-150",
    pRange: "D 6 – 70",
    lRange: "15 – 500",
    description:
      "Spring SWF là dòng sản phẩm lò xo khuôn mẫu có đầy đủ thông số tải, hành trình và tuổi thọ hoạt động, phù hợp cho nhiều ứng dụng đàn hồi trong khuôn mẫu.",
    image: swfImage,
    rows: swfRows,
  },
];

function formatNumber(value) {
  if (typeof value !== "number") return value;
  if (Number.isInteger(value)) return value.toLocaleString("vi-VN");
  return value.toLocaleString("vi-VN", { maximumFractionDigits: 2 });
}

function ProductFilters({ product, filters, setFilters, filteredRows }) {
  const options = useMemo(() => {
    if (product.id === "swf") {
      return {
        primary: [...new Set(product.rows.map((row) => row.D))].sort((a, b) => a - b),
        secondary: [...new Set(product.rows.map((row) => row.l))].sort((a, b) => a - b),
      };
    }
    return {
      primary: [...new Set(product.rows.map((row) => row.p))].sort((a, b) => a - b),
      secondary: [...new Set(product.rows.map((row) => row.l))].sort((a, b) => a - b),
    };
  }, [product]);

  const primaryLabel = product.id === "swf" ? "D" : "P";
  const secondaryLabel = "L";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-600">Tìm mã</span>
          <input
            value={filters.search}
            onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-400/50"
            placeholder={`Ví dụ: ${product.code}`}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-600">{primaryLabel}</span>
          <select
            value={filters.primary}
            onChange={(event) => setFilters((prev) => ({ ...prev, primary: event.target.value }))}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-400/50"
          >
            <option value="">Tất cả</option>
            {options.primary.map((value) => (
              <option key={String(value)} value={String(value)}>
                {value}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-600">{secondaryLabel}</span>
          <select
            value={filters.secondary}
            onChange={(event) => setFilters((prev) => ({ ...prev, secondary: event.target.value }))}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-400/50"
          >
            <option value="">Tất cả</option>
            {options.secondary.map((value) => (
              <option key={String(value)} value={String(value)}>
                {value}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={() => setFilters({ search: "", primary: "", secondary: "" })}
          className="mt-7 rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold transition hover:bg-slate-100"
        >
          Xóa lọc
        </button>
      </div>

      <div className="mt-4 text-sm text-slate-500">
        Hiển thị <span className="font-semibold text-slate-900">{filteredRows.length}</span> kết quả
      </div>
    </div>
  );
}

function ProductTable({ product, rows }) {
  if (product.id === "swf") {
    return (
      <div className="mt-6 overflow-auto rounded-2xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="sticky top-0 bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Catalog No.</th>
              <th className="px-4 py-3 font-semibold">D</th>
              <th className="px-4 py-3 font-semibold">d2</th>
              <th className="px-4 py-3 font-semibold">L</th>
              <th className="px-4 py-3 font-semibold">k (N/mm)</th>
              <th className="px-4 py-3 font-semibold">Load 40%</th>
              <th className="px-4 py-3 font-semibold">Load 45%</th>
              <th className="px-4 py-3 font-semibold">Load 50%</th>
              <th className="px-4 py-3 font-semibold">Tuổi thọ 40%</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.catalogNo} className="border-t border-slate-200 align-top">
                <td className="px-4 py-3 font-medium text-slate-900">{row.catalogNo}</td>
                <td className="px-4 py-3 text-slate-700">{formatNumber(row.D)}</td>
                <td className="px-4 py-3 text-slate-700">{formatNumber(row.d2)}</td>
                <td className="px-4 py-3 text-slate-700">{formatNumber(row.l)}</td>
                <td className="px-4 py-3 text-slate-700">{formatNumber(row.kN)}</td>
                <td className="px-4 py-3 text-slate-700">{formatNumber(row.load40N)} N</td>
                <td className="px-4 py-3 text-slate-700">{formatNumber(row.load45N)} N</td>
                <td className="px-4 py-3 text-slate-700">{formatNumber(row.load50N)} N</td>
                <td className="px-4 py-3 text-slate-700">{formatNumber(row.count40)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-auto rounded-2xl border border-slate-200">
      <table className="min-w-full text-left text-sm">
        <thead className="sticky top-0 bg-slate-100 text-slate-700">
          <tr>
            <th className="px-4 py-3 font-semibold">Catalog No.</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">P</th>
            <th className="px-4 py-3 font-semibold">L</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.catalogNo} className="border-t border-slate-200 align-top">
              <td className="px-4 py-3 font-medium text-slate-900">{row.catalogNo}</td>
              <td className="px-4 py-3 text-slate-700">{product.code}</td>
              <td className="px-4 py-3 text-slate-700">{formatNumber(row.p)}</td>
              <td className="px-4 py-3 text-slate-700">{formatNumber(row.l)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CompanyWebsite() {
  const [activeProduct, setActiveProduct] = useState("epn");
  const [filtersByProduct, setFiltersByProduct] = useState({
    epn: { search: "", primary: "", secondary: "" },
    epj: { search: "", primary: "", secondary: "" },
    swf: { search: "", primary: "", secondary: "" },
  });

  const selectedProduct = products.find((item) => item.id === activeProduct) || products[0];
  const filters = filtersByProduct[activeProduct];

  const filteredRows = useMemo(() => {
    return selectedProduct.rows.filter((row) => {
      const codeMatch = !filters.search || row.catalogNo.toLowerCase().includes(filters.search.toLowerCase());
      const primaryValue = selectedProduct.id === "swf" ? row.D : row.p;
      const primaryMatch = !filters.primary || String(primaryValue) === filters.primary;
      const secondaryMatch = !filters.secondary || String(row.l) === filters.secondary;
      return codeMatch && primaryMatch && secondaryMatch;
    });
  }, [selectedProduct, filters]);

  const setFilters = (updater) => {
    setFiltersByProduct((prev) => {
      const nextValue = typeof updater === "function" ? updater(prev[activeProduct]) : updater;
      return { ...prev, [activeProduct]: nextValue };
    });
  };

  const handleSelectProduct = (id) => {
    setActiveProduct(id);
    if (typeof document !== "undefined") {
      const detailSection = document.getElementById("chi-tiet-san-pham");
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-orange-400 text-lg font-bold text-white shadow-lg shadow-sky-200/60">
              ONC
            </div>
            <div>
              <div className="text-base font-bold leading-tight tracking-tight md:text-lg">
                {company.name}
              </div>
              <div className="text-xs text-slate-500">{company.english}</div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#gioi-thieu" className="transition hover:text-slate-900">Giới thiệu</a>
            <a href="#san-pham" className="transition hover:text-slate-900">Sản phẩm</a>
            <a href="#dich-vu" className="transition hover:text-slate-900">Dịch vụ</a>
            <a href="#ung-dung" className="transition hover:text-slate-900">Ứng dụng</a>
            <a href="#lien-he" className="transition hover:text-slate-900">Liên hệ</a>
          </nav>

          <a
            href="#san-pham"
            className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100"
          >
            Xem sản phẩm
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_left,rgba(249,115,22,0.12),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                Linh kiện khuôn mẫu • Giải pháp kỹ thuật • Hỗ trợ doanh nghiệp
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Giải pháp linh kiện khuôn mẫu đáng tin cậy cho sản xuất công nghiệp.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                ONC chuyên cung cấp linh kiện và giải pháp khuôn mẫu, hỗ trợ doanh nghiệp nâng cao độ chính xác, độ ổn định và hiệu quả trong vận hành sản xuất.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#lien-he"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5"
                >
                  Nhận tư vấn
                </a>
                <a
                  href="#dich-vu"
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Xem dịch vụ
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70"
                >
                  <div className="text-2xl font-bold text-sky-600 md:text-3xl">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="san-pham" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">Danh mục sản phẩm</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Danh mục linh kiện khuôn mẫu</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Mỗi mã sản phẩm được hiển thị thành một ô riêng có hình ảnh thực tế. Khi bấm vào ô sản phẩm, trang sẽ chuyển xuống phần danh sách chi tiết tương ứng.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => {
              const isActive = product.id === selectedProduct.id;
              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => handleSelectProduct(product.id)}
                  className={`overflow-hidden rounded-3xl border bg-white text-left shadow-sm transition hover:-translate-y-1 ${
                    isActive ? "border-sky-400 ring-2 ring-sky-100" : "border-slate-200 hover:border-sky-200"
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={product.image} alt={product.name} className="h-full w-full object-contain p-6" />
                  </div>
                  <div className="p-6">
                    <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                      {product.code}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <div className="text-xs text-slate-500">Dải chính</div>
                        <div className="mt-1 font-semibold">{product.pRange}</div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <div className="text-xs text-slate-500">Chiều dài</div>
                        <div className="mt-1 font-semibold">{product.lRange}</div>
                      </div>
                    </div>
                    <div className="mt-5 text-sm font-medium text-sky-700">Bấm để xem danh sách chi tiết</div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section id="chi-tiet-san-pham" className="mx-auto max-w-7xl px-6 py-4 pb-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="aspect-square overflow-hidden rounded-3xl bg-slate-100">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-contain p-8" />
              </div>
              <div className="mt-6 inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                Chi tiết sản phẩm
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{selectedProduct.name}</h3>
              <p className="mt-4 leading-7 text-slate-600">{selectedProduct.description}</p>
              <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Cách đọc mã</div>
                <div className="mt-2">
                  Mã sản phẩm được đọc theo cấu trúc <span className="font-semibold">{selectedProduct.reading}</span>.
                </div>
                <div className="mt-2 font-medium text-sky-700">Ví dụ: {selectedProduct.example}</div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Mã loại</div>
                  <div className="mt-1 text-lg font-semibold">{selectedProduct.code}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Dải chính</div>
                  <div className="mt-1 text-lg font-semibold">{selectedProduct.pRange}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Dải L</div>
                  <div className="mt-1 text-lg font-semibold">{selectedProduct.lRange}</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">Bộ lọc {selectedProduct.code}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">Tra cứu nhanh quy cách</h3>
                </div>
                <div className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                  Lọc theo mã và kích thước
                </div>
              </div>

              <ProductFilters
                product={selectedProduct}
                filters={filters}
                setFilters={setFilters}
                filteredRows={filteredRows}
              />

              <ProductTable product={selectedProduct} rows={filteredRows} />
            </div>
          </div>
        </section>

        <section id="gioi-thieu" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">Về ONC</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Đồng hành cùng doanh nghiệp với linh kiện và giải pháp khuôn mẫu phù hợp thực tế sản xuất.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                {company.name} hướng đến việc mang lại những sản phẩm và giải pháp hỗ trợ doanh nghiệp trong lĩnh vực cơ khí, khuôn mẫu và sản xuất công nghiệp.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-lg font-semibold">Giá trị nổi bật</div>
              <div className="mt-6 space-y-5 text-sm leading-6 text-slate-600">
                <div>
                  <div className="font-medium text-slate-900">Chất lượng kỹ thuật</div>
                  <div>Ưu tiên độ chính xác và tính đồng bộ trong từng nhóm linh kiện khuôn mẫu.</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">Tư vấn phù hợp</div>
                  <div>Đề xuất giải pháp sát với nhu cầu thực tế của doanh nghiệp và hệ thống sản xuất.</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">Hợp tác lâu dài</div>
                  <div>Xây dựng mối quan hệ tin cậy thông qua hỗ trợ nhanh chóng và định hướng bền vững.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="dich-vu" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">Dịch vụ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Các hạng mục ONC đang cung cấp cho khách hàng doanh nghiệp
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:bg-slate-50"
              >
                <div className="text-3xl">{service.icon}</div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ung-dung" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">Ứng dụng & giải pháp</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Những hướng hỗ trợ tiêu biểu dành cho khách hàng
              </h2>
            </div>
            <div className="text-sm text-slate-500">Đã bổ sung 3 sản phẩm: EPN, EPJ và Spring SWF</div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {applications.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm">
                <div className="text-sm text-orange-500">{item.type}</div>
                <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                <button type="button" className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100">
                  Tìm hiểu thêm
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="lien-he" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">Liên hệ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Kết nối với ONC để nhận tư vấn về linh kiện và giải pháp khuôn mẫu.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Chúng tôi sẵn sàng trao đổi để hỗ trợ doanh nghiệp lựa chọn giải pháp phù hợp với nhu cầu kỹ thuật và vận hành thực tế.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-600">
                <div><span className="font-medium text-slate-900">Email:</span> {company.email}</div>
                <div><span className="font-medium text-slate-900">Hotline:</span> {company.phones.join(" / ")}</div>
                <div><span className="font-medium text-slate-900">Địa chỉ:</span> {company.address}</div>
              </div>
            </div>

            <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-600">Họ và tên</span>
                  <input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-400/50" placeholder="Nguyễn Văn A" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-600">Số điện thoại</span>
                  <input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-400/50" placeholder="09xx xxx xxx" />
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm text-slate-600">Email</span>
                  <input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-400/50" placeholder="you@company.com" />
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm text-slate-600">Nhu cầu</span>
                  <input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-400/50" placeholder="Cần tư vấn linh kiện khuôn mẫu / giải pháp kỹ thuật / hỗ trợ doanh nghiệp..." />
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm text-slate-600">Nội dung trao đổi</span>
                  <textarea rows={5} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-400/50" placeholder="Mô tả ngắn nhu cầu, sản phẩm hoặc vấn đề kỹ thuật doanh nghiệp đang quan tâm..." />
                </label>
              </div>
              <button
                type="button"
                className="mt-6 rounded-2xl bg-gradient-to-r from-sky-400 to-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 lg:px-8">
        © 2026 {company.name}. All rights reserved.
      </footer>
    </div>
  );
}
