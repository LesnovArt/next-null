
import Head from 'next/Head'

import A from '../components/A'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      {/* // ! meta tags */}
      <Head>
        <meta keywords={"ulbi tv nextjs" + keywords}></meta>
        <title>Main Page</title>
      </Head>

      <div className='navbar'>
        <A text='main' href='/' />
        <A text='users' href='/users' />
      </div>

    <div>
      {children}
      </div>
              {/* // ! styling place */}
        <style jsx>
          {`
            .navbar {
              background: orange;
              margin: 0px -15px;
              padding: 15px;
            }
          `}
        </style>
    </>
  );
}

export default MainContainer;
