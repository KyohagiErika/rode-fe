import { useState } from 'react';

import SelectBasicExample from '../../../components/Select';
import { toastWarning } from '../../../components/Toast';
import submitApi from '../../../utils/api/submitApi';

// import DropdownLang from './DropdownLang';
import { htmlLanguage } from '@codemirror/lang-html';
import { javaLanguage } from '@codemirror/lang-java';
import CodeMirror from '@uiw/react-codemirror';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const SubmitEx = () => {
    const [code, setCode] = useState();
    const [count, setCount] = useState(0);
    const [lang, setLang] = useState();

    const [err, setErr] = useState();
    const onSubmit = async () => {
        let formData = {
            roomId: '5c94e661-cd42-4323-ae31-1da6add32b19',
            questionId: '4fab6032-5150-4d5f-a44f-5c4c11e3fda8',
            // code: '#include <stdio.h>\n\nint doub(int a) {\n    return a*2;\n}\n\nint main()\n{\n    int a;\n    scanf("%d", &a);\n    printf("%d", doub(a));\n    return 0;\n}',
            code: code,

            language: lang,
        };
        if (lang) {
            await submitApi.testScore(formData).then((res) => {
                console.log(res);
                if (res.data.status === 400) {
                    setErr(res.data.err);
                }
            });
        } else {
            setLang(true);
            toastWarning('You need to choose a language');
        }
    };

    // <DropdownLang state={lang} action={setLang} />
    return (
        <div>
            <SelectBasicExample
                state={lang}
                action={setLang}
                mainOption="Select some language"
                items={[
                    { key: 'C_CPP', value: 'C' },
                    { key: 'java', value: 'Java' },
                ]}
            />
            <Stack direction="horizontal" gap={2}>
                <Stack>
                    <h2> Your answer here</h2>
                    <CodeMirror
                        className="editor"
                        value={code}
                        width="500px"
                        height="calc(100vh - 88px)"
                        extensions={[htmlLanguage]}
                        options={{
                            lineWrapping: 'true',
                            lineNumbers: 'true',
                            autoCloseBrackets: 'true',
                        }}
                        onChange={(e) => {
                            setCode(e);
                            setCount(e.length);
                        }}
                    />
                </Stack>

                {err && (
                    <Stack>
                        <h2>Result: </h2>
                        <CodeMirror
                            className="editor"
                            value={err}
                            width="500px"
                            height="calc(100vh - 88px)"
                            extensions={[htmlLanguage]}
                            options={{
                                lineWrapping: 'true',
                                lineNumbers: 'true',
                                autoCloseBrackets: 'true',
                            }}
                            readOnly={true}
                        />
                    </Stack>
                )}
            </Stack>

            <Button onClick={onSubmit} className="mt-4" disabled={!code}>
                test
            </Button>
        </div>
    );
};

export default SubmitEx;
