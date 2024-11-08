import React, { useState } from 'react';
import { View } from 'react-native';
import { Slider } from 'react-native-awesome-slider';

const Formulario = () => {
    const [valorSlider, setValorSlider] = useState(0);
    const [valorPicker, setValorPicker] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const opcionesPicker = [
        { label: 'Opción 1', value: 'opcion1' },
        { label: 'Opción 2', value: 'opcion2' },
        { label: 'Opción 3', value: 'opcion3' },
    ];

    const handleSliderChange = (valor) => {
        setValorSlider(valor);
    };

    const handlePickerChange = (valor) => {
        setValorPicker(valor);
    };

    const handleModalToggle = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                value={valorSlider}
                onValueChange={handleSliderChange}
            />
        </View>
    );
};

export default Formulario;
