export default defineEventHandler(() =>{
    
    const produtos = [
        {id:1, nome:'Ventilador',  categoria:'eletro',  preco: 278.90 , imagem:'/produtos/eletro/ventisol/ventilador-windlight.png' },
        {id:2, nome:'Cabo FlexSill 100x2.5', categoria:'eletrica', preco: 219.90, imagem: '/produto2.png'},
        {id:3, nome:'Fita Isolante 5mts',  categoria:'eletrica', marca:'adelbras', subcategorias:'essenciais',   preco: 2.90, imagem: '/produto3.png'},
        {id:4, nome:'Parafusadeira 3.8v' ,   preco: 49.90, imagem: '/produto4.png'},
        {id:5, nome:'Tomada Aria 10a' , categoria:'eletrica',  preco: 6.90, imagem: '/produtos/eletrica/tramontina/tomada-10-aria-simples.png'},
        {id:6, nome:'Tomada Dupla  10a' , categoria:'eletrica',  preco: 16.90, imagem: '/produtos/eletrica/tramontina/TOMADA-DUPLA-ARIA.png'},
        {id:7, nome:'Dijuntor mono 40a ' , categoria:'eletrica',  preco: 16.90, imagem: '/produtos/eletrica/tramontina/disjuntor-mono-40a.png'},
        {id:8, nome:'Durepox 50g ' , categoria:'adesivos', marca:'loctite', subcategorias:'essenciais',  preco: 6.90, imagem: '/produtos/quimicos/adesivos/loctite/durepox-50g.png'},
        {id:9, nome:'Adesivo 793 20g' , categoria:'adesivos', marca:'loctite', subcategorias:'essenciais',  preco: 6.90, imagem: '/produtos/quimicos/adesivos/tekbond/adesivo-20g-tekbond.png'},
        {id:10, nome:'Trena Kaef 3mts ' , categoria:'ferramentas', marca:'outros', subcategorias:'essenciais',  preco: 8.90, imagem: '/produtos/ferramentas/outros/trena-3mts-kaef.png'},
        {id:11, nome:'Extensao 3mts Jet ' , categoria:'eletrica', marca:'jetcoin', subcategorias:'essenciais',  preco: 12.90, imagem: '/produtos/eletrica/jetcoin/extensao-3mts-jetcoin.png'},
        {id:12, nome:'Alicate Univ 8" ' , categoria:'ferramentas', marca:'startools', subcategorias:'essenciais',  preco: 22.90, imagem: '/produtos/ferramentas/startools/alicate-universal8-startools.png'},
        {id:13, nome:'Descarga Alumasa" ' , categoria:'superpromo', marca:'alumasa', subcategorias:'superpromo',  preco: 29.90, imagem: '/produtos/superpromo/caixa-descarga-alumasa.png'},
        {id:14, nome:'Lampada 9w Branca Fox" ' , categoria:'superpromo', marca:'startools', subcategorias:'superpromo',  preco: 2.90, imagem: '/produtos/superpromo/lampada-9w-fox-6500k.png'},
        {id:15, nome:'Assento Simples Prime" ' , categoria:'superpromo', marca:'startools', subcategorias:'superpromo',  preco: 19.90, imagem: '/produtos/superpromo/assento-viatek-premium.png'},
    ];
    return produtos;
})