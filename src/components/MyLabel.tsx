import React from 'react'
import './mylabel.css'

export interface MyLabelProps {
    /**
    * Este es el mensaje a mostar en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * convierte todo a mayusculas
    */
    allCaps?: boolean;
    /**
    * colores basicos del botón
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * color personalizado de la fuente
    */
    fontColor?: string;
    /**
    * color personalizado del fondo del boton
    */
    backgroundColor?: string;
    /**
    * Este es la cantidad de 10px de Border radius
    */
    borderRadius?: string;

}


export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor,
    backgroundColor = 'transparent',
    borderRadius = '5px'
}: MyLabelProps) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{ color: fontColor, backgroundColor, borderRadius, padding: '0.25em 0.5em' }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}

export default MyLabel;
