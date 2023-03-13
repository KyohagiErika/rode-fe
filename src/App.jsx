// import reactLogo from './assets/react.svg';
import RouterComponent from './Router';
import LayoutComponent from './components/Layout/Layout.component';
import './index.css';

import Stack from 'react-bootstrap/Stack';

function App() {
    return (
        <>
            <LayoutComponent>
                <RouterComponent />
            </LayoutComponent>
        </>
    );
}

export default App;
