import { useState, useRef } from 'react';

import { BoxEditor } from '../styled';

import { htmlLanguage } from '@codemirror/lang-html';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';
import Stack from 'react-bootstrap/Stack';

const ArenaCSSCode = () => {
    const [code, setCode] = useState();
    const [count, setCount] = useState(0);
    const iframeRef = useRef();
    const [diffChecked, setDiffChecked] = useState(false);

    console.log(code);
    console.log(count);

    return (
        <BoxEditor>
            <CodeMirror
                className="editor "
                value={code}
                width="100%"
                theme={tokyoNight}
                height="calc(100vh - 210px);"
                extensions={[htmlLanguage]}
                options={{ lineWrapping: 'true', lineNumbers: 'true', autoCloseBrackets: true }}
                onChange={(e) => {
                    setCode(e);
                    setCount(e.length);
                }}
            />
        </BoxEditor>
    );
};

export default ArenaCSSCode;
// <iframe
// id="source"
// className="iframe-output"
// // width="400px"
// // height="300px"
// title="output"
// style={{ mixBlendMode: diffChecked ? 'difference' : 'normal' }}
// scrolling="no"
// ref={iframeRef}
// srcDoc={code}
// ></iframe>
