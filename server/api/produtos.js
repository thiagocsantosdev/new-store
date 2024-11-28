export default defineEventHandler(() =>{
    
    const produtos = [
        {id:1, nome:'Tanque Fibra 24Lts',    preco: 78.90 , imagem:'/produto1.png' },
        {id:2, nome:'Cabo FlexSill 100x2.5', preco: 219.90, imagem: '/produto2.png'},
        {id:3, nome:'Fita Isolante 5mts',    preco: 2.90, imagem: '/produto3.png'},
        {id:4, nome:'Parafusadeira 3.8v' ,   preco: 49.90, imagem: '/produto4.png'},
    ];
    return produtos;
})