/**
 * Handle a modal
 * @param  {String}   action    Action to perform on the modal (accept, dismiss)
 * @param  {String}   modalType Type of modal (alertbox, confirmbox, prompt)
 */
export default async (action, modalType) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command = `${action.slice(0, 1).toLowerCase()}${action.slice(1)}Alert`;
    /**
     * Alert boxes can't be dismissed, this causes Chrome to crash during tests
     */
    if (modalType === 'alertbox') {
        command = 'acceptAlert';
    }
    await browser[command]();
};
