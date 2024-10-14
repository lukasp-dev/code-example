import { Flex, Box, Text, VStack, Heading, Divider, Code } from "@chakra-ui/react";
import CodeEditor from "../components/CodeEditor"; // Ensure this can handle Python
import { useState } from "react";
import '../App.css';

const Programming = () => {
    const [output, setOutput] = useState<string>("");

    return (
        <Flex direction={{ base: "column", md: "row" }} p={4} height="100vh" backgroundColor="gray.50">
            {/* Problem Description Area */}
            <Box
                w={{ base: "100%", md: "30%" }}
                p={4}
                bg="white"
                borderRight={{ base: "none", md: "1px solid #ddd" }}
                boxShadow="md"
                overflowY="auto"
                mb={{ base: 4, md: 0 }}
            >
                <Heading size="lg" mb={4}>704. Binary Search</Heading>
                <VStack align="start" spacing={3}>
                    <Text>
                        Given an array of integers <Code>nums</Code> which is sorted in ascending order,
                        and an integer <Code>target</Code>, write a function to search <Code>target</Code> in <Code>nums</Code>.
                        If <Code>target</Code> exists, return its index. Otherwise, return <Code>-1</Code>.
                    </Text>
                    <Divider />
                    <Text fontWeight="bold">Example 1:</Text>
                    <Text>Input: nums = [-1, 0, 3, 5, 9, 12], target = 9</Text>
                    <Text>Output: 4</Text>
                    <Text>Explanation: 9 exists in nums and its index is 4.</Text>

                    <Text fontWeight="bold">Example 2:</Text>
                    <Text>Input: nums = [-1, 0, 3, 5, 9, 12], target = 2</Text>
                    <Text>Output: -1</Text>
                    <Text>Explanation: 2 does not exist in nums so return -1.</Text>
                </VStack>
            </Box>

            {/* Code Editor and Output Area */}
            <Flex direction="column" w={{ base: "100%", md: "70%" }} p={4} bg="white" boxShadow="md" borderRadius="md">
                {/* Code Editor */}
                <Box flex="1" bg="white" boxShadow="md" p={4} borderRadius="md" overflowY="auto">
                    <CodeEditor
                        setOutput={setOutput}
                        language="python" //여기에서 무슨 랭귀지를 쓸지 설정할 수 있음.
                    />
                </Box>

                {/* Output after code execution */}
                <Box mt={4} p={4} bg="white" boxShadow="md" borderRadius="md" overflowY="auto">
                    <Text fontWeight="bold" mb={2}>Output:</Text>
                    <Text>{output}</Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Programming;
