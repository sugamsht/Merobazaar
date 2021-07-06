import React from 'react';

import ImageInputList from '../lists/ImageInputList';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from "formik";


function FormImagePicker({ name, }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    };

    const handleRemove = (uri) => {
        setFieldValue(
            name,
            imageUris.filter((imageUri) => imageUri !== uri)
        );
    };


    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;