import React from 'react'

const Board = () => {
  const dummy = [
    { id: 1, title: "React Router 시작하기" },
    { id: 2, title: "URL 파라미터 이해하기" },
    { id: 3, title: "NavLink와 활성 스타일" },
  ];
  return (
    <section>
      <h1>게시글</h1>
      <ul>
        {dummy.map((b) => (
          <li key={b.id}>
            <Link to={`/board/${b.id}`}>
              {b.id} -   {b.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Board