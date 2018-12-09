export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
          font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono', 'Courier New', monospace, serif;
          font-weight: 400;
      }
      body {
        margin: 0;
        background: black;
      }
    `}</style>
  </main>
)
