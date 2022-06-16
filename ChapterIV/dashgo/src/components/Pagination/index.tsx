import { Button, Stack } from "@chakra-ui/react";
import { PaginationIten } from "./PaginationIten";

export function Pagination() {
    return (
        <Stack direction='row' mt='8' spacing='6' justify='space-between' align='center'>
            
            <p>0 - 10 de 100</p>
            <Stack direction='row' spacing='2'>
                <PaginationIten isCurrent number={1} />
                <PaginationIten number={2} />
                <PaginationIten number={3} />
                <PaginationIten number={4} />
                <PaginationIten number={5} />
            </Stack>
        </Stack>
    )
}