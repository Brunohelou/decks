import { Settings } from "http2";


export interface Size {
    size: string;
    size_id:number;
  }

export interface Color {
    color_name:string,
    color_hex:string,
    color_id: number,
    color_url:string
}

const colors: Color[] = [
    {
        color_name:'white',
        color_hex:'#12345',
        color_id:1,
        color_url:'https://www.colorskates.com/thumbnails/images/smart/images/products/2020/12/600x727x90-GBD20HOL001-1.jpg'
        
    },
    {
    
        color_name:'black',
        color_hex:'#12445',
        color_id:2,
        color_url:'https://www.colorskates.com/thumbnails/images/smart/images/products/2020/12/600x727x90-GBD20HOL002-1_1608991659.jpg'
    
    },   
    {
    
        color_name:'purple',
        color_hex:'#12245',
        color_id:3,
        color_url:'https://www.colorskates.com/thumbnails/images/smart/images/products/2020/12/600x727x90-GBD20HOL004-1_1608991889.jpg'
    
    },   

];

const sizes: Size[] = [
    {
        size:'m',
        size_id:1
    },
    {
        size:'p',
        size_id:2
    },
    {
        size:'g',
        size_id:3
    }
];

export const getColors = () => colors;

export const getColor = (id: number) => colors.find(m => m.color_id === id);

export const getSizes = () => sizes;

export const getSize = (id: number) => sizes.find(m => m.size_id === id);
