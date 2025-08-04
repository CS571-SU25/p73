// import React from 'react';
// import { Container } from 'react-bootstrap';

// export default function HomePage() {
//   return (
//     <Container className='py-4'>
//       <h1 className='mb-4'>Welcome to Album Tierer</h1>
//       <p className='lead'>Drag and drop your favorite albums into tiers from S to E.</p>
//     </Container>
//   );
// }

import React from 'react';
import { Container } from 'react-bootstrap';

export default function HomePage() {
  return (
    <Container className='center-text'> 
      <h1>Welcome to Britpop Album Tierer</h1>
      <img src={'p73/assets/britpop.png'} alt={`Britpop`} width={400}></img>
      <p >
        Drag and drop your favorite albums into tiers from S to E.
      </p>
    </Container>
  );
}

