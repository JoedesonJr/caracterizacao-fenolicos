
var fenolicos = [];
var folhas = [];

$(document).ready(() => {
   getFenolicos();
   especiesComMaisCompostos();
   compostosComMaisEspecies();
   similaridade();
   derivadosCompostos();
   derivadosEspecies();
});

function getDados() {
   return [
      {nome: "vulgaris", compostos: [2,3,4,5,6,7,8,10,11,12,13,14,15,16,18,20,22,25,26,27,28,33,35,37,38,40,45,47,48,49,50,52,53,57,59,60,64,65,66,67,70,72,74,75,78,81]},
      {nome: "merostachys", compostos: [3,4,5,7,8,10,11,13,14,15,16,18,19,20,26,27,32,33,34,35,37,38,41,42,44,46,49,52,56,58,59,60,64,66,67,69,71,72,74,78,80]},
      {nome: "asper", compostos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,21,24,26,27,33,35,36,37,38,41,42,46,48,49,50,52,53,55,56,58,59,60,62,64,65,66,67,68,70,71,72,73,74,75,78]},
      {nome: "japonica", compostos: [3,4,5,6,8,9,11,12,13,14,15,16,17,18,20,21,22,24,26,27,28,29,32,34,35,37,38,39,41,42,43,44,45,46,47,48,49,50,51,53,54,55,56,58,59,60,61,63,64,66,67,68,70,71,72,74,75,78]},
      {nome: "chusquea", compostos: [3,4,5,7,8,9,10,11,13,14,15,16,18,19,20,21,22,24,26,27,31,32,34,35,37,40,41,46,47,49,51,58,63,64,67,70,71,74,75]},
      {nome: "trinni", compostos: [3,4,5,7,8,9,10,11,12,13,14,15,16,17,19,20,21,24,26,27,29,31,32,33,34,35,36,37,38,39,41,42,43,44,46,47,48,49,50,51,52,54,56,57,58,59,60,63,64,66,67,70,71,74,75,78,79,80]},
      {nome: "aurea", compostos: [3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,24,26,27,29,30,32,33,34,35,36,38,39,41,42,43,44,46,47,48,49,51,52,53,57,58,59,60,62,63,64,66,67,70,71,72,74,75,76,77,78,79]},
      {nome: "latiflorus", compostos: [2,3,4,5,6,7,8,10,11,12,13,14,15,16,18,19,20,21,24,26,27,30,33,34,35,38,40,41,42,43,46,47,48,49,50,51,52,58,59,62,63,64,66,67,69,70,71,72,73,74,75,78]},
      {nome: "pubences", compostos: [3,4,5,7,8,10,11,12,13,14,15,16,17,19,23,24,26,27,29,30,32,33,34,35,36,37,39,41,42,43,44,46,47,48,49,50,51,52,54,56,57,58,59,60,62,63,64,66,67,70,71,72,74,75,78,79,80]},
      {nome: "pleioblasto", compostos: [3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,24,26,27,28,29,31,32,35,36,37,38,39,41,42,43,44,45,46,47,48,49,51,53,54,55,57,59,60,61,63,64,67,68,70,71,72,74,75]},
      {nome: "tuldoides", compostos: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,21,22,24,26,27,28,32,34,35,37,38,41,42,43,45,47,49,51,52,56,57,58,59,60,64,67,70,71,74,75,78]}
   ];
}

