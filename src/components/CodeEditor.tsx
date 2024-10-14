import React, { useState } from 'react';
import { Box, Flex, Text, Button, Alert, AlertIcon } from '@chakra-ui/react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

// Props 타입 정의
type CodeEditorProps = {
    setOutput: (output: string) => void; // sRetOutput prop의 타입 정의
    language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
    const { setOutput, language } = props; // props에서 setOutput과 language를 destructuring

    const [code, setCode] = useState<string>('// Type your code here');
    const [output, setOutputState] = useState<string>(''); // output을 상태로 관리
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const runCode = () => {
        setLoading(true);
        setError(null);

        axios.post<{ output: string }>('/execute-code', {
            code: code,
            language: language, // props에서 받아온 language 사용
        })
            .then(response => {
                setOutputState(response.data.output); // 상태 업데이트
                setOutput(response.data.output); // 부모 컴포넌트의 setOutput 호출
            })
            .catch(err => {
                setError("Error executing code: " + err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Flex direction="row" h="100vh">
            {/* Code Editor Section */}
            <Box w="70%" p={4} bg="gray.900">
                <Editor
                    width="100%"
                    height="100%"
                    language={language} // props에서 받아온 language 사용
                    theme="vs-dark"
                    value={code}
                    onChange={(newCode) => setCode(newCode || '')}
                    options={{
                        tabSize: 4,
                        insertSpaces: false,
                    }}
                />
            </Box>

            {/* Output Section */}
            <Box w="30%" p={4} bg="gray.800">
                <Box bg="gray.700" p={2} borderRadius="md">
                    <Text color="white">{output}</Text>
                </Box>
                {error && (
                    <Alert status="error" mt={4}>
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
                <Button
                    colorScheme="teal"
                    mt={4}
                    onClick={runCode}
                    isLoading={loading} // 로딩 상태일 때 버튼 비활성화
                    isDisabled={loading} // 로딩 상태일 때 버튼 비활성화
                >
                    Run Code
                </Button>
            </Box>
        </Flex>
    );
};

export default CodeEditor;
