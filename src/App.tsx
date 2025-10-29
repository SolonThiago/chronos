import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading>
        Meu App
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quo consequuntur, ea magnam dolorum ex quas
        iure tempora corporis, a eos harum at eius aliquid, dignissimos inventore quod culpa nostrum.
      </p>
    </>
  );
}
