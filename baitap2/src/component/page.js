import React from 'react';
import ListNews from './list';
import Register from './register';
import NewsPost from './post';

class NewsPage extends React.Component {
  render() {
    let arrdataNewPage = [
      {
        img: "data:image/png;base64,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",
        title: "HƯỚNG DẪN HỌC REACTJS",
        postedBy: "Tín Nguyễn",
        time: "Th2 23.2020",
        topic: "Javascript",
        arrTopic: ["React"],
        indexStar: 4,
        content: "Hướng dẫn học React Js sao cho hiệu quả! Nếu bạn mới làm quen với React hoặc phần fornt-end mới...",
        link: "https://www.google.com/"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0vX9qYs0vqIVOustY2w-Reprxn6N4h6CPNC5kA0JomLFzCO-l&usqp=CAU",
        title: "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPONENT CHUẨN TRONG REACT",
        postedBy: "Khoa Võ",
        time: "Th5 20.2020",
        topic: "Javascript",
        indexStar: 5,
        arrTopic: ["Lập trình", "Môi trường phát triển", "React"],
        content: "Sau một thời gian tìm hiểu và áp dụng rất hiệu quả , hôm nay mình chia sẻ với các bạn cấu trúc thư...",
        link: "https://www.google.com/"
      },
      {
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAB5lBMVEUvF1UwAEwvFVQvEFIvF1MrFVJDHJAvEk8vEFAwAEkmEU8kEU0hEUuxMt0lFU0iFUkjotEfDEz3iv/yhf/thfvhbPUXDEVNInc/I5M6LZcgAEY1JnwpdLkvHFomjMUlk8kuXK0kmssrarMngb8sP3MtX60xTKU0P54c4PIwAEYZ9/0Y/f9LJm1fMX0vFVd6RpFvPIrDatWHSp7QduD3kv/egezTceV6QJRFI2eYULDtff21XMoPAEJ2O5LYbexXKnfPaOO0ZcqgTrkABT1qMIjVYu6pTMONTKlHIGrGVt+CNqDQVuzRZOjMd+rZeve7Rdy7WdarXNCiPcdZIn3AaehvJpWjMst8OJyIQbGcRsevSdq8ZeuvRd+bLcprS5akc9O/gfGiT9N4Xqa2kOq7ifCEL7YxFWgzLYBbSYa0nuq6mvKvbuuRK8SjMNh0I689H4SDe7fBt/yZgtOaZNiFTL+fSuBiKJNTnLdoxeZyvfNogtJSRJyrpOoyK2Fr5vRy4fxzbdx4Tthpap27y/4tUJGgsOd5Vr95Lsyy1/5GaZh0Q9EtPHik3f1NPIp+Yd6JveBuasp6hehcfa9WOKpGVYUvPYNuoe5xzPloqepFA4khs9oofaMjnsIfxeIuSJAlorgpbI8ni6bjkDmdAAAGbklEQVR4nO3Z/VfTVhgH8CS3aZO2tA0UKNhQSkNtecnY5gCRiTJRlA0mL85B2WRKcWPYbYoTtJONbsiKKAq+gIj+p3vS0rRu7Medctbv55z2pKHl3H7Pkyf33nIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPynRFE84KzdftDZEmfvbmntURT7uycVvfW9lm7E9S6lzVteXl7xfltBXA77Bx+WHzt27KNWRxFHdvjY28q95RWG9raqbCGJSke7N6u8BbVVQKFIOjpbj7d3dXWdEIxCcnSeoOP3P2jp7PB6P+wu9gAPEXuHt6JNEe0O5eOTlZUne5ycs/Xkya5TrYpDFLvPVVSgtPKU0972bPE4lN7KysqPP/mCno/vX5B6V9dxdC1Td7v3tLJ/XHWmr6/vLD16qnJnTnWdqPq3j5Yepd17zqwdZ/95iup8f/5Eb+UphGUSPhvMh8VVXRgYGLiQj4fC+hRhmfTBgrCcZwYMIy7zBMIqpBRUllg9MDTUP0SP3B3Q2dv3OcIyUVi9zuyhyBk5uarp2QzrbN9ZZ9HGdugopwcvZuMQXcNDQyNul3ukrGzYbcmcc57v60VYJse5wdEq0elyi/0XYrHhMcOlsrIxXXS7XS7u/MAXmGeZ7K2joz1nLn85HjOUFbg0fPnMyMBAtWgp9hgPCbvS2TE6OjExnslqjkxOTtJzJq1YbGho2mq1xnXERf1K/+rrK1dmZyempi6PTcfmbosul9u4+sR+Sm1kbHqYorL6fL5EycfF2DdXr127cuXm7ITudPbHYtNu82+usbm522533Grl4okaMsOVdFy117/97rurX3+lds7OVovu6flJKh+Bl6O8jf7q+n7uhmBJWBMWi4U7cpSoQrFHXDRC7Q8/3vv2p5Zau6DcnL1VNTI/f9tFxfbznYXFu9TSLdVWa0L3+eJGQVm4mXA4XLppUVY/3rtea3x/x93ZKX1qfpqySv5yf2Fx6dcbdJqqypfw1ey/3bZVX99YzPEWU+1vy8v3dJZ9od+8eWtqvlrkoncyWa2s3DAWh9TYa47kOpUt2diQkoo13KIS2PLy73zusnL8sb7+6y0qLO3+i8WlP1dW5uZ0Kq0j1NdV8yNSyu9nxRltkbHNBw+um19dfEhh0dqZrb7YWM9kFRsxFod0D7SZH5HSoZB60P/632O/rT3Q8/1aXFpfpxUgS+1nNd7XI3KWGeMWaL6HX62r44sx1qJj2trak9rcK9tDCusI1ZKayWpyfGLQKCzKKryVKy2WrgusluZlyNU+WnuUzBWK9HiJ0qJYXE9XViZj46OD5xTONnOUpgv1+2/htUAgyJXo3MEorUdatraEzo2Nx0vrdykt8cYcZZX5BUMNh7fU+sYtIyDGVgNBj1aihWW0oLXnz5/wxveX6jc2qLie0h2Qc1Vfvni8lbKyGbNQyZguCIxt1gU9wdLNitLavPP8+cIm4yV5cbE+2kkTdmNOJbocDmpYFjVcv2WT0n6/kFytCwY9O0IJZ0VpJR9RWgtPkulnz9I2mrBb4/m1so0m7JIkJ0OhUB1dgQGNL9F+lSPJmwuU1osXz+4m4nFaB9ZYbFmStNXYmEql/JmogjsaX9JllcVkLbCwsPjyZWbXiibsxu6CcQ+sb2xo8GeiCgQ1AVFlMZ4lXloTPl8uq8KoQqua5vEkEVUe9SqXhdP1uLFrNbNloKzSKpMZY6pnu1SnogfRc43dQnfAcFiw2aJpfyglC5mOzr/a3inNRc5BLHGfT98/NjatXktS0h8y9xfkV7uvEFYOhVVjzhik1w0NKZW6lbkpylNYcpGGdvgYu1b56ZXUmLkHps02xb+K7CKsHArraH7TimN+mi5o+Xj4PYSVZ+xa5cNiqjEL3clP12WEVYDCCpsv5DRFFfBsB9VcQHKkaQ8N3mRsxWQLSeJTgYBnU97Z3t5ejWbaFks2NWHqkGcL03TB+AlDTodoHajJgvxmd3d3T5N5xqJ7Tc2sxJfQhYStxoYUNSuNovLsqEZB8dpuJBLZe6Ml3zY170aLPcLDxPiNK7Nk9gQ39zs7499GIk2kublJxWqnkJTKbMTUbTIzF4FX30aaSQTL6L+RWFJLMv6d5iTwUfXNm2QUWf2DcFAXF3hsZAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD85/4C/uQ/Mwz2uBgAAAAASUVORK5CYII=",
        title: "HƯỚNG DẪN CÀI ĐẶT WEBPACK ĐỂ VIẾT REACTJS/ES6",
        postedBy: "Hoàng Cao",
        time: "Th5 28.2020",
        topic: "Javascript",
        indexStar: 1,
        arrTopic: ["Lập trình", "Môi trường phát triển", "React"],
        content: "Trên trang chủ của Reactjs thì các mã ví dụ điều được viết bằng ES5, mặc dù viết bằng ES5 hay ES6...",
        link: "https://www.google.com/"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpnFwY0sEagYGog3Hfi-MZ4S7JF4-VoRauINcCzbPsRwX41AxC&usqp=CAU",
        title: "HƯỚNG DẪN SỬ DỤNG REDUX HIỆU QUẢ TRONG ỨNG DỤNG REACT",
        postedBy: "Khoa võ",
        time: "Th2 23.2016",
        topic: "Javascript",
        indexStar: 0,
        arrTopic: ["Lập trình", "React", "React Native"],
        content: "Câu hỏi: khi nào thì nên sử dụng Appilication State {Redux Store}, khi nào thì nên sử dụng Local...",
        link: "https://www.google.com/"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSLbWID56OWDTa5wYnrfSpSwThy3fL2_xH1cITYvg6vgm8Z4Ek&usqp=CAU",
        title: "VÒNG ĐỜI CỦA COMPONENT TRONG REACTJS VỚI ES6",
        postedBy: "Tín Nguyễn",
        time: "Th2 23.2016",
        topic: "Javascript",
        indexStar: 2,
        arrTopic: ["Lập trình", "React"],
        content: "Có thể nói khái niệm component trongReact là một trong những thành phần quan trọng nhất của...",
        link: "https://www.google.com/"
      }
    ]

    let arrPost = [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuzvGf53w5Gf0Gvkhok4KyLmGecGjNrM5qUwflSLxHk_-P_TtP&usqp=CAU",
        title: "Hãy sẵn sàng với Serverless",
        time: "Th11 28.2016",
        arrTopic: ["Công nghệ", "Hệ điều hành", "Máy chủ web", "Môi trường phát triển"]
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ03UCx3O4mnpk5GwoBhi5LQLdfgdX-oF18LqC0xPAfye-nNm7Y&usqp=CAU",
        title: "Fullstack Station chuyển tên miền từ Business Card",
        time: "Th6 4.2018",
        arrTopic: ["Giao lưu"]
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIsWbqN5OzB6lTO71nNN23eEsMnS51nY6K-asvWPFO92HlCbc2&usqp=CAU",
        title: "Áp dụng các chiêu thức võ học vào lập trình",
        time: "Th4 10.2016",
        arrTopic: ["Lập trình"]
      },
      {
        img: "https://hnbmg.com/wp-content/uploads/nike-presto-react-black-white-1.jpg",
        title: "Kinh nghiệm dành cho người mới lập trình Python",
        time: "Th3 16.2018",
        arrTopic: ["Lập trình", "Môi trường phát triển", "Python"]
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHIA3p6e5lbwgFC5pKqiANnRfPooDBswnjjSePqXZDJpYJl7NA&usqp=CAU",
        title: "Hường dẫn tạo Graphql Server một cách dễ dàng - phần 1",
        time: "Th11 28.2016",
        arrTopic: ["Công nghệ", "GraphQL", "Nodejs"]
      }
    ]

    var addContent = arrdataNewPage.map((value, index) => {
      return <ListNews key={index} img={value.img} title={value.title} postedBy={value.postedBy} time={value.time} topic={value.topic} arrTopic={value.arrTopic} indexStar={value.indexStar} content={value.content} link={value.link} />;
    });

    var addContentPost = arrPost.map((value,index)=>{
      return <NewsPost key={index} img={value.img} title={value.title} time={value.time} arrTopic={value.arrTopic}/>
    });

    return (
      <div className="container">
        <div className="block_content">
          <div className="block_list_news">
            <h2 className="title_page">
              SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO
              </h2>
            {addContent}
          </div>
          <div className="block_sidebar">
            <Register />
            <div className="block_posts">
              <h3>BÀI VIẾT MỚI</h3>
              {addContentPost}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsPage;