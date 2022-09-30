const equipamentos = [

  {
    id: 0,
    nome: 'Dell OptiPlex 380',
    img: 'img/equipamentos/optiplex380.png',
    memoria: 'Memória RAM: DDR3 - Desktop',
    processador: 'Processador: Intel® Core™2 Duo'
  },
  {
    id: 1,
    nome: 'Dell OptiPlex 390',
    img: 'img/equipamentos/optiplex390.png',
    memoria: 'Memória RAM: DDR3 - Desktop',
    processador: 'Processador: Intel i3-2120'
  },
  {
    id: 2,
    nome: 'Dell OptiPlex 3010',
    img: 'img/equipamentos/optiplex3010.png',
    memoria: 'Memória RAM: DDR3 - Desktop',
    processador: 'Processador: Intel i3-3220'
  },
  {
    id: 3,
    nome: 'Dell OptiPlex 3020',
    img: 'img/equipamentos/mini20.png',
    memoria: 'Memória RAM: DDR3 - Notebook',
    processador: 'Processador: Intel i3-4160T'
  },
  {
    id: 4,
    nome: 'Dell OptiPlex 3040 mini',
    img: 'img/equipamentos/mini40.png',
    memoria: 'Memória RAM: DDR4 - Notebook',
    processador: 'Processador: Intel i3-6100T'
  },
  {
    id: 5,
    nome: 'Dell OptiPlex 3050 mini',
    img: 'img/equipamentos/mini50.png',
    memoria: 'Memória RAM: DDR4 - Notebook',
    processador: 'Processador: Intel i5-7500T'
  },
  {
    id: 6,
    nome: 'Dell OptiPlex 3060 mini',
    img: 'img/equipamentos/mini60.png',
    memoria: 'Memória RAM: DDR4 - Notebook',
    processador: 'Processador: Intel i3-8100T'
  },
  {
    id: 7,
    nome: 'Dell OptiPlex 3070 mini',
    img: 'img/equipamentos/mini70.png',
    memoria: 'Memória RAM: DDR4 - Notebook',
    processador: 'Processador: Intel i5-9500T'
  },
  {
    id: 8,
    nome: 'Dell OptiPlex 3080 mini',
    img: 'img/equipamentos/mini80.png',
    memoria: 'Memória RAM: DDR4 - Notebook',
    processador: 'Processador: Intel i5-10500T'
  },
  {
    id: 9,
    nome: 'Dell Latitude 3420',
    img: 'img/equipamentos/latitude3420.png',
    memoria: 'Memória RAM: DDR4 - Notebook',
    processador: 'Processador: Intel i5-10500T'
  },
]

iniciarEquipamentos = () => {
    var containerEquipamentos = document.getElementById('container__equipamentos');
    equipamentos.map((val)=>{

      containerEquipamentos.innerHTML+= 
      `<div class="equipamento-single">
        <h3 class="titulo">`+val.nome+`</h3>
        <img src="`+val.img+`"/>
        <h3>`+val.processador+`</h3>
        <h3>`+val.memoria+`</h3>
        <hr></hr>
      </div>`;
    })
}

iniciarEquipamentos();

