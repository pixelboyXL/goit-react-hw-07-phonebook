import { Box } from 'components/Box';
import { FallingLines } from 'react-loader-spinner';
import { FallingLinesStyled } from 'components/GlobalStyles';

export const Loading = () => {
    return (
        <Box
            display="flex"
            justifyContent="center">
                <FallingLines {...FallingLinesStyled} />
        </Box>
    );
};