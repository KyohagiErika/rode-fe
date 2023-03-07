import { useState, useRef } from 'react';

import { htmlLanguage } from '@codemirror/lang-html';
import CodeMirror from '@uiw/react-codemirror';
import Stack from 'react-bootstrap/Stack';

const TestCodeMirror = () => {
    const [code, setCode] = useState();
    const [count, setCount] = useState(0);
    const iframeRef = useRef();
    const [diffChecked, setDiffChecked] = useState(false);

    console.log(code);
    console.log(count);

    return (
        <>
            <div> test codemirror</div>
            <Stack direction="horizontal" gap={3}>
                <CodeMirror
                    className="editor "
                    value={code}
                    width="500px"
                    height="calc(100vh - 88px);"
                    extensions={[htmlLanguage]}
                    options={{ lineWrapping: 'true', lineNumbers: 'true', autoCloseBrackets: true }}
                    onChange={(e) => {
                        setCode(e);
                        setCount(e.length);
                    }}
                />
                <iframe
                    id="source"
                    className="iframe-output"
                    // width="400px"
                    // height="300px"
                    title="output"
                    style={{ mixBlendMode: diffChecked ? 'difference' : 'normal' }}
                    scrolling="no"
                    ref={iframeRef}
                    srcDoc={code}
                ></iframe>
            </Stack>
        </>
    );
};

export default TestCodeMirror;
