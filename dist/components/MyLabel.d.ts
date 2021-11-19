/// <reference types="react" />
import './mylabel.css';
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
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
export default MyLabel;
