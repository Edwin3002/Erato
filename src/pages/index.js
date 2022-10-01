

export default function Home() {
  return (
    <div >
      <article className='md:flex w-full h-screen'>
        <section className='w-full md:w-3/4 h-1/2 md:h-3/4 p-4'>
          <iframe className='w-full min-h-[350px] md:min-h-[700px] rounded-lg' src="https://www.youtube.com/embed/ARDaOC7Pxmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section className='w-full md:w-1/4 h-5/6'>
          <h1 className='text-center text-4xl text-bold my-4'>Lista de cursos</h1>
          <ul className=' flex flex-col justify-around h-3/4'>
            <li className='flex'>
              <span className='bg-red-400 hover:bg-red-600 rounded px-10 py-2 m-auto'>Curso 1</span>
            </li>
            <li className='flex'>
              <span className='bg-red-400 hover:bg-red-600 rounded px-10 py-2 m-auto'>Curso 2</span>
            </li>
            <li className='flex'>
              <span className='bg-red-400 hover:bg-red-600 rounded px-10 py-2 m-auto'>Curso 3</span>
            </li>
            <li className='flex'>
              <span className='bg-red-400 hover:bg-red-600 rounded px-10 py-2 m-auto'>Curso 4</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}
