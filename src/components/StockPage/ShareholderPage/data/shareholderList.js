//hàm randomDate sẽ chạy ra 1 ngày bất kỳ trong thời gian từ đâu đến đâu
//vd: nếu như muốn ngày bất kỳ trong năm 2021,
//ngày bắt đầu sẽ là newDate(2021, 0, 1)  --> format bỏ theo YYYY-MM-DD, trong đó tháng sẽ bắt đầu tính từ 0
//ngày kết thúc sẽ là newDate(2021, 11, 31)
function randomDate(start, end) {
  const x = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`
}

// randomDate(new Date(2012, 0, 1), new Date())

const shareholderList = [
  {
    year: '2022',
    list: [
      {
        text: 'CBTT nhận được đơn xin từ nhiệm của Phó Chủ tịch HĐQT – Trần Việt Anh',
        date: randomDate(new Date(2022, 0, 1), new Date())
      },
      {
        text: 'Thông báo mời họp Đại hội đồng cổ đông thường niên năm 2022',
        date: randomDate(new Date(2022, 0, 1), new Date())
      },
      {
        text: 'CBTT nhận được đơn xin từ nhiệm của Phó Chủ tịch HĐQT – Trần Việt Anh',
        date: randomDate(new Date(2022, 0, 1), new Date())
      },
      {
        text: 'CBTT nhận được đơn xin từ nhiệm của Phó Chủ tịch HĐQT – Trần Việt Anh',
        date: randomDate(new Date(2022, 0, 1), new Date())
      },
    ],
  },
  {
    year: '2021',
    list: [
      {
        text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2021 – Cập nhật',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Mẫu bản cung cấp thông tin ứng viên',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2021 – Cập nhật',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Mẫu bản cung cấp thông tin ứng viên',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
      {
        text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
        date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
      },
    ],
  },
  {
    year: '2020',
    list: [
      {
        text: 'Nghị quyết Đại hội đồng cổ đông thường niên năm 2020',
        date: randomDate(new Date(2020, 0, 1), new Date(2020, 11, 31))
      },
      {
        text: 'Biên bản Đại hội đồng cổ đông thường niên 2020',
        date: randomDate(new Date(2020, 0, 1), new Date(2020, 11, 31))
      },
    ],
  },
  {
    year: '2019',
    list: [
      {
        text: 'Bổ sung tài liệu Đại hội cổ đông thường niên 2019: Tờ trình số 13/TTr-HĐQT thông qua báo cáo kết việc hành trái phiếu chuyển đổi riêng lẻ',
        date: randomDate(new Date(2019, 0, 1), new Date(2019, 11, 31))
      },
    ],
  },
  {
    year: '2018',
    list: [
      {
        text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
        date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
      },
      {
        text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
        date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
      },
      {
        text: 'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2018 – Cập nhật',
        date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
      },
      {
        text: 'Mẫu bản cung cấp thông tin ứng viên',
        date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
      },
      {
        text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
        date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
      },
    ],
  },
  {
    year: '2017',
    list: [
      {
        text: 'Nghị quyết Đại hội đồng cổ đông thường niên năm 2020',
        date: randomDate(new Date(2017, 0, 1), new Date(2017, 11, 31))
      },
      {
        text: 'Biên bản Đại hội đồng cổ đông thường niên 2017',
        date: randomDate(new Date(2017, 0, 1), new Date(2017, 11, 31))
      },
      {
        text: 'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2021 – Cập nhật',
        date: randomDate(new Date(2017, 0, 1), new Date(2017, 11, 31))
      },
      {
        text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
        date: randomDate(new Date(2017, 0, 1), new Date(2017, 11, 31))
      },
    ],
  },
]

export default shareholderList