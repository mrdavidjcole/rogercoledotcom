import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>rogercole.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="title-start">Welcome to the personal homepage of</p>

        <h1 className="title">Roger Cole</h1>

        <img className="roger-photo" src="/rogercole.jpeg" />

        <p className="description">Husband, Dad, Grandpa, Consultant</p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title-start {
          font-size: 1rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .roger-photo {
          margin-top: 1rem;
          width: 300px;
          border-radius: 50%;
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 80%);
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
