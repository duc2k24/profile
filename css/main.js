// Lấy tất cả các phần tử cần kích hoạt
const elements = document.getElementById('skills');

// Khai báo hàm xử lý sự kiện scroll
function handleScroll() {

  // Với mỗi phần tử, kiểm tra xem nó đã xuất hiện trên màn hình chưa
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      // Nếu phần tử đã xuất hiện trên màn hình, thêm class "active" vào nó
      element.classList.add('active');
    }
  });
}

// Hàm kiểm tra xem phần tử đã xuất hiện trên màn hình chưa
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Đăng ký hàm xử lý sự kiện scroll
window.addEventListener('scroll', handleScroll);
