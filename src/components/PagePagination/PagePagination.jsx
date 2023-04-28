import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

export const PagePagination = () => {
    return (
        <Box
            sx={{
                background: '#FAFAFA',
                borderRadius: '16px',
                padding: { xs: '16px 20px', md: '20px 32px' },
                margin: '0 auto',
                maxWidth: '445px',
            }}
        >
            <Pagination
                count={8}
                color="primary"
                sx={{
                    display: 'flex', justifyContent: 'center',
                    '& .MuiPaginationItem-root': {
                        fontSize: { xs: '14px', md: '16px' },
                        lineHeight: { xs: '1.29', md: '1.5' },
                        fontWeight: '600',
                        minWidth: { xs: '28px', md: '32px' },
                        height: { xs: '28px', md: '32px' },
                    },
                }}
                boundaryCount={999}
                siblingCount={999}
            />
        </Box>
    );
};