function getCompostos() {
   return {
      1: "Hexoside methyl dihydroxybenzoic acid",
      2: "5-O-[apiofuranosyl- (1→6)- glucopyranoside] protocatechuic acid",
      3: "Protocatechuic acid",
      4: "4-Hydroxybenzoic acid",
      5: "Hexoside dihydroxybenzoic acid",
      6: "Dihydroxybenzoic acid hexoside pentoside",
      7: "Vanillic acid",
      8: "Syringic acid",
      9: "Chlorogenic acid",
      10: "Caffeic acid",
      11: "5-O-feruloylquinic acid",
      12: "Pentoside hexoside coumaric acid",
      13: "p-Coumaric acid",
      14: "Ferulic acid",
      15: "4-O-glucuronide dihydroferulic acid",
      16: "O-hexosyl-C-hexolyl luteolin or isomer",
      17: "O-hexosyl-C-hexolyl luteolin or isomer",
      18: "6-C-glucoside-8-C-arabinoside luteolin",
      19: "6,8-di-C-glucoside apigenin",
      20: "6-C-arabinoside-8-C-arabinoside luteolin",
      21: "7-O-glucosyl-6-C-glucosyl apigenin",
      22: "8-C-xylosyl-6-C-glucosyl apigenin",
      23: "Methoxy-trihydroxyflavone-O-glucuronide",
      24: "4’’-O-xylosyl-isoorientin",
      25: "6-C-β-D-xyloside-8-C-α-L-rhamnosyl-(1→2)-β-D-glucoside apigenin",
      26: "Schaftoside (6-C-glucoside-8-C-arabinoside apigenin)",
      27: "Orientin (8-C-glucoside luteolin)",
      28: "2″-O-rhamnosyl isoorientin",
      29: "C-hexoside O-hexoside chrysoeriol",
      30: "Isoorientin (6-C-glucoside luteolin)",
      31: "6-C-β-D-glucoside-8-C-α-L-arabinoside chrysoeriol",
      32: "6-C-α-L-arabinoside-8-C-β-D-glucoside chrysoeriol",
      33: "6,8-di-C-arabinoside luteolin",
      34: "6-C-arabinoside-7-O-glucoside apigenin",
      35: "2’’-O-xylosyl-isovitexin",
      36: "6-C-α-L-rhamnosyl-(1→2)-β-D-glucoside-8-C-α-L-arabinoside apigenin",
      37: "2’’-O-rhamnosyl-vitexin",
      38: "6,8-di-C-β-D-xyloside apigenin",
      39: "6,8-di-C-β-D-glucoside chrysoeriol",
      40: "Vitexin (8-C-glucoside apigenin)",
      41: "Isovitexin (6-C-glucoside apigenin)",
      42: "6-C-β-D-xyloside-8-C-α-L-arabinoside apigenin",
      43: "C-hexoside O-deoxyhexoside luteolin",
      44: "2’’-O-rhamnosyl-isovitexin",
      45: "O-deoxyhexoside-C-hexoside chrysoeriol",
      46: "5'-O-glucosyl tricin",
      47: "7-O-glucosyl luteolin",
      48: "4′-O-glucosyl-6-C-digitoxosyl luteolin",
      49: "6-glucoside chrysoeriol",
      50: "6,8-di-C-α-L-arabinoside apigenin",
      51: "Tangeretin",
      52: "6’-C-arabinosyl luteolin",
      53: "6-C-glucoside-8-C-arabinoside chrysin",
      54: "6-rhamnose apigenin",
      55: "6-C-boivinosyl-7-O-glucosyl apigenin",
      56: "6-C-α-L-arabinoside-8-C-β-D-xyloside apigenin",
      57: "2’’-O-apiosyl-7-O-glucosyl tricin",
      58: "7-O-glucosyl apigenin",
      59: "O-hexosyl-deoxyhexosyl tricin",
      60: "6-C-arabinoside-8-C-glucoside chrysin",
      61: "Hydroxymethylglutaroyl vitexin",
      62: "8-C-arabinoside apigenin",
      63: "7-O-glucosyl hispidulin",
      64: "4'-O-glucosyl tricin",
      65: "6-C-α-L-arabinoside-8-C-α-L-rhamnosiyl-(1→2)-β-D-glucoside apigenin",
      66: "4′-O-guaiacylglyceryl-7-O-glucosyl tricin",
      67: "7'-O-glucosyl tricin",
      68: "6-C-boivinosyl-7-O-glucosyl apigenin or isomer",
      69: "Dihydroxydimethoxyflavone-hexose-glycuronic acid",
      70: "Luteolin",
      71: "Apigenina",
      72: "Tricin",
      73: "3-O-glucopyranosyle-rhamnoside naringenin",
      74: "Naringenin",
      75: "Kaempferol-3-glucoside",
      76: "O-(deoxyhexosyl)hexoside quercetin",
      77: "O-(pentosyl)hexoside isorhamnetin",
      78: "Kaempferol-3-rutinoside",
      79: "Quercetin-3-glucoside",
      80: "3-O-(3-hydroxy3-methylglutarate)-⊎-glucoside limocitrin",
      81: "O-feruloyhexoside kaempferol"
   };
}

function getFenolicos() {
   let dados = getDados();
   let compostos = getCompostos();
   dados.forEach((d) => {
      let num = d.compostos.length;
      let nomeCompostos = [];
      d.compostos.forEach(c => nomeCompostos.push(compostos[c]));
      fenolicos.push({
         folha: d.nome,
         compostos: nomeCompostos,
         num: num
      });
   });
   folhas = dados;
}

function getDerivados() {
   return [
      "apigenin",
      "luteolin",
      "chrysoeriol",
      "chrysin",
      "tricin",
      "tangeretin",
      "hispidulin",
      "isorhamnetin",
      "flavone",
      "dihydroxybenzoic acid",
      "protocatechuic acid",
      "chlorogenic acid",
      "ferulic",
      "coumaric acid",
      "naringenin",
      "kaempferol",
      "quercetin",
      "limocitrin",
   ];
}

// pergunta 1
function especiesComMaisCompostos() {
   fenolicos.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0))
   fenolicos.forEach((f) => {
      $("#resposta_pergunta_1 tbody").append(`
         <tr>
            <td class="pl-3">
               ${f.folha} <i class="fa fa-leaf text-success mr-1"></i>
            </td>
            <td class="text-center"><strong>${f.num}</strong></td>
         </tr>
      `)
   });
   console.log("1 - Espécies que apresentam mais compostos", fenolicos);
}

// pergunta 2
function compostosComMaisEspecies() {
   let resultado = [];
   let compostos = getCompostos();
   Object.keys(compostos).forEach(key => {
      let contemFolhas = [];
      folhas.forEach(f => {
         if (f.compostos.includes(+key)) {
            contemFolhas.push(f.nome);
         }
      });
      resultado.push({nome: compostos[key], folhas: contemFolhas, num: contemFolhas.length, porcentagem: Math.round((100 * contemFolhas.length) / folhas.length), totalFolhas: folhas.length});
   });
   resultado.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0));
   // mostra na tela
   resultado.forEach(r => {
      let title = r.folhas.toString().replace(new RegExp(',', 'g'), '\n');
      $("#resposta_pergunta_2 tbody").append(`
         <tr>
            <td class="pl-3">${r.nome} <i class="fa fa-flask text-info"></i></td>
            <td class="text-center" title="${title}">
               <strong>${r.porcentagem}%</strong> <small>(${r.num} de ${r.totalFolhas})</small>
            </td>
         </tr>
      `);
   });
   console.table("2 - Compostos que apresentam mais espécies", resultado);
}

