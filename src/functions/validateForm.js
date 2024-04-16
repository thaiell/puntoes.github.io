export const validateForm = (...props) => {
    let response = true;

    props.forEach((item) => {
        if (typeof item === 'string') {
            if (item === undefined || item === null || item === "") {
                response = false;
            }
        } else if (typeof item === 'number') {
            if (item === undefined || item === null || item === 0) {
                response = false;
            }
        }
    });

    return response; 
}