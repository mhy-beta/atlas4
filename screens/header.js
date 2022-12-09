import {StatusBar, Box, HStack, IconButton, Text, Icon, Center} from "native-base";
export default function HeaderScreen() {
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
            <HStack alignItems="center">
                <IconButton icon={<Icon size="sm" name="menu" color="white" />} />
                <Text color="white" fontSize="20" fontWeight="bold">AppBar
                </Text>
            </HStack>
            <HStack>
                <IconButton icon={<Icon name="favourite" size="sm" color="white" />} />
                <IconButton icon={<Icon name="back" size="sm" color="white" />} />
                <IconButton icon={<Icon name="down" size="sm" color="white" />} />
            </HStack>
        </HStack>
    </>;
}
