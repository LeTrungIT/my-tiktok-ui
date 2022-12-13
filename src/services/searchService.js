import * as htmlRequest from '~/utils/htmlRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await htmlRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
