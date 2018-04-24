import * as React from 'react';
import {render} from 'react-dom';
import {Counter} from './Counter';

const root = document.getElementById('root');
render(<Counter greeting="Hello" initialCount={0} />, root);