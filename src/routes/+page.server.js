export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const file = data.get('file');
        console.log('### we be here', file);
        return { success: true };
    }
};