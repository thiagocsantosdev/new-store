export default defineEventHandler(() =>{
    
    const produtos = [
        {id:12, nome:'Ventilador',  categoria:'eletro',  preco: 278.90 , imagem:'/produtos/eletro/ventisol/ventilador-windlight.png' },
        {id:2, nome:'Cabo FlexSill 100x2.5', categoria:'eletrica', preco: 219.90, imagem: '/produto2.png'},
        {id:3, nome:'Fita Isolante 5mts',  categoria:'eletrica',   preco: 2.90, imagem: '/produto3.png'},
        {id:4, nome:'Parafusadeira 3.8v' ,   preco: 49.90, imagem: '/produto4.png'},
        {id:5, nome:'Tomada Aria 10a' , categoria:'eletrica',  preco: 6.90, imagem: '/produtos/eletrica/tramontina/tomada-10-aria-simples.png'},
        {id:6, nome:'Tomada Dupla  10a' , categoria:'eletrica',  preco: 16.90, imagem: '/produtos/eletrica/tramontina/TOMADA-DUPLA-ARIA.png'},
        {id:7, nome:'Dijuntor mono 40a ' , categoria:'eletrica',  preco: 16.90, imagem: '/produtos/eletrica/tramontina/disjuntor-mono-40a.png'},
        {id:8, nome:'Durepox 50g ' , categoria:'adesivos',  preco: 6.90, imagem: '/produtos/quimicos/adesivos/loctite/durepox-50g.png'},

    ];
    return produtos;
})