import * as htmlRequest from '~/utils/htmlRequest';
export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await htmlRequest.get('users/suggested', {
            param: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
