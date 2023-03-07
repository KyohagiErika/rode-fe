// import reactLogo from './assets/react.svg';
// import './App.css';
import RouterComponent from './Router';
import LayoutComponent from './components/Layout/Layout.component';

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