// pergunta 3
function similaridade() {
   let resultadoFinal = [];
   folhas.forEach((folha) => {
      let resultado = {nome: folha.nome, compostos: {}, total: folha.compostos.length};
      // lista todas as folhas exceto a atual
      let comparaveis = folhas.filter(f => f.nome !== folha.nome);
      comparaveis.forEach(c => resultado.compostos[c.nome] = 0);
      // percorre cada composto da folha atual e verifica se existe nas comparaveis
      folha.compostos.forEach(id => {
         comparaveis.forEach(c => {
            if (c.compostos.includes(id)) {
               resultado.compostos[c.nome]++;
            }
         });
      });
      // ordena o resultado
      let similares = [];
      Object.keys(resultado.compostos).forEach(key => {
         similares.push({folha: key, num: resultado.compostos[key]});
      });
      resultado.similares = similares.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0));
      // mantem somente os mais similares
      let maiorSimilaridade = [];
      similares.forEach((s, i) => {
         if (i == 0 || similares[0].num === s.num) {
            maiorSimilaridade.push(s);
         }
      })
      resultado.maiorSimilaridade = maiorSimilaridade;
      // calcula a porcentagem de similaridade
      maiorSimilaridade.forEach(s => {
         resultado.porcentagem = Math.round((100 * s.num) / resultado.total);
      });
      // ordena o resultado final pela porcentagem de similaridade
      delete resultado.compostos;
      resultadoFinal.push(resultado);
   });
   resultadoFinal.sort((a,b) => (a.porcentagem > b.porcentagem) ? -1 : ((b.porcentagem > a.porcentagem) ? 1 : 0));
   // mostra na tela
   resultadoFinal.forEach((r, i) => {
      let nomeSimilares = "";
      r.maiorSimilaridade.forEach((s, i) => nomeSimilares += (i !== 0) ? ", " + s.folha : s.folha);
      $("#resposta_pergunta_3").append(`
         <div class="row align-items-center mb-2">
            <div class="col-3">
               <div class="progress">
                  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${r.porcentagem}%;" aria-valuenow="${r.porcentagem}" aria-valuemin="0" aria-valuemax="100">${r.porcentagem}%</div>
               </div>
            </div>
            <div class="col-9">
               <strong>${r.nome} -> ${nomeSimilares}</strong>
               <div style=" margin-top: -7px;">
                  <small>(${nomeSimilares} possui ${r.maiorSimilaridade[0].num} dos ${r.total} compostos de ${r.nome})</small>
               </div>
            </div>
         </div>
         ${i != resultadoFinal.length -1 ? `<hr class="mt-1 mb-1">` : ""}
      `);
   });
   console.log("3 - Perfil fenólico mais parecidos entre as espécies", resultadoFinal);
}

// pergunta 4
function derivadosCompostos() {
   let derivados = getDerivados();
   let resultado = [];
   derivados.forEach(d => {
      let compostos = Object.values(getCompostos()).filter(c => c.toLowerCase().includes(d.toLowerCase()));
      resultado.push({derivado: d, num: compostos.length, compostos: compostos});
   });
   resultado.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0));
   resultado.forEach(r => {
      $("#resposta_pergunta_4 tbody").append(`
         <tr>
            <td class="pl-3">
               ${r.derivado} <i class="fa fa-filter text-primary mr-1"></i>
            </td>
            <td class="text-center"><strong>${r.num}</strong></td>
         </tr>
      `)
   });

   console.log("4 - Derivados dos compostos que mais aparecem", resultado);
}

// pergunta 5
function derivadosEspecies() {
   let derivados = getDerivados();
   let resultados = [];
   fenolicos.forEach(f => {
      let resultado = {especie: f.folha, derivados: []}
      derivados.forEach(d => {
         let compostos = f.compostos.filter(c => c.toLowerCase().includes(d.toLowerCase()));
         resultado.derivados.push({derivado: d, num: compostos.length, compostos: compostos});
      });
      resultado.derivados.sort((a,b) => (a.num > b.num) ? -1 : ((b.num > a.num) ? 1 : 0));
      resultados.push(resultado);
   });

   resultados.forEach(r => {
      let derivados = ``
      r.derivados.forEach((d) => {
         if (d.num > 0) {
            derivados += `<div><small>
               <span>${d.derivado}</span>
               <strong>(${d.num})</strong>
            </small></div>`;
         }
      });

      $("#resposta_pergunta_5 tbody").append(`
         <tr>
            <td class="pl-3">
               ${r.especie} <i class="fa fa-leaf text-success mr-1"></i>
            </td>
            <td class="pl-4">${derivados}</td>
         </tr>
      `)
   });

   console.log("5 - Derivados dos compostos que mais aparecem por espécie", resultados);
}




