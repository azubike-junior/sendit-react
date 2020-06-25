/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
export const createOrderValidation = (e, state) => {
    const {
        name,
        value
    } = e.target;
    const { errorFormat } = state
    
    switch (name) {
        case 'parcelName':
            errorFormat.parcelName =
                value.length < 2 ? 'parcel name must be more than 2 chars' : '';
            break;
        case 'destination':
            errorFormat.destination = value.length < 9 ? 'destination address must be more than 9 chars' : '';
            break;
        case 'pickupLocation':
            errorFormat.pickupLocation = value.length < 9 ? 'pick up address must be more than 9 chars' : '';
            break;
        case 'weight':
            errorFormat.parcelWeight = value.length <= 2 ? 'parcel weigth cant be lesser than 1' : '';
            break;
    }
    return errorFormat;
} 



