//hàm randomDate sẽ chạy ra 1 ngày bất kỳ trong thời gian từ đâu đến đâu
//vd: nếu như muốn ngày bất kỳ trong năm 2021,
//ngày bắt đầu sẽ là newDate(2021, 0, 1)  --> format bỏ theo YYYY-MM-DD, trong đó tháng sẽ bắt đầu tính từ 0
//ngày kết thúc sẽ là newDate(2021, 11, 31)
// function randomDate(start, end) {
//   const x = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   return `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`
// }
function randomDateInYear(year) {
  const currentYear = new Date().getFullYear()
  let startDate = new Date(year, 0, 1)
  let endDate = new Date(year, 11, 0)

  if(year === currentYear){
    //nếu year truyền vào năm hiện tại, endDate sẽ là giá trị date của hiện tại
    endDate = new Date()
  }
  
  const x = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`
}

const textList = [
  'CBTT nhận được đơn xin từ nhiệm của Phó Chủ tịch HĐQT – Trần Việt Anh',
  'Thông báo mời họp Đại hội đồng cổ đông thường niên năm 2022',
  'Dự thảo Quy chế nội bộ về Quản trị Công ty',
  'Biên bản Đại hội đồng cổ đông thường niên 2020',
  'Bổ sung tài liệu Đại hội cổ đông thường niên 2019: Tờ trình số 13/TTr-HĐQT thông qua báo cáo kết việc hành trái phiếu chuyển đổi riêng lẻ',
  'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2018 – Cập nhật',
  'Mẫu bản cung cấp thông tin ứng viên',
  'Nghị quyết Đại hội đồng cổ đông thường niên năm 2020',
  'Biên bản Đại hội đồng cổ đông thường niên 2017',
  'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2021 – Cập nhật',
  'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
]

function randomText() {
  // const index = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  const index = Math.floor(Math.random() * textList.length); //The maximum is exclusive and the minimum is inclusive
  return textList [index]
}

function randomList(year) {
  //danh sách tối đa là 10 item
  const newArr = []
  const length = Math.floor(Math.random() * 10 + 1); //The maximum is exclusive and the minimum is inclusive
  for(let i = 0; i < length; i++) {
    const text = randomText()
    const date = randomDateInYear(year) 
    // console.log({text, date});
    newArr.push({text, date})
  }
  return newArr
}

export const getData = () => {
  const newArr = [
    {
      year: 2022,
      list: randomList(2022)
    },
    {
      year: 2021,
      list: randomList(2021)
    },
    {
      year: 2020,
      list: randomList(2020)
    },
    {
      year: 2019,
      list: randomList(2019)
    },
    {
      year: 2018,
      list: randomList(2018)
    },
    {
      year: 2017,
      list: randomList(2017)
    },
  ]
  return newArr
}

// const shareholderList = [
//   {
//     year: '2022',
//     list: [
//       {
//         text: 'CBTT nhận được đơn xin từ nhiệm của Phó Chủ tịch HĐQT – Trần Việt Anh',
//         date: randomDate(new Date(2022, 0, 1), new Date())
//       },
//       {
//         text: 'Thông báo mời họp Đại hội đồng cổ đông thường niên năm 2022',
//         date: randomDate(new Date(2022, 0, 1), new Date())
//       },
//       {
//         text: 'CBTT nhận được đơn xin từ nhiệm của Phó Chủ tịch HĐQT – Trần Việt Anh',
//         date: randomDate(new Date(2022, 0, 1), new Date())
//       },
//       {
//         text: 'CBTT nhận được đơn xin từ nhiệm của Phó Chủ tịch HĐQT – Trần Việt Anh',
//         date: randomDate(new Date(2022, 0, 1), new Date())
//       },
//     ],
//   },
//   {
//     year: '2021',
//     list: [
//       {
//         text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2021 – Cập nhật',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Mẫu bản cung cấp thông tin ứng viên',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2021 – Cập nhật',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Mẫu bản cung cấp thông tin ứng viên',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//       {
//         text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
//         date: randomDate(new Date(2021, 0, 1), new Date(2021, 11, 31))
//       },
//     ],
//   },
//   {
//     year: '2020',
//     list: [
//       {
//         text: 'Nghị quyết Đại hội đồng cổ đông thường niên năm 2020',
//         date: randomDate(new Date(2020, 0, 1), new Date(2020, 11, 31))
//       },
//       {
//         text: 'Biên bản Đại hội đồng cổ đông thường niên 2020',
//         date: randomDate(new Date(2020, 0, 1), new Date(2020, 11, 31))
//       },
//     ],
//   },
//   {
//     year: '2019',
//     list: [
//       {
//         text: 'Bổ sung tài liệu Đại hội cổ đông thường niên 2019: Tờ trình số 13/TTr-HĐQT thông qua báo cáo kết việc hành trái phiếu chuyển đổi riêng lẻ',
//         date: randomDate(new Date(2019, 0, 1), new Date(2019, 11, 31))
//       },
//     ],
//   },
//   {
//     year: '2018',
//     list: [
//       {
//         text: 'Dự thảo Quy chế nội bộ về Quản trị Công ty',
//         date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
//       },
//       {
//         text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
//         date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
//       },
//       {
//         text: 'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2018 – Cập nhật',
//         date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
//       },
//       {
//         text: 'Mẫu bản cung cấp thông tin ứng viên',
//         date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
//       },
//       {
//         text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
//         date: randomDate(new Date(2018, 0, 1), new Date(2018, 11, 31))
//       },
//     ],
//   },
//   {
//     year: '2017',
//     list: [
//       {
//         text: 'Nghị quyết Đại hội đồng cổ đông thường niên năm 2020',
//         date: randomDate(new Date(2017, 0, 1), new Date(2017, 11, 31))
//       },
//       {
//         text: 'Biên bản Đại hội đồng cổ đông thường niên 2017',
//         date: randomDate(new Date(2017, 0, 1), new Date(2017, 11, 31))
//       },
//       {
//         text: 'Thể lệ làm việc tại Đại hội đồng cổ đông thường niên năm 2021 – Cập nhật',
//         date: randomDate(new Date(2017, 0, 1), new Date(2017, 11, 31))
//       },
//       {
//         text: 'Phương án phát hành cổ phiếu tăng vốn từ nguồn vốn chủ sở hữu',
//         date: randomDate(new Date(2017, 0, 1), new Date(2017, 11, 31))
//       },
//     ],
//   },
// ]

// export default shareholderList