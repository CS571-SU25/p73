// import React from 'react';
// import { Container } from 'react-bootstrap';

// export default function AboutPage() {
//   return (
//     <Container className='py-4'>
//       <h1 className='mb-4'>About</h1>
//       <p className='lead'>This app lets you rank albums by dragging them into tier lists.</p>
//       <p>Built with React, React Bootstrap, and DnD Kit.</p>
//     </Container>
//   );
// }

import React from 'react';
import { Container } from 'react-bootstrap';

export default function AboutPage() {
  return (
    
      <Container>
        <h1 >About</h1>
        <p >Britpop emerged in the early 1990s as a distinctly British response to the dominance of American grunge and alternative rock. 
            Rooted in British guitar pop of the 1960s and 70s, the movement celebrated British identity, culture, and everyday life, often with cheeky, 
            observational lyrics and melodic hooks. Bands like Blur, Oasis, Pulp, and Suede defined the genre’s core, blending swagger, wit, and working-class pride. 
            Oasis brought anthemic confidence, while Blur offered sharp social commentary, and Pulp added eccentric storytelling. 
            Britpop wasn’t just music—it became a cultural movement tied to “Cool Britannia,” influencing fashion, film, and national politics. 
            The rivalry between Blur and Oasis captured public imagination, fueling press coverage and record sales. By the late '90s, Britpop's initial wave faded, 
            but its legacy endures in British music and popular culture. It defined a generation, revived national musical pride, and produced some of the UK's most beloved albums.
            This app lets you rank albums by dragging them into tier lists.
        </p>
        <img src={'p73/assets/britpop2.jpg'} alt={`Britpop`} width={400}></img>
        <p>
          Built with <strong>React</strong>, <strong>React Bootstrap</strong>, and <strong>Dnd Kit</strong>.
        </p>
      </Container>
    
  );
}
